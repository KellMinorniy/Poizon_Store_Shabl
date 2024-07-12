import json
import os
import random
import uuid
from threading import Lock, Thread

import requests
from faker import Faker
from flask import (Flask, abort, flash, jsonify, make_response, redirect,
                   render_template, request, send_file, send_from_directory,
                   url_for)
from flask_bcrypt import Bcrypt
from flask_bootstrap import Bootstrap
from flask_cors import CORS
from flask_login import (LoginManager, UserMixin, current_user, login_required,
                         login_user, logout_user)
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from werkzeug.utils import secure_filename
from wtforms import BooleanField, SubmitField, TextAreaField

from forms import *

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = '6f4d7ff9d1a4823676ca0a674b8bce066a7ce8b43c787028'  # Замените на свой секретный ключ
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['WTF_CSRF_ENABLED'] = False
upload_folder = os.path.join(app.root_path, 'static/photos')
os.makedirs(upload_folder, exist_ok=True)
app.config['UPLOAD_FOLDER'] = upload_folder

Bootstrap(app)
CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

login_manager = LoginManager(app)
login_manager.init_app(app)
bcrypt = Bcrypt(app)

lock = Lock()
users = {"admin": {"username": "admin", "password": bcrypt.generate_password_hash("pwd").decode()}}

class User(UserMixin):
    def __init__(self, id):
        self.id = id

@login_manager.user_loader
def load_user(user_id):
    if user_id in users:
        return User(user_id)
    return None

def check_auth(username, password):
    user = users.get(username)
    if user and bcrypt.check_password_hash(user["password"], password):
        return User(username)
    return None

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('admin_dashboard'))

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = check_auth(username, password)

        if user:
            login_user(user)
            return redirect(url_for('admin_dashboard'))
        else:
            return render_template('site/login.html', error="Invalid username or password")

    return render_template('login.html', error=None)

# Создайте экземпляр Faker
fake = Faker()

# Функция для генерации случайного размера
def generate_random_size():
    if random.choice([True, False]):
        return f"{random.randint(30, 50)}"
    else:
        start = random.randint(30, 45)
        end = random.randint(start + 1, start + 5)
        return f"{start}-{end}"

# Генерация и добавление товаров
def add_random_products(n):
    with app.app_context():
        for _ in range(n):
            product = Product(
                manufacturer=fake.company(),
                model=fake.word(),
                article_number=fake.unique.numerify(text='ART####'),
                price=round(random.uniform(1000, 5000), 2),
                crossed_out_price=round(random.uniform(1000, 5000), 2),
                product_cat=random.choice([0, 1, 2])  # Категории: 0 - Одежда, 1 - Обувь, 2 - Аксессуары
            )
            db.session.add(product)
            db.session.commit()

            # Добавление фото
            photo = Photo(filename="1707326707327.jpg", product_id=product.id)
            db.session.add(photo)
            
            # Добавление размеров
            sizes = [generate_random_size() for _ in range(random.randint(1, 5))]
            for size in sizes:
                if '-' in size:
                    start, end = size.split('-')
                    for s in range(int(start), int(end) + 1):
                        size_obj = Size(size=s, product_id=product.id)
                        db.session.add(size_obj)
                else:
                    size_obj = Size(size=int(size), product_id=product.id)
                    db.session.add(size_obj)

            db.session.commit()



@app.route('/admin', methods=['GET'])
@login_required
def admin_dashboard():
    page = request.args.get('page', 1, type=int)
    products = Product.query.paginate(page=page, per_page=25)
    # Добавьте 30 случайных товаров
    # add_random_products(30)
    return render_template('admin_dashboard.html', products=products)
    

@app.route('/123')
def index2():
    start = int(request.args.get('start', 0))
    limit = int(request.args.get('limit', 8))
    manufacturer = request.args.get('manufacturer', None)
    sort = request.args.get('sort', None)
    selected_models = request.args.get('models', None)
    selected_sizes = request.args.get('sizes', None)
    min_price = request.args.get('min_price', None)
    max_price = request.args.get('max_price', None)

    query = Product.query

    if manufacturer:
        query = query.filter_by(manufacturer=manufacturer)
    if selected_models:
        models = selected_models.split(',')
        query = query.filter(Product.model.in_(models))
    if selected_sizes:
        sizes = selected_sizes.split(',')
        query = query.join(Size).filter(Size.size.in_(sizes))
    if min_price:
        query = query.filter(Product.price >= int(min_price))
    if max_price:
        query = query.filter(Product.price <= int(max_price))

    if sort == 'price-asc':
        query = query.order_by(Product.price.asc())
    elif sort == 'price-desc':
        query = query.order_by(Product.price.desc())
    elif sort == 'name-asc':
        query = query.order_by(Product.model.asc())
    elif sort == 'name-desc':
        query = query.order_by(Product.model.desc())
    elif sort == 'newest':
        query = query.order_by(Product.id.desc())
    elif sort == 'oldest':
        query = query.order_by(Product.id.asc())

    products = query.offset(start).limit(limit).all()

    manufacturers = Product.query.with_entities(Product.manufacturer).distinct().all()
    manufacturers_all = [manufacturer[0] for manufacturer in manufacturers]

    models = Product.query.with_entities(Product.model).distinct().all()
    models_all = [model[0] for model in models]

    sizes = Size.query.with_entities(Size.size).distinct().all()
    sizes_all = [size[0] for size in sizes]
    try:
        min_db_price = int(db.session.query(db.func.min(Product.price)).scalar())
        max_db_price = int(db.session.query(db.func.max(Product.price)).scalar())
    except:
        min_db_price, max_db_price = 0, 0
    

    total_products = query.count()

    return render_template('site/index.html', products=products, manufacturers=manufacturers_all, models=models_all, sizes=sizes_all, total_products=total_products, min_db_price=min_db_price, max_db_price=max_db_price)


    
@app.route('/load-more')
def load_more():
    start = int(request.args.get('start', 0))
    limit = int(request.args.get('limit', 8))
    manufacturer = request.args.get('manufacturer', None)
    sort = request.args.get('sort', None)
    selected_models = request.args.get('models', None)
    selected_sizes = request.args.get('sizes', None)
    min_price = request.args.get('min_price', None)
    max_price = request.args.get('max_price', None)

    query = Product.query

    if manufacturer:
        query = query.filter_by(manufacturer=manufacturer)
    if selected_models:
        models = selected_models.split(',')
        query = query.filter(Product.model.in_(models))
    if selected_sizes:
        sizes = selected_sizes.split(',')
        query = query.join(Size).filter(Size.size.in_(sizes))
    if min_price:
        query = query.filter(Product.price >= int(min_price))
    if max_price:
        query = query.filter(Product.price <= int(max_price))

    if sort == 'price-asc':
        query = query.order_by(Product.price.asc())
    elif sort == 'price-desc':
        query = query.order_by(Product.price.desc())
    elif sort == 'name-asc':
        query = query.order_by(Product.model.asc())
    elif sort == 'name-desc':
        query = query.order_by(Product.model.desc())
    elif sort == 'newest':
        query = query.order_by(Product.id.desc())
    elif sort == 'oldest':
        query = query.order_by(Product.id.asc())

    products = query.offset(start).limit(limit).all()
    rendered_products = render_template('products.html', products=products)
    
    # Получаем общее количество товаров с учетом фильтрации
    total_products = query.count()

    return jsonify({'html': rendered_products, 'total': total_products})

@app.route('/exchange')
def exchange():
    return render_template('site/exchange.html')

@app.route('/delivery')
def delivery():
    return render_template('site/delivery.html')

@app.route('/conditions')
def conditions():
    return render_template('site/conditions.html')

@app.route('/faq')
def faq():
    return render_template('site/faq.html')

@app.route('/polit')
def polit():
    return render_template('site/polit.html')

@app.route('/checkout')
def checkout():
    product_id = request.args.get('product_id', type=int)
    size = request.args.get('size', type=str)

    product = Product.query.get_or_404(product_id)
    return render_template('site/checkout.html', product=product,size=size)

@app.route('/payment')
def payment():
    product_id = request.args.get('product_id', type=int)
    size = request.args.get('size', type=str)

    product = Product.query.get_or_404(product_id)
    return render_template('site/payment.html', product=product, size=size)

@app.route("/upload-receipt")
def upload_receipt():
    return render_template('site/upload-receipt.html')

@app.route("/payment-id")
def payment_id():
    return render_template('site/payment-id.html')

def generate_new_session_id():
    import uuid
    return str(uuid.uuid4())

@app.route('/card-product')
def card_product():
    session_id = request.cookies.get('session_id')

    if not session_id:
        session_id = generate_new_session_id()
        product_id = request.args.get('product_id')
        product = Product.query.get_or_404(product_id)
        photos = product.photos
        sizes = product.sizes
        
        # Fetch 4 random products from the same category, excluding the current product
        same_category_products = Product.query.filter(Product.product_cat == product.product_cat, Product.id != product.id).all()
        random_products = random.sample(same_category_products, min(len(same_category_products), 4))
        
        response = make_response(render_template('site/cart.html', product=product, photos=photos, sizes=sizes, random_products=random_products))
        response.set_cookie('session_id', session_id)
        return response

    product_id = request.args.get('product_id')
    product = Product.query.get_or_404(product_id)
    photos = product.photos
    sizes = product.sizes
    
    # Fetch 4 random products from the same category, excluding the current product
    same_category_products = Product.query.filter(Product.product_cat == product.product_cat, Product.id != product.id).all()
    random_products = random.sample(same_category_products, min(len(same_category_products), 4))
    
    return render_template('site/card-product.html', product=product, photos=photos, sizes=sizes, random_products=random_products)

@app.route('/catalog/', defaults={'category_id': None})
@app.route('/catalog/<int:category_id>/')
def catalog(category_id):
    if category_id==None:
        products = Product.query.all()
        sizes = Size.query.join(Product).with_entities(Size.size).distinct().all()
        sizes_all = [size[0] for size in sizes]

        brands = Product.query.with_entities(Product.manufacturer).distinct().all()
        brands_all = [brand[0] for brand in brands]

        min_price = db.session.query(db.func.min(Product.price)).scalar()
        max_price = db.session.query(db.func.max(Product.price)).scalar()
    else:
        products = Product.query.filter_by(product_cat=category_id).all()
        sizes = Size.query.join(Product).filter(Product.product_cat == category_id).with_entities(Size.size).distinct().all()
        sizes_all = [size[0] for size in sizes]

        brands = Product.query.filter_by(product_cat=category_id).with_entities(Product.manufacturer).distinct().all()
        brands_all = [brand[0] for brand in brands]

        min_price = db.session.query(db.func.min(Product.price)).filter(Product.product_cat == category_id).scalar()
        max_price = db.session.query(db.func.max(Product.price)).filter(Product.product_cat == category_id).scalar()

    return render_template('site/catalog.html', products=products, category_id=category_id, sizes=sizes_all, brands=brands_all, min_price=min_price, max_price=max_price)

@app.route('/cart')
def cart():
    session_id = request.cookies.get('session_id')
    cart_items = Cart.query.filter_by(session_id=session_id).all()

    products = []
    sum_price=0
    for cart_item in cart_items:
        product = Product.query.get(cart_item.product_id)
        if product:
            products.append([product, cart_item.size])
            sum_price+=product.price

    return render_template('site/cart.html', products=products, sum_price=sum_price)

@app.route('/add-to-cart/<int:product_id>', methods=['POST'])
def add_to_cart(product_id):
    session_id = request.cookies.get('session_id')
    size = request.json.get('size')  # Получаем размер из JSON данных


    new_cart_item = Cart(session_id=session_id, product_id=product_id, size=size)
    db.session.add(new_cart_item)

    db.session.commit()

    return jsonify({'message': 'Товар успешно добавлен в корзину!'})

@app.route('/remove-from-cart/<int:product_id>', methods=['POST'])
def remove_from_cart(product_id):
    session_id = request.cookies.get('session_id')  
    cart_item = Cart.query.filter_by(session_id=session_id, product_id=product_id).first()

    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()

    return redirect(url_for('cart'))

@app.route('/')
def index():
    categories = {
        "Одежда": 0,
        "Обувь": 1,
        "Аксессуары": 2
    }

    products_by_category = {}
    for category_name, category_id in categories.items():
        products_by_category[category_name] = Product.query.filter_by(product_cat=category_id).order_by(Product.id.desc()).limit(9).all()

    return render_template('site/index.html', products_by_category=products_by_category)


@app.route('/map')
def map():
    return render_template('site/map.html')

@app.route('/product/<int:product_id>')
def product_detail(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('site/product_detail.html', product=product)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/add', methods=['GET', 'POST'])
@login_required
def add_product():
    form = ProductForm()
    if form.validate_on_submit():
        photos = []
        for photo_form in form.photos.entries:
            photo = photo_form.photo.data
            if photo:
                filename = secure_filename(photo.filename)
                photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                photos.append(filename)

        sizes = []
        for size_form in form.sizes.entries:
            size_data = size_form.size.data
            if '-' in size_data:
                start, end = size_data.split('-')
                sizes.extend(range(int(start), int(end) + 1))
            else:
                sizes.append(int(size_data))

        product = Product(
            manufacturer=form.manufacturer.data,
            model=form.model.data,
            article_number=form.article_number.data,
            price=form.price.data,
            crossed_out_price=form.crossed_out_price.data,
            product_cat=form.product_cat.data  # Обработка категории товара
        )
        db.session.add(product)
        db.session.commit()

        for photo in photos:
            photo_obj = Photo(filename=photo, product_id=product.id)
            db.session.add(photo_obj)

        for size in sizes:
            size_obj = Size(size=size, product_id=product.id)
            db.session.add(size_obj)

        db.session.commit()
        flash('Товар успешно добавлен')
        return redirect(url_for('add_product'))
    else:
        if form.errors:
            flash(form.errors)
    return render_template('add_product.html', form=form)

@app.route('/edit/<int:product_id>', methods=['GET', 'POST'])
@login_required
def edit_product(product_id):
    product = Product.query.get_or_404(product_id)
    if request.method == 'POST':
        manufacturer = request.form['manufacturer']
        model = request.form['model']
        article_number = request.form['article_number']
        price = request.form['price']
        product_cat = request.form['product_cat']
        crossed_out_price = request.form['crossed_out_price']
        existing_photos = request.form.getlist('existing_photos')
        new_photos = request.files.getlist('photos')
        sizes = request.form.getlist('sizes')

        # Загрузка новых фото
        for photo in new_photos:
            if photo.filename != '':
                filename = secure_filename(photo.filename)
                photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        # Обновление информации о продукте в базе данных
        product.manufacturer = manufacturer
        product.model = model
        product.article_number = article_number
        product.price = price
        product.crossed_out_price = crossed_out_price
        product.product_cat = product_cat
    
        # Обновление списка фото
        for photo in product.photos:
            if photo.filename not in existing_photos:
                db.session.delete(photo)
        for photo in new_photos:
            if photo.filename != '':
                new_photo = Photo(filename=secure_filename(photo.filename), product_id=product.id)
                db.session.add(new_photo)

        # Обновление списка размеров
        Size.query.filter_by(product_id=product.id).delete()
        db.session.commit()

        new_sizes = []
        for size in sizes:
            if '-' in size:
                start, end = size.split('-')
                new_sizes.extend(range(int(start), int(end) + 1))
            else:
                new_sizes.append(int(size))

        for size in new_sizes:
            new_size = Size(size=size, product_id=product.id)
            db.session.add(new_size)

        db.session.commit()

        flash('Товар успешно обновлен.')
        return redirect(url_for('edit_product', product_id=product.id))

    return render_template('edit_product.html', product=product)



@app.route('/delete/<int:product_id>', methods=['POST'])
@login_required
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    flash('Товар успешно удален')
    return redirect(url_for('admin_dashboard'))


# Определение модели Product
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    manufacturer = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    article_number = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    crossed_out_price = db.Column(db.Float, nullable=False)
    product_cat = db.Column(db.Integer, nullable=False, server_default='0')
    photos = db.relationship('Photo', backref='product', lazy=True, cascade="all, delete-orphan")
    sizes = db.relationship('Size', backref='product', lazy=True, cascade="all, delete-orphan")
    

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(100), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

class Size(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    size = db.Column(db.String(100), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(50), nullable=False)
    product_id = db.Column(db.Integer, nullable=False)
    size = db.Column(db.String(100), nullable=False)

    def __init__(self, session_id, product_id, size):
        self.session_id = session_id
        self.product_id = product_id
        self.size = size


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8090)

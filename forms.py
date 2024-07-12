# forms.py

from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, FloatField, SubmitField, FieldList, FormField, FileField, DecimalField, SelectField

class PhotoForm(FlaskForm):
    photo = FileField('Фотография', validators=[DataRequired()])

class SizeForm(FlaskForm):
    size = StringField('Размер', validators=[DataRequired()])

class ProductForm(FlaskForm):
    manufacturer = StringField('Производитель', validators=[DataRequired()])
    model = StringField('Модель', validators=[DataRequired()])
    article_number = StringField('Артикул товара', validators=[DataRequired()])
    price = DecimalField('Цена', validators=[DataRequired()])
    crossed_out_price = DecimalField('Зачеркнутая цена', validators=[DataRequired()])
    photos = FieldList(FormField(PhotoForm), min_entries=1)
    sizes = FieldList(FormField(SizeForm), min_entries=1)
    submit = SubmitField('Сохранить')
    product_cat = SelectField('Категория товара', choices=[('1', 'Обувь'), ('0', 'Одежда'), ('2', 'Аксессуары')], coerce=int)


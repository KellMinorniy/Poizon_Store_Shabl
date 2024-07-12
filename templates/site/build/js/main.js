//= components/jquery-3.7.0.min.js
//= components/swiper-bundle.min.js
//= components/nouislider.min.js
//= components/popper.min.js
//= components/tippy-bundle.umd.js
//= components/fancybox.umd.js
//= components/jquery.maskedinput.min.js

class App {
	constructor() {
		this.app = {
			time: null,
		};
		this.init();
		this.run();
	}
	init() {
		this.app.document = $(document);
	}
	run() {
		function getScrollBarWidth() {
			var e = document.createElement("p");
			e.style.width = "100%", e.style.height = "200px";
			var t = document.createElement("div");
			t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
			var l = e.offsetWidth;
			t.style.overflow = "scroll";
			e = e.offsetWidth;
			return l == e && (e = t.clientWidth), document.body.removeChild(t), l - e
		}
		$('head').append('<style>.noscroll{margin-right: ' + getScrollBarWidth() + 'px;}</style>');
		$('head').append('<style>.noscroll .top-menu{padding-right: ' + getScrollBarWidth() + 'px;}</style>');
		this.modal();
		this.swiperCat();
		this.swiperProducts();
		this.swiperProductCard();
		this.menu();
		this.faq();
		this.tippy();
		this.filt();
		this.select();
		this.fancybox();
		this.product();
		this.sizeChoose();
		this.calc();
		this.form();
		this.cart();
	}
	cart() {
		function formatNumber(number) {
			number = number.toFixed(0) + '';
			let x = number.split('.');
			let x1 = x[0];
			let x2 = x.length > 1 ? ' ' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + '.' + '$2');
			}
			return x1 + x2;
		}

		function setCost() {
			let costAll = 0;
			$('.cart-def__cost').each((i, el) => {
				let cost = parseInt($(el).text().replace(/[\s.,%]/g, ''));
				costAll += cost;
			});
			costAll = formatNumber(costAll);
			costAll = costAll + ' ₽';
			$('.cart-final__cost').text(costAll)
		}
		$('.cart-def__delete').on('click', function () {
			let $wrap = $(this).closest('.cart-def__tr');
			$wrap.stop().fadeOut(300);
			setTimeout(() => {
				$wrap.remove();
				setCost();
			}, 300);
			return false;
		});
	}
	form() {
		$('.inp-tel').mask("+7 (999) 999-99-99")
	}
	sort() {
		clearTimeout(this.time);
		this.time = setTimeout(() => {
			let costFrom;
			let costTo;
			let brands;
			let sizes;
			if ($(window).width() > 600) {
				costFrom = parseInt($('.sort-select .range-inp-inp__from').val());
				costTo = $('.sort-select .range-inp-inp__to').val();
				brands = [];
				sizes = [];
				$('.sort-select_brand .checkbox-def__inp:checked').each((i, el) => {
					let val = $(el).closest('.checkbox-el').data('val');
					brands.push(val);
				});
				$('.sort-select_size .checkbox-def__inp:checked').each((i, el) => {
					let val = $(el).closest('.checkbox-el').data('val');
					sizes.push(val);
				});
			} else {
				costFrom = parseInt($('.filt-mob__block_cost .range-inp-inp__from').val());
				costTo = $('.filt-mob__block_cost .range-inp-inp__to').val();
				brands = [];
				sizes = [];
				$('.filt-mob__block_brands .checkbox-def__inp:checked').each((i, el) => {
					let val = $(el).closest('.checkbox-el').data('val');
					brands.push(val);
				});
				$('.filt-mob__block_size .checkbox-def__inp:checked').each((i, el) => {
					let val = $(el).closest('.checkbox-el').data('val');
					sizes.push(val);
				});
			}


			$('.block-catalog__el').each((i, el) => {
				let $wrap = $(el);
				let $block = $wrap.find('.product-def');
				let prBrand = $block.data('brand');
				let prSize = $block.data('size') + '';
				prSize = prSize.split(',');
				let prCost = parseInt($block.data('cost'));
				let checkShowLength = 1;
				let checkShow = 0;
				if (sizes.length) {
					checkShowLength++;
					for (let i = 0; i < sizes.length; i++) {
						for (let l = 0; l < prSize.length; l++) {
							if (sizes[i] == prSize[l]) {
								checkShow++;
							}
						}
					}
				}
				if (brands.length) {
					checkShowLength++;
					for (let i = 0; i < brands.length; i++) {
						if (brands[i] == prBrand) {
							checkShow++;
						}
					}
				}
				if (prCost >= costFrom && prCost <= costTo) {
					checkShow++;
				}
				if (checkShow >= checkShowLength) {
					$wrap.stop().fadeIn(200);
				} else {
					$wrap.stop().hide();
				}
			});
		}, 500);
	}
	calc() {
		$('.block-calc__btn-next').on('click', function () {
			let $wrap = $(this).closest('.block-calc');
			let $btn = $wrap.find('.block-calc__btn');
			let text = $btn.text();
			if (text === "Обувь") {
				text = "Одежда";
			} else {
				text = "Обувь";
			}
			$btn.find('span').text(text);
			return false;
		});
		$('.block-calc__btn').on('click', function () {
			let $wrap = $(this).closest('.block-calc');
			let $inp = $wrap.find('.block-calc__inp');
			let val = parseInt($inp.val());
			let calcVal = 0;
			let $btn = $wrap.find('.block-calc__btn');
			let text = $btn.text();
			if (text === 'Одежда') {
				calcVal = ((val * 12.5 + 1900) * 1.04).toFixed(0);
			} else {
				calcVal = ((val * 12.5 + 1500) * 1.02).toFixed(0);
			}
			$('.block-calc__val').text(calcVal);
			return false;
		});
	}
	sizeChoose() {
		$('.size-choose__el').on('click', function () {
			let $wrap = $(this).closest('.size-choose');
			$wrap.find('.size-choose__el').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	}
	swiperProductCard() {
		if ($('.product-card-slider').length) {
			let $wrap = $('.product-card-slider');
			let swiper;

			function setSlider() {
				if (!$wrap.hasClass('swiper')) {
					$wrap.addClass('swiper');
					$wrap.find('.product-card-slider__content').addClass('swiper-wrapper');
					$wrap.find('.product-card-slider__el').addClass('swiper-slide');
					swiper = new Swiper('.product-card-slider', {
						slidesPerView: 1,
						rewind: true,
						spaceBetween: 16,
						navigation: {
							prevEl: '.acts-swiper__arr_prev',
							nextEl: '.acts-swiper__arr_next',
						},
						on: {
							slideChange: function (e) {
								let $wrap = $(e.slidesEl).closest('.swiper');
								$wrap.find('.acts-swiper__text-from').text(e.realIndex + 1);
								$wrap.find('.acts-swiper__text-to').text(e.slides.length);
							},
							init: function (e) {
								let $wrap = $(e.slidesEl).closest('.swiper');
								$wrap.find('.acts-swiper__text-from').text(e.realIndex + 1);
								$wrap.find('.acts-swiper__text-to').text(e.slides.length);
							},
						},
					});
				}
			}

			function unsetSlider() {
				if ($wrap.hasClass('swiper')) {
					$wrap.removeClass('swiper');
					$wrap.find('.product-card-slider__content').removeClass('swiper-wrapper');
					$wrap.find('.product-card-slider__el').removeClass('swiper-slide');
					swiper.destroy();
				}
			}

			function slider() {
				let widthWindow = $(window).width();
				if (widthWindow <= 600) {
					setSlider();
				} else {
					unsetSlider();
				}
			}
			slider();
			$(window).resize(function () {
				slider();
			});
		}
	}
	product() {
		$('.product-card__btn').on('click', function () {
			$('.cart-modal .product-min__info').text($('.product-card-sizes-el.active .product-card-sizes-el__title').text());
			$('.cart-min__dropdown').stop().fadeIn(300);
			$('.cart-min__count').text(1);
			return false;
		});
		$('.cart-modal__close, .cart-modal__btn3').on('click', function () {
			$('.cart-min__dropdown').stop().fadeOut(300);
			return false;
		});
		this.clickOutside($('.cart-min__dropdown'), function () {
			$('.cart-min__dropdown').stop().fadeOut(300);
		});

		$('.product-card-sizes-el').on('click', function () {
			$('.product-card-sizes-el').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	}
	fancybox() {
		Fancybox.bind("[data-fancybox]", {});
	}
	select() {
		let _this = this;
		$('.select-def__top').on('click', function () {
			let $wrap = $(this).closest('.select-def');
			if ($wrap.hasClass('active')) {
				$wrap.removeClass('active');
				$wrap.find('.select-def__dropdown').stop().fadeOut(300);
			} else {
				$('.select-def').removeClass('active');
				$('.select-def__dropdown').stop().fadeOut(300);
				$wrap.addClass('active');
				$wrap.find('.select-def__dropdown').stop().fadeIn(300);
			}
			return false;
		});
		this.clickOutside($('.select-def'), function () {
			$('.select-def').removeClass('active');
			$('.select-def__dropdown').stop().fadeOut(300);
		});

		$('.select-def .checkbox-def__inp').on('change', function () {
			let $wrap = $(this).closest('.select-def');
			let text = '';
			$wrap.find('.checkbox-def__inp:checked').each((ind, el) => {
				let $wrapEl = $(el).closest('.checkbox-el');
				text += $wrapEl.find('.checkbox-el__text').text() + ', ';
			});
			$wrap.find('.select-def__val').removeClass('select-def__placeholder');
			$wrap.find('.select-def__val').text(text);
			if (!$wrap.find('.checkbox-def__inp:checked').length) {
				$wrap.find('.select-def__val').addClass('select-def__placeholder');
				$wrap.find('.select-def__val').text('Не выбран');
			}
		});
		$('.filt-mob__block_size .checkbox-def__inp').on('change', function () {
			let $wrap = $(this).closest('.select-def');
			if ($wrap.find('.checkbox-def__inp:checked').length) {
				$('.sort-mob_size').addClass('active');
			} else {
				$('.sort-mob_size').removeClass('active');
			}
			_this.sort();
		});
		$('.filt-mob__block_brands .checkbox-def__inp').on('change', function () {
			let $wrap = $(this).closest('.filt-mob__block_brands');
			if ($wrap.find('.checkbox-def__inp:checked').length) {
				$('.sort-mob_brand').addClass('active');
			} else {
				$('.sort-mob_brand').removeClass('active');
			}
			_this.sort();
		});
	}
	tippy() {
		tippy('.product-card__sizesText', {
			content(reference) {
				const id = reference.getAttribute('data-template');
				const template = document.getElementById(id);
				return template.innerHTML;
			},
			allowHTML: true,
			interactive: true,
			trigger: 'click',
			placement: 'bottom-end',
		});
	}
	filt() {
		let _this = this;
		$('.range-inp__inp').each((ind, el) => {
			let slider = el;
			let $wrap = $(slider).closest('.range-inp');
			let $inpFrom = $wrap.find('.range-inp-inp__from');
			let $inpTo = $wrap.find('.range-inp-inp__to');
			let text = '3 076₽ - 50 000 ₽';
			let $wrapSot = $wrap.closest('.sort-select');

			function formatNumber(number) {
				number = number.toFixed(0) + '';
				let x = number.split('.');
				let x1 = x[0];
				let x2 = x.length > 1 ? ' ' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ' ' + '$2');
				}
				return x1 + x2;
			}
			noUiSlider.create(slider, {
				start: [0, 50000],
				connect: true,
				range: {
					'min': 0,
					'max': 50000,
				}
			});
			let fix = 0;
			slider.noUiSlider.on('update', function (e) {
				let from = parseInt(e[0]);
				let to = parseInt(e[1]);
				$inpFrom.val(from);
				$inpTo.val(to);
				text = formatNumber(from) + ' ₽' + ' - ' + formatNumber(to) + ' ₽';
				$wrapSot.find('.sort-select__text').text(text);
				fix++;
				if (fix > 4) {
					if ($wrap.closest('.filt-mob__block_cost').length) {
						$('.sort-mob_cost').addClass('active');
					}
				}
				_this.sort();
			});
			$inpFrom.on('change', function () {
				let valFrom = $(this).val();
				let valTo = $inpTo.val();
				slider.noUiSlider.set([valFrom, valTo]);
			});
			$inpTo.on('change', function () {
				let valTo = $(this).val();
				let valFrom = $inpFrom.val();
				slider.noUiSlider.set([valFrom, valTo]);
			});
		});

		$('.sort-select__top').on('click', function () {
			let $wrap = $(this).closest('.sort-select');
			if ($wrap.hasClass('open')) {
				$wrap.removeClass('open')
				$wrap.find('.sort-select__dropdown').stop().fadeOut(300);
			} else {
				$('.sort-select').removeClass('open')
				$('.sort-select__dropdown').stop().fadeOut(300);
				$wrap.addClass('open')
				$wrap.find('.sort-select__dropdown').stop().fadeIn(300);
			}
		});
		this.clickOutside($('.sort-select'), function () {
			$('.sort-select').removeClass('open')
			$('.sort-select__dropdown').stop().fadeOut(300);
		});
		$('.popper-filt__close').on('click', function () {
			$('.sort-select').removeClass('open')
			$('.sort-select__dropdown').stop().fadeOut(300);
			return false;
		});

		$('.sort-select .checkbox-def__inp').on('change', function () {
			let $wrap = $(this).closest('.sort-select');
			let $inps = $wrap.find('.checkbox-def__inp:checked');
			if ($inps.length) {
				$wrap.addClass('active');
			} else {
				$wrap.removeClass('active');
			}
			_this.sort();
		});
		$('.popper-filt__reset').on('click', function () {
			let $wrap = $(this).closest('.sort-select');
			let $inps = $wrap.find('.checkbox-def__inp:checked');
			$inps.each((ind, el) => {
				console.log(el);
				$(el).prop('checked', false)
			});
			if ($inps.length) {
				$wrap.removeClass('active');
			}
			return false;
		});
		$('.btn-filt, .filt-mob__close').on('click', function () {
			let $filt = $('.filt-mob');
			if ($filt.hasClass('active')) {
				$filt.removeClass('active');
				$filt.stop().fadeOut(300);
				_this.unsetNoscroll();
			} else {
				$filt.addClass('active');
				$filt.stop().fadeIn(300);
				_this.setNoscroll();
			}
			return false;
		});

		$('.sort-mob_size').on('click', function () {
			$(this).removeClass('active');
			$('.filt-mob__block_size .checkbox-def__inp').prop('checked', false);
			$('.filt-mob__block_size .select-def__val').text('Не выбран');
			$('.filt-mob__block_size .select-def__val').addClass('select-def__placeholder');
			_this.sort();
		});
		$('.sort-mob_brand').on('click', function () {
			$(this).removeClass('active');
			$('.filt-mob__block_brands .checkbox-def__inp').prop('checked', false);
			_this.sort();
		});
		$('.sort-mob_cost').on('click', function () {
			let el = $(this);
			el.removeClass('active');
			setTimeout(() => {
				el.removeClass('active');
			}, 100);
			$('.range-inp__inp').each((ind, el) => {
				$(el)[0].noUiSlider.reset();
			});
		});

		$('.popper-filt__reset').on('click', function () {
			let $wrap = $(this).closest('.sort-select');
			$('.range-inp__inp').each((ind, el) => {
				$(el)[0].noUiSlider.reset();
			});
			$wrap.find('.checkbox-def__inp').prop('checked', false);
			return false;
		});
	}
	faq() {
		$('.faq-el__top').on('click', function () {
			let $wrap = $(this).closest('.faq-el');
			if ($wrap.hasClass('active')) {
				$wrap.removeClass('active');
				$wrap.find('.faq-el__dropdown').stop().slideUp(300);
			} else {
				$wrap.addClass('active');
				$wrap.find('.faq-el__dropdown').stop().slideDown(300);
			}
			return false;
		});
		$('.faq-2-el__top').on('click', function () {
			let $wrap = $(this).closest('.faq-2-el');
			if ($wrap.hasClass('active')) {
				$wrap.removeClass('active');
				$wrap.find('.faq-2-el__dropdown').stop().slideUp(300);
			} else {
				$wrap.addClass('active');
				$wrap.find('.faq-2-el__dropdown').stop().slideDown(300);
			}
			return false;
		});
	}
	menu() {
		let _this = this;
		$('.top-menu__btn-burger, .mob-menu__close').on('click', function () {
			let $menu = $('.mob-menu');
			if ($menu.hasClass('active')) {
				$menu.removeClass('active');
				$menu.stop().fadeOut(300);
				_this.unsetNoscroll();
			} else {
				$menu.addClass('active');
				$menu.stop().fadeIn(300);
				_this.setNoscroll();
			}
			return false;
		});
	}
	swiperProducts() {
		const swiper = new Swiper('.products-swiper', {
			spaceBetween: 20,
			loop: true,
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				769: {
					slidesPerView: 3,
				},
				1201: {
					slidesPerView: 4,
				},
			},
			navigation: {
				prevEl: '.acts-swiper__arr_prev',
				nextEl: '.acts-swiper__arr_next',
			},
			on: {
				slideChange: function (e) {
					let $wrap = $(e.slidesEl).closest('.swiper');
					$wrap.find('.acts-swiper__text-from').text(e.realIndex + 1);
					$wrap.find('.acts-swiper__text-to').text(e.slides.length);
				},
				init: function (e) {
					let $wrap = $(e.slidesEl).closest('.swiper');
					$wrap.find('.acts-swiper__text-from').text(e.realIndex + 1);
					$wrap.find('.acts-swiper__text-to').text(e.slides.length);
				},
			},
		});
	}
	swiperCat() {
		const swiper = new Swiper('.slider-cat', {
			slidesPerView: 'auto',
			rewind: true,
			navigation: {
				prevEl: '.sec-cat .nav-def__arr_prev',
				nextEl: '.sec-cat .nav-def__arr_next',
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
				},
				1201: {
					spaceBetween: 51,
				},
			},
		});
	}
	modal() {
		let _this = this;
		$('.modal-def__overlay, .modal-content__close, .modal-def__close').on('click', function () {
			let $modal = $(this).closest('.modal-def');
			$modal.fadeOut(300);
			_this.unsetNoscroll();
			return false;
		});
		$('.btn-modal').on('click', function () {
			$('.modal-def').hide();
			let $modal = $($(this).data('modal'));
			_this.setNoscroll();
			$modal.fadeIn(300);
			return false;
		});
	}
	setNoscroll() {
		if ($(window).height() === $('html').height()) {

		} else {
			document.querySelector('html').classList.add('noscroll');
		}
	}
	unsetNoscroll() {
		document.querySelector('html').classList.remove('noscroll');
	}
	clickOutside(wrap, func) {
		this.app.document.mouseup(function (e) {
			let countCheck = wrap.length;
			let countCheckLength = 0;
			for (let i = 0; i < wrap.length; i++) {
				if ($(wrap[i]).has(e.target).length === 0 && $(wrap[i])[0] !== e.target) {} else {
					countCheckLength++;
				}
			}
			if (countCheckLength === 0) {
				func();
			}
		});
	}
}
document.addEventListener("DOMContentLoaded", function (event) {
	new App();
});
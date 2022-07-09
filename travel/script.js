
let menuWrapper = document.querySelector('.menu_wrapper');
let menuAdaptiveBurger = document.querySelector('.menu_adaptive_burger');
let menuAdaptiveClose = document.querySelector('.menu_adaptive_close');
let burgerMenuOverlay = document.querySelector('.burger_menu_overlay')
let menuHeaderItem = document.querySelectorAll('.menu_header_item');
let menuHeaderAdaptive = document.querySelectorAll('menu_header_adaptive');

menuAdaptiveBurger.addEventListener('click', function(){
	menuWrapper.classList.add('active');
	burgerMenuOverlay.classList.add('active');
	menuAdaptiveBurger.style.display='none';
})

menuAdaptiveClose.addEventListener('click', function(){
	menuWrapper.classList.remove('active');
	burgerMenuOverlay.classList.remove('active');
	menuAdaptiveBurger.style.display='block';
})

burgerMenuOverlay.addEventListener('click', function(){
	menuWrapper.classList.remove('active');
	burgerMenuOverlay.classList.remove('active');
	menuAdaptiveBurger.style.display='block';
})

menuHeaderItem.forEach(item => {
	item.addEventListener('click', () => {
		menuWrapper.classList.remove('active');
		menuAdaptiveBurger.style.display='block';
	})
})

menuHeaderAdaptive.forEach(item => {
	item.addEventListener('click', () => {
		menuWrapper.classList.remove('active');
		menuAdaptiveBurger.style.display='block';
	})
})
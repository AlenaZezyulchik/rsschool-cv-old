
let menuWrapper = document.querySelector('.menu_wrapper');
let menuAdaptiveBurger = document.querySelector('.menu_adaptive_burger');
let menuAdaptiveClose = document.querySelector('.menu_adaptive_close');
let burgerMenuOverlay = document.querySelector('.burger_menu_overlay')
let menuHeaderItem = document.querySelectorAll('.menu_header_item');
let menuHeaderAdaptive = document.querySelectorAll('.menu_header_adaptive');

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

console.log("Вёрстка соответствует макету. Ширина экрана 390px\nблок <header> +6\nсекция preview +9\nсекция steps +9\nсекция destinations +9\nсекция stories +9\nблок <footer> +6\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \nнет полосы прокрутки при ширине страницы от 1440рх до 390px +7\nнет полосы прокрутки при ширине страницы от 390px до 320рх +8\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22\nпри ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует макету +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");
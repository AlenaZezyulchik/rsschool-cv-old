let menuWrapper = document.querySelector('.menu_wrapper');
let menuAdaptiveBurger = document.querySelector('.menu_adaptive_burger');
let menuAdaptiveClose = document.querySelector('.menu_adaptive_close');
let burgerMenuOverlay = document.querySelector('.burger_menu_overlay')
let menuHeaderItem = document.querySelectorAll('.menu_header_item');
let menuHeaderAdaptive = document.querySelectorAll('.menu_header_adaptive');

menuAdaptiveBurger.addEventListener('click', function() {
    menuWrapper.classList.add('active');
    burgerMenuOverlay.classList.add('active');
    menuAdaptiveBurger.style.display = 'none';
})

menuAdaptiveClose.addEventListener('click', function() {
    menuWrapper.classList.remove('active');
    burgerMenuOverlay.classList.remove('active');
    menuAdaptiveBurger.style.display = 'block';
})

burgerMenuOverlay.addEventListener('click', function() {
    menuWrapper.classList.remove('active');
    burgerMenuOverlay.classList.remove('active');
    menuAdaptiveBurger.style.display = 'block';
})

menuHeaderItem.forEach(item => {
    item.addEventListener('click', () => {
        menuWrapper.classList.remove('active');
        menuAdaptiveBurger.style.display = 'block';
    })
})

menuHeaderAdaptive.forEach(item => {
    item.addEventListener('click', () => {
        menuWrapper.classList.remove('active');
        menuAdaptiveBurger.style.display = 'block';
    })
})

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".destinations_slider");
const spain = document.querySelector(".destinations_slider_spain");
const japan = document.querySelector(".destinations_slider_japan");
const usa = document.querySelector(".destinations_slider_usa");
const dots = document.querySelectorAll(".circle");
const dotLeft = document.querySelector(".circle_1");
const dotCenter = document.querySelector(".circle_2");
const dotRight = document.querySelector(".circle_3");



const hightLightActiveDot = (num) => {
    if (num === 0) {
        deleteActiveClass(dotCenter)
    }
    if (num === -420) {
        deleteActiveClass(dotRight)
    }
    if (num === 420) {
        deleteActiveClass(dotLeft)
    }
}

const deleteActiveClass = (item) => {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active_dot");
    }
    item.classList.add("active_dot");
}

const setActiveLeftSlide = () => {
    slider.classList.remove("active_center");
    slider.classList.remove("active_right");
    slider.classList.add("active_left");
    deleteActiveClass(dotLeft);
}
const setActiveCenterSlide = () => {
    slider.classList.remove("active_left");
    slider.classList.remove("active_right");
    slider.classList.add("active_center");
    deleteActiveClass(dotCenter);
}
const setActiveRightSlide = () => {
    slider.classList.remove("active_center");
    slider.classList.remove("active_left");
    slider.classList.add("active_right");
    deleteActiveClass(dotRight);
}


spain.addEventListener("click", setActiveLeftSlide);
japan.addEventListener("click", setActiveCenterSlide);
usa.addEventListener("click", setActiveRightSlide);

let transform = 0;
const rightSlide = () => {
    transform = transform - 420;
    slider.style.transform = `translate(${transform}px, 0)`;
    if (transform === -420) {
        arrowRight.classList.add("arrow_hidden");
    }
    if (transform === 0) {
        arrowLeft.classList.remove("arrow_hidden");
    }
    hightLightActiveDot(transform)
}

const leftSlide = () => {
    transform = transform + 420;
    slider.style.transform = `translate(${transform}px, 0)`;
    if (transform === 420) {
        arrowLeft.classList.add("arrow_hidden");
    }
    if (transform === 0) {
        arrowRight.classList.remove("arrow_hidden");
    }
    hightLightActiveDot(transform)

}
arrowRight.addEventListener('click', rightSlide);
arrowLeft.addEventListener('click', leftSlide);


const logInPopUp = document.querySelector(".Login_pop_up");
const blockInputRegister = document.querySelector(".block_input_link.create_account");
const wrapperLogin = document.querySelector(".wrapper_login")
const wrapperCreateAccount = document.querySelector(".wrapper_create_account");
const linkLodIn = document.querySelector(".block_input_link.lod_in");
const overlayLogin = document.querySelector(".overlay_login");
const menuHeaderAdaptiveLink = document.querySelector(".menu_header_adaptive_link");


logInPopUp.addEventListener("click", function() {
    wrapperLogin.classList.add("active");
    wrapperCreateAccount.classList.remove("active");
    overlayLogin.classList.add("active");
})

menuHeaderAdaptiveLink.addEventListener("click", function() {
    wrapperLogin.classList.add("active");
    wrapperCreateAccount.classList.remove("active");
    overlayLogin.classList.add("active");

})

linkLodIn.addEventListener("click", function() {
    wrapperLogin.classList.add("active");
    wrapperCreateAccount.classList.remove("active");
})

blockInputRegister.addEventListener("click", function() {
    wrapperLogin.classList.remove("active");
    wrapperCreateAccount.classList.add("active");
})

overlayLogin.addEventListener("click", () => {
    overlayLogin.classList.remove("active");
    wrapperCreateAccount.classList.remove("active");
    wrapperLogin.classList.remove("active");

})


buttonSignIn = document.querySelector("#button_sign_in");
inputEmail = document.querySelector(".input_e-mail");
inputPassword = document.querySelector(".input_password");


buttonSignIn.addEventListener("click", function() {
    alert("e-mail: " + inputEmail.value + ", password: " + inputPassword.value);
    inputEmail.value = "";
    inputPassword.value = "";
})


buttonSignUp = document.querySelector("#button_sign_up");
inputCreateEmail = document.querySelector(".input_create_e-mail");
inputCreatePassword = document.querySelector(".input_create_password");


buttonSignUp.addEventListener("click", function() {
    alert("e-mail: " + inputCreateEmail.value + ", password: " + inputCreatePassword.value);
    inputCreateEmail.value = "";
    inputCreatePassword.value = "";
})





console.log("Слайдер изображений в секции destinations:\n1.На десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\n2.Три точки внизу отображают номер слайда, то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20\n3.Анимации плавного перемещения для слайдера +10\nНажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап:\n1.логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n2.логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25");
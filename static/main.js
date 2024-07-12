const burger = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".menu-mobile");
const headerLogo = document.querySelector(".header-logo");
const burgerImage = document.querySelector(".burger-btn-img");
const menuMobileItems = document.querySelectorAll(".menu-mobile-item");

const enableMenu = () => {
  mobileMenu.classList.add("menu-mobile-active");
  headerLogo.style.visibility = "hidden";
  document.body.style.backgroundColor = "#57BFC1";
  document.body.style.position = "fixed";
  burgerImage.src = "assets/cancel.png";
};

const disableMenu = () => {
  mobileMenu.classList.remove("menu-mobile-active");
  headerLogo.style.visibility = "visible";
  document.body.style.backgroundColor = "#fff";
  document.body.style.position = "static";
  burgerImage.src = "assets/burger.png";
};

const burgerHandleClick = () => {
  if (!mobileMenu.classList.contains("menu-mobile-active")) {
    enableMenu();
  } else {
    disableMenu();
  }
};

burger.addEventListener("click", burgerHandleClick);

const menuMobileItemHandleClick = () => {
  disableMenu();
};

menuMobileItems.forEach((menuMobileItem) =>
  menuMobileItem.addEventListener("click", menuMobileItemHandleClick)
);

const chooseButton = document.querySelector(".calculator-choose-button");
const chooseTitle = document.querySelector(".calculator-choose-title");
const calculatorInput = document.querySelector(".calculator-input");
const priceValue = document.querySelector(".calculator-total-number");

const chooseButtonHandleClick = () => {
  chooseTitle.classList.remove("active-choose");
  if (chooseTitle.innerHTML === "Обувь") {
    chooseTitle.innerHTML = "Одежда";
  } else {
    chooseTitle.innerHTML = "Обувь";
  }
};

const calcOrderQr = document.querySelector(".calc-order-qr");
const calcOrderImage = document.querySelector(".calc-order-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleIntersection(entry.target);
      }
    });
  },
  { threshold: 1 }
);

observer.observe(calcOrderQr);

function handleIntersection(target) {
  calcOrderImage.classList.add("calc-order-img-animated");
}

chooseButton.addEventListener("click", chooseButtonHandleClick);

const chooseTitleHandleClick = () => {
  chooseTitle.classList.add("active-choose");

  if (calculatorInput.value) {
    if (chooseTitle.classList.contains("active-choose")) {
      if (chooseTitle.innerHTML === "Одежда") {
        priceValue.innerHTML =
          ((parseInt(calculatorInput.value) * 12.5 + 1900) * 1.04).toFixed(0) +
          "₽";
      } else {
        priceValue.innerHTML =
          ((parseInt(calculatorInput.value) * 12.5 + 1500) * 1.02).toFixed(0) +
          "₽";
      }
    }
  }
};

chooseTitle.addEventListener("click", chooseTitleHandleClick);

const questionButtons = document.querySelectorAll(".question-btn");

const questionButtonHandleClick = (e) => {
  //finding the element of answer
  const answer =
    e.target.closest(".question-btn").parentElement.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
};

questionButtons.forEach((questionButton) =>
  questionButton.addEventListener("click", questionButtonHandleClick)
);

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const catalogContainerImages = document.querySelectorAll(".catalog-item-image");

const handleHoverIn = (e) => {
  if (e.target.closest(".catalog-item-image-container") == null) return;
  const catalogItem = e.target.closest(".catalog-item");

  const originalImage = e.target.closest(
    ".catalog-item-image-container"
  ).firstElementChild;
  const reversedImage = originalImage.nextElementSibling;
  const orderButton = catalogItem.querySelector(".catalog-item-order");
  const itemAvailable = catalogItem.querySelector(".catalog-item-available");

  originalImage.style.display = "none";
  reversedImage.style.display = "block";

  orderButton.style.display = "none";
  itemAvailable.style.display = "flex";
};

const handleHoverOut = (e) => {
  if (e.target.closest(".catalog-item-image-container") == null) return;
  const catalogItem = e.target.closest(".catalog-item");

  const originalImage = e.target.closest(
    ".catalog-item-image-container"
  ).firstElementChild;
  const reversedImage = originalImage.nextElementSibling;
  const orderButton = catalogItem.querySelector(".catalog-item-order");
  const itemAvailable = catalogItem.querySelector(".catalog-item-available");

  originalImage.style.display = "block";
  reversedImage.style.display = "none";
  orderButton.style.display = "block";
  itemAvailable.style.display = "none";
};

catalogContainerImages.forEach((catalogContainerImage) =>
  catalogContainerImage.addEventListener("mouseover", handleHoverIn)
);

catalogContainerImages.forEach((catalogContainerImage) =>
  catalogContainerImage.addEventListener("mouseout", handleHoverOut)
);


window.onload = function () {
  let sessionKey = "ym_counter_done";
  let snickersImage = document.querySelector(".hero-image");

  function onButtonClick() {
    if (!sessionStorage.getItem(sessionKey)) {
      ym(97023579, "reachGoal", "322");
      sessionStorage.setItem(sessionKey, "true");
    }
  }

  function onScroll() {
    var scrollTop = window.scrollY || window.pageYOffset;
    snickersImage.style.top = `${scrollTop * 0.3}px`;
  }

  let buttons = document.querySelectorAll(
    'a[href="https://t.me/+eMhI8MrjiDA4Zjg0"]'
  );
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onButtonClick);
  }

  window.addEventListener("scroll", onScroll);

  // Сбрасываем информацию о счетчике перед закрытием страницы или перезагрузкой
  window.addEventListener("beforeunload", function () {
    sessionStorage.removeItem(sessionKey);
  });
};


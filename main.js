/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validator.js
function luhnAlgorithm(setValue) {
  if (/[^0-9-\s]+/.test(setValue)) {
    return false;
  }
  let sum = 0;
  const value = String(setValue).replace(/\D/g, "");
  for (let i = 0; i < value.length; i++) {
    let n = parseInt(value[i], 10);
    sum += value.length % 2 === i % 2 && (n *= 2) > 9 ? n - 9 : n;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/card.js
function cardNumber(setValue) {
  const value = String(setValue).replace(/\D/g, "");
  if (/^(?:3[47][0-9]{13})$/.test(value)) {
    return "americanexpress";
  }
  if (/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(value)) {
    return "visa";
  }
  if (/^(?:5[1-5][0-9]{14})$/.test(value)) {
    return "mastercard";
  }
  if (/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(value)) {
    return "discover";
  }
  if (/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(value)) {
    return "dinersclub";
  }
  if (/^(?:(?:2131|1800|35\d{3})\d{11})$/.test(value)) {
    return "jcb";
  }
  if (/^2||6/.test(value)) {
    return "mir";
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const card = document.querySelector(".input");
const app_submit = document.querySelector(".submit");
const cards = [...document.querySelectorAll(".card")];
function checkCard() {
  if (card.value === "") {
    return false;
  }
  cards.forEach(elem => {
    if (elem.className.includes("nocard")) {
      elem.classList.remove("nocard");
    }
  });
  if (luhnAlgorithm(card.value)) {
    card.classList.remove("novalid");
    card.classList.add("valid");
    const type = cardNumber(card.value);
    cards.forEach(elem => {
      if (!elem.className.includes(type)) {
        elem.classList.add("nocard");
      }
    });
  } else {
    card.classList.remove("valid");
    card.classList.add("novalid");
  }
}
app_submit.addEventListener("click", event => {
  event.preventDefault();
  checkCard();
});
card.addEventListener("input", () => {
  if (card.value === "") {
    cards.forEach(elem => {
      if (elem.className.includes("nocard")) {
        elem.classList.remove("nocard");
      }
    });
  }
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
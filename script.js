const openedForm = document.querySelector(".button-open");
const closeForm = document.querySelector(".form-wrapper-shadow");
const inputEnter = closeForm.querySelector(".date-enter");
const hotelForm = closeForm.querySelector(".searching-hotels-form");
const inputExit = closeForm.querySelector(".date-exit");
const inputSumAdults = closeForm.querySelector(".adluts-sum");
const inputSumKids = closeForm.querySelector(".kids-sum");




openedForm.addEventListener("click", function () {
  closeForm.classList.toggle('button-close-form');
  inputEnter.focus();
});

hotelForm.addEventListener("submit", function (evt) {
  if (!inputEnter.value || !inputExit.value || !inputSumAdults.value || !inputSumKids.value) {
    evt.preventDefault();
    console.log("fill the all form fields please.");
  }
});

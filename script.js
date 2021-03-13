const openedForm = document.querySelector(".button-open");
const closeForm = document.querySelector(".form-wrapper-shadow");
const inputEnter = closeForm.querySelector(".date-enter");
const hotelForm = closeForm.querySelector(".searching-hotels-form");
const inputExit = closeForm.querySelector(".date-exit");
const inputSumAdults = closeForm.querySelector(".adluts-sum");
const inputSumKids = closeForm.querySelector(".kids-sum");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("SumAdults");
  storage = localStorage.getItem("SumKids");
} catch (err) {
  isStorageSupport = false;
}


openedForm.addEventListener("click", function () {
  closeForm.classList.toggle('button-close-form');
  if (closeForm.classList.contains("button-close-form")) {
  closeForm.classList.add('button-form-animation');
}
  if (storage) {
  inputSumAdults.value = storage;
  inputSumKids.value = storage;
}
  inputEnter.focus();
});

hotelForm.addEventListener("submit", function (evt) {
  if (!inputEnter.value || !inputExit.value || !inputSumAdults.value || !inputSumKids.value) {
    evt.preventDefault();
    console.log("fill the all form fields please.");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("SumAdults", inputSumAdults.value);
    localStorage.setItem("SumKids", inputSumKids.value);
  }
  }
});

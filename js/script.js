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

closeForm.classList.add("button-close-form");
closeForm.classList.add("button-form-animation");

openedForm.addEventListener("click", function () {
  closeForm.classList.toggle("button-close-form");
  if (closeForm.classList.contains("button-close-form")) {
  closeForm.classList.add("button-form-animation");
  closeForm.classList.remove("form-error");
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
    closeForm.classList.remove("form-error");
    closeForm.offsetWidth = closeForm.offsetWidth;
    closeForm.classList.add("form-error");
    console.log("fill the all form fields please.");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("SumAdults", inputSumAdults.value);
    localStorage.setItem("SumKids", inputSumKids.value);
  }
  }
});

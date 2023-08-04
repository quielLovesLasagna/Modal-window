"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//Function that removes the class "hidden"
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// looping in the nodelist of `show modal` and adding event listener
// when clicked, the class `hidden` will be removed from the modal and overlay
// therefore, showing the modal and overlay
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// Function that adds the class "hidden"
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// adding event listener to `X` button
// when clicked, the class `hidden will be added` to the modal and overly
// therefore, hiding/closing the modal and overlay
btnCloseModal.addEventListener("click", closeModal);

// adding event listener to the overlay (background)
// if user clicks outside the modal
// the `hidden will be added` to the modal and overly
// therefore, hiding/closing the modal and overlay
overlay.addEventListener("click", closeModal);

// if the keypress is === esc and if the modall does not contain the class "hidden"
// therefore, close the modal
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

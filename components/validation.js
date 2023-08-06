// enabling validation by calling enableValidation()
// pass all the settings on call

// const showInputError = (formElements, inputElements, { inputErrorClass }) => {
//   const errorMessageElement = formElements.querySelector(
//     `#${inputElements.id}-error`
//   );
//   inputElements.classList.add(inputErrorClass);
//   errorMessageElement.textContent = inputElements.validationMessage;
// };

// const hideInputError = (formElements, inputElements, { inputErrorClass }) => {
//   const errorMessageElement = formElements.querySelector(
//     `#${inputElements.id}-error`
//   );
//   inputElements.classList.remove(inputErrorClass);
//   errorMessageElement.textContent = "";
// };

// const checkInputValidity = (formElements, inputElement, options) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElements, inputElement, options);
//   } else {
//     hideInputError(formElements, inputElement, options);
//   }
// };

// const checkFormValidity = (inputs) =>
//   inputs.every((input) => input.validity.valid);

// function toggleButtonState(inputElements, submitButtonSelector, options) {
//   const isFormValid = checkFormValidity(inputElements);
//   if (isFormValid) {
//     submitButtonSelector.classList.remove(options.inactiveButtonClass);
//     submitButtonSelector.disabled = false;
//   } else {
//     submitButtonSelector.classList.add(options.inactiveButtonClass);
//     submitButtonSelector.disabled = true;
//   }
// }

// const setEventListeners = (formElement, options) => {
//   const inputElements = [
//     ...formElement.querySelectorAll(options.inputSelector),
//   ];
// const submitButtonSelector = formElement.querySelector(
//   options.submitButtonSelector
// );
// toggleButtonState(inputElements, submitButtonSelector, options);
// inputElements.forEach((inputElement) => {
//   inputElement.addEventListener("input", (evt) => {
//     checkInputValidity(formElement, inputElement, options);
//     toggleButtonState(inputElements, submitButtonSelector, options);
//   });
// });
//};

// const enableValidation = (options) => {
//   const formElements = [...document.querySelectorAll(options.formSelector)];
// formElements.forEach((formElement) => {
//   formElement.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//   });
//   setEventListeners(formElement, options);
//});
//};

// const settings = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__form-input",
//   submitButtonSelector: ".modal__submit-button",
//   inactiveButtonClass: "modal__submit-button-inactive",
//   inputErrorClass: "modal__input_type_error",
// };

//enableValidation(config);

// enabling validation by calling enableValidation()
// pass all the settings on call

const showInputError = (formElements, inputElements, { inputErrorClass }) => {
  const errorMessageElement = formElements.querySelector(
    `#${inputElements.id}-error`
  );
  inputElements.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElements.validationMessage;
};

const hideInputError = (formElements, inputElements, { inputErrorClass }) => {
  const errorMessageElement = formElements.querySelector(
    `#${inputElements.id}-error`
  );
  inputElements.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
};

const checkInputValidity = (formElements, inputElement, options) => {
  if (!inputElement.validity.valid) {
    return showInputError(formElements, inputElement, options);
  }
  hideInputError(formElements, inputElement, options);
};

function toggleButtonState(inputElements, submitButtonSelector, options) {
  let foundInvalid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    return submitButtonSelector.classList.add(options.inactiveButtonClass);
  }
  submitButtonSelector.classList.remove(options.inactiveButtonClass);
}

const setEventListeners = (formElement, options) => {
  const inputElements = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  const submitButtonSelector = formElement.querySelector(
    options.submitButtonSelector
  );
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButtonSelector, options);
    });
  });
};

const enableValidation = (options) => {
  const formElements = Array.from(
    document.querySelectorAll(options.formSelector)
  );
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  });
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button-inactive",
  inputErrorClass: "modal__input_type_error",
};

enableValidation(config);

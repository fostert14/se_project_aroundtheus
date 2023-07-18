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
    showInputError(formElements, inputElement, options);
  } else {
    hideInputError(formElements, inputElement, options);
  }
};

const checkFormValidity = (inputElements, submitButtonSelector, options) => {
  let foundInvalid = false;
  submitButtonSelector.disabled = true;
  const allValid = inputElements.every(
    (inputElement) => inputElement.validity.valid
  );
  if (!allValid) {
    return submitButtonSelector.classList.add(options.inactiveButtonClass);
  }
  submitButtonSelector.classList.remove(options.inactiveButtonClass);
  submitButtonSelector.disabled = false;
};

function toggleButtonState(inputElements, submitButtonSelector, options) {
  submitButtonSelector.classList.add(options.inactiveButtonClass);
  checkFormValidity(inputElements, submitButtonSelector, options);
}

const setEventListeners = (formElement, options) => {
  const inputElements = [
    ...formElement.querySelectorAll(options.inputSelector),
  ];
  const submitButtonSelector = formElement.querySelector(
    options.submitButtonSelector
  );
  toggleButtonState(inputElements, submitButtonSelector, options);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButtonSelector, options);
    });
  });
};

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)];
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

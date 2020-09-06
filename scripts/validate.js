const validationList = {
  formSelector: '.popup__form',
  fieldsetSelector: '.popup__form-input',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationList.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationList.inputErrorClass);
  errorElement.classList.remove(validationList.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {                                // Функция принимает массив полей
  return inputList.some((inputElement) => {                             // проходим по этому массиву методом some
    return !inputElement.validity.valid;                                // Если поле не валидно, колбэк вернёт true
  })                                                                    // Обход массива прекратится и вся фунцкция
};                                                                      // hasInvalidInput вернёт true                                                                      

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {                                        // Если есть хотя бы один невалидный инпут
    buttonElement.classList.add(validationList.inactiveButtonClass);               // сделай кнопку неактивной
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(validationList.inactiveButtonClass);            // иначе сделай кнопку активной
    buttonElement.removeAttribute('disabled', 'disabled'); 
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationList.inputSelector));
  const buttonElement = formElement.querySelector(validationList.submitButtonSelector);         
  toggleButtonState(inputList, buttonElement);                              //проверить состояние кнопки в самом начале
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationList.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(validationList.fieldsetSelector));
      fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);      
    });
  });
};

enableValidation(validationList);


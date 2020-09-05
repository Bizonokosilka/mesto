const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__form-item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__form-item_type_error');
  errorElement.classList.remove('popup__error_visible');
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

console.log('.popup__form-item')
console.log('.popup__save-btn')

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {                                        // Если есть хотя бы один невалидный инпут
    buttonElement.classList.add('popup__save-btn_disabled');               // сделай кнопку неактивной
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__save-btn_disabled');            // иначе сделай кнопку активной
    buttonElement.removeAttribute('disabled', 'disabled'); 
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-item'));
  const buttonElement = formElement.querySelector('.popup__save-btn');         
  toggleButtonState(inputList, buttonElement);                              //проверить состояние кнопки в самом начале
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-input'));
      fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);      
    });
  });
};


enableValidation();

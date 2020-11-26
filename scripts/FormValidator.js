export default class FormValidator {
    constructor (validationSettings, currentFormSelector) {
        this._formSelector = validationSettings.formSelector;
        this._fieldsetSelector = validationSettings.fieldsetSelector;
        this._inputSelector = validationSettings.inputSelector;    
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;        
        this._errorClass = validationSettings.errorClass;

        this._currentFormSelector = currentFormSelector;
    }
    
    _showInputError () {
        const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
        this._inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = this._errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    
    _hideInputError () {
        const errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };/*  */
    
    _checkInputValidity () {
        console.log(inputElement)
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };
    
    _hasInvalidInput () {                                // Функция принимает массив полей
        return inputList.some((inputElement) => {                             // проходим по этому массиву методом some
          return !inputElement.validity.valid;                                // Если поле не валидно, колбэк вернёт true
        })                                                                    // Обход массива прекратится и вся фунцкция
    };                                                                      // hasInvalidInput вернёт true                                                                      
    
    _toggleButtonState () {
        if (this._hasInvalidInput(inputList)) {                                        // Если есть хотя бы один невалидный инпут
            buttonElement.classList.add(this._inactiveButtonClass);               // сделай кнопку неактивной
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);            // иначе сделай кнопку активной
            buttonElement.removeAttribute('disabled', 'disabled'); 
        }
    };
    
    _setEventListeners () {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._submitButtonSelector);         
        this._toggleButtonState(inputList, buttonElement);                              //проверить состояние кнопки в самом начале
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });        
    };
    
    enableValidation () {
        this._setEventListeners(this._currentFormSelector); 

        this._currentFormSelector.addEventListener('submit', (event) => {
            event.preventDefault();
        }); 
        /* const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((formElement) => {
            this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
            });
            this._setEventListeners(formElement);
        }); */
    };
}

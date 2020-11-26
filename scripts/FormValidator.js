export default class FormValidator {
    constructor (validationSettings, currentFormSelector) {
        this._inputElement = validationSettings.inputElement;
        this._submitButtonSelector = validationSettings.submitButtonSelector;
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;
        this._formSelector = validationSettings.formSelector;

        this._currentFormSelector = currentFormSelector;
    }
    
    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._currentFormSelector.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);            
    };
    
    _hideInputError = (inputElement) => {
        const errorElement = this._currentFormSelector.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }        
    };
    
    _hasInvalidInput = (inputList) => {                                         // Функция принимает массив полей
        return inputList.some((inputElement) => {                               // проходим по этому массиву методом some
          return !inputElement.validity.valid;                                  // Если поле не валидно, колбэк вернёт true
        })                                                                      // Обход массива прекратится и вся фунцкция
      };                                                                        // hasInvalidInput вернёт true                                                                      
    
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {                                   // Если есть хотя бы один невалидный инпут
            buttonElement.classList.add(this._inactiveButtonClass);               // сделай кнопку неактивной
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);            // иначе сделай кнопку активной
            buttonElement.removeAttribute('disabled', 'disabled'); 
        }
    };
    
    enableValidation = () => {
        const inputList = Array.from(this._currentFormSelector.querySelectorAll(this._inputElement));
        const buttonElement = this._currentFormSelector.querySelector(this._submitButtonSelector);         
        this._toggleButtonState(inputList, buttonElement);                        //проверить состояние кнопки в самом начале
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                console.log(inputElement.validity.valid)
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });        
    };
}

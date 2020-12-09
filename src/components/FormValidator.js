export default class FormValidator {
    constructor (validationSettings, formElement) {        
        this._inactiveButtonClass = validationSettings.inactiveButtonClass;
        this._inputErrorClass = validationSettings.inputErrorClass;
        this._errorClass = validationSettings.errorClass;        
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll('.popup__form-item'));
        this._buttonElement = this._formElement.querySelector('.popup__save-btn');
    }
    
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);            
    };
    
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }             
    };
    
    _hasInvalidInput(inputList) {                                         // Функция принимает массив полей
        return inputList.some((inputElement) => {                               // проходим по этому массиву методом some
          return !inputElement.validity.valid;                                  // Если поле не валидно, колбэк вернёт true
        })                                                                      // Обход массива прекратится и вся фунцкция
      };                                                                        // hasInvalidInput вернёт true                                                                      
    
    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {                                   // Если есть хотя бы один невалидный инпут
            buttonElement.classList.add(this._inactiveButtonClass);               // сделай кнопку неактивной
            buttonElement.setAttribute('disabled', 'disabled');
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);            // иначе сделай кнопку активной
            buttonElement.removeAttribute('disabled', 'disabled'); 
        }
    };

    checkButton() {            
            this._inputList.forEach((inputElement) => {                
                this._checkInputValidity(inputElement);     
            }) 
            this._toggleButtonState(this._inputList, this._buttonElement);                  
    }
    
    
    enableValidation() {            
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {                
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            });
        });        
    };
}

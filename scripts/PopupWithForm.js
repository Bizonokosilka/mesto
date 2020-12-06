import Popup from './Popup.js';

export default class PopupWIthForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');           
    }

    _getInputValues() {                                                                          
        this._inputList = Array.from(this._form.querySelectorAll('.popup__form-item'));  
        /* console.log(this._inputList);  */        
        this._values = {};        
        this._inputList.forEach(input => 
            this._values[input.name] = input.value);
        /* console.log(this._values);   */              
        return this._values; 

    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
    
    close() {
        super.close();
        this._form.reset();
    }    
}
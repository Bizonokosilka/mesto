import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);        
        this._popupImage = this._popup.querySelector('.popup__full-image');
        this._popupCaption = this._popup.querySelector('.popup__caption');                       
    }

    open() {
        super.open();        
        const cardImage = event.target.closest('.elements__image');
        console.log(cardImage);
        this._popupImage.src = cardImage.src;
        this._popupImage.alt = cardImage.alt;
        this._popupCaption.textContent = cardImage.alt;        
    }

    close() {
        super.close();               
    }
}


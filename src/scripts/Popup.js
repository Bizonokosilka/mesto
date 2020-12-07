export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');                
    }

    close() {
        this._popup.classList.remove('popup_opened');        
    }

    _handleEscClose() {
        if(event.key === 'Escape') {
            this.close();            
        }
    }

    _handleOverlayClose() {
        if(event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-btn').addEventListener('click', () => this.close());
        this._popup.addEventListener('mousedown', () => this._handleOverlayClose()); 
        document.addEventListener('keydown', () => this._handleEscClose());       
    }
}
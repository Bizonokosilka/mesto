import { imagePopupFullImage, imagePopupCaption, imagePopup, imagePopupCloseButton} from '../scripts/index.js'
import { closePopupByEsc, closePopupByOverlay } from '../scripts/utils.js'

export default class Card {
    constructor (data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;        
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);
    
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__title').textContent = this._name;        
    
        return this._element;
    }

    _likeCard() {
        this._element.querySelector('.elements__like-btn').classList.toggle('elements__like-btn_active');
    }

    _deleteCard() {      
        this._element.remove();
    }

    _handleOpenPopup() {
        imagePopupFullImage.src = this._link;
        imagePopupFullImage.alt = this._name;
        imagePopupCaption.textContent = this._name;
        imagePopup.classList.add('popup_opened');
        document.addEventListener('keydown', closePopupByEsc);
    }

    _handleClosePopup() {
        imagePopupFullImage.src = '';
        imagePopupFullImage.alt = '';
        imagePopupCaption.textContent = '';
        imagePopup.classList.remove('popup_opened');
        document.removeEventListener('keydown', closePopupByEsc);
    } 

    _setEventListeners() {
        this._element.querySelector('.elements__image').addEventListener('click', () => {
        this._handleOpenPopup();
        });
    
        imagePopupCloseButton.addEventListener('click', () => {
        this._handleClosePopup();
        });

        this._element.querySelector('.elements__trash-btn').addEventListener('click', () => {
        this._deleteCard();
        });

        this._element.querySelector('.elements__like-btn').addEventListener('click', () => {
        this._likeCard();
        });

        imagePopup.addEventListener('mousedown', closePopupByOverlay);
    }
}
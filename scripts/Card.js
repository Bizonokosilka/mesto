export default class Card {
    constructor (data, cardSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;          
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

    _setEventListeners() {
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleImageClick(this._name, this._link);
        });
    
        this._element.querySelector('.elements__trash-btn').addEventListener('click', () => {
        this._deleteCard();
        });

        this._element.querySelector('.elements__like-btn').addEventListener('click', () => {
        this._likeCard();
        });        
    }
}
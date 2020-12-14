export default class Card {
    constructor(data, handleCardClick, { handleLikeClick, handleCardDelete }, currentId, cardSelector) {
            this._name = data.name;
            this._link = data.link;
            this._handleCardClick = handleCardClick;
            this._handleLikeClick = handleLikeClick;
            this._cardSelector = cardSelector;
            this._currentId = currentId;
            this._ownerId = data.owner._id;
            this._id = data._id;
            this._likes = data.likes;
            this._handleCardDelete = handleCardDelete;
        }
    
        _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);    
        return cardElement;
    }
    
        _showCardRemove() {
            if (this._ownerId === this._currentId) {
                this._element.querySelector('.elements__trash-btn').classList.add('elements__trash-btn_active');
            }
        }
    
        generateCard() {
            this._element = this._getTemplate();
            const picturesImage = this._element.querySelector('.elements__image');
            this._setEventListeners();    
            this._element.querySelector('.elements__title').textContent = this._name;
            picturesImage.src = this._link;
            picturesImage.alt = this._name;            
            this._element.querySelector('.elements__like-count').textContent = this._likes.length;    
            this._showCardRemove();
            
            return this._element;
        }
    
        isLiked() {
            return this._isLiked;
        }
    
        setLike(data) {
            this._isLiked = data.likes.filter((item) => { return item._id == this._currentId; }).length > 0;
            this._element.querySelector('.elements__like-count').textContent = data.likes.length;
            if (this._isLiked) {
                this._element.querySelector('.elements__like-btn').classList.add('elements__like-btn_active');
            } else {
                this._element.querySelector('.elements__like-btn').classList.remove('elements__like-btn_active');
            }
        }
    
        deleteCard() {
            this._element.remove();
            this._element = null;
        }
    
        _setEventListeners() {
            this._element.querySelector('.elements__image').addEventListener('click', () => {
                const data = {
                    link: this._link,                
                    name: this._name,
                };  
                this._handleCardClick(data);
            }); 
            this._element.querySelector('.elements__trash-btn').addEventListener('click', () => this._handleCardDelete());
            this._element.querySelector('.elements__like-btn').addEventListener('click', () => this._handleLikeClick());            
        }
    }
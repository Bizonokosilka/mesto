import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js'; 
import {openPopup, closePopup, closePopupByOverlay} from '../scripts/utils.js';

const profileName = document.querySelector('.profile__name');                           // имя профиля 
const profileAbout = document.querySelector('.profile__about');                         // информация о себе 
const elementsList = document.querySelector('.elements__list');                         // контейнер карточек

const profilePopup = document.querySelector('.popup_profile');                          // попап профиля 
const profilePopupEditButton = document.querySelector('.profile__edit-btn');            // кнопка редактировать профиль 
const profilePopupCloseButton = profilePopup.querySelector('.popup__close-btn');        // кнопка закрыть форму радактора профиля 
const profileFormElement = profilePopup.querySelector('.popup__form');                  // форма профиля
const profileNameInput = profilePopup.querySelector('.popup__form-item_el_name');       // поле формы "имя" 
const profileJobInput = profilePopup.querySelector('.popup__form-item_el_about');       // поле формы "о себе" 


const cardPopup = document.querySelector('.popup_card');                                // попап карточки 
const cardPopupAddButton = document.querySelector('.profile__add-btn');                 // кнопка добавить карточку 
const cardPopupCloseButton =  cardPopup.querySelector('.popup__close-btn');             // кнопка закрыть форму добавления карточки 
const cardFormElement = cardPopup.querySelector('.popup__form');                        // форма карточки
const cardPlaceInput = cardPopup.querySelector('.popup__form-item_el_name');            // поле формы "название места" 
const cardLinkInput = cardPopup.querySelector('.popup__form-item_el_picture_link');     // поле формы "ссылка на изображение" 

export const imagePopup = document.querySelector('.popup_picture');                            // попап полного изображения
export const imagePopupFullImage = imagePopup.querySelector('.popup__full-image');             // полное изображение
export const imagePopupCloseButton =  imagePopup.querySelector('.popup__close-btn');           // кнопка закрыть полное изображение
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');                  // подпись полного изображения



const initialCards = [                                                                   //массив начальных карточек
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationSettings = {
  inputElement: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_type_error',
  errorClass: 'popup__error_visible',
  lableSelector: '.popup__input-container'  
};

const validCard = new FormValidator(validationSettings, cardFormElement);

/* validCard.checkButton(); */

validCard.enableValidation();

const validProfile = new FormValidator(validationSettings, profileFormElement);

validProfile.enableValidation();

if (!profilePopup.classList.contains('popup_opened')) {                 //В момент открытия модального окна данные профиля заносяться в форму.

};  

function profileSubmitHandler (evt) {                                   // Обработчик отправки формы профиля.
  evt.preventDefault();                                                 // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = profileNameInput.value;                     // Данные формы заносятся в профиль.
  profileAbout.textContent = profileJobInput.value; 
  closePopup(profilePopup);                                            
};

function handleImageClick(name, link) {
  imagePopupFullImage.src = link;
  imagePopupFullImage.alt = name;
  imagePopupCaption.textContent = name; 
  openPopup(imagePopup);  
}

function createCard(item) {
  const card = new Card(item, '.elements__template', handleImageClick);
  const cardElement = card.generateCard();  
  return cardElement
}



initialCards.forEach((item) => {
  const cardElement = createCard(item) 
  elementsList.prepend(cardElement);
});

function cardSubmitHandler (evt) {                                     // Обработчик отправки формы место.
  evt.preventDefault();                                                 
  const newPlace = {
    name: cardPlaceInput.value,
    link: cardLinkInput.value
  };
  const cardElement = createCard(newPlace) 
  elementsList.prepend(cardElement);  
  closePopup(cardPopup);
  cardPlaceInput.value = '';  
  cardLinkInput.value = '';
}; 

profilePopupEditButton.addEventListener('click', () => {                                        // Слушатель кнопки "редактировать профиль"  
  
  profileNameInput.value = profileName.textContent;                         
  profileJobInput.value = profileAbout.textContent;
  validProfile.checkButton(); 
  openPopup(profilePopup);
});                                                                                              

cardPopupAddButton.addEventListener('click', () => {                                             // Слушатель кнопки "добавить место"  
  validCard.checkButton();
  openPopup(cardPopup);
});                                                                                              

profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));               // Слушатель кнопки "закрыть профиль"
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));                     // Слушатель кнопки "закрыть место"
profileFormElement.addEventListener('submit', profileSubmitHandler);                             // Слушатель кнопки "сохранить профиль"
cardFormElement.addEventListener('submit', cardSubmitHandler);                                   // Слушатель кнопки "добавить место" 
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));                    // Слушатель кнопки "закрыть полное изображение"
cardPopup.addEventListener('mousedown', closePopupByOverlay);
profilePopup.addEventListener('mousedown', closePopupByOverlay);
imagePopup.addEventListener('mousedown', closePopupByOverlay);




import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js'; 
import PopupWIthForm from '../scripts/PopupWIthForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';


const profilePopup = document.querySelector('.popup_profile');                          // попап профиля 
const profilePopupEditButton = document.querySelector('.profile__edit-btn');            // кнопка редактировать профиль 
const profileFormElement = profilePopup.querySelector('.popup__form');                  // форма профиля
const profileNameInput = profilePopup.querySelector('.popup__form-item_el_name');       // поле формы "имя" 
const profileJobInput = profilePopup.querySelector('.popup__form-item_el_about');       // поле формы "о себе" 


const cardPopup = document.querySelector('.popup_card');                                // попап карточки 
const cardPopupAddButton = document.querySelector('.profile__add-btn');                 // кнопка добавить карточку 
const cardFormElement = cardPopup.querySelector('.popup__form');                        // форма карточки


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

validCard.enableValidation();


const validProfile = new FormValidator(validationSettings, profileFormElement);

validProfile.enableValidation();


const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.elements__template', handleImageClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
},
  '.elements__list'
);

cardList.renderItems();


const popupAdd = new PopupWIthForm({
  popupSelector: '.popup_card',
  handleFormSubmit: (item) => {
    const newCard = new Card(item, '.elements__template', handleImageClick);
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
    popupAdd.close();
  }
});
popupAdd.setEventListeners();


const popupEdit = new PopupWIthForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (item) => {
    console.log(item);
    user.setUserInfo(item);
    popupEdit.close();
  }
});
popupEdit.setEventListeners();

const popupPicture = new PopupWithImage('.popup_picture');
popupPicture.setEventListeners();


const user = new UserInfo({ 
  userNameSelector: '.profile__name', 
  userInfoSelector: '.profile__about' 
});
const userInfo = user.getUserInfo();


profilePopupEditButton.addEventListener('click', () => {                                        // Слушатель кнопки "редактировать профиль"    
  profileNameInput.value = userInfo.user;                        
  profileJobInput.value = userInfo.info;
  validProfile.checkButton(); 
  popupEdit.open();
});    


cardPopupAddButton.addEventListener('click', () => {                                             // Слушатель кнопки "добавить место"  
  validCard.checkButton();
  popupAdd.open();
}); 


function handleImageClick() {  ; 
  popupPicture.open();  }








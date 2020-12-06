const profilePopup = document.querySelector('.popup_profile');                                 // попап профиля 
export const profilePopupEditButton = document.querySelector('.profile__edit-btn');            // кнопка редактировать профиль 
export const profileFormElement = profilePopup.querySelector('.popup__form');                  // форма профиля
export const profileNameInput = profilePopup.querySelector('.popup__form-item_el_name');       // поле формы "имя" 
export const profileJobInput = profilePopup.querySelector('.popup__form-item_el_about');       // поле формы "о себе" 
const cardPopup = document.querySelector('.popup_card');                                       // попап карточки 
export const cardPopupAddButton = document.querySelector('.profile__add-btn');                 // кнопка добавить карточку 
export const cardFormElement = cardPopup.querySelector('.popup__form');                        // форма карточки

export const initialCards = [                                                                  //массив начальных карточек
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

export const validationSettings = {
  inputElement: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_type_error',
  errorClass: 'popup__error_visible',
  lableSelector: '.popup__input-container'  
};
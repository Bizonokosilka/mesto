export const editButton = document.querySelector('.profile__edit-btn');                               // кнопка редактировать профиль
const editPopup = document.querySelector('.popup_profile');                                           // попап профиля 
export const editForm = editPopup.querySelector('.popup__form');                                      // форма профиля
export const nameInput = editForm.querySelector('.popup__form-item_el_name');                         // поле формы "имя" 
export const jobInput = editForm.querySelector('.popup__form-item_el_about');                         // поле формы "о себе" 
export const addButton = document.querySelector('.profile__add-btn');                                 // кнопка добавить карточку 


const addPopup = document.querySelector('.popup_card');                                               // попап карточки 
export const addForm = addPopup.querySelector('.popup__form');                                        // форма карточки
export const picturesTemplateSelector = '.elements__template';

export const userName = document.querySelector('.profile__name');
export const userAbout = document.querySelector('.profile__about');

export const avatarImg = document.querySelector('.profile__avatar');
const avatarPopup = document.querySelector('.popup_avatar');
export const avatarForm = avatarPopup.querySelector('.popup__form');

export const allSavedSubmits = document.querySelectorAll('.popup__save-btn_loaded');

export const token = 'df186bcc-089f-406c-b05a-966a57eefbcc';
export const url = 'https://mesto.nomoreparties.co/v1/cohort-18/';

export const validationSettings = {
  inputElement: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_type_error',
  errorClass: 'popup__error_visible',
  lableSelector: '.popup__input-container'  
};
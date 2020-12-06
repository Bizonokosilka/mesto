export const profileName = document.querySelector('.profile__name');                           // имя профиля 
export const profileAbout = document.querySelector('.profile__about');                         // информация о себе 
export const elementsList = document.querySelector('.elements__list');                         // контейнер карточек

export const profilePopup = document.querySelector('.popup_profile');                          // попап профиля 
export const profilePopupEditButton = document.querySelector('.profile__edit-btn');            // кнопка редактировать профиль 
export const profilePopupCloseButton = profilePopup.querySelector('.popup__close-btn');        // кнопка закрыть форму радактора профиля 
export const profileFormElement = profilePopup.querySelector('.popup__form');                  // форма профиля
export const profileNameInput = profilePopup.querySelector('.popup__form-item_el_name');       // поле формы "имя" 
export const profileJobInput = profilePopup.querySelector('.popup__form-item_el_about');       // поле формы "о себе" 


export const cardPopup = document.querySelector('.popup_card');                                // попап карточки 
export const cardPopupAddButton = document.querySelector('.profile__add-btn');                 // кнопка добавить карточку 
export const cardPopupCloseButton =  cardPopup.querySelector('.popup__close-btn');             // кнопка закрыть форму добавления карточки 
export const cardFormElement = cardPopup.querySelector('.popup__form');                        // форма карточки
export const cardPlaceInput = cardPopup.querySelector('.popup__form-item_el_name');            // поле формы "название места" 
export const cardLinkInput = cardPopup.querySelector('.popup__form-item_el_picture_link');     // поле формы "ссылка на изображение" 

export const imagePopup = document.querySelector('.popup_picture');                            // попап полного изображения
export const imagePopupFullImage = imagePopup.querySelector('.popup__full-image');             // полное изображение
export const imagePopupCloseButton =  imagePopup.querySelector('.popup__close-btn');           // кнопка закрыть полное изображение
export const imagePopupCaption = imagePopup.querySelector('.popup__caption');                  // подпись полного изображения

export const elementsTempateSelector = ('.elements__template');



export const initialCards = [                                                                   //массив начальных карточек
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
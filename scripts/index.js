const profileName = document.querySelector('.profile__name');                           // имя профиля 
const profileAbout = document.querySelector('.profile__about');                         // информация о себе 
const elementsTitle = document.querySelector('.elements__title');                       // название места в карточке 
const elementsImage = document.querySelector('.elements__image');                       // картинка карточки 
const elementsList = document.querySelector('.elements__list');                         // контейнер карточек
const elementsTemplate =  document.querySelector('.elements__template');                // template карточки


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
const cardPopupLikeButton =  cardPopup.querySelector('elements__like-btn');             // кнопка "лайк" карточки
const cardPopupDeleteButton =  cardPopup.querySelector('elements__trash-btn');          // кнопка "удалить карточку"




const imagePopup = document.querySelector('.popup_picture');                            // попап полного изображения
const imagePopupFullImage = imagePopup.querySelector('.popup__full-image');             // полное изображение
const imagePopupCloseButton =  imagePopup.querySelector('.popup__close-btn');           // кнопка закрыть полное изображение
const imagePopupCaption = imagePopup.querySelector('.popup__caption');                  // подпись полного изображения



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


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}                                            

if (!profilePopup.classList.contains('popup_opened')) {                 //В момент открытия модального окна данные профиля заносяться в форму.
  
  profileNameInput.value = profileName.textContent;                         
  profileJobInput.value = profileAbout.textContent; 
};  

function profileSubmitHandler (evt) {                                   // Обработчик отправки формы профиля.
  evt.preventDefault();                                                 // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = profileNameInput.value;                     // Данные формы заносятся в профиль.
  profileAbout.textContent = profileJobInput.value; 
  closePopup(profilePopup);                                            
};

function createCard(name,link) {                                        // Создаём карточку из temlate
  const elementsItem = elementsTemplate.content.cloneNode(true);                        
  elementsItem.querySelector('.elements__title').textContent = name;
  elementsItem.querySelector('.elements__image').alt = name;
  elementsItem.querySelector('.elements__image').src = link;
  elementsItem.querySelector('.elements__trash-btn').addEventListener("click", deleteCard);
  elementsItem.querySelector('.elements__like-btn').addEventListener('click', likeCard);
  elementsItem.querySelector('.elements__image').addEventListener('click', openFullImage);
  return elementsItem;  
};

function addCard(element) {                                            // Добавляем карточку
  elementsList.prepend(element);  
};

initialCards.forEach(item => {                                         // Создаём начальные карточки из массива
  const element = createCard(item.name, item.link);
  addCard(element);  
});

function deleteCard(event) {                                           // Удаляем карточку
  const elementsItem = event.target.closest('.elements__item');
  elementsItem.remove();
};

function likeCard(event) {                                             // Переключаем лайк по классу
  event.target.classList.toggle('elements__like-btn_active');
};

function openFullImage(event) {                                        // Открываем полное изображение
  const elementsItem = event.target.closest('.elements__image');
  imagePopupFullImage.src = elementsItem.src;
  imagePopupFullImage.alt = elementsItem.alt;
  imagePopupCaption.textContent = elementsItem.alt; 
  openPopup(imagePopup);
}

function cardSubmitHandler (evt) {                                     // Обработчик отправки формы место.
  evt.preventDefault();                                                 
  const name = cardPlaceInput.value;
  const link = cardLinkInput.value;
  const element = createCard(name, link);
  addCard(element);
  closePopup(cardPopup);
  cardPlaceInput.value = '';  
  cardLinkInput.value = '';
}; 

function closePopupByOverlay(event) {
  const currentPopup = document.querySelector('.popup_opened');
  if (currentPopup && event.target === event.currentTarget) { 
    closePopup(currentPopup); 
  }
}

function closePopupByEsc(event) {
  const currentPopup = document.querySelector('.popup_opened');
  if (currentPopup && event.key === 'Escape') { 
    closePopup(currentPopup);
  }
}

profilePopupEditButton.addEventListener('click', () => openPopup(profilePopup));                 // Слушатель кнопки "редактировать профиль"
cardPopupAddButton.addEventListener('click', () => openPopup(cardPopup));                        // Слушатель кнопки "добавить место"
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));                // Слушатель кнопки "закрыть профиль"
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));                      // Слушатель кнопки "закрыть место"
profileFormElement.addEventListener('submit', profileSubmitHandler);                               // Слушатель кнопки "сохранить профиль"
cardFormElement.addEventListener('submit', cardSubmitHandler);                                     // Слушатель кнопки "добавить место" 
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));                    // Слушатель кнопки "закрыть полное изображение"
cardPopup.addEventListener('mousedown', closePopupByOverlay);
profilePopup.addEventListener('mousedown', closePopupByOverlay);
imagePopup.addEventListener('mousedown', closePopupByOverlay);



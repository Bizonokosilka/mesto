const popup = document.querySelector('.popup');                         // Находим попап в DOM
const popupEditButton = document.querySelector('.profile__edit-btn');   // Находим кнопку "редактировать" в DOM
const popupEditCloseButton = popup.querySelector('.popup__close-btn');  // Находим кнопку "закрыть" в DOM
const nameInput = popup.querySelector('.popup__form-item_el_name');     // Находим поле формы "имя" в DOM
const jobInput = popup.querySelector('.popup__form-item_el_about');     // Находим поле формы "о себе" в DOM 
const profileName = document.querySelector('.profile__name');           // Находим "имя профиля" в DOM
const profileAbout = document.querySelector('.profile__about');         // Находим "информацию о себе" в DOM
const formElement = popup.querySelector('.popup__form');                // Находим форму в DOM

function popupToggle () {                                               //Toogle для попапа по классу.

  popup.classList.toggle('popup_opened');                               

  if (popup.classList.contains('popup_opened')) {                       //В момент открытия модального окна данные профиля заносяться в форму.
    
    nameInput.value = profileName.textContent;                         
    jobInput.value = profileAbout.textContent;     
  }  
}

function formSubmitHandler (evt) {                                      // Обработчик отправки формы.

  evt.preventDefault();                                                 // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = nameInput.value;                            // Данные формы заносятся в профиль.
  profileAbout.textContent = jobInput.value; 
  
  popupToggle();                                                        // Форма закрывается.
}

popupEditButton.addEventListener('click', popupToggle);                 // Слушатель кнопки "редактировать"
popupEditCloseButton.addEventListener('click', popupToggle);            // Слушатель кнопки "закрыть"
formElement.addEventListener('submit', formSubmitHandler);              // Слушатель кнопки "сохранить"





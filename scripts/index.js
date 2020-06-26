const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = popup.querySelector('.popup__close-btn');
const nameInput = popup.querySelector('.popup__form-item_el_name');
const jobInput = popup.querySelector('.popup__form-item_el_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const formElement = popup.querySelector('.popup__form');

function popupToggle () {  

  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened'))
  
  nameInput.value = profileName.textContent;                         
  jobInput.value = profileAbout.textContent; 
}

function formSubmitHandler (evt) {

  evt.preventDefault(); 

  profileName.textContent = nameInput.value; 
  profileAbout.textContent = jobInput.value; 
  
  popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);





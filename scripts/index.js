const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__open-popup')
const popupCloseButton = popup.querySelector('.popup__close-icon')
const nameInput = popup.querySelector('.popup__form-item_el_name')
const jobInput = popup.querySelector('.popup__form-item_el_about')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const formElement = popup.querySelector('.popup__form')

function popupToggle () {  

  nameInput.value = profileName.textContent
  jobInput.value = profileAbout.textContent  

  popup.classList.toggle('popup_opened')
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)


function formSubmitHandler (evt) {

  evt.preventDefault() 

  profileName.textContent = nameInput.value  
  profileAbout.textContent = jobInput.value 
  
}

formElement.addEventListener('submit', formSubmitHandler)
formElement.addEventListener('submit', popupToggle)




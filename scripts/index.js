let popup = document.querySelector('.popup')
let popupOpenButton = document.querySelector('.profile__open-popup')
let popupCloseButton = popup.querySelector('.popup__close-icon')
let nameInput = popup.querySelector('.popup__form-item_el_name')
let jobInput = popup.querySelector('.popup__form-item_el_about')
let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')
let formElement = popup.querySelector('.popup__form')

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




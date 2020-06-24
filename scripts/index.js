const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__open-popup')
const popupCloseButton = popup.querySelector('.popup__close-icon')

const popupToggle = function (event) {
  console.log('button clicked')
  event.stopPropagation()
  popup.classList.toggle('popup_opened')
}

const closePopupByClickingOverlay = function (event) {
  if (event.target !== event.currentTarget) { return }
  popupToggle()
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupByClickingOverlay)


import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js'; 
import PopupWIthForm from '../scripts/PopupWIthForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';

import {  
profilePopupEditButton, 
profileFormElement, 
profileNameInput,
profileJobInput,
cardPopupAddButton,
cardFormElement,
validationSettings,
initialCards
} from '../scripts/constants.js';


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
  popupPicture.open();  
}

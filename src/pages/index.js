import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'; 
import PopupWIthForm from '../components/PopupWIthForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import {
profilePopupEditButton,
profileFormElement,
profileNameInput,
profileJobInput,
cardPopupAddButton,
cardFormElement,
initialCards,
validationSettings  
} from '../utils/constants.js'


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
    user.setUserInfo(item);
    popupEdit.close();
  }
});
popupEdit.setEventListeners();

const popupPicture = new PopupWithImage('.popup_picture');
popupPicture.setEventListeners();


const user = new UserInfo({ 
  userNameSelector: '.profile__name', 
  userAboutSelector: '.profile__about' 
});


profilePopupEditButton.addEventListener('click', () => {                                 // Слушатель кнопки "редактировать профиль"    
  const userInfo = user.getUserInfo();
  profileNameInput.value = userInfo.name;                        
  profileJobInput.value = userInfo.about;  
  validProfile.checkButton();   
  popupEdit.open();
});    


cardPopupAddButton.addEventListener('click', () => {                                             // Слушатель кнопки "добавить место"  
  validCard.checkButton();
  popupAdd.open();
}); 


function handleImageClick(data) {     
  popupPicture.open(data);  
}








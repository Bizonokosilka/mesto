import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'; 
import PopupWIthForm from '../components/PopupWIthForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  editButton,  
  editForm,
  nameInput,
  jobInput, 
  addButton, 
  addForm,
  picturesTemplateSelector,
  userName,
  userAbout,
  avatarImg,
  avatarForm,
  allSavedSubmits,  
  validationSettings,
  token,
  url  
} from '../utils/constants.js'

const validAdd = new FormValidator(validationSettings, addForm);
validAdd.enableValidation();

const validEdit = new FormValidator(validationSettings, editForm);
validEdit.enableValidation();

const validAvatar = new FormValidator(validationSettings, avatarForm);
validAvatar.enableValidation();

const popupTypePicture = new PopupWithImage('.popup_picture');
popupTypePicture.setEventListeners();

function handleCardClick(data) {
  popupTypePicture.open(data);
}

function handleLikeClick(card, data) {
  const promise = card.isLiked() ? api.dislikeCard(data._id) : api.likeCard(data._id);
  promise
  .then((data) => { 
      card.setLike(data);
  })
  .catch((err) => {
      console.log(`${err}`);
  });
}
const popupTypeDelete = new PopupWithSubmit('.popup_delete');
popupTypeDelete.setEventListeners();

function handleCardDelete(card) {
  popupTypeDelete.setFormSubmitHandler(() => {
    api.deleteCard(card._id)
      .then(() => {
          card.deleteCard();
          popupTypeDelete.close();
      })
      .catch((err) => {
          console.log(`${err}`);
      });
  });
  popupTypeDelete.open();
}

function renderLoading(isLoading) {
  if (isLoading) {
    Array.from(allSavedSubmits).forEach((submit) => {
      submit.value = "Сохранение...";
    })
  } else {
    Array.from(allSavedSubmits).forEach((submit) => {
      submit.value = "Сохранить";
    })
  }
}

function newCardMaker(data, currentUserId, cardsList) {
  const newCard = new Card(data, 
    handleCardClick, {
    handleLikeClick: () => handleLikeClick(newCard, data),
    handleCardDelete: () => handleCardDelete(newCard) }, 
    currentUserId, 
    picturesTemplateSelector);
  const cardElement = newCard.generateCard();
  newCard.setLike(data);
  cardsList.addItem(cardElement);
}

const api = new Api({ 
  baseUrl: url, 
  headers: { 
    authorization: token,
    'Content-Type': 'application/json',
  }
})

api.getUserInfo()
.then((result) => {
  const user = new UserInfo({ userNameElement: userName, userInfoElement: userAbout });
  user.setUserInfo(result);
  avatarImg.style.backgroundImage = `url(${result.avatar})`;
  const currentUserId = result._id;

  const popupTypeEdit = new PopupWIthForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: (item) => {
      renderLoading(true);
      api.setUserInfo(item)
      .then((data) => {
        user.setUserInfo(data);
        popupTypeEdit.close();
      })
      .catch((err) => {
        console.log(`${err}`);
    })
    .finally(() => {
        renderLoading(false);
    })
    }
  });
  
  popupTypeEdit.setEventListeners();

  editButton.addEventListener('click', () => {
      validEdit.checkButton(editForm);
      
      const userData = user.getUserInfo();

      nameInput.value = userData.name;
      jobInput.value = userData.about;

      nameInput.dispatchEvent(new Event('input'));
      jobInput.dispatchEvent(new Event('input'));
  
      popupTypeEdit.open(); 
  });

  api.getCards()
  .then((cards) => {
    const cardsList = new Section({
      items: cards,
      renderer: (item) => { 
          newCardMaker(item, currentUserId, cardsList);
      },
    }, '.elements__list')
    
    cardsList.renderItems();
  
      const popupTypeAdd = new PopupWIthForm({
        popupSelector: '.popup_card',
        handleFormSubmit: (item) => {
          renderLoading(true);
          api.createCard(item)
          .then((data) => { 
              newCardMaker(data, currentUserId, cardsList);
              popupTypeAdd.close();
          })
          .catch((err) => {
              console.log(`${err}`);
          })
          .finally(() => {
              renderLoading(false);
          })
        }
      });
      
    popupTypeAdd.setEventListeners();
    
    addButton.addEventListener('click', () => {
        validAdd.checkButton(addForm);
        popupTypeAdd.open();
    });

    const popupTypeAvatar = new PopupWIthForm({
        popupSelector: '.popup_avatar',
        handleFormSubmit: (item) => {
            renderLoading(true);
            api.setAvatar(item)
            .then((data) => {
                avatarImg.style.backgroundImage = `url(${data.avatar})`;
                popupTypeAvatar.close();
            })
            .catch((err) => {
                console.log(`${err}`)
            })
            .finally(() => {
                renderLoading(false);
            })
        }
    });
    
    popupTypeAvatar.setEventListeners();
    
    avatarImg.addEventListener('click', () => {
        validAvatar.checkButton(avatarForm);
        popupTypeAvatar.open();
    });
  })
  .catch((err) => {
      console.log(`${err}`);
  });
})
.catch((err) => {
  console.log(`${err}`);
});





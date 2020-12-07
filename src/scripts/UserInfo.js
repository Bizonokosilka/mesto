export default class UserInfo {
    constructor({ userNameSelector, userAboutSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userAbout = document.querySelector(userAboutSelector);
    }

    getUserInfo() {
        return { 
            name: this._userName.textContent,
            about: this._userAbout.textContent            
        };
    }

    setUserInfo(item) {
        this._userName.textContent = item.name;
        this._userAbout.textContent = item.about;        
    }
}
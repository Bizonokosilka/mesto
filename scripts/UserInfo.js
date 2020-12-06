export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        return { 
            user: this._userName.textContent,
            info: this._userInfo.textContent 
        };
    }

    setUserInfo(item) {
        this._userName.textContent = item.name;
        this._userInfo.textContent = item.about;        
    }
}
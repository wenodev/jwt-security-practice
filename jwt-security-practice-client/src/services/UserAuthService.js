import React from 'react'
import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/v1";


class UserAuthService {

    signup(uid, password, name) {
        return axios.post(USER_API_BASE_URL + "/signup" + "?uid=" + uid + "&password=" + password + "&name=" + name);
    }

    signin(uid, password) {
        return axios.post(USER_API_BASE_URL + "/signin" + "?uid=" + uid + "&password=" + password);
    }
}

export default new UserAuthService()

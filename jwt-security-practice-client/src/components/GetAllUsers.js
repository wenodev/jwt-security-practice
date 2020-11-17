import React, { Component } from 'react'
import UserInfoervice from '../services/UserInfoService';

export default class GetAllUsers extends Component {

    constructor(props) {
        super(props);

        this.getAllUsers = this.getAllUsers.bind(this);

    }

    getAllUsers = () => {
        UserInfoervice.getAllUsers().then(res => {
            console.log(res);
        })

    }


    render() {
        return (
            <div>
                <button onClick={this.getAllUsers}>GetAllUsersButton</button>
            </div>
        )
    }


}

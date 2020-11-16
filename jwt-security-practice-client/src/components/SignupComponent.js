import React, { Component } from 'react'
import UserAuthService from '../services/UserAuthService'

export default class SignupComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            uid: '',
            password: '',
            name: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.register = this.register.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeIdHandler = (event) => {
        this.setState({ uid: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    register = () => {
        UserAuthService.signup(this.state.uid, this.state.password, this.state.name).then(res => {
            // this.props.history.push('/');
        })
    }

    cancel = () => {
        this.props.history.push('/');
    }



    render() {
        return (
            <div>
                <div>
                    <label> id: </label>
                    <input placeholder="Id" name="uid" value={this.state.uid} onChange={this.changeIdHandler} />
                </div>

                <div >
                    <label> password: </label>
                    <input placeholder="Password" name="password" value={this.state.password} onChange={this.changePasswordHandler} />
                </div>

                <div >
                    <label> name: </label>
                    <input placeholder="name" name="name" value={this.state.name} onChange={this.changeNameHandler} />
                </div>

                <button onClick={this.register}>Save</button>
                <button onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>

            </div>
        )
    }
}

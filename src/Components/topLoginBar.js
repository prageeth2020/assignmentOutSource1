import React, {Component} from 'react';
import utils from "../utils/utils";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class TopLoginBar extends Component {
    constructor() {
        super();

        var type1;
        this.state = {
            username: '',
            password: '',
            type: ''

        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };

    submitLogin = (event) => {

        event.preventDefault();

        if(this.state.username == 'admin' && this.state.password == 'admin123'){
            this.type1 = 'admin';
        }
        else {
            if(this.state.username == 'storeManager' && this.state.password == '222'){
                this.type1 = 'storeManager';
            }
            else {
                if(this.state.username == 'user' && this.state.password == '333'){
                    this.type1 = 'user';
                }
                else{
                    this.type1 = 'no';
                }
            }


        }

        if (this.type1 == 'no'){
            alert("Invalid login info");
        }
        else {
            const loginsUerObj = {
                username: this.state.username,
                password: this.state.password,
                type: this.type1
            };
            localStorage.setItem("loggedInUser", JSON.stringify(loginsUerObj));
            //console.log(loginUserObj);
            //this.props.history.push('/');
            window.location.href = '/';
        }


    };
    submitLogOut = (event) => {

       // event.preventDefault();


        this.setState({
            username: '',
            password: '',
            type: ''
        });


        localStorage.removeItem("loggedInUser");
        window.location.reload();

    };
        render() {
        return (
            <div>

                <nav className="navbar navbar-light justify-content-end">
                    {utils.isEmpty() &&
                    <form className="form-inline " onSubmit={this.submitLogin} method="POST">
                            <div className="input-group mx-2">
                                <div className="input-group-prepend">
                                     <span className="input-group-text" id="basic-addon1">
                                    <i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                                       aria-describedby="basic-addon1" onChange={this.handleUsernameChange}/>

                            </div>
                            <div className="input-group mx-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                    <i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"
                                       aria-label="Username"
                                       aria-describedby="basic-addon1" onChange={this.handlePasswordChange}/>

                            </div>
                            <button type="submit" className="btn btn-warning"><i
                                className="fas fa-chevron-right text-white"></i></button>
                        </form>
                    }
                    {!utils.isEmpty() &&
                        <div>
                            <form className="form-inline " onSubmit={this.submitLogOut} method="POST">
                                <label className="mx-4 text-warning">{utils.checkLoggedInUser().username}</label>
                                <button type="submit" className="btn">Logout</button>
                            </form>

                        </div>
                    }
                </nav>
            </div>
        );
    }
}

export default TopLoginBar;
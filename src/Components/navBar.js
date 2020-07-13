import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import utils from "../utils/utils";

class NavBar extends Component {

    constructor() {
        super();


        this.state = {
            h: 'nav-link text-white',
            a: 'nav-link text-black-50',
            c: 'nav-link text-black-50'

        };


    }


    Home = () => {
       this.setState({
            h : "nav-link text-white",
            a : "nav-link text-black-50",
            c : "nav-link text-black-50"
        })
    }
    AboutUs = () => {
        this.setState({
            h : "nav-link text-black-50",
            a : "nav-link text-white",
            c : "nav-link text-black-50"
        })
    }
    ContactUs = () => {
        this.setState({
            h : "nav-link text-black-50",
            a : "nav-link text-black-50",
            c : "nav-link text-white"
        })
    }
    cart = () => {
        this.setState({
            h: 'nav-link text-black-50',
            a: 'nav-link text-black-50',
            c: 'nav-link text-black-50'
        })
    }
    render() {

        return (
            <div>
                <nav className="navbar navbar-dark bg-primary  ">
                    <ul className="nav ">
                        <li className="nav-item">
                            <Link className= {this.state.h } to="/" onClick={this.Home}>Home</Link>

                        </li>
                        <li className="nav-item">
                            <Link className= {this.state.a } to="/AboutUs" onClick={this.AboutUs}>AboutUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className= {this.state.c } to="/ContactUs" onClick={this.ContactUs}>ContactUs</Link>
                        </li>

                    </ul>
                    <form className="form-inline">
                        {!utils.isEmpty() &&
                            <Link to="/cart" className="fas fa-shopping-cart fa-2x text-white" onClick={this.cart}></Link>
                        }
                    </form>


                </nav>
            </div>
        );
    }
}

export default NavBar;
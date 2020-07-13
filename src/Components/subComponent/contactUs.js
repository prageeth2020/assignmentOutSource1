import React, {Component} from 'react';
import utils from "../../utils/utils";

class ContactUs extends Component {
    submitForm = (event) => {

        if(utils.isEmpty() ) {
            this.props.history.push('/logIn');
        }
        else {

        }
    };
    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-5 mx-5 my-5">
                        <div className="form-group">
                            <div className="form-check form-check-inline my-3">
                                <i className="fab fa-facebook-f text-primary mx-3"></i>
                                <label className="form-check-label mx-3" htmlFor="inlineCheckbox1">facebook.com/hotelmanagemt</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check form-check-inline my-3">
                                <i className="fas fa-envelope text-danger  mx-3"></i>
                                <label className="form-check-label mx-3" htmlFor="inlineCheckbox1">gmail.com/hotelmanagemt</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline my-3">
                                <i className="fab fa-instagram text-info  mx-3"></i>
                                <label className="form-check-label mx-3" htmlFor="inlineCheckbox1">facebook.com/hotelmanagemt</label>
                            </div>
                        </div>

                    </div>
                    <div className="form-group col-md-5">
                        <form className="mx-5 my-5"  onSubmit={this.submitForm} >
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Your Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                        with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description </label>
                                <textarea id="w3mission" rows="5"   style={{ width : "100%" }} placeholder="Please type in English. Do not include emojis."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
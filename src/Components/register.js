import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="form-row justify-content-center">

                    <div className="form-group col-md-5">
                        <form className="mx-5 my-5"   >
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">First Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input type="email" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Username</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ReEnter Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>

                            </div>
                                <button type="submit" className="btn btn-primary">SignIn</button>



                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="form-row justify-content-center">

                    <div className="form-group col-md-5">
                        <form className="mx-5 my-5"   >
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Username</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>

                            </div>
                            <div className="form-check form-check-inline my-3">
                                <button type="submit" className="btn btn-primary">LogIn</button>
                                <b className="mx-2">If you dont have an account?</b><a href="/register" >SIGNIN</a>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
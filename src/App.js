import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TopLoginBar from './Components/topLoginBar'
import NavBar from './Components/navBar'
import Home from './Components/subComponent/Home'
import ContactUs from './Components/subComponent/contactUs'
import AboutUs from './Components/subComponent/aboutUs'
import Login from './Components/login'
import Register from './Components/register'

function App() {



  return (
    <div>
        <Router>
            <div className="form-row">
                <div className="form-group col-md-6">

                </div>
                <div className="form-group col-md-6 ">
                    <TopLoginBar />
                </div>
            </div>

            <NavBar />



                <Route exact path="/" component={Home} />

                <Route exact path="/ContactUs" component={ContactUs} />

                <Route exact path="/AboutUs" component={AboutUs} />

                <Route exact path="/logIn" component={Login} />

                <Route exact path="/register" component={Register} />

        </Router>
    </div>
  );
}

export default App;

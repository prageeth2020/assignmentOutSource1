import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import utils from "./utils/utils";
import StoreManager from "./Components/storeManager";
var obj = {};
obj = utils.checkLoggedInUser();

if(obj == null) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
else
{
    if (obj.type == "admin") {
        window.location.href = "./Admin/index.html";
    } else {
        if (obj.type == "storeManager") {
            ReactDOM.render(<StoreManager />, document.getElementById('root'));
        }
        else {
            ReactDOM.render(<App/>, document.getElementById('root'));
        }
    }

}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

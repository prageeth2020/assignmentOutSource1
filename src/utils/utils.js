import React, { Component } from 'react'

export default class utils extends Component {


    static checkLoggedInUser() {
        var retrievedObject = localStorage.getItem('loggedInUser');

        if (retrievedObject != null) {

            var k = JSON.parse(retrievedObject);


            //console.log("" + k.type);

            return k;
        } else {
            console.log("User not logged");
            return null;
        }


    }





    static isEmpty() {
        var retrievedObject = localStorage.getItem('loggedInUser');
        if (retrievedObject != null) {
            return false;

        } else {
            return true;
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

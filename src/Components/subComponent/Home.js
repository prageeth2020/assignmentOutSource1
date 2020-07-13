import React, {Component} from 'react';

import axios from "axios";
import utils from "../../utils/utils";



class Home extends Component {
    constructor() {
        super();
        this.state = {
            items : []


        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/items').then((response => {
            this.setState({
                items : response.data
            },() =>{
                console.log(this.state.items)
            })
        })).catch((error) => {

        })
    }

    addItem(count) {
        var obj = {};
        obj = utils.checkLoggedInUser();
        var result = [];
        if(obj == null){
            alert("Please login first");
        }
        else {
            var name ;
            var price;
            axios.get('http://localhost:5000/items/'+ count).then((response => {
                result = response.data;
                console.log(result.name);
                name = result.name;
                price = result.price;

                var obj2 = new Object();

                obj2.user = "1";
                obj2.item = name;
                obj2.price = price;
                obj2.qty = "1";

                axios.post('http://localhost:5000/cart' , obj2 ).then((response => {

                })).catch((error) => {

                })


            })).catch((error) => {

            })


        }
    }
    render() {
        return (
            <div className="mx-5 my-5">
                <div className="row row-cols-1 row-cols-md-3">
                {
                    this.state.items.map((field, key) =>

                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Item ID {field.id}</h5>
                                    <p className="card-text">
                                        Item Name : {field.name} under {field.category} category
                                    </p>
                                    <p className="card-text text-success">
                                        Item Price : {field.price} Available discount {field.offer} category
                                    </p>

                                    <button type="submit" className="btn btn-primary" onClick={this.addItem.bind(this, field.id)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>

                    )






                }
                </div>
            </div>
        );
    }
}

export default Home;
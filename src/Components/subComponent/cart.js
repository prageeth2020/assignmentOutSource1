import React, {Component} from 'react';
import axios from "axios";
class Cart extends Component {


    constructor() {
        super();
        this.state = {
            items : []


        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/cart').then((response => {
            this.setState({
                items : response.data
            },() =>{
                console.log(this.state.items)
            })
        })).catch((error) => {

        })
    }
    remove(count) {
        axios.delete('http://localhost:5000/cart/' + count).then((response => {
           window.location.reload();
        })).catch((error) => {

        })
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

                                        <button type="submit" className="btn btn-danger" onClick={this.remove.bind(this, field.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        )






                    }
                </div>

                <div className="bg-">

                </div>
            </div>
        );
    }
}

export default Cart;
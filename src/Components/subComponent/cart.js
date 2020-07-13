import React, {Component} from 'react';
import axios from "axios";
import utils from "../../utils/utils";
class Cart extends Component {



    constructor() {
        super();
        this.state = {
            items : [],
            orderedItem : '',
            address1 : '',
            address2 : '',
            ids : []

        };

        this.handleAddress1Change = this.handleAddress1Change.bind(this);
        this.handleAddress2Change = this.handleAddress2Change.bind(this);

    }

    componentDidMount() {

        var item = "";
        var id = [];
        axios.get('http://localhost:5000/cart').then((response => {
            this.setState({
                items : response.data
            },() =>{

                for (var i = 0 ; i < this.state.items.length ; i++){
                    item = item + "," + this.state.items[i].item;
                    id.push(this.state.items[i].id);
                }

                this.setState({
                    orderedItem : item,
                    ids : id
                }, () =>{
                    console.log(this.state.orderedItem);
                    console.log(this.state.ids);
                });

            })
        })).catch((error) => {

        })
    }

    handleAddress1Change(event) {

        this.setState({
            address1: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handleAddress2Change(event) {
        this.setState({
            address2: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };

    placeOrder = (event) => {

        if(this.state.address1 == "" & this.state.address2 == ""){
            alert("Please fill the address")
        }
        else {
            var obj = {};
            obj = utils.checkLoggedInUser();
            console.log(obj.username);

            var obj3 = new Object();

            obj3.username = obj.username;
            obj3.address = this.state.address1 + this.state.address2;
            obj3.list = this.state.orderedItem;


            console.log(obj3);
            axios.post('http://localhost:5000/orders',obj3).then((response => {
                window.location.reload();
            })).catch((error) => {

            })

            for (var j = 0 ; j <= this.state.ids.length; j++){
                axios.delete('http://localhost:5000/cart/' + this.state.ids[j]).then((response => {
                    window.location.reload();
                })).catch((error) => {

                })
            }


        }
    }

    remove(count) {
        axios.delete('http://localhost:5000/cart/' + count).then((response => {
           window.location.reload();
        })).catch((error) => {

        })
    }
    render() {
        var items = '';
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
                                            Item Name : {field.item}

                                        </p>
                                        <p className="card-text text-success">
                                            Item Price : {field.qty}
                                        </p>

                                        <p className="card-text text-success">
                                            Item Price : {field.price}
                                        </p>

                                        <button type="submit" className="btn btn-danger" onClick={this.remove.bind(this, field.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>

                <div className="my-4 mx-2">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address 1</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={this.handleAddress1Change}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address 2</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={this.handleAddress2Change}/>
                    </div>


                    <button type="submit" className="btn btn-primary w-100" onClick={this.placeOrder}>Place the Order</button>
                </div>
            </div>
        );
    }
}

export default Cart;
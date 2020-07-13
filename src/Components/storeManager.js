import React, {Component} from 'react';
import axios from 'axios';

class StoreManager extends Component {


    constructor() {
        super();


        this.state = {
            items : [],
            Name: '',
            Category: '',
            Offer : '',
            price : '',
            link : 'err'

        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleOfferChange = this.handleOfferChange.bind(this);
        this.handlepriceChange = this.handlepriceChange.bind(this);

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


    handleNameChange(event) {

        this.setState({
            Name: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handleCategoryChange(event) {
        this.setState({
            Category: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };
    handleOfferChange(event) {

        this.setState({
            Offer: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handlepriceChange(event) {
        this.setState({
            price: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };



    logout = (event) => {
        localStorage.removeItem("loggedInUser");
        window.location.href = '/';

    }
    addItem = (event) => {

        var obj = new Object();

        obj.name = this.state.Name;
        obj.category = this.state.Category;
        obj.offer = this.state.Offer;
        obj.price = this.state.price;
        obj.link = this.state.link;

        console.log(obj);
        axios.post('http://localhost:5000/items',obj).then((response => {
            window.location.reload();
        })).catch((error) => {

        })

    }
    delete(item){
        axios.delete('http://localhost:5000/items/'+ item).then((response => {
            window.location.reload();
        })).catch((error) => {

        })
    }




    render() {
        return (
            <div>
                <div className="bg-info text-center p-2">
                    <h1 className="text-center text-white">Store Manager Control Panel</h1>
                    <button type="submit" className="btn btn-danger " onClick={this.logout}>Logout</button>
                </div>
                <div className="row">
                    <div className="col">
                        <div className=" border  mx-1 my-2">
                            <div className="mx-4 my-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.handleNameChange}
                                           aria-describedby="emailHelp"/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Category</label> <br/>
                                    <select name="cars" id="cars" className="w-100" onChange={this.handleCategoryChange}>
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Offer</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" onChange={this.handleOfferChange}
                                           aria-describedby="emailHelp"/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Price</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1" onChange={this.handlepriceChange}
                                           aria-describedby="emailHelp"/>

                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.addItem}>Add Item</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mx-2">
                        <div className=" ">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Offer</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {

                                    this.state.items.map((field, key) =>

                                        <tr >
                                            <th scope="row">{field.id}</th>
                                            <td>{field.name}</td>
                                            <td>{field.category}</td>
                                            <td>{field.offer}</td>
                                            <td>{field.price}</td>
                                            <td >
                                                <button onClick={this.delete.bind(this, field.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                       
                                    )
                                }



                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default StoreManager;
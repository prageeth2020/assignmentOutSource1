import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <div className="form-check form-check-inline my-3">
                                <button href="" className="btn btn-primary ">Add To Cart</button>

                            </div>

                        </div>
                </div>
            </div>
        );
    }
}

export default Item;
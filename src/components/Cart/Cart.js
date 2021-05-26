import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { removeProductFromCart } from '../../provider/actions/cartAction';
import { FoodDataContext } from '../../provider/reducers/cartProvider';

const Cart = () => {
    const { state, dispatch } = useContext(FoodDataContext);

    const removeProductHandler = (id) => {
        dispatch(removeProductFromCart(id))
    }

    const total = state.cart.map(p => p.price * p.quantity);
    const totalPrice = total.reduce((a, b) => a + b, 0);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    {state.cart.length === 0 ?
                        <h1>No Cart</h1>
                        :
                        state.cart.map(product => (
                            <div className="card ">
                                <div className="card-body">
                                    <h5 className="card-title"> {product.title} </h5>
                                    <p className="card-text"> quantity: {product.quantity} </p>
                                    <p className="card-text"> Price: {product.price} </p>
                                    <p className="card-text"> Total Price: {product.price * product.quantity} </p>
                                    <button className="btn btn-primary" onClick={() => removeProductHandler(product.id)}>remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-3">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title py-3">  Total price: $ {totalPrice} </h5>

                            <Link to="/checkout" className="btn btn-primary" >Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
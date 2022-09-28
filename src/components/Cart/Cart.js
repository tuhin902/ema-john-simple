import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.10).toFixed(2));
    const grandTOtal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total:{grandTOtal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
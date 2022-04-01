import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional rendering option
    // 1. Element variable
    // 2. ternary operator
    // 3. && oparetor
        
    let command;
    if(cart.length === 0){
        command = <p>Please add at least one  item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>please Add more</p>
    }
    else{
        command = <p><small>Thanks for select item</small></p>
    }


    return (
        <div>
            <h2>Item Selecte: {cart.length}</h2>
            {command}
            {
                cart.map(tShirt => <p>{tShirt.name}
                <button onClick={()=> handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yay! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Ora tin jon</p>
                </div>}
            {cart.length !==4 ? '': <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review</button>}
        </div>
    );
};

export default Cart;
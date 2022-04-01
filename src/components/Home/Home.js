import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirt from '../../hooks/useTshirt';


const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                <h3>{tShirts.length}</h3>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;
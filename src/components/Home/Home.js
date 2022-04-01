import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirt from '../../hooks/useTshirt';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
               {
                   tShirts.map(tShirt => <TShirt
                   key={tShirt._id}
                   tShirt={tShirt}
                   ></TShirt>)
               }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;
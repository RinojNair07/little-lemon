import React from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
    return (
        <div className="specials-section-container">
            <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Online Menu</button>
                </div>
            </div>
            <MenuCard />
        </div>
    )
}

export default Menu;
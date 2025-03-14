import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection from '../components/common/MenuSection';

const MenuPage = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [appetizerItems, setAppetizerItems] = useState([]);
    const [burgeriTortiljeItems, setBurgeriTortiljeItems] = useState([]);

    useEffect(() => {
        setBreakfastItems(menuItems.breakfast);
        setAppetizerItems(menuItems.appetizer);
        setBurgeriTortiljeItems(menuItems.burgers);
    }, []);

    return (
        <div className=".container-md mt-5 mb-5 ">
            
            <MenuSection
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Breakfast"
            />

            <MenuSection
                title="Predjelo"
                items={appetizerItems}
                sectionId="Appetizer"
            />

            <MenuSection
                title="Burgeri i Tortilje"
                items={burgeriTortiljeItems}
                sectionId="BurgeriTortilje"
            />
        </div>
    );
};

export default MenuPage;

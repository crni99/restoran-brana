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
        <div className="container-fluid">

            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast"
                />
            </div>

            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-right" data-aos-duration="2000">
                <MenuSection
                    title="Predjelo"
                    items={appetizerItems}
                    sectionId="Appetizer"
                />
            </div>

            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection
                    title="Burgeri i Tortilje"
                    items={burgeriTortiljeItems}
                    sectionId="BurgeriTortilje"
                />
            </div>

        </div>
    );
};

export default MenuPage;

import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection2 from '../components/common/MenuSection2';

const MenuPage = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        setBreakfastItems(menuItems.breakfast);

        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container-fluid">

            {showAlert && (
                <>
                    <div className="alert-overlay"></div>
                    <div className="alert-center">
                        <div className="alert row-wrapper" data-aos='zoom-in' data-aos-duration="1000">
                            <strong>Napomena:<br></br></strong> Cene na sajtu možda nisu usklađene sa aktuelnim cenama u restoranu.
                        </div>
                    </div>
                </>
            )}

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Breakfast1"
            />

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Breakfast2"
            />

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Breakfast3"
            />
        </div>
    );
};

export default MenuPage;

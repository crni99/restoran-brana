import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection2 from '../components/common/MenuSection2';
import MainTitle from '../components/MainTitle';

const MenuPage = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        setBreakfastItems(menuItems.breakfast);

        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container container-fluid">

            {showAlert && (
                <>
                    <div className="alert-overlay"></div>
                    <div className="alert-center p-5">
                        <div className="alert row-wrapper" data-aos='zoom-in' data-aos-duration="1000">
                            <strong>Napomena:<br></br></strong>
                            Jelovnik na sajtu možda nije usklađen sa aktuelnim jelovnikom u restoranu.
                        </div>
                    </div>
                </>
            )}

            <MainTitle title="Jelovnik" />

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

import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection2 from '../components/common/MenuSection2';
import MainTitle from '../components/MainTitle';
import Alert from '../components/common/Alert';

const MenuPage = () => {

    const [breakfastItems, setBreakfastItems] = useState([]);

    useEffect(() => {

        setBreakfastItems(menuItems.breakfast);

    }, []);

    return (
        <div className="container container-fluid">

            <MainTitle title="Jelovnik" />

            <Alert message="Jelovnik na sajtu možda nije usklađen sa aktuelnim jelovnikom u restoranu." />

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Breakfast"
            />

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Dinner"
            />

            <MenuSection2
                title="Doručak (servira se do 13:00)"
                items={breakfastItems}
                sectionId="Lunch"
            />

        </div>
    );
};

export default MenuPage;

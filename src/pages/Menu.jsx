import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection2 from '../components/sections/MenuSection2';
import MainTitle from '../components/MainTitle';
import Alert from '../components/Alert';

const MenuPage = () => {
    
    const [menuSections, setMenuSections] = useState([]);

    useEffect(() => {
        setMenuSections([
            { title: 'Doručak (servira se do 13:00)', items: menuItems.breakfast, sectionId: 'Breakfast' },
            { title: 'Predjela', items: menuItems.breakfast, sectionId: 'Dinner' },
            { title: 'Hamburgeri', items: menuItems.breakfast, sectionId: 'Lunch' }
        ]);
    }, []);

    return (
        <div className="container container-fluid">

            <MainTitle title="Jelovnik" />

            <Alert message="Jelovnik na sajtu možda nije usklađen sa aktuelnim jelovnikom u restoranu." />

            {menuSections.map((section, index) => (
                <MenuSection2
                    key={index}
                    title={section.title}
                    items={section.items}
                    sectionId={section.sectionId}
                />
            ))}
        </div>
    );
};

export default MenuPage;

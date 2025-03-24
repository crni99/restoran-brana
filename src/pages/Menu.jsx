import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection from '../components/sections/MenuSection';
import MainTitle from '../components/MainTitle';
import CustomModal from '../components/CustomModal';

const MenuPage = () => {

    const [showAlert, setShowAlert] = useState(false);
    const handleClose = () => setShowAlert(false);

    const [menuSections, setMenuSections] = useState([]);

    useEffect(() => {

        setShowAlert(true);
        
        setMenuSections([
            { title: 'Doručak (servira se do 13:00)', items: menuItems.breakfast, sectionId: 'Breakfast' },
            { title: 'Predjelo I Obrok Salate', items: menuItems.appetizers, sectionId: 'Appetizers' },
            { title: 'Burgeri I Tortilje', items: menuItems.burgers, sectionId: 'Burgers' },
            { title: 'Glavna Jela', items: menuItems.main, sectionId: 'Main' }
        ]);

    }, []);

    return (
        <div className="container container-fluid">

            <MainTitle title="Jelovnik" />

            <CustomModal
                message="Jelovnik na sajtu možda nije usklađen sa aktuelnim jelovnikom u restoranu."
                show={showAlert}
                onHide={handleClose}
            />

            {menuSections.map((section, index) => (
                <MenuSection
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

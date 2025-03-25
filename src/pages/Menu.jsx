import React, { useState, useEffect } from 'react';
import srMenu from '../data/menuItems_sr.json';
import enMenu from '../data/menuItems_en.json';
import MenuSection from '../components/sections/MenuSection';
import MainTitle from '../components/MainTitle';
import CustomModal from '../components/CustomModal';
import { useLanguage } from '../context/LanguageContext';

const MenuPage = () => {
    const { language } = useLanguage();
    const [showAlert, setShowAlert] = useState(false);
    const [menuSections, setMenuSections] = useState([]);

    const handleClose = () => setShowAlert(false);

    useEffect(() => {
        setShowAlert(true);

        const menuData = language === 'en' ? enMenu : srMenu;

        setMenuSections([
            { title: language === 'en' ? 'Breakfast (served until 13:00)' : 'Doručak (servira se do 13:00)', items: menuData.breakfast, sectionId: 'Breakfast' },
            { title: language === 'en' ? 'Appetizers and Salad Dishes' : 'Predjelo I Obrok Salate', items: menuData.appetizers, sectionId: 'Appetizers' },
            { title: language === 'en' ? 'Burgers and Tortillas' : 'Burgeri I Tortilje', items: menuData.burgers, sectionId: 'Burgers' },
            { title: language === 'en' ? 'Main Dishes' : 'Glavna Jela', items: menuData.main, sectionId: 'Main' }
        ]);
    }, [language]);

    return (
        <div className="container container-fluid">
            <MainTitle title={language === 'en' ? 'Menu' : 'Jelovnik'} />

            <CustomModal
                title={language === 'en' ? 'Notification' : 'Obaveštenje'}
                message={language === 'en' ? 'The menu on the website may not match the current menu in the restaurant.' : 'Jelovnik na sajtu možda nije usklađen sa aktuelnim jelovnikom u restoranu.'}
                buttonTitle={language === 'en' ? 'Ok.' : 'U redu.'}
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

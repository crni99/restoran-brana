import React, { useState, useEffect } from 'react';
import srDrinkItems from '../data/drinkItems_sr.json';
import enDrinkItems from '../data/drinkItems_en.json';
import DrinkSection from '../components/sections/DrinkSection';
import MainTitle from '../components/MainTitle';
import CustomModal from '../components/CustomModal';
import { useLanguage } from '../context/LanguageContext';

const DrinksPage = () => {
    const { language } = useLanguage();
    const [showAlert, setShowAlert] = useState(false);
    const [drinkSections, setDrinkSections] = useState([]);

    const handleClose = () => setShowAlert(false);

    useEffect(() => {
        
        setShowAlert(true);

        const drinkData = language === 'en' ? enDrinkItems : srDrinkItems;

        setDrinkSections([
            { title: language === 'en' ? 'Hot Drinks' : 'Topli napici', items: drinkData.topli_napici, sectionId: 'topli_napici' },
            { title: language === 'en' ? 'Additives' : 'Dodaci', items: drinkData.dodaci, sectionId: 'dodaci' },
            { title: language === 'en' ? 'Water' : 'Voda', items: drinkData.voda, sectionId: 'voda' },
            { title: language === 'en' ? 'Juices' : 'Sokovi', items: drinkData.sokovi, sectionId: 'sokovi' },
            { title: language === 'en' ? 'Energy Drinks' : 'Energetska pića', items: drinkData.energetska_pica, sectionId: 'energetska_pica' },
            { title: language === 'en' ? 'Ciders' : 'Cideri', items: drinkData.cideri, sectionId: 'cideri' },
            { title: language === 'en' ? 'Rakijas' : 'Rakije', items: drinkData.rakije, sectionId: 'rakije' },
            { title: language === 'en' ? 'Zarić Rakijas' : 'Zarić Rakije', items: drinkData.zaric_rakije, sectionId: 'zaric_rakije' },
            { title: language === 'en' ? 'Alcoholic Drinks' : 'Alkoholna pića', items: drinkData.alkoholna_pica, sectionId: 'alkoholna_pica' },
            { title: language === 'en' ? 'Whiskey & Bourbon' : 'Viski & Burbon', items: drinkData.viski_burbon, sectionId: 'viski_burbon' },
            { title: language === 'en' ? 'Cognac' : 'Konjak', items: drinkData.konjak, sectionId: 'konjak' },
            { title: language === 'en' ? 'Bottled Beers' : 'Flaširana piva', items: drinkData.flasirana_piva, sectionId: 'flasirana_piva' },
            { title: language === 'en' ? 'Draft Beers' : 'Točena piva', items: drinkData.tocena_piva, sectionId: 'tocena_piva' },
            { title: language === 'en' ? 'White Wines' : 'Bela Vina', items: drinkData.bela_vina, sectionId: 'bela_vina' },
            { title: language === 'en' ? 'Rose Wines' : 'Rose Vina', items: drinkData.rose_vina, sectionId: 'rose_vina' },
            { title: language === 'en' ? 'Red Wines' : 'Crvena Vina', items: drinkData.crvena_vina, sectionId: 'crvena_vina' }
        ]);
    }, [language]);

    return (
        <div className="container container-fluid">
            <MainTitle title={language === 'en' ? 'Drink Menu' : 'Karta Pića'} />

            <CustomModal
                title={language === 'en' ? 'Notification' : 'Obaveštenje'}
                message={language === 'en' ? 'The drink menu on the website may not match the current menu in the restaurant.' : 'Karta pića na sajtu možda nije usklađena sa aktuelnom kartom pića u restoranu.'}
                buttonTitle={language === 'en' ? 'Ok.' : 'U redu.'}
                show={showAlert}
                onHide={handleClose}
            />

            <div className='mt-3 mb-3'> &nbsp; </div>

            {drinkSections.map((section, index) => (
                <DrinkSection
                    key={index}
                    title={section.title}
                    items={section.items}
                />
            ))}
        </div>
    );
};

export default DrinksPage;

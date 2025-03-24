import React, { useState, useEffect } from 'react';
import drinkItems from '../data/drinkItems.json';
import DrinkSection from '../components/sections/DrinkSection';
import MainTitle from '../components/MainTitle';
import CustomModal from '../components/CustomModal';

const DrinksPage = () => {

    const [showAlert, setShowAlert] = useState(false);
    const handleClose = () => setShowAlert(false);

    const [drinkSections, setDrinkSections] = useState([]);

    useEffect(() => {

        setShowAlert(true);

        setDrinkSections([
            { title: 'Topli napici', items: drinkItems.topli_napici, sectionId: 'topli_napici' },
            { title: 'Dodaci', items: drinkItems.dodaci, sectionId: 'dodaci' },
            { title: 'Voda', items: drinkItems.voda, sectionId: 'voda' },
            { title: 'Sokovi', items: drinkItems.sokovi, sectionId: 'sokovi' },
            { title: 'Energetska pića', items: drinkItems.energetska_pica, sectionId: 'energetska_pica' },
            { title: 'Cideri', items: drinkItems.cideri, sectionId: 'cideri' },
            { title: 'Rakije', items: drinkItems.rakije, sectionId: 'rakije' },
            { title: 'Zarić Rakije', items: drinkItems.zaric_rakije, sectionId: 'zaric_rakije' },
            { title: 'Alkoholna pića', items: drinkItems.alkoholna_pica, sectionId: 'alkoholna_pica' },
            { title: 'Viski & Burbon', items: drinkItems.viski_burbon, sectionId: 'viski_burbon' },
            { title: 'Konjak', items: drinkItems.konjak, sectionId: 'konjak' },
            { title: 'Flaširana piva', items: drinkItems.flasirana_piva, sectionId: 'flasirana_piva' },
            { title: 'Točena piva', items: drinkItems.tocena_piva, sectionId: 'tocena_piva' },
            { title: 'Bela Vina', items: drinkItems.bela_vina, sectionId: 'bela_vina' },
            { title: 'Rose Vina', items: drinkItems.rose_vina, sectionId: 'rose_vina' },
            { title: 'Crvena Vina', items: drinkItems.crvena_vina, sectionId: 'crvena_vina' },
        ]);
    }, []);

    return (
        <div className="container container-fluid">

            <MainTitle title="Karta Pića" />

            <CustomModal
                message="Karta pića na sajtu možda nije usklađena sa aktuelnom kartom pića u restoranu."
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

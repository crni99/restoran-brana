import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuItems.json';
import MenuSection from '../components/common/MenuSection';
import MenuSection2 from '../components/common/MenuSection2';

const MenuPage = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);

    useEffect(() => {
        setBreakfastItems(menuItems.breakfast);
    }, []);

    return (
        <div className="container-fluid">

            {/* Novi izgled */}
            <div className='min-vh-90 d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection2
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast1"
                />
            </div>
            <div className='min-vh-90 mt-5' data-aos="fade-right" data-aos-duration="2000">
                <MenuSection2
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast2"
                />
            </div>
            <div className='min-vh-90' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection2
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast3"
                />
            </div>

            {/* Stari izgled */}
            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast"
                />
            </div>
            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast"
                />
            </div>
            <div className='d-flex justify-content-center align-items-center container-full-view w-100 mb-5' data-aos="fade-left" data-aos-duration="2000">
                <MenuSection
                    title="Doručak (servira se do 13:00)"
                    items={breakfastItems}
                    sectionId="Breakfast"
                />
            </div>

        </div>
    );
};

export default MenuPage;

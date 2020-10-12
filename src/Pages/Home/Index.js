import React from 'react';

import NavbarComponent from '../../Components/Navbar/Index'
import FooterCompoent from '../../Components/Footer/Index'

const Index = () => {
    return (
        <div className="home">
            <NavbarComponent />
            <h1>Home</h1>
            <FooterCompoent />
        </div>
    );
};

export default Index;
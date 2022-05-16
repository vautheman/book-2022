import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Navigation from '../components/Navigation';
import Ressources from '../components/Ressources';
import Tools from '../components/Tools';

import VanillaTilt from 'vanilla-tilt';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
VanillaTilt.init(document.querySelectorAll(".card-3D"));

const Home = () => {
    return (
        <div>
            <Cursor/>
            <Nav/>
            <Navigation/>
            <Header/>
            <About/>
            <Tools/>
            <Ressources/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
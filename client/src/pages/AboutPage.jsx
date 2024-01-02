import React from 'react';
import AboutPageComponent from "../components/AboutPageComponent.jsx";
import Footer from "../components/footer.jsx";
import Nabvar from "../components/Nabvar.jsx";

const AboutPage = () => {
    return (
        <div>
            <Nabvar/>
            <AboutPageComponent/>
             <Footer/>

        </div>
    );
};

export default AboutPage;
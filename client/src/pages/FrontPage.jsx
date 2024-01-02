import React from 'react';
import Nabvar from "../components/Nabvar.jsx";

import Footer from "../components/footer.jsx";
import FrontPageComponents from "../components/FrontPageComponents.jsx";

const FrontPage = () => {
    return (
        <div>
            <Nabvar/>
            <FrontPageComponents/>
        </div>
    );
};

export default FrontPage;
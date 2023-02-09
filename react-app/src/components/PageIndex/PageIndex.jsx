import React from "react";
import "../../styles/PageIndex.css"

import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

function PageIndex() {
    return (
        <>
        <body>
        <div className="wholePage">
            <Logo />
            <Footer />
        </div>
        </body>
        </>
    );
} 

export default PageIndex;
import React from "react";


function Footer()
{

    const currentYear =new Date().getFullYear();
    return <footer>
    <div className="footerelement">
    <div className="footerend">
     Copyright © {currentYear}
     </div>
     </div>
    </footer>
}
export default Footer;
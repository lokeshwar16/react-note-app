import React from "react";

function Footer(){
    const date = new Date().getFullYear()
    return <footer>Copy@{date}</footer>
}

export default Footer;
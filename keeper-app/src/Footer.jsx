import React from "react";


let d = new Date();
let date = d.getFullYear();
function Footer(){
    return <footer>
        <p> &copy;copyright {date}</p>
    </footer>;
}
export default Footer;
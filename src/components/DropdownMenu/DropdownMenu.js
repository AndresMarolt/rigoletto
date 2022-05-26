import { useEffect, useState } from "react";
import './DropdownMenu.css'

const DropdownMenu = () => {

    const [show, setShow] = useState(false);

    return(
        <div className="dropdown">
            <button className="navegacion-enlace dropbtn" onClick={() => setShow(!show)}>Menú</button>   
            <div id="myDropdown" className={`dropdown-content ${show ? "showDropdown" : ""}`}>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
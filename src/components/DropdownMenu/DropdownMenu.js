import { useEffect, useState, useRef } from "react";
import './DropdownMenu.css'

const DropdownMenu = () => {

    const menuRef = useRef(null);
    const submenuPizzeRef = useRef([null]);
    const submenuCalzoniRef = useRef([null]);
    const submenuGelatoRef = useRef([null]);
    const [show, setShow] = useState(false);
    const [showPizze, setShowPizze] = useState(false);

    console.log(menuRef.current);
    useEffect(() => {
        const handleClickOutsideDropdown = (event) => {
            console.log(event.target);
            if ( (menuRef.current && !menuRef.current.contains(event.target)) && (submenuPizzeRef.current && !submenuPizzeRef.current.contains(event.target)) && (submenuCalzoniRef.current && !submenuCalzoniRef.current.contains(event.target)) && (submenuGelatoRef.current && !submenuGelatoRef.current.contains(event.target)) ) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideDropdown);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        };
    }, [menuRef]);

    return(
        <div className="dropdown">
            <button ref={menuRef} className="navegacion-enlace dropbtn" onClick={(e) => {setShow(!show); setShowPizze(false)}}>Menú</button>
            <div id="myDropdown" className={`dropdown-content ${show ? "showDropdown" : ""}`}>
                <button ref={submenuPizzeRef} className="navegacion-enlace submenuBtn" onClick={(e) => {setShowPizze(!showPizze)}}>Pizze</button>
                <div id="myDropdown" className={`submenu dropdown-content ${showPizze ? "showDropdown" : ""}`}>
                    <a href="#">Rosse</a>
                    <a href="#">Bianche</a>
                </div>

                <a ref={submenuCalzoniRef} className="submenuBtn">Calzoni</a>
                <a ref={submenuGelatoRef} className="submenuBtn">Gelato</a>
            </div>
        </div>
    )
}

export default DropdownMenu;
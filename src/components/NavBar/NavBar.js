import './NavBar.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><a className="navegacion-enlace" href="index.html">Home</a></li>
                <DropdownMenu />   
                <li><a className="navegacion-enlace" href="nosotros.html">Nosotros</a></li>   
                <li><a className="navegacion-enlace" href="contacto.html">Contacto</a></li>   
            </ul>
        </nav>
    )
}

export default NavBar;
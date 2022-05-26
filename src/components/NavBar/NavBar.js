import './NavBar.css'
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><a className="navegacion-enlace">Home</a></li>
                <DropdownMenu />   
                <li><a className="navegacion-enlace">Nosotros</a></li>   
                <li><a className="navegacion-enlace">Contacto</a></li>   
            </ul>
        </nav>
    )
}

export default NavBar;
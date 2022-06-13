import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><Link to={'/carta'} className='navegacion-enlace' href='#'>Carta</Link></li>
                <li><Link to={'/nosotros'} className="navegacion-enlace" href='#'>Nosotros</Link></li>
                <li><Link to={'contacto'} className="navegacion-enlace" href='#'>Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar;
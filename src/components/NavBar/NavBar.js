import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><a className='navegacion-enlace' href='#'>Carta</a></li>
                <li><a className="navegacion-enlace" href='#'>Nosotros</a></li>   
                <li><a className="navegacion-enlace" href='#'>Contacto</a></li>   
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar;
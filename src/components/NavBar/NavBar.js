import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><a className="navegacion-enlace">Home</a></li>
                <li><a className='navegacion-enlace'>Carta</a></li>
                <li><a className="navegacion-enlace">Nosotros</a></li>   
                <li><a className="navegacion-enlace">Contacto</a></li>   
            </ul>
        </nav>
    )
}

export default NavBar;
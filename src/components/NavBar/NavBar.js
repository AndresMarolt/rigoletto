import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <ul className="Container">
                <li><a className="navegacion-enlace" href="index.html">Home</a></li>   
                <li><a className="navegacion-enlace" href="sucursales.html">Sucursales</a></li>   
                <li><a className="navegacion-enlace" href="nosotros.html">Nosotros</a></li>   
                <li><a className="navegacion-enlace" href="contacto.html">Contacto</a></li>   
            </ul>
        </nav>
    )
}

export default NavBar;
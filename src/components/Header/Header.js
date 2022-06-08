import './Header.css'
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return(
        <header>
            <div className="flag">
                <h1 className="header_logo">Rigoletto</h1>
                <p className='header_text'>~Tra 1934~</p>
            </div>
            
            <NavBar/>

            <div className="hero">
                <div className="hero-content">
                    <h2>La pizza è un'arte... Ci mettiamo la firma</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;
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

            
        </header>
    )
}

export default Header;
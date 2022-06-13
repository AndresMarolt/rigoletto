import './Header.css'
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="flag">
                <div className='d-flex'>
                    <Link to={'/'} className='home_link'>
                        <h1 className="header_logo">Rigoletto</h1>
                        <p className='header_text'>~Tra 1934~</p>
                    </Link>
                </div>
                
                <div className='header_rrss'>
                    <FontAwesomeIcon icon={faWhatsapp} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faFacebook} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faTwitter} className="rrss_icon"/>
                </div>

            </div>
            
            <NavBar/>

            
        </header>
    )
}

export default Header;
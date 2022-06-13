import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons' 

const Contact = () => {
    return(

        <div className='contact'>
            <img src='./img/fondo-img.jpeg' className='fondo-contactos'></img>
            <h2 className='contacto_titulo Container'>CONTACTO</h2>
            <div className='contacto Container'>
                <section className='formulario'>
                    <form>
                        <div className='group'>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name"></input>
                        </div>

                        <div className='group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"></input>
                        </div>

                        <div className='group'>
                            <label htmlFor="phone">Celular</label>
                            <input type="tel" id="phone"></input>
                        </div>

                        <div className='group'>
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message"></textarea>
                        </div>
                        
                        <div className='btn-container'>
                            <button type='submit' className='btn'>Enviar</button>
                        </div>
                    </form>
                </section>

                <section className='mapa'>
                    <iframe className='mapa_iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.995010998803!2d-58.39097958505228!3d-34.604287665034676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6ab359743%3A0x86cde6886d380112!2sAv.%20Corrientes%201536%2C%20C1042AAO%20CABA!5e0!3m2!1ses!2sar!4v1655135872601!5m2!1ses!2sar" width="600" height="450" style={{border: "4px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>       
            </div>

            <div className='follow'>
                <h2 className='follow_title'>SEGUINOS EN NUESTAS REDES SOCIALES</h2>
                <div className='follow_icons'>
                    <FontAwesomeIcon icon={faWhatsapp} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faFacebook} className="rrss_icon"/>
                    <FontAwesomeIcon icon={faTwitter} className="rrss_icon"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;
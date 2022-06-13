import './Contact.css'

const Contact = () => {
    return(

        <div className='contact'>
            <img src='./img/fondo-img.jpeg' className='fondo-contactos'></img>
            <h2 className='contacto_titulo Container'>CONTACTO</h2>
            <div className='contacto Container'>
                <section>
                    <form>
                        <div className='group'>
                            <label for="name">Nombre</label>
                            <input type="text" id="name"></input>
                        </div>

                        <div className='group'>
                            <label for="email">Email</label>
                            <input type="email" id="email"></input>
                        </div>

                        <div className='group'>
                            <label for="phone">Celular</label>
                            <input type="tel" id="phone"></input>
                        </div>

                        <div className='group'>
                            <label for="message">Mensaje</label>
                            <textarea id="message"></textarea>
                        </div>
                        
                        <div className='btn-container'>
                            <button type='submit' className='btn'>Enviar</button>
                        </div>
                    </form>
                </section>

                <section>
                </section>       
            </div>
        </div>
    )
}

export default Contact;
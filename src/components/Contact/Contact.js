import './Contact.css'

const Contact = () => {
    return(

        <>
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
                    </form>
                </section>

                <section>
                </section>       
            </div>
        </>
    )
}

export default Contact;
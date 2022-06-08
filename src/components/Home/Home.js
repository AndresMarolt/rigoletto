import './Home.css'


const Home = () => {
    return(
        <div>
            <div className="hero">
                <div className="hero-content">
                    <h2>La pizza è un'arte... Ci mettiamo la firma</h2>
                </div>
            </div>

            <section className='presentacion'>
                <div className='presentacion-over'>

                    <span className='linea'></span>
                    <p className='presentacion-over-texto'>Bienvenidos a <span>Rigoletto</span></p>
                </div>
                <img src="/img/cocinando1.jpg" className='presentacion-img derecha'/>
            </section>
            

            <section></section>
            
            <section></section>
            
            <section></section>
        </div>
    )
}

export default Home;
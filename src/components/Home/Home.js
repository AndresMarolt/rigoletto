import HomeIntro from '../HomeIntro/HomeIntro';
import HomeHero from '../HomeHero/HomeHero';
import HomePromo from '../HomePromo/HomePromo';


const Home = () => {
    return(
        <div>
            <HomeHero />
            <HomePromo />
            <HomeIntro />
        </div>
    )
}

export default Home;
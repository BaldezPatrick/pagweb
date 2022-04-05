import './home.css';
import Nav from '../../Components/Header/nav';
import Roupa from '../../Assets/roupas.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <main className="homeContainer">
                <section className="homeContainerImage">
                    <img src={Roupa} alt="roupas coloridas penduradas" />
                </section>
                <section className="homeContainerHeadline">
                    {t('home.headline.txt')}
                    <p>{t('home.headline.subtxt')}</p>
                </section>
            </main>
        </>
    );
}

export default Home;
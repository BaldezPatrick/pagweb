import './home.css';
import Nav from '../../Components/Header/nav';
import Btn from '../../Components/Button/buttonchoice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <main className="containerHome">
                <section className="containerHomeHeadline">
                    <h1>{t('home.headline.txt')}</h1>
                    <p>{t('home.headline.subtxt')}</p>
                    <section className="buttonContainerHome">
                        <Link to='/'><Btn type={'button'} text={t('home.button.buy')}/></Link>
                        <Link to='/'><Btn type={'button'} text={t('home.button.sell')} /></Link>
                        <Link to='/'><Btn type={'button'} text={t('home.button.changeclothes')}/></Link>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Home;
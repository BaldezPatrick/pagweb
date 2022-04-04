import './home.css';
import Nav from '../../Components/Header/nav';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cosmects from '../../Assets/cosmetics.jpg';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Nav />
            <main className="containerHome">
                <div className="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <Link to='#'>{t('home.columns.option1')}</Link>
                            <figure className="container_img">
                                <img src={cosmects} alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <Link to='#'>{t('home.columns.option2')}</Link>
                            <figure className="container_img">
                                <img src={cosmects} alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <Link to='#'>{t('home.columns.option3')}</Link>
                            <figure className="container_img">
                                <img src={cosmects} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
                <section className="homeTips">
                    <h1>{t('home.tips.tip')}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis exercitationem nesciunt sapiente quibusdam debitis natus, dolor consequuntur, totam expedita corrupti reiciendis perspiciatis repudiandae aspernatur eaque, laboriosam ex aperiam quas!</p>
                </section>
            </main>
        </>
    );
}

export default Home;
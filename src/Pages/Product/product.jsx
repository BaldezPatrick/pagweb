import './product.css';
import Nav from '../../Components/Header/nav';
import Card from '../../Components/Cards/card'
import { useTranslation } from 'react-i18next';

const Product = () => {

    const { t } = useTranslation();

    return (
        <>
            <Nav />
            <main className="containerProduct">
                
                <section className="containerSectionProduct">
                    <h1>{t('product.h1')}</h1>
                    <p>{t('product.p1')}</p>
                    <p>{t('product.p2')}</p>
                </section>

                <Card />
            </main>
        </>
    );
}

export default Product;    
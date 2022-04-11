import './product.css';
import Nav from '../../Components/Header/nav';
import Card from '../../Components/Cards/card'

const Product = () => {
    return (
        <>
            <Nav />
            <main className="containerProduct">
                
                <section className="containerSectionProduct">
                    <h1>Encontre as melhores roupas aqui</h1>
                    <p>Temos a maior variedade de roupas usadas do país</p>
                </section>

                <Card />
            </main>
        </>
    );
}

export default Product;    
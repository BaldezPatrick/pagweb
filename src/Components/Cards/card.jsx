import './card.css';
import Ex from '../../Assets/roupa.jpg'

const Card = () => {
    return (
        <>
            <section className="containerCard">

                <div class="card" style={{ width: '18rem' }}>
                    <img src={''} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Nome do produto</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn">Ver detalhes</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Card;
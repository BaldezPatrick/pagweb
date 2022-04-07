import './about.css';
import Nav from '../../Components/Header/nav';
import Objects from '../../Assets/objects.jpg'
const AboutUs = (props) => {
    return (
        <>
            <Nav />
            <main className="containerAbout">

                <section className="containerAboutWho">
                    <figure className='containerImage'>
                        <img src={Objects} alt="mochila pequena amarela" />
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit earum doloribus similique perferendis debitis deleniti eius architecto quo nemo? Culpa sapiente iure distinctio maxime quaerat illo, modi debitis sint? Recusandae omnis iste sit eveniet laborum quae dolorum, rem, voluptas enim aperiam ea voluptates dolores vitae quod officiis doloremque ex?</p>
                </section>

                <section className="containerAboutWho">
                    <figure className='containerImage'>
                        <img src={Objects} alt="mochila pequena amarela" />
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit earum doloribus similique perferendis debitis deleniti eius architecto quo nemo? Culpa sapiente iure distinctio maxime quaerat illo, modi debitis sint? Recusandae omnis iste sit eveniet laborum quae dolorum, rem, voluptas enim aperiam ea voluptates dolores vitae quod officiis doloremque ex?</p>
                </section>

                <section className="containerAboutWho">
                    <figure className='containerImage'>
                        <img src={Objects} alt="mochila pequena amarela" />
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit earum doloribus similique perferendis debitis deleniti eius architecto quo nemo? Culpa sapiente iure distinctio maxime quaerat illo, modi debitis sint? Recusandae omnis iste sit eveniet laborum quae dolorum, rem, voluptas enim aperiam ea voluptates dolores vitae quod officiis doloremque ex?</p>
                </section>

                <section className="gridNews">
                    <div className='item1'>Notícias</div>
                    <article className="gridNewsArticle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim dolor qui hic culpa repellendus labore commodi minus sint rerum, corporis sit! Dicta at, quibusdam blanditiis suscipit dignissimos aliquam mollitia soluta architecto quaerat odit, libero perferendis nihil commodi voluptates et non explicabo magni iusto consequatur illo deleniti voluptatibus sequi ipsam?
                    </article>
                    
                    <article className="gridNewsArticle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim dolor qui hic culpa repellendus labore commodi minus sint rerum, corporis sit! Dicta at, quibusdam blanditiis suscipit dignissimos aliquam mollitia soluta architecto quaerat odit, libero perferendis nihil commodi voluptates et non explicabo magni iusto consequatur illo deleniti voluptatibus sequi ipsam?
                    </article>

                    <article className="gridNewsArticle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim dolor qui hic culpa repellendus labore commodi minus sint rerum, corporis sit! Dicta at, quibusdam blanditiis suscipit dignissimos aliquam mollitia soluta architecto quaerat odit, libero perferendis nihil commodi voluptates et non explicabo magni iusto consequatur illo deleniti voluptatibus sequi ipsam?
                    </article>

                </section>
            </main>
        </>
    );
}

export default AboutUs;
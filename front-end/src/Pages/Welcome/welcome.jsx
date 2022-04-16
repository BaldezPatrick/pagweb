import { useTranslation } from 'react-i18next';
import './welcome.css'

const Welcome = () => {
    const { t } = useTranslation();
    return (
        <>
            <main className="welcome">
                <section className="welcome_container">
                    <h1 className="welcome_text">{t('welcome.welcomeText')}</h1>
                    <p className="welcome_subtext">{t('welcome.welcomeSubtext')}</p>
                </section>

            </main>
        </>
    );
}

export default Welcome;
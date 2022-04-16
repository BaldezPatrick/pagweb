import Nav from '../../Components/Header/nav';
import Btn from '../../Components/Button/buttonchoice';
import './contat.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact= () => {

    const { t } = useTranslation();

    const [form, setForm] = useState({
        email: '',
        textA: ''
    }); 

    const [empytValue, setEmptyValue] = useState(false);

    const handleChange = (e) => {
        let newProp = form;
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let ev = Object.values(form).some(obj => obj === "");
        setEmptyValue(ev)
        if (ev === false) {
            console.log('OK')
        }
    }

    return(
        <>
            <Nav />
            <main className="containerContact">
                <section className="contactUs">
                    <h1>{t('contact.h1')}</h1>
                    <form action="" className="contactUsForm" onSubmit={(e) => handleSubmit(e)}>
                        <input type="email" name="email" id="email" placeholder={t('contact.inputEmail')} onBlur={(e) => handleChange(e)}/>
                        {empytValue && form['email'] === "" ? <span className="msg">{t('contact.spanEmail')}</span> : "" }
                        <textarea name="textA" id="textA" cols="40" rows="8" placeholder={t('contact.inputTextarea')} onBlur={(e) => handleChange(e)}></textarea>
                        {empytValue && form['textA'] === "" ? <span className="msg">{t('contact.spanTextA')}</span> : "" }
                        <Btn type={'submit'} text={t('contact.button')} />
                    </form>
                </section>
            </main>
        </>
    );
}

export default Contact;
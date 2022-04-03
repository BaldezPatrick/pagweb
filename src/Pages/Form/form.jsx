import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../Components/Button/button';
import './form.css';


const Form = () => {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [emptyValue, setEmptyValue] = useState(false);

    const handleChange= (e) => {
        let newProp = form;
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let emptyValues = Object.values(form).some(obj => obj == "");
        setEmptyValue(emptyValues)
        if (emptyValues == false) {
            window.location.href = '/Welcome'
        } 
    }

    return (
        <>
            <main className='login'>
                <Button/>
                <div className="login_container">
                    <h1 className="login_title">Login</h1>
                    <form className="login_form"  onSubmit={(e) => handleSubmit(e)}>
                        <input className='login_input' type="email" placeholder='exemplo@exemplo.com' name="email" id="email" onChange={(e) => handleChange(e)}/>
                        <span className="login_input-border"></span>
                        {emptyValue && form['email'] == "" ?  <span className="message">{t('login.emailmessageerro')}</span> : ""}
                        <input className='login_input' type="password" placeholder={t('login.password')} name="password" id="password" onChange={(e) => handleChange(e)}/>
                        <span className="login_input-border"></span>
                        {emptyValue && form['password'] == "" ?  <span className="message">{t('login.passwordmessageerro')}</span> : ""}

                        <button type='submit' className='login_submit' id='btn'>Login</button>
                        <a href="#" className="login_reset">{t('login.resetpassword')}</a>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Form;
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import './button.css';

const Button = () => {
    const { t } = useTranslation();

    const changeLng = () => {
        let selected = document.querySelector('#lang');
        let value = selected.options[selected.selectedIndex].value;
        i18n.changeLanguage(value);
    }

    return (
        <>
            <select name="lang" id="lang" onChange={changeLng}>
                <option value="ptbr">{t('button.langpt')}</option>
                <option value="en">{t('button.langen')}</option>
            </select>
        </>
    );
}

export default Button;
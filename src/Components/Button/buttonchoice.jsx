import './buttonchoice.css'

const Btn = (props) => {
    return (
        <>
            <input type='button' className="btn_edit" value={props.text} />
        </>
    );
}

export default Btn;
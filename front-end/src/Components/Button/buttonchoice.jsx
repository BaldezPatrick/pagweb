import './buttonchoice.css'

const Btn = (props) => {
    return (
        <>
            <input type={props.type} className="btn_edit" value={props.text} />
        </>
    );
}

export default Btn;
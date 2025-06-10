import './Button.css';

function Button ({event, children}) {
    return (
        <button onClick={event} className="btn btn-primary custom-button" type="button" > 
            {children}
        </button>
    );
}

export default Button;
import React from 'react'
import './ButtonComponent.css';
import { useHistory} from 'react-router-dom';

function ButtonComponent({label}) {

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
        console.log({message: "/askquestion"});
    }
    return (
        <div className="button_container">
            <button onClick={handleLogin} type="submit">{label}</button>
        </div>
    )
}

export default ButtonComponent

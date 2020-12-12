import React, {useState} from 'react'
import './SignupComponent.css';

function SignupComponent() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const details = {
        name, 
        password,
        confirm,
        email,
        role
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleRole = (e) => {
        setRole(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://lowly-foam-badger.glitch.me/creatures', options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data ? console.log({success: true}) : console.log({success: false});    
        })
        .catch(e => {
            console.error(e);
        })
        
    }

    return (
        <div className="signupComponent_container">
             <div className="signup_title">
               <h2>Sign up</h2>
           </div>
           <div className="signup_form">
               <form onSubmit={handleSubmit} >
                   <input  name="username" type="text" placeholder="Username"  onChange={handleName} required/>
                   <input name="password" type="password" placeholder="Password" onChange={handlePassword} required/>
                   <input name="confirm" type="password" placeholder="Confirm password" onChange={handleConfirm} required/>
                   <input name="email" type="email" placeholder="email" onChange={handleEmail} required/>
                   <input name="role" type="text" placeholder="Student/Teacher" onChange={handleRole} required/>
                   <div className="signup_form_btn">
                       <button type="submit">Register</button>
                   </div>
               </form>
           </div>
           
            
        </div>
    )
}

export default SignupComponent

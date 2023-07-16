import { useState } from "react";
import { FcGoogle} from "react-icons/fc";
import { LiaFacebook } from "react-icons/lia";

const SignUp = () =>{
    const [email , setEmail] = useState('');
    const [emailValidated, setEmailValidated] = useState(false)

    const [password, setPassword] = useState('');
    const [passwordValidated, setPasswordValidated] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false)

    function validateEmail(email){
        let index_of_at = email.indexOf('@')
        let index_of_dot = email.indexOf('.')
        return (index_of_at>0 && index_of_dot > index_of_at)
    }

    function validatePassword(password){
        return password.length >= 8
    }

    function validateConfirmPassword(password, confirmPassword){
        return password === confirmPassword
    }

    function handleEmailChange(e){
        let email_value = e.target.value
        setEmail(email_value)
        setEmailValidated(validateEmail(email_value))   
    }

    function handlePasswordChange(e){
        let password_value = e.target.value
        setPassword(password_value)
        setPasswordValidated(validatePassword(password_value))   
    }

    function handleConfirmPasswordChange(e){
        let confirmPassword_value = e.target.value
        setConfirmPassword(confirmPassword_value)
        setConfirmPasswordValidated(validateConfirmPassword(password,confirmPassword_value)) 
    }

    function handleSubmit(e){
        e.preventDefault();

        if(emailValidated && passwordValidated && confirmPasswordValidated){
            alert('Form submitted successfully')
        }
        else{
            alert("Can't submit the form")
        }
    }

    return <div className="divForm">
            
            <form onSubmit = {handleSubmit}>
                <h1>Create Account</h1>
                <div id="signBtn">
                    <div className="icon"><FcGoogle size="20px"/> &nbsp;&nbsp;Sign up with Google</div>
                    <div className="icon"><LiaFacebook size="20px" color="blue"/> &nbsp;&nbsp;Sign up with Facebook</div>
                </div>
                <div id="mid">-OR-</div>
                <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <input
                        type = "email"
                        id = "email"
                        value={email}
                        onChange = {handleEmailChange}
                        className = {emailValidated === true ? "is-valid" : "is-invalid"}
                    />
                    {emailValidated === true ? null : <div className="errorMsg">Please a valid email</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <input
                        type = "password"
                        id = "password"
                        value={password}
                        onChange = {handlePasswordChange}
                        className = {passwordValidated === true ? "is-valid" : "is-invalid"}
                    />
                    {passwordValidated === true ? null : <div className="errorMsg">Password must be at least at 8 characters long</div>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="confirm-password"> Confirm Password </label>
                    <input
                        type = "password"
                        id = "confirm-password"
                        value={confirmPassword}
                        onChange = {handleConfirmPasswordChange}
                        className = {confirmPasswordValidated === true ? "is-valid" : "is-invalid"}
                    />
                    {confirmPasswordValidated === true ? null : <div className="errorMsg">Password do not match</div>}
                </div>

                <button type="submit" className="btn">Create Account</button>
                
            </form>
        </div> 
        

}

export default SignUp
import SpinningButton from "../SpinnerButton/spinner-button"; 
import "./register-form.css"

export default function RegisterForm({handleInput, children}) {
    return(
        <form className="form">
            <h1>Create an account</h1>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" onChange={handleInput} />
            <label>Mail</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleInput}/>
            <label>Password</label>
            <input type="password" name="password" placeholder="********" onChange={handleInput}/>
            <label>Repeat your password</label>
            <input type="password" name="passwordConfirmation" placeholder="********" onChange={handleInput}/>
            {
                children
            }
        </form>
    );
}
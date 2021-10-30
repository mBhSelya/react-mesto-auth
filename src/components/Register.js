import { useState } from "react"
import { Link } from "react-router-dom"


export default function Register(props) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(Email, Password);
    }

    return(
        <form onSubmit={handleSubmit} className="auth">
            <fieldset className="auth__container">
                <h2 className="auth__title">Регистрация</h2>
                <input onChange={handleEmail} value={Email} className="auth__input" type="email" name="email" placeholder = "Email" minLength="2" maxLength="40" required />
                <input onChange={handlePassword} value={Password} className="auth__input" type="password" name="password" placeholder = "Пароль" minLength="2" maxLength="40" required />
                <button className="auth__button-save">Зарегистрироваться</button>
                <p className="auth__question">Уже Зарегистрированы?<Link to="/sign-in" className="auth__question-link" href="/">Войти</Link></p>
            </fieldset>
        </form>
    )
}
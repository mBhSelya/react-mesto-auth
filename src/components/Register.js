import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import * as Auth from "../Auth"

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Auth.register( password, email )
        .then(()=> {
            props.onConfirm(true);
            props.onOpen();
            history.push('/sign-in');
        })
        .catch((err) => {
            props.onConfirm(false);
            props.onOpen();
            console.log(err);
        });
    }

    return(
        <form onSubmit={handleSubmit} className="auth">
            <fieldset className="auth__container">
                <h2 className="auth__title">Регистрация</h2>
                <input onChange={handleEmail} className="auth__input" type="email" name="email" placeholder = "Email" minLength="2" maxLength="40" required />
                <input onChange={handlePassword} className="auth__input" type="password" name="password" placeholder = "Пароль" minLength="2" maxLength="40" required />
                <button className="auth__button-save">Зарегистрироваться</button>
                <p className="auth__question">Уже Зарегистрированы?<Link to="/sign-in" className="auth__question-link" href="/">Войти</Link></p>
            </fieldset>
        </form>
    )
}
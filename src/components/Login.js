import { useState } from "react"
import { useHistory } from "react-router-dom"
import * as Auth from "../Auth"

export default function Login(props) {
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
        Auth.authorize(email,password).then((res) => {
            if (res.token) {
                console.log(res.token)
                localStorage.setItem('jwt', res.token);
                props.onLogged()
                history.push('/');
            }
        })
        .catch((err) => {
            props.onConfirm(false);
            props.onOpen();
            console.log(err);
        })
    }

    return(
        <form onSubmit={handleSubmit} className="auth">
            <fieldset className="auth__container">
                <h2 className="auth__title">Вход</h2>
                <input onChange={handleEmail} className="auth__input" type="email" name="email" placeholder = "Email" minLength="2" maxLength="40" required />
                <input onChange={handlePassword} className="auth__input" type="password" name="password" placeholder = "Пароль" minLength="2" maxLength="40" required />
                <button className="auth__button-save">Войти</button>
            </fieldset>
        </form>
    )
}
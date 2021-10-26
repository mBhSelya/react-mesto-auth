export default function Login() {
    return(
        <form className="auth">
            <fieldset className="auth__container">
                <h2 className="auth__title">Вход</h2>
                <input className="auth__input" type="email" name="email" placeholder = "Email" minLength="2" maxLength="40" required />
                <input className="auth__input" type="password" name="password" placeholder = "Пароль" minLength="2" maxLength="40" required />
                <button className="auth__button-save">Войти</button>
            </fieldset>
        </form>
    )
}
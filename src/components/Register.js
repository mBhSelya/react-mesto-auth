export default function Register() {
    return(
        <form className="auth">
            <fieldset className="auth__container">
                <h2 className="auth__title">Регистрация</h2>
                <input className="auth__input" type="email" name="email" placeholder = "Email" minLength="2" maxLength="40" required />
                <input className="auth__input" type="password" name="password" placeholder = "Пароль" minLength="2" maxLength="40" required />
                <button className="auth__button-save">Зарегистрироваться</button>
                <p className="auth__question">Уже Зарегистрированы?<a className="auth__question-link" href="/">Войти</a></p>
            </fieldset>
        </form>
    )
}
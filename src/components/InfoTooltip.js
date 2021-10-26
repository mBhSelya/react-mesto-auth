export default function InfoTooltip() {
    return(
        <div className={`popup popup_opened`} >
            <form  className="popup__container"  noValidate>
                <fieldset className="popup__set">
                    <button className="popup__button-close"  type="button" aria-label="Закрыть"></button>
                    <h2 className="popup__title">что то пошло не так</h2>
                </fieldset>
            </form>
        </div>
    )
}
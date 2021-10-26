import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
    const nameCardInput = useRef();
    const linkCardInput = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            name: nameCardInput.current.value,
            link: linkCardInput.current.value
        });
    }
    return(
        <PopupWithForm
            name="addPlace"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
                <input ref={nameCardInput} className="popup__input popup__input_add_name" id="name-input" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="name-input-error popup__input-error"></span>
                <input ref={linkCardInput} className="popup__input popup__input_add_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="link-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}
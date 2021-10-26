import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

export default function EditAvatarPopup(props) {
    const avatarInput = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar(avatarInput.current.value);
    }

    return(
        <PopupWithForm
            name="Avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
                <input ref={avatarInput} className="popup__input popup__input_add_link" id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="avatar-link-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}
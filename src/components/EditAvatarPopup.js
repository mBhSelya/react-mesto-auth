import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";

export default function EditAvatarPopup(props) {
    const [AvatarInput, setAvatarInput] = useState('');

    function handleAvatarInput(e) {
        setAvatarInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar(AvatarInput, () => {
            setAvatarInput('');
        });
    }

    return(
        <PopupWithForm
            name="Avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}>
                <input onChange={handleAvatarInput} value={AvatarInput} className="popup__input popup__input_add_link" id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="avatar-link-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}
import Main from "./Main";
import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import { ApiConfig } from "../utils/Api";
import { UserContext } from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpened] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpened] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpened] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        ApiConfig.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        ApiConfig.getInfoUser()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function handleEditAvatarClick() {
        setEditAvatarPopupOpened(true);
    }
    
    function handleEditProfileClick() {
        setEditProfilePopupOpened(true);
    }
    
    function handleAddPlaceClick() {
        setAddPlacePopupOpened(true);
    }

    function handleCardClick(item) {
        setSelectedCard(item);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpened(false);
        setEditProfilePopupOpened(false);
        setAddPlacePopupOpened(false);
        setSelectedCard({});
    }

    function handleUpdateUser(obj) {
        ApiConfig.sendUserInfo(obj)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleUpdateAvatar(link) {
        ApiConfig.editAvatar(link)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleAddCard(obj) {
        ApiConfig.postNewCard(obj)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        ApiConfig.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((prevCards) => prevCards.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleCardDelete(card) {
        ApiConfig.deleteCard(card._id)
            .then(() => {
                setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
    <UserContext.Provider value={currentUser}>
        <Login />
        <Register />
        <Main 
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onCardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
        />
        <EditProfilePopup 
            onUpdateUser={handleUpdateUser} 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} /> 
        <EditAvatarPopup
            onUpdateAvatar={handleUpdateAvatar}
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} />
        <AddPlacePopup 
            onAddPlace={handleAddCard}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}/>
        <ImagePopup
            onClose = {closeAllPopups}
            card = {selectedCard}
        />
    </UserContext.Provider>
  );
}

export default App;
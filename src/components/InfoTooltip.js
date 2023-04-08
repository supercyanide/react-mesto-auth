import React from 'react';
import error from '../images/error.svg'
import success from '../images/success.svg'

export default function InfoTooltip({isOpen, onClose, status}) {
    const statusImage = status ? success : error
    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
        <div className='popup__container'>
            <button type='button' id='profile-close' className='popup__close-button' onClick={onClose}></button>
            <img className='popup__img-info' src={statusImage} alt='Картинка'/>
            <h2 className='popup__title-info'>{`${status ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
        </div>
    </div>
    );
}
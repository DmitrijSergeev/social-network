import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.main}>
            <div className={s.news}>
                <h3>
                    <a href={'/news'} >Новости</a>
                </h3>
            </div>
            <div className={s.profile}>
                <h3>
                    <a href={'/profile'} >Профиль</a>
                </h3>
            </div>
            <div className={s.dialogs}>
                <h3>
                    <a href={'/dialogs'} >Диалоги</a>
                </h3>
            </div>
        </div>
    );
};

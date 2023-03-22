import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.main}>
            <div className={s.item}>
                <h3>
                    <NavLink to={'/news'} className={({isActive}) => isActive ? s.active : s.item} >Новости</NavLink>
                </h3>
            </div>
            <div className={s.item}>
                <h3>
                    <NavLink to={'/profile'} className={({isActive}) => isActive ? s.active : s.item}>Профиль</NavLink>
                </h3>
            </div>
            <div className={s.item}>
                <h3>
                    <NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.active : s.item}>Диалоги</NavLink>
                </h3>
            </div>
        </div>
    );
};

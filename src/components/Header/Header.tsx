import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.jpg'

export type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img src={logo} alt={'logo'} className={s.logo}/>
            <h1 className={s.title}>{props.title}</h1>
        </div>
    );
};

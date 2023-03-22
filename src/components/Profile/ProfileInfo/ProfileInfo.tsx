import React from 'react';
import ava from '../../../img/dima.jpg'
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            ava+description
            <img className={s.ava} src={ava} />
        </div>
    );
};

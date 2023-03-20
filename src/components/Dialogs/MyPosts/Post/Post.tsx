import React from 'react';
import userpic from '../../../../img/dima.jpg'
import s from './Post.module.css'
export type PostPropsType = {
    title: string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.mainPost}>
            <img src={userpic} className={s.userpic}/>
            <div className={s.post}>{props.title}</div>
        </div>
    );
};
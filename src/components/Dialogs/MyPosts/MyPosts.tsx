import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <Post title={'Hi, people!'}/>
            <Post title={'Hello World'}/>
            <Post title={'Yo!'}/>
        </div>
    );
};

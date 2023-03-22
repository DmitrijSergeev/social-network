import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    return (
        <div>
            <div>
                <Dialog name={'Dimych'} id={'/dialogs/1'}/>
                <Dialog name={'Valera'} id={'/dialogs/2'}/>
                <Dialog name={'Oleg'} id={'/dialogs/3'}/>
                <Message message={'Yo'}/>
                <Message message={'Hi!'}/>
                <Message message={'Privet'}/>
            </div>
        </div>
    );
};



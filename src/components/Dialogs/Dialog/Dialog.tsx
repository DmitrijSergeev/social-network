import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsPropsType = {
    name: string
    id: string
}

export const Dialog = (props: DialogsPropsType) => {
    return <div>
        <NavLink to={props.id}>{props.name}</NavLink>
    </div>
}

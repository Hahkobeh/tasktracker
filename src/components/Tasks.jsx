import React from 'react';
import '../styles/Task.scss'
import {Task} from "./Task";

export const Tasks = ({data, remove}) => {
    if(data.length === 0) {
        return (
            <ul>
                <li>No items...</li>
            </ul>
        )
    }else{
        return (
            <ul>
                {
                data.map( (item) => (
                    <Task key={item.id} id={item.id} body={item.body} date={item.date} remove={remove}/>
                ))
                }
            </ul>
        )
    }
}
import React from 'react';
import '../styles/Task.scss'

export const Task = ({id, body, date, remove}) => {
    return(
        <li className='task'>
            <div className='task-info'>
                <strong>{body}</strong>, Due on: {date}
            </div>
            <input className='button' type='button' value='finished!' onClick={(e) => remove(id)}/>
        </li>

    )
}



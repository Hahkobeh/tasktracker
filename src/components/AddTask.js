import React from "react";
import '../styles/AddTask.scss'

export const AddTask = ({filled, change, submit}) => {
    return(

        <form className='add-task' onSubmit={submit}>
            <label>
                Task
                <input type='text' name='body' onChange={change}/>
            </label>
            <label>
                Due Date
                <input type='date' name='date' onChange={change}/>
            </label>
            <input type='submit' value='Submit' disabled={!filled}/>

        </form>
    )
}
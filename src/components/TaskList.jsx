import React from "react";
import {AddTask} from "./AddTask";
import '../styles/TaskList.scss'
import {Tasks} from "./Tasks";


export const TaskList = ({filledCheck, change, submit, data, remove}) => {



    return(
        <div className='list'>
            <h1>TASK LIST</h1>
            <Tasks data={data} remove={remove}/>


            <AddTask change={change} submit={submit} filled={filledCheck}/>
        </div>
    )
}


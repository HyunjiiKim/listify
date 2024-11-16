import React from "react";

import Checkbox from "./checkbox";
import Tag from "./Tag";
import Button from "../Button/Button";

import './TodoItem.css';

const TodoItem = () =>{

    const CreatedOn = 'Created on';
    const CompletedOn = 'Completed on';

    return(
        <div className='todoItem'>
            <div className='left'>
                <div className="main">
                    <Checkbox />
                    <h4>Task 1</h4>
                </div>
                <div>
                <p>{CreatedOn}</p>
                </div>
                <div className="tagField">
                    <Tag
                    value='Simple Tag'/>
                    <Tag
                    value='Simple Tag'/>
                </div>
            </div>
            <div className='right'>
                <Button
                intent={'outlineP'}
                size={'medium'}
                label='Change' />
                <Button
                intent={'primary'}
                size={'medium'}
                label='Delete' />
            </div>
        </div> 
    )
}

export default TodoItem;
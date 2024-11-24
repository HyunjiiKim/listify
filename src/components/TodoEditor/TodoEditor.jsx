import Button from "../Button/Button";
import './TodoEditor.css';

const TodoEditor = () =>{
    return(
        <div className='TodoEditor'>
            <Button
                intent="buttonPrimary"
                size="medium"
                label="Add New Item" />
        </div>
    )
}

export default TodoEditor;
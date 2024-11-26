
import './TodoEditor.css';

import { useState } from "react";
import { createPortal } from "react-dom";
import NewItem from "./NewItem";

const TodoEditor = () =>{

    const [modal, setModal] = useState(false);
    const [item, setItem] = useState([]);

    const createItem = (newItem) => {
        setItem(prev => [...prev, newItem])
        setModal(false);
    }

    return(
        <div className='TodoEditor'>
            <button onClick={()=>setModal(true)}>New Item</button>
                {modal && createPortal(
                    <NewItem 
                    onClose={()=>setModal(false)}
                    onCreate={createItem}
                    />,
                    document.body
                )}
        </div>
    )
}

export default TodoEditor;
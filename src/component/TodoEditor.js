import { useRef, useState } from "react";


const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); //setContent 호출하여 빈 문자열 전달. 이 후 초기화됨.
    };

    const onKeyDown = (e) => {
        if (e.keyCode===13){
            onSubmit();
        }
    };

    return(
        <div className="TodoEditor">
            <h4>Ajouter une nouvelle tâche</h4>
            <div className="editorWrapper">
                <input 
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="Nouvelle Tâche..."/>
                <input type="button" onClick={onSubmit} value="Ajouter"/>
            </div>
        </div>
    );
};

export default TodoEditor;
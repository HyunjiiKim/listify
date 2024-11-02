

const TodoItem = ({id, content, isDone, createdDate}) => {
    return(
        <div className="TodoItem">
            <div className="checkboxCol">
                <input type="checkbox" checked={isDone}/>
            </div>
            <div className="TitleCol">{content}</div>
            <div className="DateCol">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="BtnCol">
                <input type="button" value="Supprimer"/>
            </div>
        </div>
    );
};

export default TodoItem;
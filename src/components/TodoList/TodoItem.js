

const TodoItem = ({id, content, isDone, createdDate}) => {

    function handleChange(){
        ontimeupdate(id)
    };

    return(
        <div className="TodoItem">
            <div className="checkboxCol">
                <input 
                type="checkbox" 
                checked={isDone}
                onChange={handleChange}/>
            </div>
            <div className="TitleCol">{content}</div>
            <div className="DateCol">{new Date(createdDate).getTime().toLocaleString()}</div>
            <div className="BtnCol">
                <input type="button" value="Supprimer"/>
            </div>
        </div>
    );
};

export default TodoItem;
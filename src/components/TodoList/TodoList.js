import TodoItem from "./TodoItem";

import { useState } from "react";

const TodoList = ({todo, onUpdate}) => {

    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) => 
            it.content.includes(search.toLowerCase()))
    };

    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <input 
            value={search}
            onChange={onChangeSearch}
            className="searchbar" placeholder="Recherche..." />
            <div className="ListWrapper">
                {getSearchResult().map((it)=>{
                    return <TodoItem key={it.id}{...it} onUpdate={onUpdate}/>;
                })}
            </div>
        </div>
    );
};

export default TodoList;
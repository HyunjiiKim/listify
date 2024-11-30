import React, { useReducer, useRef } from "react";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TodoItem from "../../components/TodoItem/TodoItem";
import { InputDate } from "../../components/Input/Input";
import Searchbar from "../../components/Searchbar";
import TodoEditor from '../../components/TodoEditor/TodoEditor';
import Status from "../../components/Status/Status";
import { reducer } from "../../functions";

const Home = () => {

   const [data, dispatch] = useReducer(reducer,[]);
   const idRef = useRef(0);

   const onCreate = (title, createdDate, tag, completedDate, description) => {
    dispatch({
        type: 'create',
        data: {
            id: idRef.current,
            title,
            date: new Date(createdDate).getTime().toLocaleString,
            tag,
            completedDate: new Date(completedDate).toLocaleDateString,
            description,
        },
    });
    idRef+=1;
   };

    return(
        <React.Fragment>
            <Header />
            <Status />
            <Searchbar />
            <div>
                <h2>Task for Today</h2>
                <TodoEditor />
            </div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </React.Fragment>
    )
    
};

export default Home;
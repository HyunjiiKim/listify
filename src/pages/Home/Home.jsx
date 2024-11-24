import React from "react";

import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TodoItem from "../../components/TodoItem/TodoItem";
import { InputDate } from "../../components/Input/Input";
import Searchbar from "../../components/Searchbar";
import TodoEditor from '../../components/TodoEditor/TodoEditor';
import Status from "../../components/Status/Status";

const Home = () => {

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
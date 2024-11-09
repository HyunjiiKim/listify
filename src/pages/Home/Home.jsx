import React from "react";

import Header from "../../components/Header/Header";
import TodoItem from "../../components/TodoItem/TodoItem";

const Home = () =>{
    return(
        <React.Fragment>
            <Header />
            <TodoItem />
        </React.Fragment>
    )
    
};

export default Home;
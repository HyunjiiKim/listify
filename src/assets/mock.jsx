import { useState} from "react";

//array mockTodo, each object has 4 elements : id, isDone, content, createdDate
const mockTodo = () => [
    {
        id: 0,
        isDone: false,
        content: 'Learn React',
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: 'Wash Dishes',
        createdDate: new Date.getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: 'Go to grocery',
        createdDate: new Date.getTime(),
    },

];

export default mockTodo;
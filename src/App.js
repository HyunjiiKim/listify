//import React hooks
import { useState, useRef } from 'react';
//import components and CSS file 
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo=[

  {
    id: 0,
    isDone: false,
    content: 'Faire les courses',
    createDate: new Date().getTime()
  },
  {
    id:1,
    isDone: false,
    content: 'Revise PHP',
    createDate: new Date().getTime()
  },
  {
    id:2,
    isDone: false,
    content: 'Chercher un colis',
    createDate: new Date().getTime()
  }
];


function App() {
  //Initialize todo 

  const idRef = useRef(3);

  const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) =>{
    const newItem = {
      id:0,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current +=1;
  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} />
    </div>
  );
}

export default App;

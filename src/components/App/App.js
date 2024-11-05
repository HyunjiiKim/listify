//import React hooks
//import { useState, useRef } from 'react';
//import components and CSS file 
import './App.css';

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MyPage from '../../pages/MyPage/MyPage';
import SignUp from '../../pages/SignUp/SignUp';
import ReinitializePassword from '../../pages/ReinitializePassword/ReinitializePassword';


const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reinitializepassword" element={<ReinitializePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

/*import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';*/

/*const mockTodo=[

  {
    id: 0,
    isDone: false,
    content: 'Faire les courses',
    createDate: Date.now()
  },
  {
    id:1,
    isDone: false,
    content: 'Revise PHP',
    createDate: Date.now()
  },
  {
    id:2,
    isDone: false,
    content: 'Chercher un colis',
    createDate: Date.now()
  }
];*/


/*function App() {
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

  // Add Update function

  const onUpdate = (targetID) => {
    setTodo(
      todo.map(
        (it) => {
          if (it.id === targetID){
            return {
              ...it,
              isDone: !it.isDone,
            };
          }else{
            return it;
          }
        }
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} />
    </div>
  );
}
*/

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './global.css';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Tasks } from './components/Tasks';

interface CommentProps {
  id: string;
  comment: string;
  isChecked: boolean;
}

function App() {
  const [newComment, setNewComment] = useState<CommentProps[]>([]);

  function handleNewComment(phrase: string) {
    const newId = uuidv4();
    setNewComment([...newComment, {id: newId, comment: phrase, isChecked: false}]);
  }

  function handleCheckList(id: string) {
    const newToDoList = newComment.map(obj => {
      if(obj.id === id) {
        return {...obj, isChecked: !obj.isChecked}
      }

      return obj;
    });

    setNewComment(newToDoList);
    console.log(newComment);
  }

  return (
    <>
      <Header />
      <InputForm handleNewComment={handleNewComment} />
      <Tasks  newComment={newComment} setNewComment={setNewComment} handleCheckList={handleCheckList} />
    </>
  )
}

export default App

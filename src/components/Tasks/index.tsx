import { ClipboardText } from 'phosphor-react';

import styles from './Tasks.module.css';

import { Task } from '../Task';

interface PropList {
  id: string;
  comment: string;
  isChecked: boolean;
}

interface ToDoList {
  newComment: PropList[];
  setNewComment: (obj: PropList[]) => void;
  handleCheckList: (id: string) => void;
}

export function Tasks({newComment, handleCheckList, setNewComment}: ToDoList) {
  function deleteToDoTask(id: string) {
    const newList = newComment.filter(list => {
      return list.id !== id;
    });

    setNewComment(newList);
  }

  const filterAmount = newComment.filter(list => {
    return list.isChecked !== false;
  });

  const total = filterAmount.length;  

  return (
    <div className={styles.container}>
      <div className={styles.tasks}>
        <header>
          <p>
            Tarefas criadas <span>{newComment.length}</span>
          </p>
          <p>
            Concluídas <span>{total === 0 ? "0" : `${total} de ${newComment.length}` }</span>
          </p>
        </header>
        {newComment.length === 0 ?
          <article>
            <div className={styles.emptyBox}>
              <ClipboardText 
                size={56}
                className={styles.icon}
              />
              
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </article>
        :
          newComment.map(list => {
            return (
              <Task 
                key={list.id} 
                status={list.isChecked} 
                todo={list.comment} 
                handleCheckList={handleCheckList} 
                id={list.id} 
                deleteToDoTask={deleteToDoTask}
              />
            )
          })
        }
      </div>
    </div>
  )
}
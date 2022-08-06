import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  todo: string;
  status: boolean;
  handleCheckList: (id: string) => void;
  deleteToDoTask: (id: string) => void;
}

export function Task({ id, todo, status, handleCheckList, deleteToDoTask }:TaskProps) {

  function handleInputCheck() {
    handleCheckList(id);
  }

  function handleDeleteToDoTask() {
    deleteToDoTask(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <input type={"checkbox"} checked={status} onChange={handleInputCheck} />
        <p className={status ? styles.checked : styles.regular}>
          {todo}
        </p>
      </div>
      <Trash className={styles.icon} onClick={handleDeleteToDoTask} />
    </div>
  )
}
import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './InputForm.module.css';


interface InputFormProps {
  handleNewComment: (phrase: string) => void;
}

export function InputForm({ handleNewComment }: InputFormProps) {
  const [inputText, setInputText] = useState('');

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    handleNewComment(inputText);
    setInputText('');
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmitForm} 
    >
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.input} 
        name="textToDo"
        onChange={handleChangeText}
        value={inputText}
      />

      <button
        type="submit"
      >
        Criar
        <PlusCircle 
          size={16}
        />
      </button>
    </form>
  );
}
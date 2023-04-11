import { PlusCircle } from 'phosphor-react'

import styles from './CreateNewTask.module.css'
import { useState } from 'react'

export function CreateNewTask() {
  const [newTask, setNewTask] = useState('')

  const isNewTaskEmpty = newTask.trim().length === 0

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}

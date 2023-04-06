import { PlusCircle } from 'phosphor-react'

import styles from './CreateNewTask.module.css'

export function CreateNewTask() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}

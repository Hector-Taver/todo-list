import { ClipboardText } from 'phosphor-react'

import styles from './EmptyTask.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <ClipboardText className={styles.clipboard} />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

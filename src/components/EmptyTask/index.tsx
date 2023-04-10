import { ClipboardText } from 'phosphor-react'
import { TasksHeader } from '../TasksHeader'

import styles from './EmptyTask.module.css'

export function EmptyTasks() {
  return (
    <>
      <TasksHeader completed={0} created={0} />
      <div className={styles.container}>
        <ClipboardText size={60} opacity={0.5} />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </>
  )
}

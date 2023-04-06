import styles from './TasksHeader.module.css'

interface TaskHeaderProps {
  created: number
  completed: number
}

export function TasksHeader({ created, completed }: TaskHeaderProps) {
  return (
    <div className={styles.container}>
      <p className={styles.created}>
        Tarefas criadas: <span>{created}</span>
      </p>
      <p className={styles.completed}>
        Tarefas concluídas: <span>{completed}</span>
      </p>
    </div>
  )
}

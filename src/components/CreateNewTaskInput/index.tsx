import { FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import styles from './CreateNewTask.module.css'

interface TasksProps {
  id: string
  title: string
  isComplete: boolean
}
interface CreateNewTaskProps {
  tasks: TasksProps[]
  setTasks: (task: TasksProps[]) => void
}

export function CreateNewTask({ tasks, setTasks }: CreateNewTaskProps) {
  const [task, setTask] = useState('')

  console.log(task)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuid(),
      title: task,
      isComplete: false,
    }

    setTasks([...tasks, newTask])

    setTask('')
  }

  const isTaskEmpty = task.trim().length === 0

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit" disabled={isTaskEmpty}>
        Criar <PlusCircle size={24} />
      </button>
    </form>
  )
}

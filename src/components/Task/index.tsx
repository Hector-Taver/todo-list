import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TasksProps {
  id: string
  title: string
  isComplete: boolean
}
interface TaskProps {
  taskId: string
  taskDescription: string
  isTaskComplete: boolean
  tasks: TasksProps[]
  setTasks: (task: TasksProps[]) => void
}

export function Task({
  taskId,
  taskDescription,
  isTaskComplete,
  tasks,
  setTasks,
}: TaskProps) {
  const [checked, setChecked] = useState(isTaskComplete)

  function handleCompleteTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete }
        } else {
          return task
        }
      }),
    )

    setChecked(!checked)
  }

  function handleDeleteTask(id: string) {
    const tasksAfterDeletion = tasks.filter((task) => task.id !== id)

    setTasks(tasksAfterDeletion)
  }

  return (
    <div className={styles.container}>
      <Checkbox.Root
        className={
          checked ? styles.checkboxRootChecked : styles.checkboxRootUnchecked
        }
        checked={checked}
        onClick={() => handleCompleteTask(taskId)}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <Check weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={checked ? styles.checkedText : styles.uncheckedText}>
        {taskDescription.length > 125
          ? taskDescription.substring(0, 125) + '...'
          : taskDescription}
      </p>
      <Trash
        className={styles.trash}
        size={24}
        onClick={() => handleDeleteTask(taskId)}
      />
    </div>
  )
}

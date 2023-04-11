import { v4 as uuid } from 'uuid'

import { EmptyTasks } from '../EmptyTask'
import { TasksHeader } from '../TasksHeader'
import { Task } from '../Task'

// import styles from './Tasks.module.css'

const tasks = [
  {
    id: uuid(),
    title: 'Java',
    isComplete: true,
  },
]

export function Tasks() {
  return (
    <>
      <TasksHeader created={tasks.length} completed={0} />
      <main>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                taskDescription={task.title}
                isTaskComplete={task.isComplete}
              />
            )
          })
        ) : (
          <EmptyTasks />
        )}
      </main>
    </>
  )
}

import { v4 as uuid } from 'uuid'

import { EmptyTasks } from '../EmptyTask'
import { TasksHeader } from '../TasksHeader'
import { Task } from '../Task'
import { useState } from 'react'

interface TasksProps {
  id: string
  title: string
  isComplete: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: uuid(),
      title: 'JavaScript',
      isComplete: false,
    },
  ])

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

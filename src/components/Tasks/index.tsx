import { EmptyTasks } from '../EmptyTask'
import { TasksHeader } from '../TasksHeader'
import { Task } from '../Task'
import { useState } from 'react'
import { CreateNewTask } from '../CreateNewTaskInput'

interface TasksProps {
  id: string
  title: string
  isComplete: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  return (
    <>
      <CreateNewTask tasks={tasks} setTasks={setTasks} />
      <TasksHeader created={tasks.length} completed={0} />
      <main>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                taskId={task.id}
                taskDescription={task.title}
                isTaskComplete={task.isComplete}
                tasks={tasks}
                setTasks={setTasks}
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

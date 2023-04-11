import { v4 as uuid } from 'uuid'

import { CreateNewTask } from './components/CreateNewTask'
import { EmptyTasks } from './components/EmptyTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

import './global.css'
import { TasksHeader } from './components/TasksHeader'

const tasks = [
  {
    id: uuid(),
    title: 'Terminar o desafio',
    isComplete: false,
  },
  {
    id: uuid(),
    title: 'Estudar Ruby on Rails',
    isComplete: true,
  },
  {
    id: uuid(),
    title: 'Estudar Spring Boot',
    isComplete: false,
  },
  {
    id: uuid(),
    title: 'Estudar Django',
    isComplete: true,
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateNewTask />
        <TasksHeader created={tasks.length} completed={0} />
        <main>
          {tasks.length > 1 ? (
            tasks.map((task) => {
              return (
                <Tasks
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
      </div>
    </>
  )
}

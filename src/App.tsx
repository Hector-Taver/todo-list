import { v4 as uuid } from 'uuid'

import { CreateNewTask } from './components/CreateNewTask'
import { EmptyTasks } from './components/EmptyTask'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

import './global.css'

const tasks = [
  {
    id: uuid(),
    title: 'Terminar o desafio',
    isComplete: false,
  },
  {
    id: uuid(),
    title: 'Estudar Ruby on Rails',
    isComplete: false,
  },
  {
    id: uuid(),
    title: 'Estudar Spring Boot',
    isComplete: true,
  },
  {
    id: uuid(),
    title: 'Estudar Ruby on Rails',
    isComplete: true,
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateNewTask />
        <main>{tasks.length < 1 ? <Tasks /> : <EmptyTasks />}</main>
      </div>
    </>
  )
}

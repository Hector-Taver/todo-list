import { CreateNewTask } from './components/CreateNewTaskInput'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateNewTask />
        <Tasks />
      </div>
    </>
  )
}

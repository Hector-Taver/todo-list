import { TasksHeader } from '../TasksHeader'

export function EmptyTasks() {
  return (
    <>
      <TasksHeader completed={0} created={0} />
      <h1>Empty Task</h1>
    </>
  )
}

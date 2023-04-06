import { TasksHeader } from '../TasksHeader'

export function Tasks() {
  return (
    <>
      <TasksHeader completed={5} created={5} />
      <h1>Tasks</h1>
    </>
  )
}

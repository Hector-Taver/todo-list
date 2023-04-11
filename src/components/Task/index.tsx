import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css'
import { useState } from 'react'

interface TaskProps {
  taskDescription: string
  isTaskComplete: boolean
}

export function Task({ taskDescription, isTaskComplete }: TaskProps) {
  const [checked, setChecked] = useState(isTaskComplete)

  return (
    <>
      {checked ? (
        <div className={styles.container}>
          <Checkbox.Root
            className={styles.checkboxRootChecked}
            checked={checked}
            onClick={() => setChecked(!checked)}
          >
            <Checkbox.Indicator className={styles.checkboxIndicator}>
              <Check weight="bold" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <p className={styles.checkedText}>
            {taskDescription.length > 125
              ? taskDescription.substring(0, 125) + '...'
              : taskDescription}
          </p>
          <Trash className={styles.trash} size={24} />
        </div>
      ) : (
        <div className={styles.container}>
          <Checkbox.Root
            className={styles.checkboxRootUnchecked}
            checked={checked}
            onClick={() => setChecked(!checked)}
          >
            <Checkbox.Indicator className={styles.checkboxIndicator}>
              <Check weight="bold" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <p className={styles.uncheckedText}>
            {taskDescription.length > 125
              ? taskDescription.substring(0, 125) + '...'
              : taskDescription}
          </p>
          <Trash className={styles.trash} />
        </div>
      )}
    </>
  )
}
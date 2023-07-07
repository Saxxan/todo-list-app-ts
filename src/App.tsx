import { useEffect, useState } from 'react'

// Components
import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

// Types
import { type Todo as TodoType, type FilterValue } from './types'
import { TODO_FILTERS } from './consts'

const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: true
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  /**
   * Function to handle removing a todo task
   * @param id
   */
  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  /**
   * Function to handle complete a todo task
   * @param id
   * @param completed
   */
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  /**
   * Function to handle filter the todo task list
   * @param filter
   */
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  /**
   * Function to handle removing the completed tasks
   */
  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  /**
   * Function to handle add a new tasks to the list
   * @param title
   */
  const handleAddTodo = (title: string): void => {
    const newTodo = {
      id: (todos.length + 1),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App

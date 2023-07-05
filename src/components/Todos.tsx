// Componentes
import { Todo } from './Todo'

// Importamos el listOfTodos del archivo de tipos
import { type ListOfTodos, type Todo as TodoType } from '../types'

// Interface para especificar que las props contienen un listado de todos
interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: number) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                            onToggleCompleteTodo={onToggleCompleteTodo}
                        />
                </li>
            ))}
        </ul>
  )
}

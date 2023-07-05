import { Filters } from './Filters'
import { type FilterValue } from '../types'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, onClearCompleted, handleFilterChange, filterSelected }) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount} pending tasks</strong>
            </span>

            <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

            {completedCount > 0 && (
                <button className='clear-completed' onClick={onClearCompleted}>Delete completed</button>
            )}
        </footer>
  )
}

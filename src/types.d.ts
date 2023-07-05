/**
 * Tipos de variables que se pueden exportar
 */

import { type TODO_FILTERS } from './consts'

// Interface para determinar los tipos de Todo
export interface Todo {
  id: number
  title: string
  completed: boolean
}

// Type para especificar el tipo de las props que vienen al react component todos
export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

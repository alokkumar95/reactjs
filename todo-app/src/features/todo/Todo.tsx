import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppSelector, useAppDispatch } from "../../app/hooks"

import { addTodo } from "./todoSlice"
import "./todo.css"

export default function Todo() {
  const [todo, setTodo] = useState("")
  const todos = useSelector((state: any) => state.todo)
  const dispatch = useAppDispatch()

  return (
    <div className="todo_app">
      <div className="todo_wrapper">
        {todos.map(({ id, text }: { id: string; text: string }) => {
          return (
            <div className="todo" key={id}>
              <span>{text}</span>
            </div>
          )
        })}
      </div>
      <div>
        <label>
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={(event) => {
              setTodo(event.target.value)
            }}
          />
        </label>
        <button
          className="button-18"
          onClick={() => {
            console.log("saved", todo)
            dispatch(addTodo(todo))
          }}
        >
          Create Todo
        </button>
      </div>
    </div>
  )
}

import { createSlice, nanoid } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface Item {
  id: string
  text: string
}
// https://redux-toolkit.js.org/api/createslice
export const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: "123", text: "complete redux" }] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer

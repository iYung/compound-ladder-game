import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface gameState {
  start: string,
  end: string,
  current: string
}

const initialState: gameState = {
  start: "",
  end: "",
  current: ""
}

export const inputSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    clear: (state) => {
      state.start = initialState.start,
      state.end = initialState.end
      state.current = initialState.current
    },
    setStart: (state, action: PayloadAction<string>) => {
      state.start = action.payload
    },
    setEnd: (state, action: PayloadAction<string>) => {
        state.end = action.payload
    },
    setCurrent: (state, action: PayloadAction<string>) => {
        state.current = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { clear, setStart, setEnd, setCurrent } = inputSlice.actions

export default inputSlice.reducer
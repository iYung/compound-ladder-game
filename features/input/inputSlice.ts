import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface inputState {
  value: string
}

const initialState: inputState = {
  value: "",
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    clear: (state) => {
      state.value = initialState.value
    },
    backspace: (state) => {
      state.value = state.value.slice(0,-1)
    },
    add: (state, action: PayloadAction<string>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { clear, backspace, add } = inputSlice.actions

export default inputSlice.reducer
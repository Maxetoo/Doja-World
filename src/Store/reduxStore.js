import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../Features/eventReducer'

export const store = configureStore({
  reducer: {
    eventSlice: eventReducer,
  },
})

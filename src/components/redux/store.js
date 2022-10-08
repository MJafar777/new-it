import { configureStore } from '@reduxjs/toolkit'
import testReducer from './testsSlice'


export const store = configureStore({
  reducer: {
    test: testReducer
  },
})
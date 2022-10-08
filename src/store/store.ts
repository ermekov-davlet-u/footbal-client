
import { configureStore } from '@reduxjs/toolkit'
import poleReducer from "./slice/poleSlice"
import timeReducer from "./slice/timeSlice"

export const store = configureStore({
  reducer: {
    pole: poleReducer,
    time: timeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


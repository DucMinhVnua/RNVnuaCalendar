import { configureStore } from '@reduxjs/toolkit'
import scheduleRedux from './redux/schedule-redux'

export const store = configureStore({
    reducer: {
        schedule: scheduleRedux
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
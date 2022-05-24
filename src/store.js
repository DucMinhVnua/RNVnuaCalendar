import { configureStore } from '@reduxjs/toolkit'
import scheduleRedux from './redux/schedule-redux'
import newsRedux from './redux/news-redux'
import accountRedux from './redux/account-redux'

export const store = configureStore({
    reducer: {
        schedule: scheduleRedux,
        news: newsRedux,
        account: accountRedux
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
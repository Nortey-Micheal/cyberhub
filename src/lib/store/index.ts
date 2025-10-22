import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import userReducer from './features/userSlice'
import blogReducer from './features/blogSlice'

const rootReducer = combineReducers({
  user: userReducer,
  blog: blogReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
})

export const persistor = persistStore(store)

export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

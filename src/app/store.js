 import { createStore } from'redux'
 //import { combineReducers } from'redux'
 
import reducer from './reducer'

//const root=combineReducers({qasim:reducer})
export const store=createStore(reducer)
console.log(store.getState())
// Infer the `RootState` and counterReducerpatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: User  sState}
//export type AppDispatch = typeof store.dispatch 
 

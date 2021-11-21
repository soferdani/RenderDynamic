
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../actions/main'




export default configureStore({
    reducer: {
        userInput: reducer
    }
})



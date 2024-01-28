import {configureStore} from '@reduxjs/toolkit'
import incdecreducer from './reducers/index'

export default configureStore({
    reducer : {
        number : incdecreducer,
    }
})
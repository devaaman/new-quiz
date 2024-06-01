import {configureStore,combineReducers} from "@reduxjs/toolkit";
// import a sobject
//imp[ort all reducer ]
import questionReducer from "./question_reducer" 
import resultReducer from "./result_reducer" 
const rootReducer=combineReducers({
    questions:questionReducer,
    result:resultReducer
})

// create store with reducer
export default configureStore({reducer:rootReducer});
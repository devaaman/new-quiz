import { createSlice } from "@reduxjs/toolkit"
import Questions from "../components/Questions"
// help to create reducer with initial value tarce variable used to track user question
// action allows to change the value of store
// reducer can dispatch the data or functions
// payload function imports the user input value
// when action is called inn user component the payload loads the  value and the the value is passed to the queue and reinitialise the object
// use spread operaator to initialise the value of the Object
// in return statemenrt it returns the initial state by updating value of given property
export const questionReducer= createSlice({
    name:"questions",
    initialState:{
        queue:[],
       answers:[],
       trace:0
    },
    reducers:{
        startExamAction:(state,action)=>{
            let{question,answers}=action.payload
            return{
                ...state,
                
                queue:question,
                answers:answers
                // in return statemenrt it returns the initial state by updating value of given property
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
    }
}
})
// ?now export the action rest alla ction pass thre initial state
export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;
// export the reducer also
export default questionReducer.reducer;
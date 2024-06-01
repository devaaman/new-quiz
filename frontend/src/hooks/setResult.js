import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data in db
 
 */
export const usePublishResult = (resultData) => {
    const REACT_APP_SERVER_HOSTNAME = "https://new-quiz-vjc5.onrender.com"
    const { result, username } = resultData;
    (async () => {
        try {
            if(result !== 0 && !username) throw new Error("Couldn't get Result");
            await postServerData(`${REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}          
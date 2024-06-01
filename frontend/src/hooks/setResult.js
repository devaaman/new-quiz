import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'
import { useEffect ,useRef} from 'react';


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

const REACT_APP_SERVER_HOSTNAME = "https://new-quiz-vjc5.onrender.com";

export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    const hasPublished = useRef(false); // Ref to track if the API call has been made

    useEffect(() => {
        const publishResult = async () => {
            try {
                if (result !== 0 && !username) throw new Error("Couldn't get Result");
                await postServerData(`${REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data);
            } catch (error) {
                console.log(error);
            }
        };

        if (!hasPublished.current && result && username) {
            hasPublished.current = true; // Set the ref to true to indicate the API call has been made
            publishResult();
        }
    }, [resultData, result, username]);
};

       
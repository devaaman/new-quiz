import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}
// export function earnPoints_Number(result, answers, point) {
//     // Step 1: Create an array of boolean values indicating correct answers.
//     const correctAnswers = result.map((element, i) => answers[i] === element);

//     // Step 2: Filter the correct answers (true values).
//     const filteredCorrectAnswers = correctAnswers.filter((isCorrect) => isCorrect);

//     // Step 3: Convert correct answers to an array of points.
//     const pointsEarned = filteredCorrectAnswers.map(() => point);

//     // Step 4: Calculate the total points earned using reduce.
//     const totalPoints = pointsEarned.reduce((prev, curr) => prev + curr, 0);

//     return totalPoints;
// }

// sum the arrray return the response back
export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data  send data t server*/
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
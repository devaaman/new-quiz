import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';
// import controller functions as an object
/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */
// this is the chaining method toadd all request individually on route(?question) path
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;
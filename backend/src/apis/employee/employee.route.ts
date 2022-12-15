import { Router } from 'express'
import { check, checkSchema } from 'express-validator'
import {employeeValidator} from "./employee.validator";
import {getEmployeeByEmployeeIdController, putEmployeeController} from "./employee.controller";
import {isLoggedIn} from "../../../utils/controllers/is-logged-in.controller";
import {asyncValidatorController} from "../../../utils/controllers/async-validator.controller";

export const employeeRoute: Router = Router()
employeeRoute.route('/')
    .post(putEmployeeController)

employeeRoute.route('/:employeeId')
    .get(
        asyncValidatorController([
            check('employeeId', 'please provide a valid employeeId').isUUID()
        ])
        , getEmployeeByEmployeeIdController
    )
    .put(isLoggedIn('employee'), asyncValidatorController(checkSchema(employeeValidator)), putEmployeeController)
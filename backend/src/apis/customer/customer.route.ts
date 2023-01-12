import { Router } from 'express'
import {postCustomer} from "./customer.controller";

const router = Router()
router.route('/')
.post(postCustomer)

export default router
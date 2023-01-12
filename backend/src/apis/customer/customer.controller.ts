import { Request, Response, NextFunction } from 'express'
import {Customer, insertCustomer} from "../../../utils/models/customers";
import {Status} from "../../../utils/interfaces/Status";



export async function postCustomer (request: Request, response: Response): Promise<Response<Status>> {
    try {

        const { customerId, customerFirstName, customerLastName, customerMailingAddress, customerMailingCity, customerMailingState, customerMailingZip, customerPrimaryPhone, customerSecondaryPhone, customerPrimaryEmail, customerSecondaryEmail } = request.body

        const customer: Customer = { customerId: null, customerFirstName, customerLastName, customerMailingAddress, customerMailingCity, customerMailingState, customerMailingZip, customerPrimaryPhone, customerSecondaryPhone, customerPrimaryEmail, customerSecondaryEmail }

        const result = await insertCustomer(customer)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: 'Error adding customer try again later.',
            data: null,

        })
    }
}
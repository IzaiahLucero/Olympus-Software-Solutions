import { Request, Response } from 'express'
import {Employee, selectPartialEmployeeByEmployeeId, updateEmployee} from "../../../utils/models/employees";
import { Status } from '../../../utils/interfaces/Status'

export async function putEmployeeController (request: Request, response: Response): Promise<Response> {
    try {
        const { employeeId } = request.params
        const employee = request.session.employee as Employee
        const employeeIdFromSession = employee.employeeId as string

        if (employeeId !== employeeIdFromSession) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })
        }

        const { employeeNumber, employeeName, employeeDepartment, employeeTitle, employeePhone, employeeExtension, employeeEmail} = request.body
        const updatedValues = { employeeNumber, employeeName, employeeDepartment, employeeTitle, employeePhone, employeeExtension, employeeEmail}
        const previousEmployee: Employee = await selectPartialEmployeeByEmployeeId(employeeId) as Employee

        const newEmployee: Employee = { ...previousEmployee, ...updatedValues }
        await updateEmployee(newEmployee)
        return response.json({ status: 200, data: null, message: 'Employee successfully updated' })
    } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message })
    }
}

export async function getEmployeeByEmployeeIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { employeeId } = request.params
        const mySqlResult = await selectPartialEmployeeByEmployeeId(employeeId)
        const data = mySqlResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 400, data: null, message: error.message }))
    }
}
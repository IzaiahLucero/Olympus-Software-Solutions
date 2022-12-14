import { sql } from '../database.utils'

export interface Employee {
    employeeId: string|null,
    employeeNumber: string,
    employeeName: string,
    employeeDepartment: string,
    employeeTitle: string,
    employeePhone: string|null,
    employeeExtension: string,
    employeeEmail: string

}

export interface PartialEmployee {
    employeeId: string|null,
    employeeNumber: string,
    employeeName: string,
    employeePhone: string,
    employeeEmail: string,
}


export async function insertEmployee (employee: Employee): Promise<string> {
    const {employeeNumber, employeeName, employeeDepartment, employeeTitle, employeePhone, employeeExtension, employeeEmail } = employee
    await sql`INSERT INTO employee (employee_id, employee_number, employee_name, employee_department, employee_title, employee_phone, employee_extension, employee_email) VALUES(gen_random_uuid(), ${employeeNumber}, ${employeeName}, ${employeeDepartment}, ${employeeTitle}, ${employeePhone}, ${employeeExtension}, ${employeeEmail})`
    return 'Customer successfully created'
}

export async function updateEmployee (employee: PartialEmployee): Promise<string> {
    const { employeeId, employeeNumber, employeeName, employeePhone, employeeEmail } = employee
    await sql`UPDATE employee SET employee_name = ${employeeName}, employee_number = ${employeeNumber}, employee_name = ${employeeName}, employee_phone = ${employeePhone}, employee_email = ${employeeEmail} WHERE employee_id = ${employeeId}`
    return 'Customer updated successfully'
}


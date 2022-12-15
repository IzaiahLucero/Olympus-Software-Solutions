import { Schema } from 'express-validator'

export const employeeValidator: Schema = {
    employeeNumber: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Employee number must be between one and sixteen characters.',
            options: {min: 1, max: 16}
        }

    },
    employeeName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Employee name must be between one and  sixty four characters',
            options: {min: 1, max: 64}
        }

    },
    employeeDepartment: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Employee department must be between one and sixteen characters.',
            options: {min: 1, max: 16}
        }

    },
    employeeTitle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Employee department must be between one and sixteen characters.',
            options: {min: 1, max: 16}
        }

    },
    employeePhone: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        },
        isLength: {
            errorMessage: 'Employee phone must be between one and thirty two characters.',
            options: {min: 1, max: 32}
        }
    },
    employeeEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        normalizeEmail: true,
        trim: true
    }
}

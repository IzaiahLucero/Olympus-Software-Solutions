import { NextFunction, Request, Response } from 'express'
import { verify, VerifyErrors } from 'jsonwebtoken'
import { Status } from '../interfaces/Status'
import { IncomingHttpHeaders } from 'http'
import {Employee} from "../models/employees";

export function isLoggedIn (userType: 'employee'): any {
    return function (request: Request, response: Response, next: NextFunction): any {
        const status: Status = { status: 400, message: 'Please login', data: null }
        const sessionProfile = (request: Request): Employee | undefined => request.session[userType] ?? undefined
        const signature = (request: Request): string => request.session?.signature ?? 'no signature'
        const isSessionActive = (isProfileActive: Employee | undefined): boolean => (isProfileActive !== undefined)
        const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {
            return headers.authorization
        }
        const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers)
        // const isJwtValid: boolean|void = unverifiedJwtToken
        //   ? verify(
        //         unverifiedJwtToken,
        //         signature(request),
        //         {maxAge: "3hr"},
        //
        //     )
        //   : false;
        const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
            if (unverifiedJwtToken === undefined) {
                return false
            }
            const result: unknown = verify(
                unverifiedJwtToken,
                signature(request),
                { maxAge: '3hr' },
                (error: VerifyErrors | null): boolean => error == null
            ) as unknown
            return result as boolean
        }
        if (isJwtValid(unverifiedJwtToken) && isSessionActive(sessionProfile(request))) {
            return next()
        }
        isJwtValid(unverifiedJwtToken) && isSessionActive(sessionProfile(request)) ? next() : response.json(status)
    }
}
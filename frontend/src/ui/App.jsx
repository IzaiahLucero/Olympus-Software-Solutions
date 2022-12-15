import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Provider} from "react-redux";
import { Employees } from './Employees'
import { Customers } from './Customers.jsx'
import { AccountsPayable } from './AccountsPayable'



export function App({store}) {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path={"*"} element={<FourOhFour />} />
                        <Route path={"/employees"} element={<Employees/>} />
                        <Route path={"/customers"} element={<Customers/>} />
                        <Route path={"/accountspayable"} element={<AccountsPayable/>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>

    );
}
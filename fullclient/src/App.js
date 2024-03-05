import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Quote from './pages/Quote'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact Component={Login}></Route>
                <Route path='/register' exact Component={Register}></Route>
                <Route path='/Quote' exact Component={Quote}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
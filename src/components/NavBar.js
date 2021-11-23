import React from 'react'
import { Route } from 'react-router-dom'

import DashBoard from './dashboard/DashBoard'
import LoginContainer from './login/LoginContainer'

const NavBar = (props) => {
    return (
        <>
            <Route path='/' component={LoginContainer} exact={true} /> 
            <Route path='/dashboard' component={DashBoard} />
        </>
    )
}

export default NavBar
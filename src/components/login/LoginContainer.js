import React, { useState,useEffect } from 'react'
import axios from 'axios'
import validator from 'validator'

import Login from './Login'

const LoginContainer = (props) => {
    const { history } = props
    const [ users, setUsers ] = useState([])
    const [ formErrors, setFormErrors ] = useState({})
    const errors={}
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    const focusChange=(err) =>{
        setFormErrors(err)
    }

    const runValidations= (email) => {
        if( email.trim().length === 0 ){
            errors.email ='Email Cannot be Blank'
        }else if( !validator.isEmail( email.trim() ) ){
            errors.email='Invalid Email'
        }else if( !users.some( user => user.email === email) ){
            errors.email ='Email Not Exist'
        }
    }

    const formSubmit=(email) => {
        runValidations(email)

        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            
            const result= users.find(user => user.email === email )
            localStorage.setItem('userLoggedIn', JSON.stringify({id: result.id}) )
            history.push('/dashboard')
        }else{
            setFormErrors(errors)
        }
    }

    return (
        <>
            <header className="d-flex justify-content-center mb-4 mt-4">
                <h6>Sign-In to Your Social Account</h6>
            </header>
            <Login formSubmit={formSubmit} formErrors={formErrors} focusChange={focusChange} />
        </>
    )
}

export default LoginContainer
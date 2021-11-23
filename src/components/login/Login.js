import React, { useState } from 'react'

const Login = (props) => {
    const { formSubmit, formErrors, focusChange } = props
    const [ email, setEmail ] = useState('')
    
    const handleChange =(e) => {
        setEmail(e.target.value)
    }

    const handleFocus =(e) => {
        if( e.target.name === 'email' ){
            focusChange({})
        }
    }

    const handleSubmit =(e) => {
        e.preventDefault()

        formSubmit(email)
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div className="mb-1 col-md-4 text-center offset-md-4 card p-5 border-primary bg-light text-dark">
                    <label className="form-label mb-3 text-uppercase">LogIn</label>
                    <input 
                        type="text" 
                        value={email} 
                        name="email" 
                        className="form-control mb-2" 
                        onFocus={handleFocus} 
                        onChange={handleChange} 
                    />
                    { formErrors.email && <span className="text-center mt-1 mb-3 text-danger">{formErrors.email}</span> }
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default Login
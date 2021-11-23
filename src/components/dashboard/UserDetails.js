import React from 'react'

const UserDetails = (props) => {
    const { userDetails } = props
    
    return (
        <div className="row">
            <div className="col-md-12 card p-3 mb-4 border-success">
                <div className="row">
                    <div className="col-md-6">
                        <h3>{userDetails.name}</h3>
                        <h6>{userDetails.email}</h6>
                        <h6>{userDetails.phone}</h6>
                    </div>
                    <div className="col-md-6 text-end">
                        <div>
                            <h3>{userDetails.company.name}</h3>
                            <h6>{userDetails.company.catchPhrase}</h6>
                            <h6>{userDetails.company.bs}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
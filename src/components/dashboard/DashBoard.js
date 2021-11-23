import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import Loader from '../Loader'
import UserPosts from './UserPosts'
import UserDetails from './UserDetails'

const DashBoard = (props) => {
    const { history } = props
    const [ userDetails, setUserDetails ] = useState({})
    const [ userPosts, setUserPosts ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    
    const url1='https://jsonplaceholder.typicode.com/users'
    const url2='https://jsonplaceholder.typicode.com/posts'

    const handleClick = (props) => {
        localStorage.removeItem('userLoggedIn')
        history.push('/')
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userLoggedIn'))
        if( !userId ){
            history.push('/')
        }

        if( userId ){
            Promise.all([axios.get(url1), axios.get(url2)])
                .then((response) => {
                    const [ users, posts ] =response
                    setUserDetails(users.data.find(user => user.id === userId.id))
                    setUserPosts(posts.data.filter(post => post.userId === userId.id))
                    setIsLoading(false)
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    },[])

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : (
                <>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center mb-3 mt-3 bg-success p-2 text-dark bg-opacity-25">
                        <h4 className="fw-bold">Social DashBoard</h4>
                        <Button variant="secondary" onClick={handleClick}>Log Out</Button>
                    </div>
                </div>
                <UserDetails userDetails={userDetails} />
                <UserPosts userPosts={userPosts} />
                </>
            )}
        </>
    )
}

export default DashBoard
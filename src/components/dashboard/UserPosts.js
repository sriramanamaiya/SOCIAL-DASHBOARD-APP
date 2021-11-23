import React,{ useState, useEffect, useRef } from 'react'

const UserPosts = (props) => {
    const { userPosts } = props
    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(3)

    const loader= useRef(null)

    useEffect(() => {
        const options = {
           root: null,
           rootMargin: "20px",
           threshold: 1.0
        }

        const observer = new IntersectionObserver(handleObserver, options)
        if (loader.current) {
           observer.observe(loader.current)
        }
   }, [])
   
    const handleObserver = (entities,obser) => {
        const target = entities[0]

        if (target.isIntersecting) {   
            setPage((page) => page + 3)
        }
    }

    useEffect(() => {
        if( page > 3 ){
            setTimeout(() => {
                setData(userPosts.slice(0,page))
            },2000)
        }else{
            setData(userPosts.slice(0,page))
        }
    },[page])

    return (
        <div className="row">
            <div className="col-md-12 card border-dark mb-2" >
                { data.map((post) => {
                    return (
                        <div className="card p-1 mb-2 mt-3 border-info" key={post.id}>
                            <div className="card-header"><h5>{post.title}</h5></div>
                            <p className="lh-base">{post.body}</p>
                        </div>
                    )
                }) }
                { data.length < userPosts.length && (
                    <div ref={loader}>
                        <h5>Loading More ....... !!!!!!</h5>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default UserPosts
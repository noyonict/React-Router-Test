import React from 'react'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'


function User({ match }) {
// function User({ params }) {
    return (
        <div>
            {/* <ul>
                <Link to="/">Home</Link>
                <Link to="/user/noyon">User Noyon</Link>
                <Link to="/user/tithi">User Tithi</Link>
                <Link to="/about/">About</Link>
            </ul> */}
            <h1>Welcome {match.params.username ? match.params.username : "Noyon"}</h1>
            {/* <h1>Welcome {params.username ? params.username : "Noyon"}</h1> */}
        </div>
    )
}

export default User

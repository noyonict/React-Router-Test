import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home';
import User from './components/User';
import UserRestrict from './components/UserRestrict';

function App() {
  const [login, setLogin] = useState(false)

  // useEffect(() => {
  //   login = true
  // }, [login])


  return (
    <div className="App">
      <Router>
        Using Link
        <ul>
          <Link to="/">Home</Link>
          <Link to="/user/noyon">User Noyon</Link>
          <Link to="/user/tithi">User Tithi</Link>
          <Link to="/user-restrict/tithi">User Tithi</Link>
          <Link to="/about/">About</Link>
        </ul>
        Using NavLink
        <ul>
          <NavLink to="/" activeStyle={{ color: 'green' }} exact>Home</NavLink>
          <NavLink to="/user/noyon" activeStyle={{ color: 'green' }} exact>User Noyon</NavLink>
          <NavLink to="/user/tithi" activeStyle={{ color: 'green' }} exact>User Tithi</NavLink>
          <NavLink to="/user-restrict/tithi" activeStyle={{ color: 'green' }} exact>User Tithi</NavLink>
          <NavLink to="/about/" activeStyle={{ color: 'green' }} exact>About</NavLink>
        </ul>

        <Prompt 
          when={!login}
          // message="Are you sure?"
          message={(location) => {return location.pathname.startsWith('/user') ? "Are you sure?" : true }}
        />

        <button onClick={()=>setLogin(prevState => (!prevState))}>{ login? "Logout": "Login"}</button>
        <Route path="/" exact={true} strict={true} component={Home} />
        <Route path="/user/:username" exact={true} component={User} />
        <Route path="/user-restrict/:username" exact={true} strict render={({match})=>(
          login ? ( <UserRestrict username={match.params.username} /> ) : (<Redirect to="/" />)
        )} />
        <Route path="/about/" exact strict render={
          () => {
            return (<h1>Welcome to About Page</h1>)
          }
        } />
      </Router>
    </div>
  );
}

export default App;

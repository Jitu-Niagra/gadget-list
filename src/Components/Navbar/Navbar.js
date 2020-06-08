import React, { Component } from 'react'
import './Navbar.scss'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="navbar-brand">
                    <img 
                    src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" 
                    alt="logo" 
                    style={{maxWidth:"5rem",maxHeight:"5rem",borderRadius:"2rem"}}/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gadgtes</a>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Navbar

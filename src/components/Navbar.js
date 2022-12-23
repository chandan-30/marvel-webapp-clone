import React from 'react'
import '../styles/Navbar.css'; //styles for this component

/* Below are the images required for this component */

import logo from '../images/logo-white.svg';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

// Bootstrap Navbar component which appears as app bar at top of the page

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light sticky-top" data-testid='Navbar-id'>
            <a className="navbar-brand" href="#!">
                <img src={logo} alt='svg-logo' /> | Developers
            </a>
            <button className="navbar-toggler btn-toggle" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <TableRowsRoundedIcon></TableRowsRoundedIcon>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link pale" href="#!">Why marvel
                        <KeyboardArrowDownRoundedIcon></KeyboardArrowDownRoundedIcon>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pale" href="#!">Enterprise</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pale" href="#!">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pale" href="#!">Sign in</a>
                </li>
                <li className='nav-item'>
                    <button type="button" className="btn">Sign up free</button>
                </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ Name, List, Detail, mode, toggleMode }) => {
    return (
        <nav className={` navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>{List} </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="nav-link active">
                        <Link className="nav-link" to='/MovieDetail'>{Detail}</Link>
                    </div>

                </div>
                <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} mx-2 my-3`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import '../componentCSS/Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '0px', display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt='CurrentWave' style={{ height: '6rem', width: '8rem' }} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Headlines</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



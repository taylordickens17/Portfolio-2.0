import React from 'react';
import { Nav } from 'reactstrap';

const Sitebar = () => {
    return (
        <Nav className="sitebar">
            <div className="menu-wrap">
                <ul>
                    <li><a href="#home" className="nav-item">Taylor Dickens</a></li>
                    <li><a href="#projects" className="nav-item">Projects</a></li>
                    <li><a href="#about" className="nav-item">About</a></li>
                    <li><a href="#skills" className="nav-item">Skills</a></li>
                    <li><a href="#contact" className="nav-item">Contact</a></li>
                </ul>
            </div>
        </Nav>
    )
}

export default Sitebar;
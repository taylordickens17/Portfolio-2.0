import React from 'react';
// import { Nav, NavItem } from "reactstrap";
// import { Switch, Route, Link } from 'react-router-dom';

//Components for the actual site
// import About from './About';
// import Contact from './Contact';
// import Portfolio from './Portfolio';
// import Skills from './Skills';
// import LandingPage from './Home';

const Sitebar = () => {
    return (
        <div>
            {/* <Nav className="py-md-3 nav-look">
                <NavItem>
                    <Link to="/landingPage">Taylor Dickens</Link>
                </NavItem>
                <NavItem>
                    <Link to="/projects">Projects</Link>
                </NavItem>
                <NavItem>
                    <Link to="/skills">Skills</Link>
                </NavItem>
                <NavItem>
                    <Link to="/aboutMe">About Me</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact">Contact</Link>
                </NavItem>
            </Nav> */}
            <div>
                {/* <Switch>
                    <Route exact path="/landingPage"><LandingPage /></Route>
                    <Route exact path="/aboutMe"><About /></Route>
                    <Route exact path="/projects"><Portfolio /></Route>
                    <Route exact path="/skills"><Skills /></Route>
                    <Route exact path="/contact"><Contact /></Route>
                </Switch> */}
            </div>
        </div >
    )
}

export default Sitebar;
import React from 'react';
import reactLogo from '../images/react-logo.png';


function Navbar (){
    return (
        <header>
            <nav class="navbar">
                <img src={reactLogo} alt="ReactLogo" class="reactlogo" />
                <h3 class="reactFacts">ReactFacts</h3>
                <h4 class="reactCourse">React Course - Project 1</h4>
                
            </nav>
        </header>
    )
}

export default Navbar;


import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav=( {libraryOpen, setLibraryOpen})=> {
    return (
        <nav>
            <div className="title">

            <img src="images/logo.png" alt="logo"></img>
            <h1>SoundWave</h1>
            </div>
            <button onClick={()=>{
                setLibraryOpen(!libraryOpen)
            }}>Library 
                <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </button>
        </nav>
    );
}

export default Nav

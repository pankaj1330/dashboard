import { useState } from 'react';
import logo from '../assets/logo.png';
import book from '../assets/book.svg'
import call from '../assets/call.svg'
import cloud from '../assets/cloud.svg'
import code from '../assets/code.svg'
import logout from '../assets/logout.svg'
import gear from '../assets/gear.svg'
import repo2 from '../assets/repo2.svg'
import menu from '../assets/menu.svg'
import cross from '../assets/cross.svg'

export default function Navbar(){
    const [showNav,setShowNav] = useState(false);
    
    function togglenav(){
        setShowNav(prev=> !prev);
        
        return;        
    }
    return(
        <>
            <header>
                <nav className="navbar">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="Logo" width="28px"/>
                            <span>CodeAnt AI</span>
                        </div>
                        <button className="nav-toggle" onClick={togglenav}>
                            {
                                !showNav ? <img src={cross} alt="cross" /> : <img src={menu} alt="menu" />

                            }
                        
                        </button>
                    </div>
                    <div className={`nav-list ${showNav ? 'show' : 'hide'}`}>
                            <button className='secondary-btn icon-btn'><img src={repo2} alt="repo2" /> Repositories</button>
                            <button className='secondary-btn icon-btn'><img src={code} alt="code" /> AI Code Review</button>
                            <button className='secondary-btn icon-btn'><img src={cloud} alt="cloud" /> Cloud Security</button>
                            <button className='secondary-btn icon-btn'><img src={book} alt="book" /> How to Use</button>
                            <button className='secondary-btn icon-btn'><img src={gear} alt="gear" /> Settings</button>
                            <button className='secondary-btn icon-btn'><img src={call} alt="call" /> Support</button>
                            <button className='secondary-btn icon-btn'><img src={logout} alt="logout" /> Logout</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
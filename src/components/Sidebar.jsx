import logo from '../assets/logo.png';
import book from '../assets/book.svg'
import call from '../assets/call.svg'
import cloud from '../assets/cloud.svg'
import code from '../assets/code.svg'
import logout from '../assets/logout.svg'
import gear from '../assets/gear.svg'
import repo from '../assets/repo.svg'

export default function Sidebar(){
    return(
        <aside className="left">
                    <div className="top">
                        <div className="logo">
                            <img src={logo} alt="Logo" width="28px"/>
                            <span>CodeAnt AI</span>
                        </div>
                        <div className="selector">
                            <select name='selector' id='selector'>
                                <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
                                <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
                                <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
                            </select>
                        </div>
                        <div className='btns'>
                            <button className='primary-btn icon-btn'><img src={repo} alt="repo" /> Repositories</button>
                            <button className='secondary-btn icon-btn'><img src={code} alt="code" /> AI Code Review</button>
                            <button className='secondary-btn icon-btn'><img src={cloud} alt="cloud" /> Cloud Security</button>
                            <button className='secondary-btn icon-btn'><img src={book} alt="book" /> How to Use</button>
                            <button className='secondary-btn icon-btn'><img src={gear} alt="gear" /> Settings</button>
                        </div>
                    </div>
                    <div className="bottom">
                            <button className='secondary-btn icon-btn'><img src={call} alt="call" /> Support</button>
                            <button className='secondary-btn icon-btn'><img src={logout} alt="logout" /> Logout</button>
                    </div>
                </aside>
    )
}
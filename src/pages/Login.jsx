import logo from '../assets/logo.png';
import logobg from '../assets/bg-logo.png';
import design from '../assets/design.png';
import git from '../assets/git.png';
import bitbucket from '../assets/bitbucket.png';
import azure from '../assets/azure.png';
import gitlab from '../assets/gitlab.png';

export default function Login(){
    return(
        <>
            <div className="login">
                <div className="login-left">
                    <div className="ai-detect">
                        <div className='logo'>
                            <img src={logo} alt="logo" width="28px" />
                            <h3>AI to Detect & Autofix Bad Code</h3>
                        </div>
                        <div className='detail'>
                            <div>
                                <h4>30+</h4>
                                <p>Language Support</p>
                            </div>
                            <div>
                                <h4>10K+</h4>
                                <p>Developers</p>
                            </div>
                            <div>
                                <h4>100K+</h4>
                                <p>Hours Saved</p>
                            </div>
                        </div>
                    </div>
                    <div className="issue-fixed">
                        <div className='this-week'>
                            <img src={design} alt="design" width="48"/>
                            <div>
                                <p>+ 14%</p>
                                <p>This Week</p>
                            </div>
                        </div>
                        <div>
                            <h3>Issue Fixed</h3>
                            <h2>500K+</h2>
                        </div>
                    </div>
                    <img src={logobg} alt="bg" class='bg-login' />
                </div>
                <div className="login-right">
                    <div className="login-form">
                        <div>
                            <img src={logo} alt="logo" width="28px" />
                            <span>CodeAnt Ai</span>
                        </div>
                        <h2>Welcome to CodeAnt AI</h2>
                        <div className='top-btns'>
                            <button className='secondary-border-btn'>SAAS</button>
                            <button className='secondary-border-btn'>Self hoisted</button>
                        </div>
                        <div className='login-btns'>
                            <button className='secondary-border-btn icon-btn' style={{justifyContent:"center"}}><img src={git} alt="git" width="16"/> Sign in with Github</button>
                            <button className='secondary-border-btn icon-btn' style={{justifyContent:"center"}}><img src={bitbucket} alt="bitbucket" width="16"/> Sign in with Bitbucket</button>
                            <button className='secondary-border-btn icon-btn' style={{justifyContent:"center"}}><img src={azure} alt="azure" width="16"/> Sign in with Azure Devops</button>
                            <button className='secondary-border-btn icon-btn' style={{justifyContent:"center"}}><img src={gitlab} alt="gitlab" width="16"/> Sign in with GitLab</button>
                        </div>
                        <p style={{marginTop:"20px"}}>By signing up you agree to the <strong>Privacy Policy.</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}
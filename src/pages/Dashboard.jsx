import RepoList from '../components/RepoList.jsx';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import refresh from '../assets/refresh.svg';
import add from '../assets/add.svg';
const RepoData = [
    {
        name : "design-system",
        visibility : "public",
        tech : "React",
        size : 7320,
        updated : 1,
    },
    {
        name : "codeant-ci-app",
        visibility : "private",
        tech : "Javascript",
        size : 5871,
        updated : 2,
    },
    {
        name : "analytics-dashboard",
        visibility : "private",
        tech : "Python",
        size : 4521,
        updated : 5,
    },
    {
        name : "mobile-app",
        visibility : "public",
        tech : "Swift",
        size : 3096,
        updated : 3,
    },
    {
        name : "e-commerce-platform",
        visibility : "private",
        tech : "Java",
        size : 6210,
        updated : 6,
    },
    {
        name : "blog-website",
        visibility : "public",
        tech : "HTML/CSS",
        size : 1876,
        updated : 4,
    },
    {
        name : "social-network",
        visibility : "private",
        tech : "PHP",
        size : 5432,
        updated : 7,
    },
]

export default function Dashboard(){
    
    return(
        <>
            <Navbar />

            <div className="dashboard">
                <Sidebar />

                <div className="right">
                    <div className="header">
                        <div className='top'>
                            <div className="repo">
                                <h1>Repositories</h1>
                                <span>33 total repositories</span>
                            </div>
                            <div className="btns">
                                <button className='secondary-border-btn icon-btn'><img src={refresh} alt="refresh" /> Refresh All</button>
                                <button className='primary-btn icon-btn'><img src={add} alt="+" /> Add Repository</button>
                            </div>
                        </div>
                        <div className='search'>
                            <input type="search" placeholder='Search Repositories' />
                        </div>
                    </div>

                    <div className="lists">
                        {
                            RepoData.map((data,i)=>{
                                return <RepoList 
                                    key={i}
                                    repodata = {data}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
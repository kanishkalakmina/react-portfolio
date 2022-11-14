import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import Logom from '../../assets/images/logom.png'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Sidebar = () => 
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={Logom} alt='logo'/>
       
    </Link>
    <div className='nav'>
        <NavLink exact="true" activeclassname="active" to="/">
            <HomeIcon sx={{ fontSize: 25 }} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <PersonIcon sx={{ fontSize: 25 }}/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <MailIcon sx={{ fontSize: 25 }}/>
        </NavLink>
    </div>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/lakminaegodawattha/'>
                <LinkedInIcon sx={{ fontSize: 20, color:'blue' }}/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/kanishkalakmina'>
                <GitHubIcon/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/la_kiya_98/'>
                <InstagramIcon sx={{ fontSize: 20 , color:'#FC2769'}}/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://twitter.com/KanishkaLakmina'>
                <TwitterIcon sx={{ fontSize: 20 , color:'#1DA1F2'}}/>
            </a>
        </li>
    </ul>
</div>

export default Sidebar
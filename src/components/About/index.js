import './index.scss'
import AnimatedLetters from '../Animated'
import { useState } from 'react'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'
import logo6 from '../../assets/images/logo6.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
    const [letterClass] = useState('text-animate')
    const abtArray=['A','b','o','u','t',' ','m','e']

    return(
       <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={abtArray}
                        idx={10}
                    />
                    
                </h1>
                <p>
                I'm Kanishka Lakmina Egodawattha. As a software engineering undergraduate, I am studying in the Sri Lanka Institute of Information Technology's Bachelor of Computer Science and Software Engineering. I am an experienced developer with skills in JavaScript, MERN, React, Flutter, Android, and iOS development.
                </p>
                <p>
                My present career aim is to work within IT because I enjoy working with computers, I enjoy the environment and I find the work interesting and satisfying. The opportunity to learn new skills and work with new technologies is particularly attractive to me. 
                </p>
                <br/>
                

            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/lakminaegodawattha/'>
                <LinkedInIcon sx={{ fontSize: 50, color:'blue' }} />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel='noreferrer' href='https://github.com/kanishkalakmina'>
                <GitHubIcon sx={{ fontSize: 50, color:'white' }} />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/la_kiya_98/'>
                <InstagramIcon sx={{ fontSize: 50 , color:'#FC2769'}} />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" rel='noreferrer' href='https://twitter.com/KanishkaLakmina'>
                <TwitterIcon sx={{ fontSize: 50 , color:'#1DA1F2'}} />
            </a>
                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                       <img src={logo1} alt='angular' />
                    </div>
                    <div className='face2'>
                       <img src={logo2} alt='angular'/>
                    </div>
                    <div className='face3'>
                       <img src={logo3} alt='angular'/>
                    </div>
                    <div className='face4'>
                       <img src={logo4} alt='angular'/>
                    </div>
                    <div className='face5'>
                       <img src={logo5} alt='angular'/>
                    </div>
                    <div className='face6'>
                       <img src={logo6} alt='angular'/>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default About
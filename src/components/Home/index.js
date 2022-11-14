import { useState } from 'react'
import {Link} from 'react-router-dom'
import AnimatedLetters from '../Animated'
import './index.scss'
import Logo from './Logo'
import Typewriter from 'typewriter-effect'


const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['I','m','','L','a','k','m','i','n','a','','E','g','o','d','a','w','a','t','t','h','a']
  //  const jobArray = ['D','e','v','e','l','o','p','e','r']

   
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>Hello,</span>
                <br/>
                
                
              
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={14}/>
                <br/>
                </h1>
                <h2>| SOFTWARE DEVELOPER |</h2>
                <h3 >
                    <Typewriter
                    options={{
                        autoStart:true,
                        loop: true,
                        delay:40,
                        strings:[
                            'ReactJs',
                            'Flutter',
                            'MERN Stack',
                            'JavaScript',
                            'CSS3 and Bootstrap',
                            'Java',
                            'GitHub',
                            'Visual Studio / Visual Code',
                            'Postman',
                            'Eclipse IDE'
                        ]
                    }}/>
                </h3>
                
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    );
}

export default Home
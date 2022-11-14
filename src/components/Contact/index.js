import './index.scss'
import AnimatedLetters from '../Animated'
import { useState } from 'react'

const Contact = () =>{
    const [letterClass] = useState('text-animate')
    const cntArray=['C','o','n','t','a','c','t','','m','e']

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={cntArray}
                        idx={15}
                        />
                    </h1>
                    <br/>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='name@example.com' required/>
                                </li>
                                <li>
                                    <input type='subject' name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Contact
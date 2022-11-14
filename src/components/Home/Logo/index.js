import './index.scss'
import Profile from '../../../assets/images/profile.png'

const Logo = () => {
    
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={Profile} alt='s'/>
        </div>
    )
}

export default Logo
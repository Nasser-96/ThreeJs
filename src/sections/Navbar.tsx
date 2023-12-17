import { styles } from '../styles'
import { navLinks } from '../constans'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ()=>{
    const [ active, setActive ] = useState('')

    const imgLinkClick = ()=>
    {
        setActive('');
        window.scrollTo(0,0);
    }

    return(
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to={'/'} className='flex items-center gap-2' onClick={imgLinkClick}>
                    <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
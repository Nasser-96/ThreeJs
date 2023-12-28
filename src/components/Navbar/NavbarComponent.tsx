import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo, close } from '../../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'

const NavbarComponent = ()=>{
    const [ active, setActive ] = useState<string>('')
    const [ toggle, setToggle ] = useState<boolean>(false)

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
                    <div className='text-white text-[18px] font-bold cursor-pointer flex gap-1'>
                        <p>
                            Nasser
                        </p>
                        <p className='sm:block hidden'>
                          |  
                        </p>
                        <p className='sm:block hidden'>
                            React
                        </p>
                    </div>
                </Link>
                <ul className='list-none hidden sm:flex gap-10'>
                    {
                        navLinks?.map((item)=>
                        {
                            return(
                                <li onClick={()=> setActive(item.id)} className={`${active === item.id ? 'text-white' : 'text-secondary'} transition-all duration-300 hover:text-white text-[18px] font-medium`} key={item.id}>
                                    <a href={`#${item.id}`}>
                                        {item?.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <MobileNavbar toggle={toggle} active={active} setActive={setActive} setToggle={setToggle} />
            </div>
        </nav>
    )
}

export default NavbarComponent
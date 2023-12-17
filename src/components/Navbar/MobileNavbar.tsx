import { menu,close } from '../../assets'
import { navLinks } from '../../constans'

interface MobileNavbarProps {
    toggle:boolean
    active:string
    setActive:(id:string) => void
    setToggle:(value:boolean) => void
}
const MobileNavbar = ({active,toggle,setToggle,setActive}:MobileNavbarProps)=>
{
    const clickMenuItem = (id:string)=>
    {
        setToggle(!toggle);
        setActive(id);
    }
    return(
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
            <img src={close} onClick={()=>setToggle(!toggle)} alt='menu' className={`w-[28px] absolute h-[28px] object-contain cursor-pointer transition-all duration-500 ${toggle ? 'opacity-100' : 'opacity-0'}`} />
            <img src={menu} onClick={()=>setToggle(!toggle)} alt='menu' className={`w-[28px] absolute h-[28px] object-contain cursor-pointer transition-all duration-500 ${toggle ? 'opacity-0' : 'opacity-100'}`} />
            <div className={` p-6 grid transition-all duration-500 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ${
                  toggle
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className='min-h-0 max-w-max overflow-hidden'>
                    <ul className='list-none flex justify-end items-start flex-col gap-4 '>
                        {
                            navLinks?.map((item)=>
                            {
                                return(
                                    <li onClick={()=> clickMenuItem(item.id)} className={`${active === item.id ? 'text-white' : 'text-secondary'} transition-all duration-300 font-poppins text-[16px] font-medium`} key={item.id}>
                                        <a href={`#${item.id}`}>
                                            {item?.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar
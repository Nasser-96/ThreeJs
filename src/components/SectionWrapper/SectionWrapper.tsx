import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { staggerContainer } from '../../utils/motion';

interface SectionWrapperProps
{
    children:JSX.Element
    idName:string
}
export default function SectionWrapper({children,idName}:SectionWrapperProps)
{
    return(
        <motion.section 
            variants={staggerContainer(0,0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:true,amount:0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            {children}
        </motion.section>
    )
}
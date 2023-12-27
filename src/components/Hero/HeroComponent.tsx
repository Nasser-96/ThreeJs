import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputerCanvas } from "../../sections"; 


const HeroComponents = ()=>
{
    return(
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute h-full inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className="text-[#915eff]"> Nasser </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        This is my First Website Using ThreeJs Which is 3D library i hope you find it good
                    </p>
                </div>
            </div>
            <ComputerCanvas/>
            <div className="absolute xs:bottom-0 bottom-32 w-full flex items-center justify-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div 
                            animate={{y:[0,24,0]}}
                            transition={{duration:1.5,repeat:Infinity, repeatType:'loop'}}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default HeroComponents
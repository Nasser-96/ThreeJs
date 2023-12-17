import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputerCanvas } from "../../sections"; 


const HeroComponents = ()=>
{
    return(
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>
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
                <ComputerCanvas/>
            </div>
        </section>
    )
}

export default HeroComponents
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../../styles'
import { ExperienceType, experiences } from '../../constants'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { textVariant } from '../../utils/motion'


interface ExperienceCardProps{
    experience:ExperienceType
}

const ExperienceCard = ({experience}:ExperienceCardProps)=>
{
    return(
        <VerticalTimelineElement 
            contentStyle={{background:"#1d1836", color:"#fff"}}
            contentArrowStyle={{borderRight:'7px solid #232631'}}
            date={experience.date}
            iconStyle={{background:experience.iconBg}}
            icon={
                <div className='flex items-center justify-center h-full w-full'>
                    <img 
                        src={experience.icon} 
                        alt={experience.company_name} 
                        className='h-[60%] w-[60%] object-contain' 
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>
                    { experience.title }
                </h3>
                <p className='text-secondary !m-0 text-[16px] font-bold'>
                    {experience.company_name}
                </p>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point,index)=>{
                        return(
                            <li 
                                key={`experience-point-${index}`} 
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {point}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

export default function ExperienceComponent ()
{
    return(
        <>
            <SectionWrapper idName='work'>
                <>
                    <motion.div variants={textVariant(0)}>
                        <p className={styles.sectionSubText}>What I have done so far</p>
                        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
                    </motion.div>
                    <div className='mt-20 flex flex-col'>
                        <VerticalTimeline>
                            {
                                experiences.map((experience,index)=>
                                {
                                    return(
                                        <ExperienceCard experience={experience}/>
                                    )
                                })
                            }
                        </VerticalTimeline>
                    </div>
                </>
            </SectionWrapper>
        </>
    )
}
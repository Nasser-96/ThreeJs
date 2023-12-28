import { BallCanvas } from '../../sections'

import SectionWrapper from '../SectionWrapper/SectionWrapper'

import { technologies } from '../../constants'

export default function TechComponent ()
{
    return(
        <SectionWrapper idName=''>
            <div className=' flex flex-wrap justify-center gap-10'>
                {
                    technologies.map((technology,index)=>
                    {
                        return(
                            <div className='w-28 h-28' key={`technology-${index}`}>
                                <BallCanvas icon={technology.icon} name={technology.name} />
                            </div>
                        )
                    })
                }
            </div>
        </SectionWrapper>
    )
}
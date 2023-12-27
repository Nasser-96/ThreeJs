import {useEffect ,Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload,useGLTF } from '@react-three/drei'
import Loader from '../../components/Loader/Loader';

interface ComputerProps{
    isMobile:boolean
}

const Computer = ({isMobile}:ComputerProps)=>
{
    const computer = useGLTF('./desktop_pc/scene.gltf');

    return(
        <mesh>
            <hemisphereLight intensity={2.15} groundColor="black" />
            <pointLight intensity={2} />
            <spotLight 
                position={[-20,50,10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024} 
            />
            <primitive 
                object={computer.scene} 
                scale={isMobile ? 0.7 : 0.75} 
                position={isMobile ? [0,-3,-2.2] : [0,-3.25,-1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas = ()=>
{
    const [isMobile, setIsMobile ] = useState<boolean>(false);

    useEffect(()=>
    {
        const mediaQuery = window.matchMedia(`
        (max-width:500px)
        `)
        console.log(mediaQuery);
        
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChang = (event:any)=>{
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change',handleMediaQueryChang);
        return()=>{
            mediaQuery.addEventListener('change',handleMediaQueryChang);
        }
    },[])
    return(
        <Canvas 
            frameloop='demand' 
            shadows 
            camera={{position:[20,3,5],fov:25}} //fov = Field of View 
            gl={{preserveDrawingBuffer:true}}
        >
            <Suspense fallback={<Loader/>}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas
import { Html, useProgress } from "@react-three/drei"


export default function Loader()
{
    const { progress } = useProgress()
    return(
        <Html>
            <span className='canvas-load'></span>
            <p className="text-sm text-white font-extrabold mt-10"> {progress.toFixed(2)}% </p>
        </Html>
    )
}
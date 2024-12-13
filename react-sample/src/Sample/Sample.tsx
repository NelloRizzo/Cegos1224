import { FC } from 'react'
import './Sample.css'
import Saluta from '../Salutatore/Salutatore'

interface SampleProps {
    times?: number
}
const Sample: FC<SampleProps> = ({ times }) => {
    return (
        <>
            {
                Array.from({ length: times ?? 1 }).map((_, i) =>
                    <Saluta time={i + 1}></Saluta>
                )
            }
        </>
    )
}

export default Sample
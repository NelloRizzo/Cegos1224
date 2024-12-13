import { FC } from "react";

interface SalutaProps {
    time: number
}

const Saluta: FC<SalutaProps> = ({ time }) => {
    return (
        <div className="sample">Ciao a tutti per la {time}^ volta!</div>
    )
}

export default Saluta
import { FC } from "react";
import './GameControls.css'
import { useDispatch } from "react-redux";

import { drawNumber } from "../State/State";

const GameControls:FC = () => {
    
    const dispatch = useDispatch()

    return (
        <div className="controls">
            <button type="button" onClick={() => dispatch(drawNumber())}>Estrai Numero</button>
        </div>
    )
}

export default GameControls
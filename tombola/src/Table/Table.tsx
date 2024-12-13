import GameControls from '../GameControls/GameControls'
import TableRow from '../TableRow/TableRow'
import './Table.css'

export default function Table() {
    return (
        <div className='container'>
            <h1>Tombola</h1>
            <GameControls/>
            <div className="table">
                {
                    Array.from({ length: 9 }).map((_, i) =>
                        <TableRow rowNumber={i} key={i}></TableRow>
                    )
                }
            </div>
        </div>
    )
}
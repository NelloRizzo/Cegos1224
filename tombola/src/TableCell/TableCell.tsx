import { FC } from "react"
import './TableCell.css'
import { useSelector } from "react-redux"
import { State } from "../State/State"
interface TableCellProps {
    number: number
    className?: string
}
const TableCell: FC<TableCellProps> = ({ number, className }) => {
    const drawn = useSelector((s: State) => s.drawn)
    const cl = (drawn?.indexOf(number) >= 0) ? 'cell drawn' : 'cell'
    return (
        <div className={`${className} ${cl}`}>{number}</div>
    )
}

export default TableCell
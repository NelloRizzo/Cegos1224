import { FC } from "react";
import TableCell from "../TableCell/TableCell";
import './TableRow.css'

interface TableRowProps {
    rowNumber: number
}
const TableRow: FC<TableRowProps> = ({ rowNumber }) => {
    return (
        <div className="row" key={`r_${rowNumber}`}>
            {
                Array.from({ length: 10 }).map((_, i) => {
                    const n = rowNumber * 10 + i + 1
                    return (
                        <TableCell number={n} key={`c_${n}`} />
                    )
                })
            }
        </div>
    )
}

export default TableRow
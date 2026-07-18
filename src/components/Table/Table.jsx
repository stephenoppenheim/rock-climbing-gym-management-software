
import "./Table.css";

const Table = ({ headers, tableData, tableDataMap, btnText = null, onClick = null, onClickArgs = null }) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={index} scope="col">{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {tableData.map(user => tableDataMap(user, onClick, onClickArgs))}
            </tbody>
        </table>
    )
}

export default Table;
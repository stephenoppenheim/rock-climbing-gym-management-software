
import "./Table.css";
import issueList from "../../assets/issue-list.json";

const Table = ({ headers, tableData, tableDataMap, btnText = null, onClick = null, onClickArgs = null }) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => <th key={index} scope="col">{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {tableData.map(user => tableDataMap(user, issueList, btnText, onClick, onClickArgs))}
            </tbody>
        </table>
    )
}

export default Table;
import {changeTableData, tableData} from "@/entities/table/structures/tableData";
import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";

export const createData = (record: TABLE_DATA_ELEMENT) => {
    let data = tableData;
    const lastId = data[data.length - 1].id
    data.push({...record, id: lastId + 1});
    changeTableData(data);
}
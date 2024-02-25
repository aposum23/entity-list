import {changeTableData, tableData} from "@/entities/table/structures/tableData";
import {filter} from 'lodash/fp';
import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";

export const deleteData = (dataId: number) => {

    const filterComparison = (item: TABLE_DATA_ELEMENT) => {
        return item.id !== dataId;
    }

    const data: TABLE_DATA_ELEMENT[] = filter(filterComparison, tableData);
    changeTableData(data);
}
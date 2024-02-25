import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";
import {changeTableData, tableData} from "@/entities/table/structures/tableData";

export const prepareData = () => {
    let data: TABLE_DATA_ELEMENT[] = [];
    let newId = tableData[0].id;
    for (let i = 1; i < 6; i++) {
        tableData.map((tableElement: TABLE_DATA_ELEMENT) => {

            data.push({...tableElement, name: `${tableElement.name.split('#')[0]} #${i}`, id: newId})
            newId++;
        })
    }
    changeTableData(data);
    return tableData
}
import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";
import {tableData} from "@/entities/table/structures/tableData";

export const prepearedData = () => {
    let data: TABLE_DATA_ELEMENT[] = [];
    for (let i = 1; i < 6; i++) {
        tableData.map((tableElement: TABLE_DATA_ELEMENT) => {
            data.push({...tableElement, name: `${tableElement.name} #${i}`})
        })
    }
    return data;
}
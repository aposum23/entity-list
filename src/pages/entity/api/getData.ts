import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";
import { filter, isEmpty } from "lodash/fp";
import {tableData} from "@/entities/table/structures/tableData";

export const getEntityData = (filters: {[K:string]: string | number | boolean}) => {
    const data = tableData;

    const filterComparison = (element: TABLE_DATA_ELEMENT) => {
        let flag = true;
        const filtersKeys = Object.keys(filters);
        let i = 0;
        while (flag && i < filtersKeys.length) {
            const key = filtersKeys[i];
            flag = (element as any)[key].toLowerCase().includes(filters[key]) || (element as any)[key] === filters[key];
            i++;
        }
        return flag
    }
    if (!isEmpty(filters)) return filter(filterComparison, data);
    else return data;
}
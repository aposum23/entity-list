import {prepearedData} from "@/pages/entity/api/exampleData";
import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";
import { filter, isEmpty } from "lodash/fp";

export const getEntityData = (filters: {[K:string]: string | number | boolean}) => {
    const data = prepearedData();

    const filterComparison = (element: TABLE_DATA_ELEMENT) => {
        let flag = true;
        const filtersKeys = Object.keys(filters);
        let i = 0;
        while (flag && i < filtersKeys.length) {
            const key = filtersKeys[i];
            flag = flag = (element as any)[key].includes(filters[key]) || (element as any)[key] === filters[key];
            i++;
        }
        return flag
    }
    if (!isEmpty(filters)) return filter(filterComparison, data);
    else return data;
}
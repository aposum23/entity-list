import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";

export let tableData: TABLE_DATA_ELEMENT[] = [
    {
        id: 1,
        name: 'BMW',
        model: 'M3 Competition',
        maxSpeed: 250,
        power: 510,
        weight: 1805
    },
    {
        id: 2,
        name: 'Audi',
        model: 'RS6',
        maxSpeed: 250,
        power: 605,
        weight: 2150
    },
    {
        id: 3,
        name: 'Lada',
        model: 'Granta sport',
        maxSpeed: 198,
        power: 114,
        weight: 1140
    },
    {
        id: 4,
        name: 'Alpha Romeo',
        model: 'Giulia quadrifoglio',
        maxSpeed: 307,
        power: 510,
        weight: 1695
    },
    {
        id: 5,
        name: 'Ford',
        model: 'GT40',
        maxSpeed: 250,
        power: 306,
        weight: 1061
    },
    {
        id: 6,
        name: 'Shelby',
        model: 'Cobra 427',
        maxSpeed: 257,
        power: 492,
        weight: 1068
    },
];

export const changeTableData = (data: TABLE_DATA_ELEMENT[]) => {
    tableData = data;
}
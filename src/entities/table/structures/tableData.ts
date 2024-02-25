import {TABLE_DATA_ELEMENT} from "@/shared/structures/tableTypes";

export let tableData: TABLE_DATA_ELEMENT[] = [
    {
        id: 1,
        name: 'BMW',
        model: 'M3 Competition',
        maxSpeed: 250,
        power: 510,
        weight: 1805,
        type: 'Седан',
        inProduction: 'Да',
        imageUrl: 'https://avatars.mds.yandex.net/get-verba/1540742/2a00000178874741ebe297e8ba6c4145a1c7/cattouchretcr'
    },
    {
        id: 2,
        name: 'Audi',
        model: 'RS6',
        maxSpeed: 250,
        power: 605,
        weight: 2150,
        type: 'Универсал',
        inProduction: 'Да',
        imageUrl: 'https://images.drive.ru/i/0/5d5cd432ec05c40a4100004e.jpg'
    },
    {
        id: 3,
        name: 'Lada',
        model: 'Granta sport',
        maxSpeed: 198,
        power: 114,
        weight: 1140,
        type: 'Седан',
        inProduction: 'Да',
        imageUrl: 'https://motor.ru/imgs/2022/06/15/06/5450824/f200301df16b510097d34c4db6a5dce786dfb524.jpg'
    },
    {
        id: 4,
        name: 'Alpha Romeo',
        model: 'Giulia quadrifoglio',
        maxSpeed: 307,
        power: 510,
        weight: 1695,
        type: 'Седан',
        inProduction: 'Да',
        imageUrl: 'https://avatars.mds.yandex.net/get-vertis-journal/4212087/2020-03-02-73b4ee0b5a9e4c0a81f8b29878bb2308.jpeg_1622736187764/orig'
    },
    {
        id: 5,
        name: 'Ford',
        model: 'GT40',
        maxSpeed: 250,
        power: 306,
        weight: 1061,
        type: 'Купе',
        inProduction: 'Нет',
        imageUrl: 'https://motor.ru/imgs/2019/11/18/21/3660311/82301235d3458ab7113f503b29441be55f760956.jpg'
    },
    {
        id: 6,
        name: 'Shelby',
        model: 'Cobra 427',
        maxSpeed: 257,
        power: 492,
        weight: 1068,
        type: 'Купе',
        inProduction: 'Нет',
        imageUrl: 'https://cdn.motor1.com/images/mgl/2RjQz/s1/shelby-cobra-427-used-in-ford-v-ferrari-filming.jpg'
    },
];

export const changeTableData = (data: TABLE_DATA_ELEMENT[]) => {
    tableData = data;
}
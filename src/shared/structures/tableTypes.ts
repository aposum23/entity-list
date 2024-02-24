export type TABLE_STRUCTURE_ELEMENT = {
    value: string,
    text: string,
    align?: 'start' | 'center' | 'end',
    children?: {value: string, title: string}[]
};

export type TABLE_DATA_ELEMENT = {
    name: string;
    model: string;
    maxSpeed: string;
    power: string;
    weight: string;
}

export type FILTER_STRUCTURE_ELEMENT = {
    id: string,
    name: string,
    label: string,
    suffix?: string,
    defaultValue?: string | number | boolean,
    type: 'input' | 'inputNumber' | 'boolean'
};

export type FORM_STRUCTURE_ELEMENT = {
    id: string,
    name: string,
    label: string,
    type: 'input' | 'inputNumber' | 'boolean'
};

export type CRUD_TYPE = 'create' | 'delete' | 'update';
export type TABLE_STRUCTURE_ELEMENT = {
    value: string,
    text: string,
    align?: 'start' | 'center' | 'end',
    type?: 'url'
    children?: {value: string, title: string}[]
};

export type TABLE_DATA_ELEMENT = {
    id: number;
    name: string;
    model: string;
    maxSpeed: number;
    power: number;
    weight: number;
    type: string;
    inProduction: string;
    imageUrl: string;
}

export type FILTER_STRUCTURE_ELEMENT = {
    id: string,
    name: string,
    label: string,
    suffix?: string,
    defaultValue?: string | number | boolean,
    items?: string[],
    type: 'text' | 'number' | 'boolean' | 'select'
};

export type FORM_STRUCTURE_ELEMENT = {
    id: string,
    name: string,
    label: string,
    suffix?: string,
    items?: string[],
    defaultValue?: string | number | boolean,
    type: 'text' | 'number' | 'boolean' | 'select' | 'imageUrl'
};

export type CRUD_TYPE = 'create' | 'delete' | 'update';
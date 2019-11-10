export interface RequestErrorInterface {
    code: number;
    message: string;
    url: string;
}
export declare class RequestError implements RequestErrorInterface {
    code: number;
    message: string;
    url: string;
    constructor(code: number, message: string, url: string);
}

export interface RequestErrorInterface {
    code: number;
    message: string;
    url: string;
}

export class RequestError implements RequestErrorInterface {

    /**
     * Class Constructor
     * @param { number } code
     * @param { string } message
     * @param { string } url
     */
    constructor(public code: number, public message: string, public url: string) {}
}

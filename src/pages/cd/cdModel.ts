export class CDModel {
    id : number;
    isLend: boolean;
    sendDate:string;
    getDate:string;
    constructor(public name : string) {
        this.isLend = false;
    }
}
export class Show {
    public id: number;
    public name: string;
    public price: number;
    public nbPlace: number;
    public freePlace: number;
    public onlyPremium: boolean;
    public img: string;

    constructor(input?: Show) {
        Object.assign(input);
    }
}

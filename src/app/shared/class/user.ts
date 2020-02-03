export class User {
    id?: number;
    name: string;
    email: string;
    img: string;
    password: string;
    isActived: boolean;
    isPremium: boolean;

    constructor(input?: User) {
        Object.assign(input);
    }

}

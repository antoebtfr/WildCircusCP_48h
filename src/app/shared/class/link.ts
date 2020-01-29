export class Link {
    name: string;
    link: string;
    background?: string;

    constructor(name, link, background?) {
        this.name = name;
        this.link = link;
        this.background = background;
    }
}

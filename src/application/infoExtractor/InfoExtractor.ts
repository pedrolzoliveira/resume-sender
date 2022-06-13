class Info {
    
    emails: string[];
    firstEmail?: string;

    constructor(text: string) {
        const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)?.flat() || [];
        this.emails = emails;
        this.firstEmail = emails[0];
    }

}


export class InfoExtractor {
    extract(text: string) {
        return new Info(text);
    }
}

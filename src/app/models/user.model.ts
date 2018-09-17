export class User {

    constructor (
        public name: string,
        public email: String,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string
    ) { }
}
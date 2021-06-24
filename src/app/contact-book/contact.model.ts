import { Tags } from "../shared/shopping-list.model";

export class Contact {
    constructor(
        public fname: string,
        public lname: string,
        public email: string,
        public phone: string,
        public status: boolean,
    ) { }
}

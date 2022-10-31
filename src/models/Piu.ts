import { uuid } from "uuidv4";

class Piu {
    id: string;
    user_id: string;
    text: string;
    creation_date: string;
    update_date: string;

    constructor(user_id: string, text: string, creation_date: string, update_date: string) {
        this.id = uuid();
        this.user_id = user_id;
        this.text = text;
        this.creation_date = creation_date;
        this.update_date = update_date;
    }
}

export default Piu;
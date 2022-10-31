import { uuid } from "uuidv4";

class User {
    id: string;
    name: string;
    birthday: string;
    cpf: string;
    tel: string;
    creation_date: string;
    update_date: string

    constructor(name: string, birthday: string, cpf: string, tel: string, creation_date: string, update_date: string) {
        this.id = uuid();
        this.name = name;
        this.birthday = birthday;
        this.cpf = cpf;
        this.tel = tel;
        this.creation_date = creation_date;
        this.update_date = update_date;
    }
}

export default User;
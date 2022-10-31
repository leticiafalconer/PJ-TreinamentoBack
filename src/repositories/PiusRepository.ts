import Piu from "../models/Piu";
import UsersRepository from "./UsersRepository";

class PiusRepository {
    private pius: Piu[];

    constructor() {
        this.pius = []
    }

    public create(user_id: string, text: string, creation_date: string, update_date: string): Piu {
        const piu = new Piu(user_id, text, creation_date, update_date)

        this.pius.push(piu);

        return piu;
    }

    public findById(id: string): Piu | null {
        return this.pius.find(piu => piu.id === id) || null;
    }

    public all(): Piu[] {
        return this.pius;
    }

    public lenght(string: string) {
        return string.length
    }

    public findIndex(id: string) {
        return this.pius.findIndex(piu => piu.id === id)
    }

    public updateById(id: string, text: string, update_date: string): Piu | null {
        const index = this.findIndex(id);

        this.pius[index]["text"] = text;
        this.pius[index]["update_date"] = update_date;

        return this.pius[index] || null;
    }

    public delete(id: string) {
        const index = this.findIndex(id);
        this.pius.splice(index);
        return;
    }

}

export default PiusRepository;


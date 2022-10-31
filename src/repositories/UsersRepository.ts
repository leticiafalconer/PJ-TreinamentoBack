import User from "../models/User";

class UsersRepository {
    private users: User[];

    constructor() {
        this.users = []
    }

    public create(name: string, birthday: string, cpf: string, tel: string, creation_date: string, update_date: string): User {
        const user = new User(name, birthday, cpf, tel, creation_date, update_date)

        this.users.push(user);

        return user;
    }

    public findByCpf(cpf: string): User | null {
        return this.users.find(user => user.cpf === cpf) || null;
    }

    public findById(id: string): User | null {
        return this.users.find(user => user.id === id) || null;
    }

    public all(): User[] {
        return this.users;
    }

    public findIndex(id: string) {
        return this.users.findIndex(user => user.id === id)
    }

    public updateById(id: string, name: string, birthday: string, cpf: string, tel: string, update_date: string): User | null {
        const index = this.findIndex(id);

        this.users[index]["name"] = name;
        this.users[index]["birthday"] = birthday;
        this.users[index]["cpf"] = cpf;
        this.users[index]["tel"] = tel;
        this.users[index]["update_date"] = update_date;

        return this.users[index] || null;
    }

    public delete(id: string) {
        const index = this.findIndex(id);
        this.users.splice(index);
        return;
    }
}

export default UsersRepository;


import { Router } from "express";
import UsersRepository from "../repositories/UsersRepository";

const userRouter = Router();
export const usersRepository = new UsersRepository();

userRouter.post('', (req, res) => {
    const { name, birthday, cpf, tel, creation_date, update_date } = req.body;

    if (!name || !birthday || !cpf || !tel || !creation_date || !update_date)
        return res.status(400).json({ message: "Missing data" });

    if (usersRepository.findByCpf(cpf))
        return res.status(400).json({ message: "User with this cpf already exists" });

    const user = usersRepository.create(name, birthday, cpf, tel, creation_date, update_date);

    return res.json(user);
})

userRouter.get('/', (req, res) => {
    const users = usersRepository.all()

    return res.json(users);
})

userRouter.get('/:id', (req, res) => {
    const { id } = req.params;

    const user = usersRepository.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
})

userRouter.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, birthday, cpf, tel, update_date } = req.body;

    const userGiven = usersRepository.findById(id);
    if (!userGiven)
        return res.status(404).json({ message: "User not found" });

    if (!name || !birthday || !cpf || !tel || !update_date)
        return res.status(400).json({ message: "Missing data" });

    if (usersRepository.findByCpf(cpf))
        return res.status(400).json({ message: "User with this cpf already exists" });

    const user = usersRepository.updateById(id, name, birthday, cpf, tel, update_date)

    return res.json(user);
})

userRouter.delete("/:id", (req, res) => {
    const { id } = req.params;

    const user = usersRepository.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(usersRepository.delete(id));
})

export default userRouter;

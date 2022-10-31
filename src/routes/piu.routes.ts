import { Router } from "express";
import { uuid } from "uuidv4";
import PiusRepository from "../repositories/PiusRepository";
import { usersRepository } from "./user.routes";
const piuRouter = Router();

const piusRepository = new PiusRepository();

piuRouter.post('', (req, res) => {
    const { user_id, text, creation_date, update_date } = req.body;

    if (!text) 
        return res.status(400).json({ message: "Empty text"});

    if (piusRepository.lenght(text) > 140) 
        return res.status(400).json({ message: "Text over 140 caracters"});

    const user = usersRepository.findById(user_id);
    if(!user) return res.status(404).json({message: "User not found"});
    
    const piu = piusRepository.create(user_id, text, creation_date, update_date);

    return res.json(piu);
})

piuRouter.get('/', (req, res) => {
    const pius = piusRepository.all()

    return res.json(pius);
})

piuRouter.get('/:id',  (req, res) => {
    const { id } = req.params;

    const piu = piusRepository.findById(id);
    if(!piu) return res.status(404).json({message: "Piu not found"});

    return res.json(piu);
})

piuRouter.patch('/:id',  (req, res) => {
    const { id } = req.params;
    const { text, update_date } = req.body;
    
    const piuGiven = piusRepository.findById(id);
    if(!piuGiven) 
        return res.status(404).json({message: "Piu not found"});

    if (!text) 
        return res.status(400).json({ message: "Empty text"});

    if (piusRepository.lenght(text) > 140) 
        return res.status(400).json({ message: "Text over 140 caracters"});

    const piu = piusRepository.updateById(id, text, update_date)

    return res.json(piu);
})

piuRouter.delete("/:id", (req, res) => {
    const { id } = req.params;

    const piu = piusRepository.findById(id);
    if(!piu) return res.status(404).json({message: "Piu not found"});

    piusRepository.delete(id);

    return res.json("deleted");
})

export default piuRouter;
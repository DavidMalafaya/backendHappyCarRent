const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all lojas
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.lojas.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return loja by his id (loja number)
exports.getById = async (req, res) => {
    //get loja id requested
    const id = req.params.number;
    try {
        //finds loja by his id (number)
        const response = await prisma.lojas.findUnique({
            where: {
                number: id,
            },
        })
        //return loja
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates loja
exports.create = async (req, res) => {
    //get requested loja properties
    const { number, name, city } = req.body;
    try {
        //creates new loja
        const loja = await prisma.lojas.create({
            data: {
                number: number,
                name: name,
                city: city,

            },
        })
        //return loja created
        res.status(201).json(loja)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates loja by his id (loja number)
exports.update = async (req, res) => {
    const { number, name, city } = req.body;

    try {
        //find loja to update their data
        const loja = await prisma.lojas.update({
            where: {
                number: number,
            },
            data: {
                name: name,
                city: city,
                
            },
        })
        //return loja updated
        res.status(200).json(loja)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete loja by his id (loja number)
exports.delete = async (req, res) => {
    //get loja number requested
    const number = req.params.number;
    try {
        //delete lojas
        await prisma.lojas.delete({
            where: {
                number: number,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
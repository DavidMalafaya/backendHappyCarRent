const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all frotas
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.frota.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return frota by his id (frota number)
exports.getById = async (req, res) => {
    //get frota id requested
    const id = req.params.number;
    try {
        //finds frota by his id (number)
        const response = await prisma.frota.findUnique({
            where: {
                number: id,
            },
        })
        //return frota
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates frota
exports.create = async (req, res) => {
    //get requested frota properties
    const { number, name, city } = req.body;
    try {
        //creates new frota
        const frota = await prisma.frota.create({
            data: {
                number: number,
                name: name,
                city: city,

            },
        })
        //return frota created
        res.status(201).json(frota)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates frota
exports.update = async (req, res) => {
    const { number, name, city } = req.body;

    try {
        //find frota to update their data
        const frota = await prisma.frota.update({
            where: {
                number: number,
            },
            data: {
                name: name,
                city: city,
            },
        })
        //return frota updated
        res.status(200).json(frota)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete frota by his id (frota number)
exports.delete = async (req, res) => {
    //get frota number requested
    const number = req.params.number;
    try {
        //delete frota
        await prisma.frota.delete({
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
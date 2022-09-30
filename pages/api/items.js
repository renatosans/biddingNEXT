import prisma from '../../config/db'


const getItems = (req, res) => {
	prisma.item.findMany()
	.then((items) => res.send(items))
	.catch((error) => res.send("Error: " + error.message))
}

const insertItem = (req, res) => {
	// const { id, name, AvgPrice, unitOfMeasurement, ItemGroup } = req.body;

	prisma.item.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getItems(req, res)
			case "POST": return insertItem(req, res)
		}
	},
    get: (req, res) => getItems(req, res),
    post: (req, res) => insertItem(req, res)
}

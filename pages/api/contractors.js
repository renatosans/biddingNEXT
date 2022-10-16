import prisma from '../../src/utils/connection'


const getContractors = (req, res) => {
	prisma.contractor.findMany()
	.then((contractors) => res.send(contractors))
	.catch((error) => res.send("Error: " + error.message))
}

const insertContractor = (req, res) => {
	// const { id, companyName, contactPerson, email } = req.body;

	prisma.contractor.create({ data: req.body })
	.then((result) => res.send(result))
	.catch((error) => res.send("Error: " + error.message))
}

module.exports = {
	default: (req, res) => {
		switch (req.method) {
			case "GET": return getContractors(req, res)
			case "POST": return insertContractor(req, res)
		}
	},
    get: (req, res) => getContractors(req, res),
    post: (req, res) => insertContractor(req, res)
}

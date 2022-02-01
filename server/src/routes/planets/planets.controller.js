const { planets } = require('../../models/planets.model')

async function httpGetAllPlanets(req, res) {
	return await res.status(200).json(planets)
}

module.exports = {
	httpGetAllPlanets,
}

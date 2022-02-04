const { planets } = require('../../models/planets.model')

async function httpGetAllPlanets(req, res) {
	try {
		if (planets.length === 0) {
			console.log('not pulling in planets')
		} else {
			return await res.status(200).json(planets)
		}
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	httpGetAllPlanets,
}

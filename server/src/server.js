const http = require('http')

const app = require('./app')
const { loadPlanetsData } = require('./models/planets.model')

const SERVER_PORT = process.env.SERVER_PORT || 8000

const server = http.createServer(app)

async function startServer() {
	await loadPlanetsData()

	server.listen(SERVER_PORT, () =>
		console.log(`Listening on port ${SERVER_PORT}...`)
	)
}
startServer()

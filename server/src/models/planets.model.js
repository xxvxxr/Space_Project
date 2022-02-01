const fs = require('fs')
const path = require('path')
const  {parse}  = require('csv-parse')
// const { getAllPlanets } = require('../routes/planets/planets.controller')
//  const {savePlanets} = require('../../../client/src/hooks/usePlanets.js')

const habitablePlanets = []

const isHabitablePlanet = (planet) => {
	return (
		planet['koi_disposition'] === 'CONFIRMED' &&
		planet['koi_insol'] > 0.36 &&
		planet['koi_insol'] < 1.11 &&
		planet['koi_prad'] < 1.6
	)
}

function loadPlanetsData() {
	return new Promise((resolve, reject) => {
		fs.createReadStream(
			path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
		)
			.pipe(
				parse({
					comment: '#',
					columns: true,
				})
			)
			.on('data', (data) => {
				if (isHabitablePlanet(data)) {
					habitablePlanets.push(data)
                    // savePlanets(data)
				}
			})
			.on('error', (err) => {
				console.error(err)
				reject(err)
			})
			.on('end',  () => {
                const countPlanetsFound = habitablePlanets.length
				console.log(`${countPlanetsFound} habitable planets have been found!`)
				resolve()
			})
	})
}

const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges)
	return hasPath(graph, nodeA, nodeB, new Set())
}

hasPath = (graph, src, distanation, visited) => {
	if (visited.has(src)) {
		return false
	}
	visited.add(src)
	if (src === distanation) {
		return true
	}
	for (const neighbor of graph[src]) {
		hasPath(graph, neighbor, distanation, visited) === true ? true : false
	}
}

const buildGraph = (edges) => {
	const graph = {}

	for (const edge in edges) {
		const [a, b] = edge
		if (!a in graph) {
			graph[a] = []
		}
		if (!b in graph) {
			graph[b] = []
		}
		graph[a].push(b)
		graph[b].push(a)

		return graph
	}
}

module.exports = {
	planets: habitablePlanets,
	loadPlanetsData,
}

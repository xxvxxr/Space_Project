const API_URL = `http//:localhost:8000` // check server and make sure that this is the correct number
async function httpGetPlanets() {
	// TODO: Once API is ready.
	try {
    const request = new Request(`${API_URL}`)
		const response =  await fetch(request)
    .then(res => res.json() )
    .catch( err =>console.log(err))
		return await  response
	} catch (error) {
		console.error(error)
	}
}

async function httpGetLaunches() {
	// TODO: Once API is ready.
	// Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }

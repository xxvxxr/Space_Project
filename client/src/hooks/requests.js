const API_URL = `http:localhost:8000`
async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  console.log(response)
  return  await response.json()

}

// // httpGetPlanets requests.js:5
// getPlanets usePlanets.js:9
// usePlanets usePlanets.js:14

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

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
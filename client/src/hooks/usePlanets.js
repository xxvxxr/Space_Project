import { useCallback, useEffect, useState } from 'react'

import { httpGetPlanets } from './requests'

function usePlanets() {
	const [planets, savePlanets] = useState([])

	const getPlanets = useCallback(async () => {
		try {
			const fetchedPlanets = await httpGetPlanets()
			savePlanets(fetchedPlanets)
      if(planets.length === 0){
        console.error('no planets')
      }
      console.log(planets)
		} catch (error) {
			console.error(error)
		}
	}, [])

	useEffect(() => {
		getPlanets()
	}, [getPlanets])

	return planets
}

export default usePlanets

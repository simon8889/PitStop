import { useState, useEffect } from "react"
import { DriverCard } from "../DriverCard"
import { useSession } from "../../Hooks/useSession"

export const DriversContainer = () => {
	const [ driversList, setDriversList ] = useState<Driver[]>([])
	
	const currentSession = useSession(state => state.session)
	
	useEffect(() => {
		fetch(`https://api.openf1.org/v1/drivers?session_key=${currentSession?.session_key}`)
			.then(res => res.json())
			.then(data => setDriversList(data))
			.catch(err => console.log(err))
	}, [currentSession])
	
	return (
		<section>
			<h1>Viewing: {`${currentSession?.location} ${currentSession?.year}`}</h1>
			{ driversList && driversList.map(data => (<DriverCard key={data.driver_number} driver={data}/>))}
		</section>
	)
}

import { useState, useEffect } from "react"
import { DriverCard } from "../DriverCard"
import { useSession } from "../../Hooks/useSession"
import styles from "./DriverContainer.module.css"
import { useColors } from "../../Hooks/useColors"

export const DriversContainer = () => {
	const [ driversList, setDriversList ] = useState<Driver[]>([])
	const currentSession = useSession(state => state.session)
	const driverColors = useColors()
	
	useEffect(() => {
		fetch(`https://api.openf1.org/v1/drivers?session_key=${currentSession?.session_key}`)
			.then(res => res.json())
			.then(data => setDriversList(data))
	}, [currentSession])
	
	useEffect(() => {
		const colors: DriverColor[] = driversList.map(({ driver_number, team_colour}) => ({
			driver_number,
			team_colour
		}))
		driverColors.updateColors(colors)
	}, [driversList])
	
	return (
		<section className={styles.DriverContainer}>
			<h1>Race: {`${currentSession?.location} ${currentSession?.year}`}</h1>
			<ul>
				{ driversList && driversList.map(data => (<DriverCard key={data.driver_number} driver={data}/>))}
			</ul>
		</section>
	)
}

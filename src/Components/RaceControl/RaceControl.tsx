import { useEffect, useState } from "react"
import { useSession } from "../../Hooks/useSession"
import { RaceLog } from "./RaceLog"
import styles from "./RaceControl.module.css"

export const RaceControl = () => {
	const currentSession = useSession(state => state.session)
	const [ raceLogs, setRaceLogs ] = useState<RaceLog[]>()
	
	useEffect(() => {
		fetch(`https://api.openf1.org/v1/race_control?session_key=${currentSession?.session_key}`)
			.then(res => res.json())
			.then(data => setRaceLogs(data))
	}, [currentSession])
	
	return (
		<section className={styles.RaceControl}>
			<div className={styles.RaceControl__header}>
				<span></span>
				<h2>Race Control</h2>
				<span>LAP</span>
			</div>
			<div className={styles.RaceControl__logContainer}>
				{raceLogs?.map((log, idx) => (
					<RaceLog key={idx} log={log}/>
				))}
			</div>
		</section>
	)
}

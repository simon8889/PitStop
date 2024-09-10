import { DriversContainer } from "./Components/DriversContainer"
import { Nav } from "./Components/Nav"
import styles from "./App.module.css"
import { RaceControl } from "./Components/RaceControl"

export default function App() {

	return (
		<main className={styles.pitStop}>
			<section className={styles.pitStop__sideBar}>
				<h1 className={styles.pitStop__title}>PitStop</h1>
				<Nav />
			</section>
			<DriversContainer />
			<RaceControl />
		</main>
	)
}
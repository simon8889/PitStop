import { DriversContainer } from "./Components/DriversContainer"
import { Nav } from "./Components/Nav"
import styles from "./App.module.css"

export default function App() {

	return (
		<main className={styles.pitStop}>
			<section className={styles.pitStop__sideBar}>
				<h1 className={styles.pitstop__title}>PitStop</h1>
				<Nav />
			</section>
			<DriversContainer />
		</main>
	)
}
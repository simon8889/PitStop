import { CountryFlag } from "../CountryFlag"
import styles from "./DriverCard.module.css"

export const DriverCard = ({ driver }: { driver: Driver }) => {
	if (!driver.country_code && driver.name_acronym === "COL") driver.country_code = "ARG"

	return (
		<div className={styles.DriverCard}>
			<div className={styles.DriverCard__background}></div>
			<div className={styles.DriverCard__imageContainer}>
				<div className={styles.DriverCard__number} style={{ "background": `#${driver.team_colour}` }}>
					<span>{driver.driver_number}</span>
				</div>
				<img src={driver.headshot_url} />
			</div>
			<div className={styles.DriverCard__content}>
				<h2>
					{driver.full_name}
					<CountryFlag countryCode={driver.country_code} />
				</h2>
				<span className={styles.DriverCard__team}>{driver.team_name}</span>
			</div>
		</div>
	)
}

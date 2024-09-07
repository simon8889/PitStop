import { useSession } from "../../../Hooks/useSession"
import { CountryFlag } from "../../CountryFlag";
import styles from "./DropDownItem.module.css"

CountryFlag

export const DropDownItem = ({ session, showYear }: { session: Session, showYear: boolean }) => {
	const sessionManager = useSession()

	const handleSessionClick = (session: Session) => {
		sessionManager.updateSession(session)
	}

	return (
		<div className={styles.DropDownItem} onClick={() => handleSessionClick(session)}>
			<span>{session.location}</span>
			{showYear && <span className={styles.DropDownItem__year}>{session.year}</span>}
			<CountryFlag countryCode={session.country_code} />
		</div>
	)
}

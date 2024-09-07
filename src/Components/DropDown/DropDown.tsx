import { useRef, useState } from "react"
import { DropDownItem } from "./DropDownItem/DropDownItem"
import styles from "./DropDown.module.css"

export const DropDown = ({ season }: { season: Season }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const contentRef = useRef<HTMLUListElement>(null)

	
	return (
		<div className={styles.DropDown}>
			<div className={styles.DropDown__title} onClick={() => setIsOpen(!isOpen)}>
				<span>{season.year}</span>
				<span>{isOpen ? "-" : "+"}</span>
			</div>
			<ul
				ref={contentRef}
				style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current?.scrollHeight + 25}px` : "0px" }}
				className={styles.DropDown__content}
			>
				{season.sessions.map((session: Session) => (
					<DropDownItem key={session.session_key} session={session} showYear={false} />
				))}
			</ul>
		</div>
	)
}

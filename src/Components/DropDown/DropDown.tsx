import { useEffect, useState } from "react"

export const DropDown = ({ season }: { season: Season }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	
	useEffect(() => console.log(isOpen), [isOpen])
	
	return (
		<div>
			<div onClick={() => setIsOpen(!isOpen)}>
				{season.year}
			</div>
			<div>
				<ul>
					{isOpen && season.sessions.map((session: Session) => (
						<li>{session.location}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

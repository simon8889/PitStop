import { useRef, useEffect, useState } from "react"
import Fuse from 'fuse.js'
import styles from "./Search.module.css"
import { DropDownItem } from "../DropDown/DropDownItem/DropDownItem"

export const Search = ({ sessionList }: { sessionList: Session[]}) => {
	const [ searchText, setSearchText ] = useState<string>("")
	const [ results, setResults ] = useState<Session[]>([])
	const resultsRef = useRef<HTMLDivElement>(null)
	
	const searchOptions = {
		keys: [
			"location",
			"country_name",
			{
				name: "year",
				getFn: (session: Session) => session.year.toString(),
			}
		],
	}
	
	const sessionSearch = new Fuse(sessionList, searchOptions)
	
	useEffect(() => {
		const matches = sessionSearch.search(searchText).map(match => match.item)
		setResults(matches.slice(0, 2))
	}, [searchText])

	return (
		<div className={styles.Search}>
			<input className={styles.Search__input} value={searchText} placeholder="Search" onChange={({ target }) => setSearchText(target.value.toLowerCase())} type="text"/>
			<div ref={resultsRef} className={styles.Search__results} 
				style={{ maxHeight: results.length > 0 && resultsRef.current ? `${resultsRef.current?.scrollHeight}px` : "0px" }}
			>
				{results && results.map(session => (
					<DropDownItem key={session.session_key} session={session} showYear/>
				))}
			</div>
		</div>
	)
}

import { useEffect, useState } from 'react'
import { useSession } from '../../Hooks/useSession'
import { DropDown } from '../DropDown'
import styles from './Nav.module.css'
import { Search } from '../Search'

export const Nav = () => {
    const [seasons, setSeasons] = useState<Season[]>()
    const [sessions, setSessions] = useState<Session[]>([])
    const sessionManager = useSession()

    useEffect(() => {
        fetch(`https://api.openf1.org/v1/sessions?session_name=Race`)
            .then(res => res.json())
            .then((data: Session[]) => {
                const sessions = data.reverse()
                setSeasons(formatSeason(sessions))
                setSessions(sessions)
                const lastSession = sessions[0]
                sessionManager.updateSession(lastSession)
            })
    }, [])
    
    const getEmptySeason = (year: number): Season => ({year: year, sessions: []})
    
    const formatSeason = (sessions: Session[]): Season[] => {
        const seasons: Season[] = []
        let currentSeason: Season = getEmptySeason(sessions[0]?.year)
        
        sessions.forEach(session => {
            if (session.year !== currentSeason.year){
                seasons.push(currentSeason)
                currentSeason = getEmptySeason(session.year)
            }
            currentSeason.sessions.push(session)
        })
        seasons.push(currentSeason)
        return seasons
    }
    
    return (
        <nav className={styles.Nav}>
            <h2 className={styles.Nav__title}>Seasons</h2>
            <Search sessionList={sessions} />
            <div className={styles.Nav__seasons}>
                { seasons && seasons.map((season: Season) => (
                    <DropDown key={season.year} season={season}/>
                ))}
            </div>
        </nav>
    )
}
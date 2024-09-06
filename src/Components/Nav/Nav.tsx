import { useEffect, useState } from 'react'
import { useSession } from '../../Hooks/useSession'
import { DropDown } from '../DropDown'

export const Nav = () => {
    
    const [sessions, setSessions] = useState<Session[]>([])
    const [seasons, setSeasons] = useState<Season[]>()
    const sessionManager = useSession()

    useEffect(() => {
        fetch(`https://api.openf1.org/v1/sessions?session_name=Race`)
            .then(res => res.json())
            .then((data: Session[]) => {
                setSessions(data.reverse())
                setSeasons(formatSeason(data))
            })
    }, [])
    
    useEffect(() => {
        const lastSession = sessions[0];
        sessionManager.updateSession(lastSession)
    }, [sessions])
    
    
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

    const handleSessionClick = (session: Session) => {
        sessionManager.updateSession(session)
    }
    
    return (
        <nav>
            <h2>Seasons</h2>
            <div>
                { seasons && seasons.map((season: Season) => (
                    <DropDown key={season.year} season={season}/>
                ))}
            </div>
        </nav>
    )
}
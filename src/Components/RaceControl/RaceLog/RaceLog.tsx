import { RaceLogTag } from '../../RaceLogTag'
import styles from './RaceLog.module.css'

export const RaceLog = ({ log }: { log: RaceLog}) => {
	
  return (
	<div className={styles.RaceLog}>
		<RaceLogTag log={ log }/>
		<span className={ styles.RaceLog__message }>{log.message}</span>
		<span className={ styles.RaceLog__lap}>{log.lap_number}</span>
	</div>
  )
}

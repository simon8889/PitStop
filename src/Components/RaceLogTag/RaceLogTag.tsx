import { useColors } from "../../Hooks/useColors"
import styles from "./RaceLogTag.module.css"

export const RaceLogTag = ({ log: {message, flag} }: { log: RaceLog}) => {
  const driverColors: DriverColor[] = useColors(state => state.colors)
  const getColorByDriver = (num: string): string => {
    return `#${driverColors.find(color => color.driver_number.toString() === num)?.team_colour}`
  }
  
  
  const regexCar = /CAR\s(\d+)\s/g
  const matchCar = regexCar.exec(message);
 
  const regexChequered = /CHEQUERED/;
  const matchChequered = regexChequered.exec(message)

  const incidentRegex = /TURN \d+ INCIDENT INVOLVING CARS (\d+) \(\w+\) AND (\d+) \(\w+\)/g;
  const matchIncident = incidentRegex.exec(message)

  const drsRegex = /DRS/;
  const  drsMatch = drsRegex.exec(message)
  
  let content = <span>!</span>
  let contentStyle: any = {
    "fontSize": "1.2rem",
    "background": "white",
    "color": "black"
  }
  
  if (matchCar){
    content = <span>{matchCar[1]}</span>
    contentStyle = {"background": getColorByDriver(matchCar[1])} 
  } else if (matchChequered) {
    content = <span>C</span>
    contentStyle = {
                  "background": `linear-gradient(45deg, black 25%, transparent 25%) 0 0,
                  linear-gradient(-45deg, black 25%, transparent 25%) 0 0,
                  linear-gradient(45deg, transparent 75%, black 75%) 0 0,
                  linear-gradient(-45deg, white 75%, black 75%) 0 0`,
                  "color": "black"
                }
  } else if (flag) {
    content = <span></span>
    contentStyle = { "background": flag }
  } else if (matchIncident) {
    content = <span>{matchIncident[1]} / {matchIncident[2]}</span>
    contentStyle = {
      "fontSize": "0.5rem",
      "background": `linear-gradient(-80deg , ${getColorByDriver(matchIncident[2])} 50%, ${getColorByDriver(matchIncident[1])} 50%)`
    }
  } else if (drsMatch) {
    content = <span>DRS</span>
    contentStyle = {
      "fontSize": "0.7rem",
      "background": "white",
      "color": "black"
    }
  }
  
  return (
	<div className={styles.DriverNumber} style={ contentStyle }>
    { content }
  </div>
  )
}
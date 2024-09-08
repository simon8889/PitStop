import CountryCodes from "./CountryCodes" 
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const CountryFlag = ({ countryCode }: { countryCode: string }) => {
	const countryClass = countryCode ? `fi fi-${CountryCodes(countryCode)?.toLowerCase()}` : "fi"

	return (
		<span className={ countryClass }></span>
	)
}

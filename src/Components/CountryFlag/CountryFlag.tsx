import CountryCodes from "./CountryCodes" 
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const CountryFlag = ({ countryCode }: { countryCode: string }) => {
	const countryCodeConverted = CountryCodes(countryCode)

	return (
		<span className={`fi fi-${countryCodeConverted?.toLowerCase()}`}></span>
	)
}

type Driver = {
	driver_number: string,
	broadcast_name: string,
	full_name: string,
	name_acronym: string,
	team_name: string,
	team_colour: string,
	first_name: string,
	last_name: string,
	headshot_url: string,
	country_code: string,
	session_key: number,
	meeting_key: number
}

type Session = {
  session_key: number;
  session_name: string;
  date_start: string; // ISO 8601 format
  date_end: string;   // ISO 8601 format
  gmt_offset: string; // Format "HH:MM:SS"
  session_type: string;
  meeting_key: number;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  circuit_key: number;
  circuit_short_name: string;
  year: number;
};

type Season = {
	year: number;
	sessions: Session[]
}

type RaceLog = {
  session_key: number;
  meeting_key: number;
  date: string;
  category: "Flag" | "Other" | "Drs" | string; // Categorías conocidas
  flag: "BLUE" | "GREEN" | null; // Banderas conocidas
  driver_number: number | null;
  lap_number: number | null;
  message: string;
  scope: string | null;
  sector: string | null;
}

type DriverColor = {
  driver_number: number;
  team_colour: string;
}
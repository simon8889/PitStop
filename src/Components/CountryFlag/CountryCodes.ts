const countryCodes: { [key: string]: string } = {
  ARG: "AR",  // Argentina
  AUS: "AU",  // Australia
  AUT: "AT",  // Austria
  AZE: "AZ",  // Azerbaijan
  BRN: "BH",  // Bahrain
  BEL: "BE",  // Belgium
  BRA: "BR",  // Brazil
  CAN: "CA",  // Canada
  CHN: "CN",  // China
  DNK: "DK",  // Denmark (Piloto)
  ESP: "ES",  // Spain
  FIN: "FI",  // Finland (Piloto)
  FRA: "FR",  // France
  DEU: "DE",  // Germany
  GBR: "GB",  // Great Britain
  HUN: "HU",  // Hungary
  IDN: "ID",  // Indonesia (Piloto)
  IND: "IN",  // India
  ITA: "IT",  // Italy
  JPN: "JP",  // Japan
  MON: "MC",  // Monaco
  MEX: "MX",  // Mexico
  MYS: "MY",  // Malaysia
  NED: "NL",  // Netherlands (Piloto)
  NZL: "NZ",  // New Zealand (Piloto)
  POL: "PL",  // Poland (Piloto)
  PRT: "PT",  // Portugal
  QAT: "QA",  // Qatar
  RUS: "RU",  // Russia
  KSA: "SA",  // Saudi Arabia
  SGP: "SG",  // Singapore
  ZAF: "ZA",  // South Africa
  KOR: "KR",  // South Korea
  SWE: "SE",  // Sweden (Piloto)
  CHE: "CH",  // Switzerland (Piloto)
  TUR: "TR",  // Turkey
  USA: "US",  // United States
  UAE: "AE",  // United Arab Emirates
  VEN: "VE"   // Venezuela (Piloto)
};


export default (alpha3Code: string): string | undefined => {
  return countryCodes[alpha3Code.toUpperCase()];
}
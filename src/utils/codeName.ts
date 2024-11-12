import countryCodes from "../data/countryCodes.json";

function codeName(countryCode: string) {
    if (countryCode) {
        let countryKeyCode = countryCode as keyof typeof countryCodes
        let name = countryCodes[countryKeyCode]
        return name
    }
    return "Unknown"
}

export default codeName;
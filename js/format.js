let shortCode = state => {
    switch (state) {
        case "alabama":
            return "AL";
            break;
        case "alaska":
            return "AK";
            break;
        case "arizona":
            return "AZ";
            break;
        case "arkansas":
            return "AR";
            break;
        case "california":
            return "CA";
            break;
        case "colorado":
            return "CO";
            break;
        case "connecticut":
            return "CT";
            break;
        case "delaware":
            return "DE";
            break;
        case "florida":
            return "FL";
            break;
        case "georgia":
            return "GA";
            break;
        case "hawaii":
            return "HI";
            break;
        case "idaho":
            return "ID";
            break;
        case "illinois":
            return "IL";
            break;
        case "indiana":
            return "IN";
            break;
        case "iowa":
            return "IA";
            break;
        case "kansas":
            return "KS";
            break;
        case "kentucky":
            return "KY";
            break;
        case "louisiana":
            return "LA";
            break;
        case "maine":
            return "ME";
            break;
        case "maryland":
            return "MD";
            break;
        case "massachusetts":
            return "MA";
            break;
        case "michigan":
            return "MI";
            break;
        case "minnesota":
            return "MN";
            break;
        case "mississippi":
            return "MS";
            break;
        case "missouri":
            return "MO";
            break;
        case "montana":
            return "MT";
            break;
        case "nebraska":
            return "NE";
            break;
        case "nevada":
            return "NV";
            break;
        case "new hampshire":
            return "NH";
            break;
        case "new jersey":
            return "NJ";
            break;
        case "new mexico":
            return "NM";
            break;
        case "new york":
            return "NY";
            break;
        case "north carolina":
            return "NC";
            break;
        case "north dakota":
            return "ND";
            break;
        case "ohio":
            return "OH";
            break;
        case "oklahoma":
            return "OK";
            break;
        case "oregon":
            return "OR";
            break;
        case "pennsylvania":
            return "PA";
            break;
        case "rhode island":
            return "RI";
            break;
        case "south carolina":
            return "SC";
            break;
        case "south dakota":
            return "SD";
            break;
        case "tennessee":
            return "TN";
            break;
        case "texas":
            return "TX";
            break;
        case "utah":
            return "UT";
            break;
        case "vermont":
            return "VT";
            break;
        case "virginia":
            return "VA";
            break;
        case "washington":
            return "WA";
            break;
        case "west virginia":
            return "WV";
            break;
        case "wisconsin":
            return "WI";
            break;
        case "wyoming":
            return "WY";
            break;
        default:
            return state
            break;
    }
}

let formatString = string => {
    let str = "";
    let split = string.split(" ");

    split.forEach(word => {
        let formatted = word.charAt(0).toUpperCase() + word.slice(1);
        str += " " + formatted;
    });

    return str;
}

let formatName = (first, last) => {
    return `${formatString(first)} ${formatString(last)}`;
}

let formatDOB = dob => {
    let month = dob.substring(5, 7);
    let day = dob.substring(8, 10);
    let year = dob.substring(2, 4);
    let date = `${month}/${day}/${year}`;
    return date;
}

let formatAddress = (street, city, state, post) => {
    let str = "";
    let abbreviate = formatString(state).toString()

    str += formatString(street);
    str += " " + formatString(city);
    str += ", " + shortCode(state);
    str += " " + post;
    return str
}

const Format = {
    name: formatName,
    dob: formatDOB,
    address: formatAddress,
    string: formatString,
}
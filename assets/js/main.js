let month = prompt ("enter a month");
let season = prompt ("enter a season");

const checkMonth = (month) => {
    switch (month) {
        case "12" :
            console.log ("december" + "," + "winter");
    break;
    case "11" :
            console.log ("november" + "," + "autumn");
    break;
    case "10" :
            console.log ("october" + "," + "autumn");
    break;
    case "9" :
            console.log ("september" + "," + "autumn");
    break;
    case "8" :
            console.log ("august" + "," + "summer");
    break;
    case "7" :
            console.log ("july" + "," + "summer");
    break;
    case "6" :
            console.log ("june" + "," + "summer");
    break;
    case "5" :
            console.log ("may" + "," + "spring");
    break;
    case "4" :
            console.log ("april" + "," + "spring");
    break;
    case "3" :
            console.log ("march" + "," + "spring");
    break;
    case "2" :
            console.log ("february" + "," + "winter");
    break;
    case "1" :
            console.log ("january" + "," + "winter");
    break;
    default :
    console.log ("wrong data");
    
    }
}


const checkSeason = (season) => {
    switch (season) {
        case "12" :
            console.log ("winter");
    break;
    case "11" :
            console.log ("autumn");
    break;
    case "10" :
            console.log ("autumn");
    break;
    case "9" :
            console.log ("autumn");
    break;
    case "8" :
            console.log ("summer");
    break;
    case "7" :
            console.log ("summer");
    break;
    case "6" :
            console.log ("summer");
    break;
    case "5" :
            console.log ("spring");
    break;
    case "4" :
            console.log ("spring");
    break;
    case "3" :
            console.log ("spring");
    break;
    case "2" :
            console.log ("winter");
    break;
    case "1" :
            console.log ("winter");
    break;
    default:
        console.log ("wrong data");
    
    }
}


checkMonth (month);
checkSeason (season);



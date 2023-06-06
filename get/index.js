let url = window.location.href;
let segments = url.split("/");
let destiny = segments[4];
console.log(destiny);
switch (destiny) {
    case "notion": 
        window.location = "https://affiliate.notion.so/obteo";
        break;
        
    case "streak": 
        window.location = "https://get.streak.com/obteo";
        break;

    case "process": 
        window.location = "https://get.process.st/obteo";
        break;
    
    case "landbot": 
        window.location = "https://get.landbotlab.com/obteo";
        break;
    
    case "tugan": 
        window.location = "https://www.tugan.ai/?via=obteo";
        break;
        
    default:
        window.location = "https://obteo.com";
        break;
}
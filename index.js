function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const returnValue = string.toUpperCase();
    console.log(returnValue);
}

function logWhisper(string) {
    const returnValue = string.toLowerCase();
    console.log(returnValue)
}

function sayHiToHeadphonedRoommate(string) {
        
    if(string === string.toLowerCase()) {
        return "I can't hear you!" 
    }

    if(string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    
    if(string === "Let's have dinner together!"){
        return "I would love to!";
    }
}
function shout(string) {
    return string.toUpperCase();
}
//"Hello!".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
//"HELLO".toLowerCase(); 
/*
const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

string === string.toUpperCase(); */

function logShout(string) {
    console.log(string);
    console.log(string.toUpperCase());

    string === string.toUpperCase();
}

function logWhisper(string) {
    console.log(string);
    console.log(string.toLowerCase());

    string === string.toLowerCase();
}
/*const lowCase = "hello";
const highCase = "HELLO";
const wordCase = "Let's have dinner together!"

function sayHiToHeadphonedRoomate(string) {
   if (string.toLowerCase(lowCase) === string) {
       return "I can't hear you!";
   } 
   if(string.toUpperCase(string) === string) {
       return "YES INDEED!";
   }
   if (string === "Let's have dinner together!"){
       return "I would love to!";
   }
   }
*/

function sayHiToHeadphonedRoomate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    }
    if (string.toUpperCase() === string) {
        return "YES INDEED!"
    }if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
        
    }
    




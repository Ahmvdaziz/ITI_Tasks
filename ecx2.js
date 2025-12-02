var input = prompt("Enter a sentence:");

while (input === null|| input.trim()==="" || !isNaN(input)) {
    input = prompt("What ? Plz Enter a valid string ");
}

input = input.trim();
function toTitleCase(str) {
     var words=str.split(" ");
    for (var i=0;i<words.length;i++) {
        if (words[i]!=="") {
            var fLiterr=words[i].charAt(0).toUpperCase();
            var Last=words[i].substr(1).toLowerCase();
            words[i]=fLiterr+Last;
        }
    }
    return words.join(" ");
}

var result = toTitleCase(input);
console.log("Res :", result);

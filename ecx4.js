do {
    var input = prompt("Please Enter a string to find the big one ");
} while (input === "" || input === null);

function longest(input) {
    if (input) {
        var sen = input.split(" ");
        var longestOne = sen[0];
        for (var i = 1; i < sen.length; i++) {
            if (sen[i].length > longestOne.length) {
                longestOne = sen[i];
            }
        }
        console.log("Longest Word:", longestOne);
    }
}

longest(input);

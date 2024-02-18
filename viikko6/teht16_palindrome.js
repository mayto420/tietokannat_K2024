const prompt = require('prompt-sync')();

function checkPalindrome() {
    var word = prompt("Insert word: ");

    var len = word.length;

    for (i = 0; i < len; i++) {
        if (word[i] != word[len-i-1]) {
            console.log("word is not a palindrome.");
            break;
        } else if (i == len - 1) {
            console.log("word is a palindrome.");
        }
    }
}

checkPalindrome();

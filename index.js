function isPalindrome(word) {
  let reversedWord = word.split("").reverse();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== reversedWord[i]) {
      return false;
    } else{
      return true;
    }
  }

}


if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



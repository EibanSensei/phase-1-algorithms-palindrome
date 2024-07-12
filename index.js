function isPalindrome(word) {
  let wordArray = word.split('')
  let compareArray = wordArray.slice().reverse()
  console.log(wordArray)


  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] !== compareArray[i]) {
      return false
    }
  }

  return true
}

/* 
  First, i'm going to split my word into an array. 
  Then I'll iterate through comparing the current index to the same index of the reversed array.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

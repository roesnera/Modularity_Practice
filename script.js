
// Example of callback functions and modularity


// reverses and returns a string input
let reverse = str => {
    let splitArr = str.split('');
    let reverseArr = splitArr.reverse();
    let newStr = reverseArr.join('');
    return newStr;
}


// scrambles and returns a string based on our 'cipher'
let cipher = str => {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let lettersLength = letters.length;
    let splitArr = str.split('');
    let temp = '';
    let ind = null;
    let newArr = [];
    for(i=0;i<splitArr.length;i++){
        if(letters.includes(splitArr[i])){
        ind = letters.indexOf(splitArr[i]) + 1;
        temp = letters[lettersLength - ind];
        } else temp = splitArr[i];
        newArr[i] = temp;
    }
    newArr = newArr.join('');
    return newArr;
}

// returns user input as a string
const userChoice = () => prompt("Please enter \'1\' to reverse a string and \'2\' to use the cipher.")


// calls a chooser function to determine whether it should call the first callback function or the second callback function.
// calls the appropriate function.
// returns a string.
const stringAccesser = function(callback1, callback2, chooser = userchoice){

    let choice = chooser();  // assigned to the return value of userChoice()
    
    // input validation
    if(choice !== '1' && choice !== '2'){
        return 'invalid input'
    }

    // declare callback variable to hold the chosen callback function
    let callback;
    if(choice === '1'){
        callback = callback1;
    } else callback = callback2;

    // saves user input string to pass to our callback function
    let str = prompt("Please enter a string to change: ");

    // passes str to our callback function and returns the value
    str = callback(str);
    return str
}

// calls our stringAccesser function with reverse, cipher, and userChoice passed in as callback function arguments
let finalString = stringAccesser(reverse, cipher, userChoice);
// logs our mutated string to the console
console.log(finalString);

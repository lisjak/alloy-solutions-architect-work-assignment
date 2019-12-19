// ======== OBJECTIVE ==========================
// The following JS function is very broken.Please fix and comment!
// (Hint: It's supposed to count up to the defined limit)

// ======== BROKEN CODE WITH COMMENTS ===========

function alloyCounter(num) {
    var limit = 100;
    match = 1; //no need to define match variable

    while (num != limit) num++​match; // missing brackets; num++match is not valid; simply use num++ or num +=1
    if (num == 95) { // use triple equals 
        num = 10; // no need for this if statement; incorrect logic 
    }
} // return statement outside of function's closing bracket

return (num) // missing opening bracket
}

var result = alloyCounte(0); //misspelled function, will not invoke

// ======== FIXED CODE WITH COMMENTS VER1 ===========

function alloyCounter(num) { // the function accepts an input number known as num
    let limit = 100; // the limit is hard-coded as 100
    for (let i = num; i <= limit; i++) { //a loop in which the number is increased by one runs so long as the number, now defined as i, continues to be less than or equal to the limit of 100
        console.log(i); // console.log prints the number 
    } // the for loop is closed
} // the function is closed

alloyCounter(0); // the function is invoked with the parameter of 0

// ======== FIXED CODE WITH COMMENTS VER2 ===========

function alloyCounter(num, lim) { // the function accepts an input number known as num and a custom input limit known as lim
    let limit = lim; // the limit is defined as the custom input
    for (let i = num; i <= limit; i++) { //a loop in which the number is increased by one runs so long as the number continues to be less than or equal to the defined limit 
        console.log(i); // console.log prints the number 
    } // the for loop is closed
} // the function is closed

alloyCounter(0, 100); //the function is invoked with a starting number of 0 and a custom limit of 100
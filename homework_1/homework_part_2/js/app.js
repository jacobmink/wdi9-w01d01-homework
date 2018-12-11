// HOMEWORK PART 2
// PART 1
// 1) Concatenation is the stringing together of data such as strings, whereas interpolation 
//      is inserting a variable into the middle of a string.
// 2) DRY stands for "Don't Repeat Yourself". This is an important concept to keep code clean
//      and efficient. Functions are a great way to make code DRY.
// 3) Declaring a variable is the act of creating a variable with a name. Assigning a value to
//      a variable is then taking that declared variable and setting it equal to some value.
// 4) We can use const for variables that will not be altered within the global scope of the code.
//      We use let for variables that will be changed in the code.
// 5) A parent directory is the folder within which a child directory or files are contained.
// 6) Use the "man" command in Terminal to read the manual for any Unix command.
// 7) Tab completion is starting to type something in Terminal or a text editor and then pressing
//      tab. If the function, file, etc. is known by the program, it will autocomplete typing.
//      This saves a lot of time when coding.

// PART 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
/* 1) */  console.log(a < b);
/* 2) */ console.log(c > d);
/* 3) */ console.log('Name' === 'Name');
/* 4) */ console.log(a < b < c);
/* 5) */ console.log(a * a == d);
/* 6) */ console.log(e == 'Kevin');
/* 7) */ console.log(48 == '48');

// PART 3
// 1) This is an infinite loop. There is nothing in the loop that changes the true statement, 
//      so the while loop will always run.
// 2) This is not an infinite loop. After the loop runs once, runProgram is redefined as false,
//      so the program will be kicked out of the while loop. The output will be a console log
//      of 'Do not run this loop' once.
// 3) 
// This line assigns the value "A" to the variable 'letters'
let letters = "A";
// This initializes the variable 'i' at 0
let i = 0;

// The starts a loop that will continue as long as i is less than 20
while (i < 20) {
    // this is an alternate way to write letters = letters + "A". It will concatenate an "A" onto letters
    letters += "A";
    // this means i = i + 1, and will increase the value of i at each iteration of the while loop
	i++;
}
// this prints the value of letters to the console
console.log(letters);

// After running the code, it gave me the expected result of "A" 20 times.

// PART 4
// 1) With for loops, the loop will run for a specific number of iterations defined at the start.
//      With while loops, the loop will run until a condition is no longer met.
// 2) 
for (let i = 0; i <= 999; i++) {
    console.log(i);
}
// 3) The first part of the control statement is the initialized iterator value.
//      The second part is the max number of iterations.
//      The third part is the step size of the iterator value.
// 4)
for (let i = 999; i >= 0; i--) {
    console.log(i);
}
// 5) 
for (let i = 1; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}
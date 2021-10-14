//Assign userName to an empty string
let userName = '';
//Print to console using tenary expressions
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
//Assign a question to the variable userQuestion
const userQuestion= 'Who am I?';
// Print out the question asked by the user
console.log(`The question asked by the user was: ${userQuestion}`);

//create a variable and assign it a value.
let randomNumber= Math.floor(Math.random()*8);

//create a variable and assign it to an empty string
let eightBall = '';

// switch statement to control flow
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;

  case 1:
    eightBall = 'It is decidedly so';
    break;

  case 2:
    eightBall = 'Reply hazy try again';
    break;

  case 3:
    eightBall = 'Cannot predict now';
    break;
  
    case 4:
    eightBall = 'Do not count on it';
    break;

  case 5:
    eightBall = 'My sources say no';
    break;

  case 6:
    eightBall = 'Outlook not so good';
    break;

  case 7:
    eightBall = 'Signs point to yes';
    break;
}
//Print value of eightBall
console.log(eightBall);
const userName = prompt('Enter your name');
const greetings = 'Hello ' + userName;
alert(greetings);

const loveQuestion = parseInt(prompt('Do you love Nazarko? Write 1 if yes, 2 if no'));
if (loveQuestion === 1) {
    alert('Nazarko love you too');
} else {
    alert('Why?');
}
const loveStrong = parseInt (prompt('How strong do you love Nazarko. Please write number'));
const myLoveStrong = loveStrong + 1;
alert('Nazarko love you stronger - ' + myLoveStrong + ' =P');

const userNumberMonth = parseInt(prompt('Please enter number of your month b-day'));
const halfUserNumberMonth = userNumberMonth / 2;
alert('half of your number month is ' + halfUserNumberMonth);

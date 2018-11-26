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

function  solveQuadrEq(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d))/(2*a);
        const x2 = (-b - Math.sqrt(d))/(2*a);
        return 'x1 = ' + x1 + ' x2 = ' + x2;
    } else if (d === 0) {
        const x = -(b/(2*a));
        return 'x = ' + x;
    } else {
        return 'No solutions';
    }
}





function calcDiscr(a, b, c) {
    const d = (b*b) - 4*a*c; 
    return d;
}

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
if (a === 0) {
    alert('Please write a > 0');
} else {
    const solutions = solveQuadrEq(a, b, c);
    alert(solutions);
}



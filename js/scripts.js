var value = prompt('Enter value - please, only numbers (or not)!');

var isNumber = Number(value);

if (Number.isInteger(isNumber)) {
    var a = 3,
    b = 5,
    c = 10,
    score = (a * value) - (8 * a * b) + (b * b);

    if (score > 0) {
        alert('Score is ' + score + ' and that is more than zero.');
        console.log('Score is ' + score + ' and that is more than zero.');
    }
    else if (score < 0) {
        alert('Score is ' + score + ' and that is less than zero.');
        console.log('Score is ' + score + ' and that is less than zero.');
    }
    else if (score == 0) {
        alert('Score is equal to zero');
        console.log(score);
    }
    else {
        alert('Score is beyond math and something went wrong!');
        console.log('Score is beyond math and something went wrong!');
    }
}
else {
    alert('Michał mówi, że nie wie');
}

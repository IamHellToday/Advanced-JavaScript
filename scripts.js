//1st
const Hello = 'Hello';
const World = 'World!';
const HelloWorld = `${Hello} ${World}`
console.log(HelloWorld);

//2nd
const multiply = (a, b = 1) => {return a / b};

console.log(multiply(1, 6));
console.log(multiply(2));
console.log(multiply(6, "6"));//zwraca 1 -?


//3rd
//Array way
const numbers = [1, 5, 2, 6, 1235, 12];
let totalNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    totalNumbers += numbers[i];
};
console.log(totalNumbers);
const average = () => {return totalNumbers/numbers.length}; 
console.log(average());
//Arguments way
const averageNumber = (a, b, c, d) => {return (a + b + c + d) / 4};
console.log(averageNumber(1, 2, 3, 4));

//4th
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
let totalGrades = 0;
for (let i = 0; i < grades.length; i++) {
    totalGrades += grades[i];
};
const averageGrades = () => {return totalGrades / grades.length};
console.log(averageGrades());
//Spread way?


//5th
const weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = weirdArray;
console.log(`${firstName} ${lastName}`);

//Codewars 
//1
const buildString = (...template) => {return `I like ${template.join(', ')}!`
};
//2
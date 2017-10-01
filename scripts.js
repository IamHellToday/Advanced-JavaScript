// Moje próby ze switchem

var maleArray = ['John', 'Joe', 'Jack'];
    femaleArray = ['Kat', 'Lindsay', 'Annie'];
    allNamesArray = maleArray.concat(femaleArray);

console.log(allNamesArray);

var maleArrayExtended = maleArray.push('Marian')

console.log(maleArray);

var name = '';
      switch (name) {
        case 'Marian':
var maleWithoutMarian = maleArray.filter(function(name) {
       return name != 'Marian';
    });
    break;
      }
console.log(maleArray);

// Wersja z funkcjami poniżej

var namesAbleToRemove = ['Marian', 'Marek'];
var allNames = ['Marian', 'Jacek', 'Prezes'];

//   funkcja do sprawdzenia czy i jesli tablica namesAbleToRemove zawiera w sobie 'Prezesa'
//   literalnie czyt. jesli tablica zwraca -1(rozny od -1 czyli jest obecny, bo jak by bylo -1 to by go nie bylo w tablicy)
//   to tego elementu nie ma w niej, jesli jest to zwroci 1. W tym przypadku mowa o sytuacji, gdzie jest zaprzeczeniem nieobecnosci
//   czyli !== -1 oznacza obecnosc elementu w tablicy. Jesli zwroci rozne od -1 to jest i mozna go wywalic, jesli zwroci -1 to nie mozna bo go nie ma.
function getArrWithoutName (name) {
  if (namesAbleToRemove.indexOf(name) !== -1) {
    return allNames.filter(function(i) {return i !== name});
  }
  return allNames;
}

function addNameAbleToRemove(name) {
  namesAbleToRemove.push(name)
}

console.log(getArrWithoutName('Prezes'));
addNameAbleToRemove('Prezes');
console.log(getArrWithoutName('Prezes'));

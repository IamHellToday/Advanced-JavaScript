var namesAbleToRemove = ['Marian', 'Marek'];
var allNames = ['Marian', 'Jacek', 'Prezes'];

function getArrWithoutName (name) {
  if (namesAbleToRemove.indexOf(name) !== -1) {
    return allNames.filter(function(item) {
      return item !== name;
    });
  }
  return allNames;
}

console.log(getArrWithoutName('Prezes'));
namesAbleToRemove.push('Prezes');
console.log(getArrWithoutName('Prezes'));
// Różny od -1;
// indexOf('Prezes') = 2;
// 2 !== -1;
// True;
// Filtrowanie tablicy i porównanie z 'Prezesem'
// Zwracanie tablicy bez Prezesa.

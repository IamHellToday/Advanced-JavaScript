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

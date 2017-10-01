var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
    dinosaur = 'Triceratops';

var dinosaurUppercased = dinosaur.toUpperCase();
console.log(dinosaurUppercased)

var velociraptorOut = text.replace('Velociraptor', dinosaur);
console.log(velociraptorOut)

var velociraptorLength = velociraptorOut.length;
console.log(velociraptorLength)

var halfOfVelociraptorOut = velociraptorOut.slice(0, 72);
console.log(halfOfVelociraptorOut)

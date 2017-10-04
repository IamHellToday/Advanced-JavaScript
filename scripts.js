let list = document.getElementById('list');
let add = document.getElementById('addElem');
debugger;

add.addEventListener('click', function() {
    let element = document.createElement('li');
    debugger;
    let arrayOfLi = document.getElementsByTagName('Li').length;
    debugger;
    
    element.innerHTML = `item  ${arrayOfLi}`;
    debugger;
    list.appendChild(element);
    debugger;
});


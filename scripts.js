var iterationOnDom = function () {
    var variableWithElements = document.getEelementsByClassName("button");
    var lenghtOfvariableWithElements = variableWithElements.length;
    
    for (var i = 0; i < lenghtOfvariableWithElements; i++) {
        alert(variableWithElements.innerText);
    }
        
};
console.log(iterationOnDom());

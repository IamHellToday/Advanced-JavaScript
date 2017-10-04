var iterationOnDom = function () {
    var variableWithElements = document.querySelectorAll(".button");

    for (var i = 0; i < variableWithElements.length; i++) {
        console.log(variableWithElements[i].innerText);
    }      
};
iterationOnDom();

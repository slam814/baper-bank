function getInputFildValueById(inputfild){
    const inputFild = document.getElementById(inputfild);
    const inputString = inputFild.value;
    const inputValueNumber = parseFloat(inputString)
    inputFild.value = '';
    return inputValueNumber;
    

}



function getTextElementValueById(elementId){
    const getElement = document.getElementById(elementId);
    const elementString = getElement.innerText;
    const elmentConvertStringToNumber = parseFloat(elementString);
    return elmentConvertStringToNumber;
}

function setElementValueById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
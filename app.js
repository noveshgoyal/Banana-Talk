var btnTranslate = document.getElementById('btn-translate');
var inputText = document.getElementById('input-text');
var output = document.getElementById('translated-txt');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return `${serverURL}?text=${input}`
} 

function errorHandler(error){
    console.log("error occured " + error);
    alert("There is an error in the server try after sometime!");
}

function clickHandler(){
    const txtInput = inputText.value;

    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        const translatedTxt = json.contents.translated;
        output.innerText = translatedTxt ;    
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
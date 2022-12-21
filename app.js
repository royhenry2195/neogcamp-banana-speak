var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error){
    console.log("error occured" , error);
}

function getTranslateUrl(text){
    return serverUrl + "?text=" + text; 
}

function clickEventHandler(){
    // console.log("clicked");
    //  console.log("input : " , txtInput.value);
     //outputDiv.innerText = "asasasasasasas " + txtInput.value;

     var textInput = txtInput.value;

     fetch(getTranslateUrl(textInput))
     .then(response => response.json())
     .then(json => {
            var result = json.contents.translated;
            outputDiv.innerText =result;
     })
     .catch(errorHandler)
}


btntranslate.addEventListener("click" , clickEventHandler); 
   

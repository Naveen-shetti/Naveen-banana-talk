var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslatedURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickHandler() {
  var inputTxt = txtInput.value;

  fetch(getTranslatedURL(inputTxt))
    .then((Response) => Response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      outputDiv.innerText = translatedTxt;
    });
}

btnTranslate.addEventListener("click", clickHandler);

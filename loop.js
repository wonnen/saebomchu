var onoff = true;

function translation(msg){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/language/translate/v2?q="+ msg +"&target=en&source=ko&key=~your key~", false);
    xhr.send();
    return xhr.responseText;
}

function loop(){
    setTimeout(function() {
        var texts = document.getElementsByClassName("text-fragment");
        for(var j = 0; j < texts.length; j++){
            if(texts[j].id == "translated"){
                continue;
            }else{
                if(onoff == false){
                    break;
                }
                var translated = translation(texts[j].innerHTML);
                translated = translated.substring(translated.indexOf("translatedText\": \"")+18, translated.length-18);
                texts[j].innerHTML = texts[j].innerHTML + "<p style=\"color:blue;\">　\"" + translated + "</p>";
                texts[j].setAttribute("id", "translated");
            }
        }
        loop();
    }, 1000);
}

loop();

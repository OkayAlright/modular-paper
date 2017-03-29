function inBlank(item){
    return item != "";
}

function wordReverse(word){
    if(Math.random() > 0.95){
        wordAsArray = word.split("");
        if(wordAsArray[wordAsArray.length-1] == "."){
            return wordAsArray.splice(0,(wordAsArray.length - 1)).reverse().join("") + ".";
        } else {
            return wordAsArray.reverse().join("");
        }
    } else {
        return word
    }
}

function sentenceReverse(text){
    return text.split(" ").filter(isBlank).map(wordReverse).join(" ");
}



setTimeout(function(){setInterval(function(){document.getElementById("flip").innerHTML = sentenceReverse(document.getElementById("flip").innerHTML)},1000)},6000)
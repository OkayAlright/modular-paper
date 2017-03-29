
function isBlank(item){
    return item != "" ;
}

function shuffleWordsFromText(text){
    return text.split(" ").filter(isBlank).map(shuffleWord).join(" ");
}

function shuffleWord(word){
    // from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    if(Math.random() > 0.98){
        var j, x, i;
        var a = word.split("");
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
        return a.join("")
    } else {
        return word
    }
}
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle1").innerHTML = shuffleWordsFromText(document.getElementById("shuffle1").innerHTML)},500)},5000)
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle2").innerHTML = shuffleWordsFromText(document.getElementById("shuffle2").innerHTML)},500)},10000)
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle3").innerHTML = shuffleWordsFromText(document.getElementById("shuffle3").innerHTML)},500)},10000)
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle4").innerHTML = shuffleWordsFromText(document.getElementById("shuffle4").innerHTML)},500)},5000)
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle5").innerHTML = shuffleWordsFromText(document.getElementById("shuffle5").innerHTML)},500)},5000)
setTimeout(function(){ setInterval(function(){document.getElementById("shuffle6").innerHTML = shuffleWordsFromText(document.getElementById("shuffle6").innerHTML)},500)},5000)

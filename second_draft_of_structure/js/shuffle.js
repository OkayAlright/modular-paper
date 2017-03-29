
function isBlank(item){
    return item != "" ;
}

function shuffleWordsFromText(text){
    return text.split(" ").filter(isBlank).map(shuffleWord).join(" ");
}

function shuffleWord(word){
    // adapted from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    var excluded_words = ["<br>","<p>","</p>"];
    
    if((Math.random() > 0.98) && (word.match("<br>|<p>|</p>") == null)){
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

setInterval(function(){
    document
    .getElementById("python_shuffle_1")
    .innerHTML = shuffleWordsFromText(document.getElementById("python_shuffle_1").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("python_shuffle_2")
    .innerHTML = shuffleWordsFromText(document.getElementById("python_shuffle_2").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("shuffle_csharp")
    .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_csharp").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("shuffle_code")
    .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_code").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("shuffle_sound")
    .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_sound").innerHTML)
},500)


setInterval(function(){
    document
    .getElementById("shuffle_phil_1")
    .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_phil_1").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("shuffle_phil_2")
    .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_phil_2").innerHTML)
},500)

setInterval(function(){
    document
    .getElementById("title")
    .innerHTML = shuffleWordsFromText(document.getElementById("title").innerHTML)
},500)

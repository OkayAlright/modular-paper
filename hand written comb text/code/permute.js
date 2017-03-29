
function isBlank(item){
    return item != ""
}

function mapPermute(sentence){
    permutation = sentence.split(" ").filter(isBlank).map(permuter)
    result = permutation.join(" ")
    return result
}

function containsPunc(item){
    periodResult = item.indexOf(".")
    commaResult = item.indexOf(",")
    if((periodResult == -1) && (commaResult == -1)){
        return false
    } else {
        return true
    }
}

function permuter(word) {
    if((containsPunc(word))||(Math.random() < 0.95)){
        return word;
    }
    var holder = "";
    var ind=0;
    var gate=0;
    var next = 0;
    var permuda = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    word = word.toLowerCase();
    var polygon = [];
    for (ind=0; ind<word.length;ind++) {
        polygon[ind] = word.charCodeAt(ind) - 97;
    }
    if (polygon[polygon.length-1]<25) {
        polygon[polygon.length-1]++;}
    else {
        polygon[polygon.length-1]=0;
        for (ind = polygon.length-2; ind>-1; ind--){
            if(polygon[ind]<25) {polygon[ind]++; gate++; break;}
            else {polygon[ind]=0;}
        }
        if (gate==0) {polygon.unshift(0);}
    }
    holder = permuda[polygon[0]];
    for(ind = 1; ind < polygon.length; ind++) {
        holder= holder + permuda[polygon[ind]];
    }
    return holder;
}


setTimeout(function(){ setInterval(function(){document.getElementById("permute").innerHTML = mapPermute(document.getElementById("permute").innerHTML)},500)}, 5000)
            
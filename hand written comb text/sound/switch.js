var switch1 = ["get","like"];
var switch2 = ["is overwhelming","has no point","is just orderly noise"];
var switch3 = ["think straight","stand it"];
var switch4 = ["drown in","get lost in","feel choked by"];
var switch5 = ["architect","engineer"];
var switch6 = ["it doesn't work","you did something wrong"];
var switch7 = ["car horn","bang","crash","scream"];
var switch8 = ["yelling","shattering","trains","hammering"];
var switch9 = ["Music","Sound","Noise"];
var switch10 = ["you","me"];

function chooseFromList(list_of_choices){
    return list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
}
function get_and_switch(list_of_choices,id_tag){
    if(Math.random() > 0.9){
        document.getElementById(id_tag).innerHTML = chooseFromList(list_of_choices)
    }
}

setInterval(function(){get_and_switch(switch1,"switch1")},500)
setInterval(function(){get_and_switch(switch2,"switch2")},500)
setInterval(function(){get_and_switch(switch3,"switch3")},500)
setInterval(function(){get_and_switch(switch4,"switch4")},500)
setInterval(function(){get_and_switch(switch5,"switch5")},500)
setInterval(function(){get_and_switch(switch6,"switch6")},500)
setInterval(function(){get_and_switch(switch7,"switch7")},500)
setInterval(function(){get_and_switch(switch8,"switch8")},500)
setInterval(function(){get_and_switch(switch9,"switch9")},500)
setInterval(function(){get_and_switch(switch10,"switch10")},500)


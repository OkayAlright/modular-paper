var switch1 = ["We have to learn cursive","They say we have to learn cursive"];
var switch2 = ["going to be up all night doing","never going to be able to do","going to figure out how to do"];
var switch3 = ["Who came up with the cursive letter for uppercase 'G's? What <br/>is wrong with them?","Who in their right mind thought cursive-uppercase 's' as still okay when <br/> the ampersand was created?"];
var switch4 = ["am I spending","do I have to spend"];
var switch5 = ["Why are they","Why am I"];
var switch6 = ["I want to cry.", "I think I am going to cry.", "I am crying."];


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


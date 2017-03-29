var switch1 = [" Mr O. wants me to copy more code "," I have to write more code"]; 
var switch2 = [" I want to enjoy this, but I don't understand what is happening."," I was working on making the zombies move, I think."]; 
var switch3 = [" they don't know how to either"," If I can figure it out, anyone should be able to"]; 
var switch4 = [" understandable "," unreadable "]; 
var switch5 = [" Oh, the zombies are chasing me"," Holy shit, the zombies are moving"]; 
var switch6 = [" How"," Why"]; 
var switch7 = [" I am really lost now. "," Oh, I get it."]; 
var switch8 = [" How does the code know who the player is? "," How do they know to get around walls? "," Why does this really work though? "," Why does this work on all of them at once? "," Why do they seem so fast? "," How did the tutorial come up with this? "," Do AI in other games work this way? "," How do I get them to be animated so they don't just slide towards me?"]; 



function chooseFromList(list_of_choices){
    return list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
}
function get_and_switch(list_of_choices,id_tag){
    if(Math.random() > 0.9){
        document.getElementById(id_tag).innerHTML = chooseFromList(list_of_choices)
    }
}


setInterval(function(){get_and_switch(switch1,"switch1")},500);
setInterval(function(){get_and_switch(switch2,"switch2")},500);
setInterval(function(){get_and_switch(switch3,"switch3")},500);
setInterval(function(){get_and_switch(switch4,"switch4")},500);
setInterval(function(){get_and_switch(switch5,"switch5")},500);
setInterval(function(){get_and_switch(switch6,"switch6")},500);
setInterval(function(){get_and_switch(switch7,"switch7")},500);
setInterval(function(){get_and_switch(switch8,"switch8")},500);
setInterval(function(){get_and_switch(switch9,"switch9")},500);
setInterval(function(){get_and_switch(switch10,"switch10")},500);

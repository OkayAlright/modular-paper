var switch1 = [" I don't want to be here."," Pops should have been here."]; 
var switch2 = [" I guess we wouldn't all be here if they were around."," Though I guess we are only here because of them."]; 
var switch3 = [" Now pops and grandma both overlook the Delaware."," Now they are both in the ground."]; 
var switch4 = [" They must have forgotten about it. "," I am so hungry."," In fact, that is what I am wondering."," Whatever it doesn't matter."," Actually, no, they would probably ask about why my sister hasn't settled down yet."]; 
var switch5 = [" I don't have a good memory of her."," She died before I got to know her."," The medicine wiped my memory."," I was too young when she passed."]; 
var switch6 = [" Watching him build a bar and how proud he was when he finished. "," The car crash we were both in together."," The dinners I had with him."];
var switch7 = [ " All of those Christmases and Thanksgivings."," When I was a messager between him and my father during an argument."," How we would discuss college and my what classes I was taking."];
var switch8 = [" All of the symphonies we went to together. "," How kind he was when my father was in the hospital."," When I was his pallbearer..."];



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


//found code: http://stackoverflow.com/questions/5708784/how-do-i-choose-a-random-value-from-an-array-with-javascript

function chooseFromList(list_of_choices){
    return list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
}
function get_and_switch(list_of_choices,id_tag){
    if(Math.random() > 0.9){
        document.getElementById(id_tag).innerHTML = chooseFromList(list_of_choices)
    }
}

var switch1 = ["Did I really spend eleven years reading nonsense words to figure out how to spell to get stuck on this?","I really spent eleven years reading nonsense words to figure out how to spell to get stuck on this."]

var switch2 = ["Maybe they were right, I am going to be a gas station attendent. They told me otherwise, but I know.","Maybe I was right, I am going to be a gas station attendent. They knew."]

var switch3 = ["I can figure this out","I cannot figre this out"]

var switch4 = ["I mean, I know I didn't do much reading in highschool nor did I do very much math, but this should be simple. Maybe this is why Mr. O said he couldn't teach me programming, he never was able to learn.","I mean, I know I did not read in highschool nor did I do very much math, but this is hard. Maybe this is why Mr. O said he couldn't teach me programming, he didn't want to waste the time."]

var switch5 = ["Jim","Mom","Dad","Matan","Pops","Grandma","Emily"]

var switch6 = ["I am worse than before.","I am no better than I was."]

var switch7 = ["Wait, it worked...it actually worked.Let me try it again.","Wait, it worked...why did it work? Let me try it again."]

var switch8 = ["Fuck, why didn't that work.","Fuck, why can't I do this."]

setInterval(function(){get_and_switch(switch1,"switch1")},500)
setInterval(function(){get_and_switch(switch2,"switch2")},500)
setInterval(function(){get_and_switch(switch3,"switch3")},500)
setInterval(function(){get_and_switch(switch4,"switch4")},500)
setInterval(function(){get_and_switch(switch5,"switch5")},500)
setInterval(function(){get_and_switch(switch6,"switch6")},500)
setInterval(function(){get_and_switch(switch7,"switch7")},500)
setInterval(function(){get_and_switch(switch8,"switch8")},500)

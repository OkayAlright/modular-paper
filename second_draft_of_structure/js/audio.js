var audio_for_eval_1 = new Audio("");
var audio_for_eval_2 = new Audio("sound/ManMan - Feathers.mp3");
var audio_for_eval_3 = new Audio("sound/ManMan - Feathers.mp3");
var audio_for_eval_4 = new Audio("sound/ManMan - Feathers.mp3");
var audio_for_eval_5 = new Audio("sound/ManMan - Feathers.mp3");
var audio_for_budride = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_badfood = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_sequences = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_grandparents = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_csharp = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_python = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_sound = new Audio("sound/ManMan - Feathers.mp3"); //
var audio_for_dreams2 = new Audio("sound/ManMan - Feathers.mp3"); //
var blank = new Audio();

var active_audio = audio_for_eval_1;

function activate_audio(name){
    active_audio.pause();
    active_audio.currentTime = 0;
    active_audio = name;
    setTimeout(function () {      
        active_audio.play();
    }, 200);
}











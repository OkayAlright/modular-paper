var audio_for_eval_1 = new Audio();
var audio_for_eval_2 = new Audio();
var audio_for_eval_3 = new Audio();
var audio_for_eval_4 = new Audio();
var audio_for_eval_5 = new Audio();
var audio_for_budride = new Audio();
var audio_for_badfood = new Audio();
var audio_for_sequences = new Audio();
var audio_for_grandparents = new Audio();
var audio_for_csharp = new Audio();
var audio_for_python = new Audio();
var audio_for_sound = new Audio();
var audio_for_dreams2 = new Audio();

var active_audio = audio_for_eval_1;

function activate_audio(name){
    active_audio.pause();
    active_audio.currentTime = 0;
    active_audio = name;
    active_audio.play();
}











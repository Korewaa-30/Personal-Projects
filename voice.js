function readPassage(event) {
	event.preventDefault();
	speech.text = document.querySelector("#floatingTextarea").value;
	window.speechSynthesis.speak(speech);
}

let speech = new SpeechSynthesisUtterance();

let speechElement = document.querySelector("button");
speechElement.addEventListener("click", readPassage);

function differentVoice() {
	voices = window.speechSynthesis.getVoices();
	speech.voice = voices[0];

	voices.forEach(function (voice, i) {
		voiceSelect.options[i] = new Option(voice.name, i);
	});
}
let voices = [];

let voiceElement = document.querySelector("#voice-type");
window.speechSynthesis.onvoiceschanged = differentVoice;
let voiceSelect = document.querySelector("#voice-type");

function changeVoice() {
	speech.voice = voices[voiceSelect.value];
}

voiceSelect.addEventListener("change", changeVoice);

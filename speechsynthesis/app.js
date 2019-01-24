const msg = new SpeechSynthesisUtterance();
 let voices = [];
 const voicesDropdown = document.querySelector('[name="voice"]');
 const options = document.querySelectorAll('[type="range"], [name="text"]');
 const speakButton = document.querySelector('#speak');
 const stopButton = document.querySelector('#stop');
 const resetButton =document.querySelector('#reset');
 msg.text = document.querySelector('[name="text"]').value;
function populateVoices(){
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
     .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
     .join('');
}
function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
}
function toggle(startOver){
  speechSynthesis.cancel()
  if(startOver)
  speechSynthesis.speak(msg);
}
function setOption(){
  msg[this.name] = this.value;
}
function resetOptions(){
  options.forEach(option =>{
    if(option.name!="text")
    {
    option.value = 1;
    msg[option.name] = option.value;
    }
  })
}
speechSynthesis.addEventListener('voiceschanged',populateVoices)
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', () =>toggle(true));
stopButton.addEventListener('click', () =>toggle(false));
resetButton.addEventListener('click', resetOptions);

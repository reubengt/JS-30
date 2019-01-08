const secondHand=document.querySelector(".second-hand");
const minHand=document.querySelector(".min-hand");
const hourHand=document.querySelector(".hour-hand");
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours=now.getHours();
  const secondsDegrees = (seconds/60*360)+90;
  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
  const minDegrees = (mins/60*360)+90;
  minHand.style.transform=`rotate(${minDegrees}deg)`;
  const hourDegrees = (hours/60*360)+90;
  hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}
setDate();
setInterval(setDate, 1000);

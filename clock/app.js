const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if(seconds==0){
      secondHand.style.transform="rotate(90deg)";
      secondHand.style.transition="none";
    }
    else{
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transition="all 0.05s";
    secondHand.style.transitionTimingFunction="cubic-bezier(0.19, 2.83, 0.58, 1)";
  }
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    if(mins==0){
      minsHand.style.transform="rotate(90deg)";
      minsHand.style.transition="none";
    }
    else{
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minsHand.style.transition="all 0.05s";
    minsHand.style.transitionTimingFunction="ease";
    }
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    if(hour==0){
      hourHand.style.transform="rotate(90deg)";
      hourHand.style.transition="none";
    }
    else{
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourHand.style.transition="all 0.05s";
    hourHand.style.transitionTimingFunction="ease";
    }
  }
  setDate();
  setInterval(setDate, 1000);

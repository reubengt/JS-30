const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream => {
    console.log(localMediaStream);
    try {
    video.srcObject = localMediaStream;
    }
    catch (error) {
    video.src = window.URL.createObjectURL(localMediaStream);
    }
    video.play();
    video.style.opacity=0;
  })
  .catch(err => {
    console.error(`Webcam Access Denied, Please Allow Webcam Access`,err)
  });
}
function paintToCanvas(){
  const width = canvas.width = video.videoWidth;
  const height = canvas.height = video.videoHeight;
  return setInterval(() => {
    ctx.drawImage(video, 0,0)
    let pixels = ctx.getImageData(0,0, width, height);
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}
function takePhoto(){
  snap.currentTime=0;
  snap.play();
  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Human" />`
  strip.insertBefore(link, strip.firstChild);
}
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
getVideo();
video.addEventListener('canplay',paintToCanvas);

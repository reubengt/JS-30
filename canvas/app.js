window.addEventListener('resize', resizeCanvas);

   function resizeCanvas() {
     const canvas = document.querySelector('#draw');
     const ctx = canvas.getContext('2d');
     ctx.imageSmoothingEnabled = false;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
     ctx.strokeStyle = 'BADA55';
     ctx.lineJoin = 'round';
     ctx.lineCap = 'round';
     ctx.lineWidth = 5;
     let isDrawing = false;
     let lastX = 0;
     let lastY = 0;
     let hue = 0;
     let direction = true;
     canvas.addEventListener('mousedown', (e) => {
       isDrawing = true;
       [lastX, lastY] = [e.offsetX+0.5, e.offsetY+0.5];

     });
     canvas.addEventListener('mousemove', draw);
     canvas.addEventListener('mouseup', () => isDrawing = false);
     canvas.addEventListener('mouseout', () => isDrawing = false);
     function draw(e){
          if(!isDrawing) return;//stops function from running when mouse is not down
          ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(e.offsetX+0.5, e.offsetY+0.5);
          ctx.stroke();
          [lastX, lastY] = [e.offsetX+0.5, e.offsetY+0.5];//updates values for X and Y coordinates
          hue++;
          if (hue>=360) hue=0;
          if (ctx.lineWidth>=40 || ctx.lineWidth <=1){
            direction = !direction;
          }
          if(direction)
          ctx.lineWidth+=0.2;
          else
            ctx.lineWidth-=0.2;
       }
   }
   resizeCanvas();

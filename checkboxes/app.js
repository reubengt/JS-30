let checkboxes= Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));
let lastChecked;
let inBetween = false;
function handleCheck(e){
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween =! inBetween;
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
 lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
let btn=document.querySelector('button');
btn.addEventListener('click', uncheck);
function uncheck(e){
  checkboxes.forEach(checkbox =>{
    checkbox.checked = false;
  });
}

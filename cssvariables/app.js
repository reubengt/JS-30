const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
  const suffix=this.dataset.sizing|| '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousedown',addMoveUpdate));
function addMoveUpdate(){
  this.addEventListener('mousemove', handleUpdate);
}
inputs.forEach(input => input.addEventListener('mouseup',removeMoveUpdate));
function removeMoveUpdate(){
  this.removeEventListener('mousemove',handleUpdate);
}

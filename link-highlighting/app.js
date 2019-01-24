const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight')
document.body.appendChild(highlight);

function highlightLink(e) {
  console.log('highlight');
  const linkCoords = this.getBoundingClientRect();
  highlight.style.opacity = '1';
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.transform = `translate(${linkCoords.left+window.scrollX}px, ${linkCoords.top+window.scrollY}px)`;
}
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

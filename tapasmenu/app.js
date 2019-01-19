  const addItems = document.querySelector('.add-items');
  let itemsList = document.querySelector('.plates');
  let items = JSON.parse(localStorage.getItem('items')) || [];
  const deleteBtn = document.querySelector('.clearAll');
  const buttons = document.querySelectorAll('.checkUncheck');
  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }
  function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }
  function deleteHandler(e) {
  localStorage.clear();
  items=[];
  populateList([], itemsList);
}
  function handleButton(e) {
  items.forEach((item, index, array) =>{
    e.target.value === 'Check All'
      ? (items[index].done = true)
      : (items[index].done = false)
  })
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  deleteBtn.addEventListener('click', deleteHandler);
  buttons.forEach(button => button.addEventListener('click', handleButton));
  populateList(items, itemsList);

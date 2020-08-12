const ul = document.querySelector('.list')
const item = document.querySelector('.item');

(function () {
  for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const li = document.createElement('li');
    li.innerHTML = localStorage.getItem(key);
    ul.append(li)
  }
})()

function clearAll() {
  localStorage.clear()
  ul.innerHTML = '';
}

function addToDoList(value) {
  localStorage.setItem(value,value)

  const li = document.createElement('li');
  li.innerHTML = value;
  ul.append(li)
}

item.addEventListener('keydown',function(e) {
  if (e.keyCode === 13) {
    addToDoList(this.value)
    item.value = '';
  }
})


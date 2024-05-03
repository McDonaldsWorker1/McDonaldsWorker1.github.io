const colors = ['maroon', 'white', 'yellow', 'green', 'teal', 'indigo', 'violet'];

const list = document.createElement('ul');

colors.forEach(color => {
  const item = document.createElement('li');
  item.innerText = color;
  item.style.color = color;
  list.appendChild(item);
});

document.body.appendChild(list);
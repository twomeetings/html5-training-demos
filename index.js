import './index.scss';

const all = document.getElementById('all');

all.onchange = (event) => {
  const checked = event.target.checked;
  const list = document.querySelectorAll('ul li input[type="checkbox"]');
  for (let i = 0; i < list.length; i++) {
    list[i].checked = checked;
  }
};

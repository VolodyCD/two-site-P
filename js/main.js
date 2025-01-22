const chooseColor = document.querySelectorAll('.choose__color-btn');
// найшли всі кнопки по котрим буде мо клікати
const contentItem = document.querySelectorAll('.content-item');
// весь контент котрий повинен змінюватись на сайті

chooseColor.forEach(function(element){
  element.addEventListener('click', open)
});
// біжимо по всім

function open(evt){
  const target = evt.currentTarget;
  // шукаємо того на кого клікнули
  const button =target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`)
  

  chooseColor.forEach(function(item){
    item.classList.remove('choose__color-btn--active')
  });

  target.classList.add('choose__color-btn--active')

  contentItem.forEach(function(item){
    item.classList.remove('content-item--active')
  });

  contentActive.forEach(function(item){
    item.classList.add('content-item--active')
  });

  
}
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover) //куда мы можем поместить
  placeholder.addEventListener('dragenter', dragenter) // когда мы заходим на територию
  placeholder.addEventListener('dragleave', dragleave) //перетащили но вышли
  placeholder.addEventListener('drop', dragdrop) // когда мы отпустили
}

function dragstart(event){
  //console.log('drag start', event.target)
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)

}

function dragend(event) {
  //console.log('drag end')
  event.target.classList.remove('hold', 'hide') 
  // event.target.className = 'item'    тоже самое что и вверху, но работает со строчкой класслист, это объект у которого есть методы, которые манипулируют классами
}

function dragover(event) {
 //console.log('drag over')
 event.preventDefault()
}
function dragenter(event) {
  event.target.classList.add('hovered')
  //console.log('drag enter')
}
function dragleave(event) {
  //console.log('drag leave')
  event.target.classList.remove('hovered')
}
function dragdrop(event) {
  //console.log('drag drop')
  event.target.classList.remove('hovered')
  event.target.append(item)
}
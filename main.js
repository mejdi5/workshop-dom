//1- Getting the HTML elements
let input = document.getElementById('myInput');
let addBtn = document.querySelector('.addBtn');
let list = document.getElementById('myUL');

//2- Create the addToDo function
function addToDo() {
  //3- Get the input value
  let text = document.createTextNode(input.value);
  
  //4- Create the li
  let li = document.createElement('li');
  
  //5- Add the text to the li
  li.appendChild(text);
  
  //6- Add the li to the ul
  /*   input.value ?  */
  list.appendChild(li);
  /*    : alert('Please enter a todo text');
  */ 
  
  //8- Clear the input
  input.value = '';
  
  //9- create the remove button
  let removeBtn = document.createElement('button');
  
  //10- add the remove button to the li
  li.appendChild(removeBtn);
  
  //11- Add a value to the remove button
  removeBtn.innerText = 'x';
  
  //12- Remove button event listener
  removeBtn.addEventListener('click', function () {
    removeBtn.parentElement.remove();
  });
  
  //13- give the remove button a class
  removeBtn.setAttribute('class', 'removeBtn');
  // other methods
  //   removeBtn.classList.add('removeBtn');
  //   removeBtn.classList.toggle('removeBtn');
  
  //14- styling the li on hover
  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = 'rgb(173, 173, 173)';
  });
  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = 'lightgray';
  });
}

//7- add button event listener
addBtn.addEventListener('click', addToDo);





let list = document.getElementById('my-list');

document.querySelector('#submit').addEventListener('click', function () {
  let newElement;
  let btnElement;
  let userInput = document.querySelector('#userInput').value;
  newElement = document.createElement('li');
  newElement.classList = 'subjectName';
  btnElement = document.createElement('button');
  btnElement.id = 'btnlist';
  btnElement.innerHTML = '  &times';
  newElement.innerText = userInput;
  newElement.append(btnElement);
  list.appendChild(newElement);
  console.log(newElement);

  const allSubjectName = document.querySelectorAll('.subjectName');
  for (let i = 0; i < allSubjectName.length; i++) {
    allSubjectName[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
    allSubjectName[i]
      .querySelector('button')
      .addEventListener('click', function () {
        this.closest('.subjectName').remove();
      });
  }
});

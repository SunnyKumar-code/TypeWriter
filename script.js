let para = document.querySelector('p');

let input = document.querySelector('input');

input.addEventListener('input', function() {
  let newText = input.value;
  para.textContent = newText;
});
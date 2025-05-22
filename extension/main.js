let selection = window.getSelection()
body = document.querySelector('body')
button = document.createElement('button')
button.setAttribute('id', 'button')
body.appendChild(button)

button.onclick = () => {
  console.log('Hello')
}
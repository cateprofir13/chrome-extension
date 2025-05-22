//   let selection = window.getSelection().toString()

currWindow = chrome.tabs.query({active:true, currentWindow:true})

body = document.querySelector('body')
button = document.createElement('button')
button.setAttribute('id', 'button')
body.appendChild(button)

button.onclick = () => {
  console.log(currWindow.getSelection().toString())
  
}



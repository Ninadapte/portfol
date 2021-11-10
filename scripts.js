const rootElement = document.getElementById('thisisroot')
rootElement.className = "hello"
const element = document.createElement('div')
element.className = "big"
element.textContent = "hello world"

rootElement.append(element)
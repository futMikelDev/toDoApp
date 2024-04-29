const button = document.getElementById('button')
const input = document.getElementById('input')
const section = document.getElementById('section')

const eraseFromList = document.createElement('button')


button.addEventListener('click', () => {
  console.log(input.value)

  const list = document.createElement('ul')
  const sect = section.appendChild(list)
  sect.innerHTML = `<li>${input.value}</li>`
})

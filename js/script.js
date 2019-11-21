const colors = ['red', 'blue', 'green', 'purple', 'orange', 'gold', 'grey', 'black']
const icons = ['forbidden', 'printer', 'menu', 'bell', 'briefcase', 'calendar', 'camera', 'microphone']

const maker = {
  icon: 'forbidden',
  color: 'red'
}

const $icon = document.getElementById('icon')
const $icons = document.getElementById('icons')
const $colors = document.getElementById('colors')

const iconButtons = []

for (const icon of icons) {
  iconButtons.push(`<div class="icon-small-${icon}" data-icon="${icon}"></div>`)
}

$icons.innerHTML = iconButtons.join('')

const colorButtons = []

for (const color of colors) {
  colorButtons.push(`<div class="color-${color}" data-color="${color}"></div>`)
}

$colors.innerHTML = colorButtons.join('')

function createIcon () {
  $icon.className = `icon-${maker.icon}-${maker.color}`
}

$icons.addEventListener('click', function (e) {
  if (e.target.dataset.icon) {
    maker.icon = e.target.dataset.icon
    createIcon()
  }
})

$colors.addEventListener('click', function (e) {
  if (e.target.dataset.color) {
    maker.color = e.target.dataset.color
    createIcon()
  }
})

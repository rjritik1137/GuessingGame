'use strict'
const allScripts = {
  src: [{ game: ['answer.js'] }, { handlers: ['clickHandler.js'] }, 'main.js'],
}

let scripts = []

const appendScript = location => {
  scripts.push(location)
  var js = document.createElement('script')
  js.type = 'text/javascript'
  js.src = location
  document.body.appendChild(js)
}

function loadScripts(allScripts, pathName = '') {
  Object.keys(allScripts).forEach(path => {
    const newPath = pathName + '/' + path
    const scriptsToLoad = allScripts[path]
    scriptsToLoad.forEach(script => {
      switch (typeof script) {
        case 'string': {
          appendScript(`${newPath}/${script}`)
          break
        }
        default: {
          loadScripts(script, newPath)
        }
      }
    })
  })
}
loadScripts(allScripts)

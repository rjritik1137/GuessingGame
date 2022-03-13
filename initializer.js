'use strict'
const allScripts = {
  src: [{ game: ['answer.js'] }, { handlers: ['clickHandler.js'] }, 'main.js'],
}

let scripts = []

const appendScript = location => {
  scripts.push(location)
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = location
  script.async = false
  document.body.appendChild(script)
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

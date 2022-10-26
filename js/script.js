if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-3-0-1-JS/sw.js", {
    scope: "/Unit-3-0-1-JS/",
  })
}

;("use strict")

function addAgeClicked () {
  const aBase = parseInt(document.getElementById("abase").value)
  const bBase = parseInt(document.getElementById("bbase").value)
  const height = parseInt(document.getElementById("height").value)
  
  const area = ((aBase + bBase) / 2) * height

  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}


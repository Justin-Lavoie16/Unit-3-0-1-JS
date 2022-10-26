if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

function addAgeClicked() {
  const aBase = parseInt(document.getElementById("abase").value)
  const bBase = parseInt(document.getElementById("bbase").value)
  const height = parseInt(document.getElementById("height").value)

  const area = ((aBase + bBase) / 2) * height

  document.getElementById("area").innerHTML = "Area is: " + area + " mm²"
}

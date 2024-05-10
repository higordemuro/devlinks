function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // subistituir a imagem
  // se tiver light mode, adicionar a imagem light
  img.setAttribute('src', './assets/avatar-light.png')
  if (html.classList.contains("light")) {
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}



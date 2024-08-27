const secret = {
  crypt: {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
  },
  decrypt: {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  }
}  


const quebraPalavra = (word, param) => {
  if (!param) {
    return word.split("")
  }
  return word.split(`${param}`)
}

const construirPalavra = (arr, param) => {
  if (!param) {
    return arr.join("")
  }
  return arr.join(`${param} `)
}


const converterParaMinusculo = (word) => {
  return word.toLowerCase()
}

const clearTextArea = () => {
  const textarea = document.getElementById("inputTexto")
  textarea.value = ""
}

function criptografar () {
  const textarea = document.getElementById("inputTexto")
  const textoDigitado = converterParaMinusculo(textarea.value)
  const letras = quebraPalavra(textoDigitado)

  for (let i = 0; i <= letras.length - 1; i = i + 1) {
    if (secret.crypt[letras[i]]) {
      letras[i] = secret.crypt[letras[i]]
    }
  }

  const novoTexto = construirPalavra(letras)
  
  const output = document.getElementById("output")
  output.innerHTML = `<p>${novoTexto}</p>`

  const copyButton = document.getElementById('copyButton')
  copyButton.classList.remove("escondido")

  clearTextArea()
}


function descriptografar () {
  console.log("descriptografando")
  const textarea = document.getElementById("inputTexto")
  const textoDigitado = converterParaMinusculo(textarea.value)
  let palavraDecriptada = textoDigitado
  for (const key in secret.decrypt) {
    // console.warn(key)
    palavraDecriptada = palavraDecriptada.split(key).join(secret.decrypt[key])

  }
  console.warn(palavraDecriptada)
  const output = document.getElementById("output")
  output.innerHTML = `<p>${palavraDecriptada}</p>`

  const copyButton = document.getElementById('copyButton')
  copyButton.classList.remove("escondido")

  clearTextArea()

}

function copyText () {
  const texto = document.getElementById("output").textContent
  navigator.clipboard.writeText(texto)
  alert("Texto copiado para a área de transferência!")
}



function onLoad () {
  const buttonCripto = document.getElementById("cripto")
  buttonCripto.addEventListener("click", criptografar)

  const buttonDecripto = document.getElementById("decripto")
  buttonDecripto.addEventListener("click", descriptografar)

  const copyButton = document.getElementById('copyButton')
  copyButton.addEventListener("click", copyText)
}

onLoad()
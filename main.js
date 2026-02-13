const texto = document.getElementById("add")
const botao = document.getElementById("botao")
const itens = document.getElementById("itens")

botao.addEventListener('click', () => {
    if (texto.value == '') return;

    let li = document.createElement("li")
    li.innerHTML = texto.value
    itens.appendChild(li)

    let span = document.createElement("span")
    span.innerHTML = '\u00d7'
    li.appendChild(span)

    texto.value = null
    saveData()
})

itens.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
        saveData()
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
        saveData()
    }
})

const saveData = () => {
    localStorage.setItem("data", itens.innerHTML)
}

const mostrarTarefas = () => {
    itens.innerHTML = localStorage.getItem("data")
}

mostrarTarefas()
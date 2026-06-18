let botao = document.getElementById('botao')
let listaTarefas = document.getElementById('lista-tarefas')
let tarefas = []
let formulario = document.querySelector('form');
formulario.addEventListener('submit', acao);

function atualizarLista(tarefas) {
    listaTarefas.innerHTML = ''
    for (let i = tarefas.length - 1; i >= 0; i--) {
        listaTarefas.innerHTML += `
            <li>
                ${tarefas[i]}
                <div>
                    <button class="excluir" onclick="excluir(${i})"><p>🗑️</p></button>
                    <button class="renomear" onclick="renomear(${i})"><p>✏️</p></button>
                </div>
            </li>
        `
    }
}

function acao(event) {
    event.preventDefault()
    let input = document.querySelector('.input')
    let valor = input.value
    if (valor) {
        tarefas.push(valor)
        console.log(tarefas)
        input.value = ''
        atualizarLista(tarefas)
    }
}
function renomear(numero_tarefa) {
    let nova_tarefa = prompt('Edite a tarefa:')
    if (nova_tarefa) {
        tarefas[numero_tarefa] = nova_tarefa
        atualizarLista(tarefas)
    }
}
function excluir(numero_tarefa) {
    tarefas.splice(numero_tarefa, 1)
    atualizarLista(tarefas)
}
botao.addEventListener('click', acao)

const data = new Date();
const formatoData = {day: '2-digit', month: '2-digit', year: 'numeric'};
document.getElementById('data atual').textContent = data.toLocaleDateString('pt-br', formatoData);
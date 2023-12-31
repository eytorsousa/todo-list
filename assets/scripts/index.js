const tarefasCriadas = document.querySelector("#tarefas-criadas");
export const add = document.querySelector("#add");
const input = document.querySelector("#todo-input");

var tarefaNova;

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        if(input.value == ''){
            window.alert("Não é possível adicionar tarefas vazias!");
        } else{
            mainFunction();
        }
    }
});

add.addEventListener("click", () => {
    if(input.value == ''){
        window.alert("Não é possível adicionar tarefas vazias!");
    } else {
       mainFunction();
    }
});

function mainFunction(){
    criarTarefa();
    limparInput();
}

function criarTarefa(){
    var valor = input.value;
    var btnMade = document.createElement("button");
    var btnRemove = document.createElement("button");

    tarefaNova = document.createElement("p");
    tarefaNova.innerHTML = valor;

    criarBotoes(btnMade, btnRemove);
    
    tarefasCriadas.appendChild(tarefaNova);

    btnMade.addEventListener("click", (e) => {e.target.parentElement.classList.toggle("made-p")});
    btnMade.addEventListener("click" , () =>{
        if(innerWidth >= 768){
            btnMade.classList.toggle("made-checked");
        }
    });
    btnRemove.addEventListener("click", (e) => {e.target.parentElement.remove()});
}

function criarBotoes(btnM, btnR){
    btnM.classList.add("made");
    btnR.classList.add("remove");

    tarefaNova.appendChild(btnM);
    tarefaNova.appendChild(btnR);
}

function limparInput(){
    input.value = '';
    input.focus();
}
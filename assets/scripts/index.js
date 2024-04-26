const tarefasCriadas = document.querySelector("#tarefas-criadas");
export const add = document.querySelector("#add");
const input = document.querySelector("#todo-input");

var tarefaNova;


// localStorage.clear();

for(let i = 0; i < localStorage.length; i++){
    let ativ = localStorage.getItem(`ativ${i}`);
    if(ativ){
        ativ = JSON.parse(localStorage.getItem(`ativ${i}`));
        let valor = ativ.ativ;
        let mode = ativ.mode;

        criarTarefa(i, valor, mode, false);
    }
}

input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        if(!inputVazio()){
            mainFunction();
        }
    }
});

add.addEventListener("click", () => {
    if(!inputVazio()){
        mainFunction();
    }
});

function mainFunction(){
    criarTarefa();
    limparInput();
}

function criarTarefa(indexOfR, valor, mode, bool){
    if(valor && mode){
        var valor = valor;
        var mode = mode;
    } else {
        var valor = input.value;
        bool = true;
    }

    var btnMade = document.createElement("button");
    var btnRemove = document.createElement("button");

    tarefaNova = document.createElement("p");
    tarefaNova.innerText = valor;

    createButtons(btnRemove, btnMade, indexOfR);

    tarefasCriadas.appendChild(tarefaNova);

    if(mode == 'true'){
        btnMade.parentElement.classList.toggle("made-p");
        if(innerWidth >= 768){
            btnMade.classList.toggle("made-checked");
        }
    }

    btnMade.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("made-p");

        if(e.target.parentElement.classList.contains("made-p")){
            localStorage.setItem(`ativ${btnRemove.id}`, JSON.stringify({ativ: `${valor}`, mode: `true`}));
        } else{
            localStorage.setItem(`ativ${btnRemove.id}`, JSON.stringify({ativ: `${valor}`, mode: `false`}));
        }

        if(innerWidth >= 768){
            btnMade.classList.toggle("made-checked");
        }
    });

    btnRemove.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        destroySS(e.target.id);
    });

    if(bool){
        createSS(valor, btnRemove.id);
    }
}

function createButtons(btnR, btnM, indexOfR){
    btnM.classList.add("made");
    btnR.classList.add("remove");

    if(!localStorage.getItem('i')){
        localStorage.setItem('i', '0');
    } 

    if(indexOfR >= 0){
        btnR.id = `${indexOfR}`;
    } else {
        let index = JSON.parse(localStorage.getItem('i'));    
        btnR.id = `${index}`;
        localStorage.setItem('i', `${index+1}`);
    }

    tarefaNova.appendChild(btnR);
    tarefaNova.appendChild(btnM);
}

function createSS(valor, btnR){
    localStorage.setItem(`ativ${btnR}`, JSON.stringify({ativ: `${valor}`, mode: `false`}));
}

function destroySS(id){
    localStorage.removeItem(`ativ${id}`)
}

function limparInput(){
    input.value = '';
    input.focus();
}

function inputVazio(){
    if(input.value == '' || input.value == ' '){
        window.alert("Não é possível adicionar tarefas vazias!");
        return true;
    }

    return false;
}

const tarefasCriadas = document.querySelector("#tarefas-criadas");
export const add = document.querySelector("#add");
const input = document.querySelector("#todo-input");

var tarefaNova;
// sessionStorage.clear();

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

function criarTarefa(){
    var valor = input.value;
    var btnMade = document.createElement("button");
    var btnRemove = document.createElement("button");

    tarefaNova = document.createElement("p");
    tarefaNova.innerHTML = valor;

    criarRemove(btnRemove);
    criarMade(btnMade);

    tarefasCriadas.appendChild(tarefaNova);

    btnMade.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("made-p")
        if(e.target.parentElement.classList.contains("made-p")){
            sessionStorage.setItem(`ativ${btnRemove.id}`, JSON.stringify({ativ: `${valor}`, mode: `true`}));
        } else{
            sessionStorage.setItem(`ativ${btnRemove.id}`, JSON.stringify({ativ: `${valor}`, mode: `false`}));
        }
    });

    btnMade.addEventListener("click" , () => {
        if(innerWidth >= 768){
            btnMade.classList.toggle("made-checked");
        }
    });

    btnRemove.addEventListener("click", (e) => {e.target.parentElement.remove()});
    btnRemove.addEventListener("click", (e) => {destroySS(e.target.id)});

    setSS(valor, btnMade, btnRemove.id);
}

function criarRemove(btnR){
    btnR.classList.add("remove");

    if(!sessionStorage.getItem('i')){
        sessionStorage.setItem('i', '0');
    } 

    let index = JSON.parse(sessionStorage.getItem('i'));    
    btnR.id = `${index}`;
    sessionStorage.setItem('i', `${index+1}`);

    tarefaNova.appendChild(btnR);
}

function criarMade(btnM){
    btnM.classList.add("made");

    tarefaNova.appendChild(btnM);
}


function setSS(valor, btnM, btnR){
    sessionStorage.setItem(`ativ${btnR}`, JSON.stringify({ativ: `${valor}`, mode: `false`}));
}

function destroySS(id){
    sessionStorage.removeItem(`ativ${id}`)
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

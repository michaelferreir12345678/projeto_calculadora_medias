const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png"></img>';
const imgReprovado = '<img src="./images/reprovado.png"></img>';
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima: "));

let linhas = "";
let notas = [];
const atividades = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    calculoMedia();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já existe.`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat((inputNotaAtividade.value)));
    
    
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += "</tr>";
    
        linhas += linha
    
        
        inputNomeAtividade.value = "";
        inputNotaAtividade.value = "";
    }

}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas
}

function calculoMedia (){
    let somaNotas = 0 
    for (var i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }    

    return somaNotas / notas.length;    
}

function atualizaMedia(){
    const mediaFinal = calculoMedia();

    document.querySelector(".media-final").innerHTML = mediaFinal.toFixed(2);

    document.querySelector(".atividade").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado; 
}
const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];
let linhas = '';
const numeroContato = document.getElementById('numero-contato');
const nomeContato = document.getElementById('nome-contato');

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})
function adicionaLinha(){
    if(nomes.includes(nomeContato.value)){
        alert('Um contato ja possui esse nome!');
    }else if(numeros.includes(numeroContato.value)){
        alert('Um contato ja possui esse numero!');
    }else{
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);

        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
}

function atualizaTabela(){
    if(numeroContato.length < 8){
        alert('O numero precisa ter o minimo de 8 caracteres!');
    }else{
        const linhaNova = document.querySelector('tbody');
        linhaNova.innerHTML = linhas;
        nomeContato.value = '';
        numeroContato.value = '';
    }
}
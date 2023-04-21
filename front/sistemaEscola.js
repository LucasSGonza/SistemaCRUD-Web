//criando uma classe Aluno
class Aluno {
    constructor(nome, idade, curso, fase) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.fase = fase;
    }
}


//criar uma Array chamada turma --> irá armazenar objetos Aluno. Servirá para criar, editar, excluir e visualizar os dados dos alunos.
//Banco de Dados
let turma = [];


//Função para limpar os campos input
function limparCampos() {
    document.getElementById("nome_aluno").value = "";
    document.getElementById("idade_aluno").value = "";
    document.getElementById("curso_aluno").value = "";
    document.getElementById("fase_curso").value = "";
}


//FUNÇÕES GERAIS
let nome_js, idade_js, curso_js, fase_js;

//função para pegar os dados do HTML
function setCampos() {
    nome_js = document.getElementById("nome_aluno").value;
    idade_js = document.getElementById("idade_aluno").value;
    curso_js = document.getElementById("curso_aluno").value;
    fase_js = document.getElementById("fase_curso").value;
}

//Função para verificar no HTML se Idade e Fase são numeros
function verificarNum(textInput) {
    if (isNaN(textInput) && !(textInput == "")) {
        alert("Por favor, insira apenas números nos campos 'Idade' e 'Fase' ");
        document.getElementById("idade_aluno").value = "";
        document.getElementById("fase_curso").value = "";
    } else if (verificarIdadeFase_negativos(textInput)) {
        alert("Por favor, insira uma idade e fase verdadeiras!");
        document.getElementById("idade_aluno").value = "";
        document.getElementById("fase_curso").value = "";
    }
}

//Função para verificar no HTML se Nome e Curso são texto
function verificarTexto(textInput) {
    if (!(isNaN(textInput) || textInput == "")) {
        alert("Por favor, insira apenas texto nos campos 'Nome' e 'Curso' ");
        document.getElementById("nome_aluno").value = "";
        document.getElementById("curso_aluno").value = "";
    }
}

function verificarIdadeFase_negativos(valor) {
    if (valor <= 0) {
        return true;
    } else {
        return false;
    }

}


//CRUD -> Create, Read, Update e Delete


//CREATE

//Função para puxar dados do HTML e criar o objeto Aluno
function criarAlunoHTML() {

    setCampos(); //pega os dados do HTML (a verificação do tipo já é feita no HTML) e envia para a função tentar cadastrar o aluno na Array (BD)
    console.log(nome_js, idade_js, curso_js, fase_js);

    //A função criarObjetoAluno é booleana, retornando true se os dados para cadastro estiverem OK e false se existir algum problema
    if (criarObjetoAluno(nome_js, idade_js, curso_js, fase_js) == true) {
        alert("Aluno cadastrado com sucesso!");
        limparCampos();
        console.log(turma);
    } else {
        alert("ERRO!\nVerifique os dados digitados e tente novamente!");
        limparCampos();
    }

}


//Função para criar um objeto Aluno, a partir dos parâmetros pegos do HTML
let criarObjetoAluno = (nome, idade, curso, fase) => {
    if ((nome != "" && curso != "") && (idade != null && fase != null)) { //verifica se os campos estão vazios
        if ((isNaN(nome, curso)) && (!isNaN(idade, fase))) { //verifica o tipo das variaveis: se 'nome' e 'curso' são string e se 'idade' e 'fase' sao numeros
            let aluno = new Aluno(nome, idade, curso, fase);
            turma.push(aluno);
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }

}

// ===============================================

//READ

//função para visualizar um objeto Aluno na Array turma[]
function visualizarAluno() {

    if (turma.length > 0) {
        let aluno;
        do { aluno = prompt("Qual aluno voce deseja visualizar?"); } while (!isNaN(aluno));

        const achou = turma.find(alunoProcurado => alunoProcurado.nome === aluno);

        if (achou) {
            alert(`Aluno: ${achou.nome}\nIdade: ${achou.idade}\nCurso: ${achou.curso}\nFase: ${achou.fase}`);
        } else {
            alert("Aluno não encontrado")
        }

        /*
        let flag = false;
        let achou;
        for (let i = 0; i < turma.length; i++) {
            if (turma[i].nome == aluno) {
                achou = turma[i];
                flag = true;
            }
        }
        (flag == false) ? alert("Aluno não encontrado") : alert(`Aluno: ${achou.nome}\nIdade: ${achou.idade}\nCurso: ${achou.curso}\nFase: ${achou.fase}`);
        */

    } else {
        alert("Não existem alunos cadastrados!");
    }

}
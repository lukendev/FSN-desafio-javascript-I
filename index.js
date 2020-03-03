// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];

let listaDeAlunos = alunosDaEscola

console.log(" ")
console.log(" ")
console.log("*** Sistema Escolar ***")
console.log(" ")
console.log(" ")


// implementação
function adicionarAluno(nome) {
    if (typeof (nome) == 'string') {
        let novoAluno = {
            nome: nome,
            notas: [],
            cursos: [],
            faltas: 0
        }
        listaDeAlunos.push(novoAluno)
        console.log("----------------------")
        console.log(nome + " foi inserido na nossa lista de alunos!")
        console.log("----------------------")
        console.log(" ")
    } else {
        console.log("----------------------")
        console.log("Nome inválido!")
        console.log("----------------------")
        console.log(" ")
    }
}

function listarAlunos() {
    console.log("Lista de alunos cadastrados no nosso sistema: ")
    console.log(" ")
    for (let i = 0; i < listaDeAlunos.length; i++) {
        console.log("Nome: " + listaDeAlunos[i].nome)
        if (listaDeAlunos[i].notas.length > 0) {
            console.log("Notas: " + listaDeAlunos[i].notas.join(", "))
        } else {
            console.log("Notas: -/-")
        }
        if (listaDeAlunos[i].cursos.length > 0) {
            console.log("*** Cursos matriculados: ")
            for (let y = 0; y < listaDeAlunos[i].cursos.length; y++) {
                let curso = listaDeAlunos[i].cursos[y].nomeDoCurso
                let data = listaDeAlunos[i].cursos[y].dataMatricula
                console.log("Curso " + (y + 1) + ": " + curso)
                console.log("Data de matrícula: " + data.getDay() + "/" + data.getMonth() + "/" + data.getFullYear())
                console.log("-//-")
            }
        } else {
            console.log("Não está matriculado em nenhum curso!")
        }
        console.log("Faltas: " + listaDeAlunos[i].faltas)
        console.log("----------")
    }
    console.log("----------------------")
    console.log(" ")
}

function buscarAluno(nome) {
    let alunosEncontrados = 0
    let ids = []
    let retorno = []
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (listaDeAlunos[i].nome == nome) {
            alunosEncontrados += 1
            ids.push(i)
        }
    }
    if (alunosEncontrados == 0) {
        console.log("----------------------")
        console.log("Não foi encontrado nenhum aluno com o nome " + nome + " em nosso sistema.")
        console.log("----------------------")
        console.log(" ")
    } else {
        for (let i = 0; i < ids.length; i++) {
            console.log("----------------------")
            console.log("O aluno " + nome + " foi encontrado no nosso sistema!")
            console.log("----------------------")
            console.log(" ")
            retorno.push(listaDeAlunos[ids[i]])
        }
        return retorno[0]
    }
}

function matricularAluno(aluno, curso) {
    let achouAluno = false
    let novaData = new Date();
    if (typeof (curso) == 'string') {
        for (let i = 0; i < listaDeAlunos.length; i++) {
            if (aluno == listaDeAlunos[i]) {
                listaDeAlunos[i].cursos.push({
                    nomeDoCurso: curso,
                    dataMatricula: novaData
                })
                console.log("----------------------")
                console.log("O aluno " + aluno.nome + " foi matriculado com sucesso no curso: " + curso)
                console.log("----------------------")
                console.log(" ")
                achouAluno = true
                //console.log(aluno)
            }
        }
        if (!achouAluno) {
            console.log("----------------------")
            console.log("O aluno não foi encontrado em nosso sistema.")
            console.log("----------------------")
        }
    } else {
        console.log("----------------------")
        console.log("Nome de curso inválido.")
        console.log("----------------------")
    }

}

function aplicarFalta(aluno) {
    let confereAluno = false
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (aluno == listaDeAlunos[i]) {
            listaDeAlunos[i].faltas += 1
            console.log("----------------------")
            console.log("Falta adicionada ao aluno " + aluno.nome + " com sucesso!")
            console.log("----------------------")
            console.log(" ")
            confereAluno = true
        }
    }
    if (!confereAluno) {
        console.log("----------------------")
        console.log("Aluno não encontrado no sistema.")
        console.log("----------------------")
        console.log(" ")
    }
}

function aplicarNota(aluno, nota) {
    let confereAluno = false
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (aluno == listaDeAlunos[i]) {
            aluno.notas.push(nota)
            console.log("----------------------")
            console.log("Nota adicionada ao aluno: " + aluno.nome)
            console.log("----------------------")
            console.log(" ")
            confereAluno = true
        }
    }
    if (!confereAluno) {
        console.log("----------------------")
        console.log("Aluno não encontrado no sistema.")
        console.log("----------------------")
        console.log(" ")
    }
}

function aprovarAluno(aluno) {
    let confereAluno = false
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (aluno == listaDeAlunos[i]) {
            confereAluno = true
            if (listaDeAlunos[i].faltas <= 3 && listaDeAlunos[i].notas.length > 0) {
                let totalNotas = 0;
                for (let y = 0; y < listaDeAlunos[i].notas.length; y++) {
                    totalNotas += listaDeAlunos[i].notas[y]
                }
                if (totalNotas / aluno.notas.length >= 7) {
                    console.log("----------------------")
                    console.log("Aluno " + listaDeAlunos[i].nome + " aprovado!")
                    console.log("----------------------")
                    console.log(" ")
                } else {
                    console.log("----------------------")
                    console.log("Aluno " + listaDeAlunos[i].nome + " reprovado!")
                    console.log("----------------------")
                    console.log(" ")
                }
            } else if (listaDeAlunos[i].faltas <= 3 && listaDeAlunos[i].notas.length == 0) {
                console.log("----------------------")
                console.log("Aluno " + listaDeAlunos[i].nome + " ainda não possui notas!")
                console.log("----------------------")
                console.log(" ")
            } else if (listaDeAlunos[i].faltas > 3) {
                console.log("----------------------")
                console.log("Aluno reprovado por faltas!")
                console.log("----------------------")
                console.log(" ")
            }
        }
    }
    if (!confereAluno) {
        console.log("----------------------")
        console.log("Aluno não encontrado no sistema!")
        console.log("----------------------")
        console.log(" ")
    }
}

// adicionarAluno("Lucas")
// listarAlunos()
// buscarAluno("Jefferson")
// matricularAluno(listaDeAlunos[3], "Big Data")
// listarAlunos()
// aplicarFalta(listaDeAlunos[3])
// aplicarNota(listaDeAlunos[2], 7)
// aprovarAluno(listaDeAlunos[2])
// listarAlunos()
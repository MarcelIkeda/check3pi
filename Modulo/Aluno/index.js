function Aluno(nome, quantidade_de_faltas, notas){
    this.nome = nome;
    this.quantidade_de_faltas = quantidade_de_faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        let soma = 0;
        let c = 0;
        for(nota of notas){
            soma+=nota;
            c++;
        }
        return soma/c;
    };
    this.faltas = function() {
        this.quantidade_de_faltas++;
        return quantidade_de_faltas;
    };
}

let Marcel = new Aluno('Marcel', 3, [8.8,8.8,8.2]);
let Maria = new Aluno('Maria', 0, [10,10,10]);
let Gustavo = new Aluno('Gustavo', 1, [9,8,10]);
let Lucas = new Aluno('Lucas', 2, [10,9,10]);
let Marino = new Aluno('Marino', 0, [9,9,9]);


module.exports = {
    lista_alunos: [Marcel, Maria, Gustavo, Lucas, Marino],
    novoAluno: function(nome, quantidade_de_faltas, notas){
        const aluno = new Aluno(nome, quantidade_de_faltas, notas);
        return aluno;
    },
    calcularMedia: function(nome){
        let soma = 0;
        for (aluno of this.lista_alunos) {
            if(aluno.nome == nome){
                for(nota of aluno.notas){
                    soma+=nota;
                }
                return soma/aluno.notas.length
            }
        }
    },
    faltas: function(nome){
        for(aluno of this.lista_alunos){
            if(aluno.nome == nome){
                aluno.quantidade_de_faltas++;
                return aluno.quantidade_de_faltas;
            }
        }
    }
}
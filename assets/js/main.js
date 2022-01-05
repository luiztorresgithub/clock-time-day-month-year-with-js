// Primeiro jeito (Mais rápido, fácil e prático):

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'full'});

// Segundo jeito (Um pouco mais complicado e demorado usando arrays e funções):

/* const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes (numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
        ` de ${data.getFullYear()}<br>${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}</br>`
    );
}

h1.innerHTML = criaData(data); */
'use strict';

// variáveis 
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let somaPotuguesa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;
let vendaPortuguesa = 0.00;

let btnAdd = document.getElementById('btn-add');
let btnRemove = document.getElementById('btn-remove');

// eventos 
btnAdd.addEventListener('click', vendas, false);
btnRemove.addEventListener('click', remover, false);

// funções
function vendas(e) {
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    
    } else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    
    } else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function remover(e) {
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    
    } else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista < 0)
        {
            somaMista = 0;
            vendaMista = 0.00;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    
    } else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa < 0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}
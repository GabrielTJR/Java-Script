let num = document.querySelector('input#num')
let tab = document.querySelector('select#lista')
let res = document.querySelector('div#res')

function adicionar(){
    res.innerHTML = ''
    var c = 1
    var rep = false
    for(let c=0; c<tab.length; c++){
        if(num.value == tab[c].value){
            rep = true
        }
    }
    if(rep == true){
        alert('ERRO, número já digitado')
    }else if(num.value.length == 0){
        alert('ERRO, digite algum número')
    }else if(num.value<1 || num.value>100){
        alert('ERRO, número não permitido')
    }else{
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = num.value
        tab.appendChild(item)
        c++
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let maior, menor, soma = 0, med
    if(tab.length == 0){
        alert('Adicione números antes de finalizar')
    }else{
        for(let c=0; c<tab.length; c++){
            if(c==0){
                maior = tab[c].value
                menor = tab[c].value
            }
            if(maior < tab[c].value){
                maior = tab[c].value
            }
            if(menor > tab[c].value){
                menor = tab[c].value
            }
            soma += Number(tab[c].value)
        }
        med = soma/tab.length
        res.innerHTML = `Ao todo, temos ${tab.length} números cadastrados.<br>
        O maior valor informado foi ${maior}.<br>
        O menor valor informado foi ${menor}.<br>
        Somando todos os valores, temos ${soma}.<br>
        A média dos valores digitados é ${med}`
    }
}
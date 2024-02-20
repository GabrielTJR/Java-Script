function verificar(){
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pas = document.querySelector('input#pas')
    let cont = document.querySelector('div#cont')
    let tst = document.querySelector('div#teste')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('ERRO, favor informar todos os valores')
    }else if(pas<1){
        alert('ERRO, favor informar passo maior que 0')
    }else{
        cont.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let teste = 0
        let c = i
        if(i<f){
            for(let c=i; c<f; c+=p){
                cont.innerHTML += ` ${c} \u{1F449}`
                teste++
            }
        }else{
            for(let c=i; c>f; c-=p){
                cont.innerHTML += ` ${c} \u{1F449}`
                teste++
            }
        }
        cont.innerHTML += `\u{1F3C1}`
        tst.innerHTML = `${teste}`

    }
}
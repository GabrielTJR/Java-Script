function tabuada(){
    let num = document.querySelector('input#num').value
    let tab = document.querySelector('select#seltab')
    tab.innerHTML = ''
    if(num.length == 0){
        alert('ERRO, digite algum número')
    }else{
        for(var c=1; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
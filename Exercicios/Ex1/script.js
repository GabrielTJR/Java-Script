function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 6 && hora < 12){
        msg.innerHTML = 'Estamos no período da manhã, <strong>BOM DIA!</strong>'
        img.src = 'manha.jpg'
        document.body.style.background = '#fad599'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = 'Estamos no período da tarde, <strong>BOA TARDE!</strong>'
        img.src = 'tarde.jpg'
        document.body.style.background = '#b8adbc'
    }else{
        msg.innerHTML = 'Estamos no período da noite, <strong>BOA NOITE!</strong>'
        img.src = 'noite.jpg'
        document.body.style.background = '#0291bd'
    }
}
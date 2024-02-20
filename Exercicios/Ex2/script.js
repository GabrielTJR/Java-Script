function verificar(){
    var data = new Date()
    var atual = data.getFullYear()
    var sexo = document.getElementsByName('radsex')
    var ano = document.querySelector('input#ano').value
    var res = document.querySelector('div#res')
    if(atual < ano || ano.length == 0){
        alert('ERRO, ano de nascimento incorreto')
    }else{
        var idade = atual - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = ' Homem'
            if(idade >= 0 && idade < 10){ //criança
                img.setAttribute('src', 'crianca_h.jpg')
            }else if(idade < 21){ //adolescente
                img.setAttribute('src', 'jovem_h.jpg')
            }else if(idade < 50){ //adulto
                img.setAttribute('src', 'adulto_h.jpg')
            }else{ //velho
                img.setAttribute('src', 'velho_h.jpg')
            }
        }else{
            genero = 'a Mulher'
            if(idade >= 0 && idade < 10){ //criança
                img.setAttribute('src', 'crianca_m.jpg')
            }else if(idade < 21){ //adolescente
                img.setAttribute('src', 'jovem_m.jpg')
            }else if(idade < 50){ //adulto
                img.setAttribute('src', 'adulto_m.jpg')
            }else{ //velho
                img.setAttribute('src', 'velho_m.jpg')
            }
        }
        res.innerHTML = `Detectamos um${genero} com idade de ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
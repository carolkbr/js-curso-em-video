function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 0){
        window.alert("[ERRO] Verifique o ano e tente novamente!");
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id','foto');

        if (fsex[0].checked){
            genero = 'Homem';

            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src','criancamasc.svg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmasc.svg');
            } else if( idade < 50){
                //adulto
                img.setAttribute('src','adultomasc.svg');
            } else{
                //idoso
                img.setAttribute('src','idosomasc.svg');
            }

        } else if(fsex[1].checked){
            genero ='Mulher'

            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src','criancafem.svg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemfem.svg');
            } else if( idade < 50){
                //adulto
                img.setAttribute('src','adultofem.svg');
            } else{
                //idoso
                img.setAttribute('src','idosofem.svg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
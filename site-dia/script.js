function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
  
    msg.innerHTML=`Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
       //dia
        img.src = 'fotodia.svg';
        document.body.style.background ='#BCAA90';
    } else if(hora >= 12 && hora <= 18){
        //tarde
        img.src = 'fototarde.svg';
        document.body.style.background = '#AD717B';
    } else{
        //noite
        img.src='fotonoite.svg';
        document.body.style.background = '#0A1737';
    }
}

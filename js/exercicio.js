

function carga(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas'
    if(hora >=0 && hora<12){
       img.src='../images/Manhã.png'
    }else if(hora>=12 && hora<=18){
        img.src='../images/Tarde.png'
    }else{
        img.src='../images/Noite.png'
    }
}

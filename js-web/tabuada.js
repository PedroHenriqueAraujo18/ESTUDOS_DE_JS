function tabuada(){
    let numero = Number(document.getElementById('id_Numero').value);
    let tab = document.getElementById('resultado')
    tab.innerHTML = ''
    for(var i= 0; i<=10;i++){
        let item = document.createElement('option')
        item.text += ` ${i} x ${numero} = ${numero * i} `
        tab.appendChild(item)
    }
}
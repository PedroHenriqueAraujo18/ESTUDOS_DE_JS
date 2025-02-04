function contador(){
    let inicio = Number(document.getElementById('id_Inicio').value)
    let fim = Number(document.getElementById('id_Fim').value)
    let passo = Number(document.getElementById('id_Passo').value)
    var res = document.getElementById('resultado')
    if(inicio && fim && passo !=null){
    for(var i =  inicio ; i<=fim; i+=passo){
        res.innerText +=` ${i} `;
    }
}else{
    res.innerText="Impossivel Contar"
}
}
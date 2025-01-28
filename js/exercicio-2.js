function verificador_de_idade(){
    var inputAno = document.getElementById('idade').value ;
    var sexo = document.querySelector('input[name="rad_sexo"]:checked').value;
    console.log(sexo)
    var data = new Date();
    var atual = data.getFullYear();
    var idade = atual - inputAno;
    var res = document.getElementById('resultado')
    if (inputAno == 0 || inputAno > atual || !sexo) { // Adicionada verificação para 'sexo'
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente!';
    } else {
        var genero = sexo.value == 'masculino' ? 'Homem' : 'Mulher'; // Simplificado aqui
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}

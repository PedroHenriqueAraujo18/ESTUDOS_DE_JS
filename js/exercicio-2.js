function verificador_de_idade(){
    var img = document.getElementById('masc');
    var inputAno = document.getElementById('idade').value ;
    var sexo = document.querySelector('input[name="rad_sexo"]:checked').value;
    var data = new Date();
    var atual = data.getFullYear();
    var idade = atual - inputAno;
    var res = document.getElementById('res')
    if (inputAno == 0 || inputAno > atual) {
        resultado.innerHTML = '[ERRO] Verifique os dados e tente novamente!';
    } else {
        var genero = '';
        if (sexo == 'masculino') {
            genero = 'Homem';
        } else if (sexo == 'feminino') {
            genero = 'Mulher';
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
}

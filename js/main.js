$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000-000-000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu cpf',
            endereço: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu cep',
        },
        submitHandler: function(form){
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#endereço').val('')
            $('#cep').val('')
            alert('seu formulario foi enviado, parabens!')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
            alert(`existem ${camposIncorretos} campos incorretos`)

        }
        }
    })
})
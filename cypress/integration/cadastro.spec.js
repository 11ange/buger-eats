import signup from '../pages/SignupPage'
import cadastroDinamico from '../factories/CadastroDinamico'
import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    it('usuario deve se tornar um entregador', function () {
        var entregador = cadastroDinamico.deliver()
        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        const mensagem = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoudBe(mensagem)
    })

    it('CPF inválido', function () {
        var entregador = cadastroDinamico.deliver()
        entregador.cpf = "0123456789q"
        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.alertMessageShuldBe('Oops! CPF inválido')
    })

    it('Email inválido', function () {
        var entregador = cadastroDinamico.deliver()
        entregador.email = "nda.com.br"
        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        signup.alertMessageShuldBe('Oops! Email com formato inválido.')
    })

    context('Campos obrigatoris', function () {
        const mensagens = [
            { field: 'nome', output: 'É necessário informar o nome' },
            { field: 'CPF', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'CEP', output: 'É necessário informar o CEP' },
            { field: 'numero', output: 'É necessário informar o número do endereço' },
            { field: 'metodo_entrega', output: 'Selecione o método de entrega' },
            { field: 'CNH', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        mensagens.forEach(function(msg){
            it(`${msg.field} é necessário`, function(){
                SignupPage.alertMessageShuldBe(msg.output)
            })

        })

    })
/*     it('Campos obrigatórios', function () {
        signup.go()
        signup.submit()
        signup.alertMessageShuldBe('É necessário informar o nome')
        signup.alertMessageShuldBe('É necessário informar o CPF')
        signup.alertMessageShuldBe('É necessário informar o e-mail')
        signup.alertMessageShuldBe('É necessário informar o CEP')
        signup.alertMessageShuldBe('É necessário informar o número do endereço')
        signup.alertMessageShuldBe('Selecione o método de entrega')
        signup.alertMessageShuldBe('Adicione uma foto da sua CNH')
    }) */
})
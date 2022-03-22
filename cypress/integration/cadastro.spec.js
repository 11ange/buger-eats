import signup from '../pages/SignupPage'
import cadastroDinamico from '../factories/CadastroDinamico'

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
        entregador.cpf="0123456789q"
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
})
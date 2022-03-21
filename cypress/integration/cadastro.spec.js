import signup from '../pages/SignupPage'
//import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    /*     before(function() {
            cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de teste')
        })
    
        beforeEach(function() {
            cy.log('Tudo aqui é executado uma única vez ANTES de CADA caso de teste')
        })
    
        after(function() {
            cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de teste')
        })
    
        afterEach(function() {
            cy.log('Tudo aqui é executado uma única vez DEPOIS de CADA caso de teste')
        }) */

    //var signup = new SignupPage()

    beforeEach(function () {
        cy.fixture('entregador').then(function (massa) {
            this.entregador = massa
        })
    })

    it('usuario deve se tornar um entregador', function () {


        /*         var entregador = {
                    nome: "Luis",
                    cpf: "01234567890",
                    email: "nada@nda.com",
                    whatsapp: "11999999999",
                    endereco: {
                        cep: "14020000",
                        rua: "Avenida Doutor Francisco Junqueira",
                        numero: "300",
                        complemento: "Casa 1",
                        bairro: "Vila Seixas",
                        cidade_uf: "Ribeirão Preto/SP"
                    },
                    metodo_entega: "Moto",
                    cnh: '/images/cnh-digital.jpg'  // ou omite o '/images/' e coloca ele concatenado no attachFile
                } */

        //var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.entregador.positivo)
        signup.submit()

        const mensagem = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShoudBe(mensagem)

    })

    it('CPF inválido', function () {

        /*         var entregador = {
                    nome: "Luis",
                    cpf: "0123456789a",         // campo invalido
                    email: "nada@nda.com",
                    whatsapp: "11999999999",
                    endereco: {
                        cep: "14020000",
                        rua: "Avenida Doutor Francisco Junqueira",
                        numero: "300",
                        complemento: "Casa 1",
                        bairro: "Vila Seixas",
                        cidade_uf: "Ribeirão Preto/SP"
                    },
                    metodo_entega: "Moto",
                    cnh: '/images/cnh-digital.jpg'  // ou omite o '/images/' e coloca ele concatenado no attachFile
                } */

        //var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.entregador.cpf_invalido)
        signup.submit()
        signup.alertMessageShuldBe('Oops! CPF inválido')
    })
})
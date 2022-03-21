class SignupPage {
    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(entregador) {
        cy.get('input[name="name"]').type(entregador.nome)      // type() preenche o campo 
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()    // click() clica no botão
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
        //should + 'have.value' compara o valor do campo com o desejado
        cy.contains('.delivery-method li', entregador.metodo_entega).click()

        cy.get('input[accept^="image"]').attachFile(entregador.cnh)     // o '^' busca o começo do campo e compara com o 'image'
        // o '*' busca o conteúdo total do campo
        // o '$' busca o final do campo
        //cy.get('input[accept^="image"]').attachFile('/images/ + entregador.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShoudBe(mensagem) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', mensagem)
    }

    alertMessageShuldBe(mensagem) {
        cy.get('.alert-error').should('have.text', mensagem)
    }
}
export default new SignupPage;
//export default SignupPage;
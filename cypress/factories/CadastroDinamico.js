var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            endereco: {
                cep: '14020000',
                rua: 'Avenida Doutor Francisco Junqueira',
                numero: '300',
                complemento: 'Casa 1',
                bairro: 'Vila Seixas',
                cidade_uf: 'Ribeirão Preto/SP'
            },
            metodo_entega: 'Moto',
            cnh: '/images/cnh-digital.jpg'
        }
        return data
    }
}
# ♾️ Case Módulo II ♾️

## 🎲 Construção de uma API sem Banco de Dados 🎲

<img align="right" alt="GIF" src="https://github.com/gabiazevedo/Internship-Girls-In-Tech/blob/main/moduloDois/Case/api-sem-banco/SembancoDeDados.gif" width="300px" />

### _Cadastro de Restaurantes_

_"Eu, como CEO de uma holding, possuo várias filiais espalhadas em vários Estados.
A fim de gerenciar todas as matrizes e filiais, contratei pessoas desenvolvedoras para gerar um programa contendo as seguintes informações: horários de funcionamento,
localização geográfica, ticket médio, endereço, status(aberto/fechado) e comunicação através de mensagens (matriz x filial)."_

À partir da tabela abaixo, foi proposto pensar na organização dessas informações para desenvolvimento de uma API sem peristência de dados
em um banco de dados.

<img alt="GIF" src="https://github.com/gabiazevedo/Internship-Girls-In-Tech/blob/main/moduloDois/Case/api-sem-banco/infos_restaurante.png" width="500px" />

### _Requisitos:_

1 - A API deve cadastrar restaurantes e matrizes em diversos locais;</br>
2 - O sistema deve ser capaz de armazenar a localização (endereço), controlar o acesso (status: aberto/fechado) e mostrar as categorias de serviços prestados
(tipos de serviço = Delivery, Indoor ou Takeway);</br>
3 - Contemplar categoria de items (items são o que esses restaurantes vendem - Coca cola é um item) - as categorias ficam a critério da pessoa desenvolvedora,
exemplos: Refrigerantes, Comidas tipicas, Pizzas etc;</br>
4 - O sistema deve ser dinâmico e capaz de criar e manipular os dados já registrados (CRUD);</br>
5 - O sistema deve ser capaz de exibir uma lista com todos os estabelecimentos e seus dados;</br>
6 - A matriz deve ser capaz de se comunicar com as filiais, registrando data, hora e mensagem.

Observação:
_Não utilizar banco de dados para salvar as informações, você pode salvar em memória ou em um arquivo no formato JSON;_

- Abaixo segue JSON pensado como entrada de dados para a API e organizado de acordo com o relacionamento entre matriz (merchant) e filial (branchs).

```json
[
  {
    "merchant": {
      "id": 1,
      "name": "Outback SteackHouse",
      "address": {
        "streetName": "Avenida do Estado",
        "streetNumber": 121,
        "neighborhood": "Barra da Tijuca",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "postalCode": "98680-149"
      },
      "businessHours": {
        "daysOfWeek": ["Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
        "openingTime": "11h",
        "closingTime": "01h"
      },
      "coordinates": {
        "latitude": "-97423",
        "longitude": "-5416788"
      },
      "averageTicket": 3105980.19,
      "branchs": [
        {
          "branchId": 1,
          "name": "Outback Jundiaí",
          "address": {
            "streetName": "Rua Pedro",
            "streetNumber": 32,
            "neighborhood": "",
            "city": "Jundiaí",
            "state": "SP",
            "postalCode": "98089-589"
          },
          "businessHours": {
            "daysOfWeek": ["Sábado"],
            "openingTime": ["11h", "17h"],
            "closingTime": ["14h", "02h"]
          },
          "coordinates": {
            "latitude": "21414",
            "longitude": "9342"
          },
          "averageTicket": 2199000.58,
          "messages": [],
          "status": "open",
          "serviceType": ["Take Away", "Indoor", "Delivery"],
          "categories": ["Steak House", "Beer", "Hamburguers"]
        },
        {
          "branchId": 2,
          "name": "Outback Max Ville",
          "address": {
            "streetName": "Estrada das Oliveiras",
            "streetNumber": 990,
            "neighborhood": "",
            "city": "Extrema",
            "state": "MG",
            "postalCode": "37604-000"
          },
          "businessHours": {
            "daysOfWeek": ["Sábado"],
            "openingTime": ["11h", "17h"],
            "closingTime": ["14h", "02h"]
          },
          "coordinates": {
            "latitude": "985435",
            "longitude": "23724"
          },
          "averageTicket": 1890359.09,
          "messages": [],
          "status": "open",
          "serviceType": ["Take Away", "Indoor", "Delivery"],
          "categories": ["Steak House", "Beer", "Hamburguers"]
        },
        {
          "branchId": 3,
          "name": "Outback Pátio Savassi",
          "address": {
            "streetName": "Avenida do Contorno",
            "streetNumber": 6061,
            "neighborhood": "Savassi",
            "city": "Belo Horizonte",
            "state": "MG",
            "postalCode": "30110-929"
          },
          "businessHours": {
            "daysOfWeek": ["Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
            "openingTime": "11h",
            "closingTime": "01h"
          },
          "coordinates": {
            "latitude": "89734",
            "longitude": "127834"
          },
          "averageTicket": 1751963.33,
          "messages": [],
          "status": "open",
          "serviceType": ["Take Away", "Indoor", "Delivery"],
          "categories": ["Steak House", "Beer", "Hamburguers"]
        }
      ],
      "status": "open",
      "serviceType": ["Take Away", "Indoor", "Delivery"],
      "categories": ["Steak House", "Beer", "Hamburguers"]
    }
  }
 ]

```

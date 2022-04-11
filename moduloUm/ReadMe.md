# ♾️ Case Módulo I ♾️

## 🎲 Trabalhando com Estrutura de dados 🎲

<img align="right" alt="GIF" src="https://github.com/gabiazevedo/Internship-Girls-In-Tech/blob/main/moduloUm/Case/freakingOutGif.gif" width="300px" />

- O objetivo desse case é garantir o uso de lógica, usando de todos os recursos adquiridos no Módulo I, para formatar um JSON de acordo com as boas práticas de estutura de dados. Esse JSON contém todas as informções de um pedido.

À partir do entendimento de como esse JSON pode ser melhorado, resolva os exercícios abaixo:

1 - Crie uma função que apenas retorne os dados dos itens em uma lista;

- Meu desenvolvimento foi com foco na organização e padronização dos dados, visando facilitar a leitura e acesso em momento posterior.

 ```json
  [
    {
      "item": {
        "id": 26551,
        "name": "Handcrafted Soft Tuna",
        "description": "withdrawal azure Handmade",
        "quantity": 45,
        "unitPrice": 7.244,
        "totalPrice": 325.98,
        "discount": 27.74
      }
    },
    {"..."}
  ]
  ```
  Exemplo de um elemento no retorno da função que formata os dados da entidade `"item"`.
  
  Obs.: O campo "totalPrice" teve seu valor atribído através de uma função desenvolvida para o cálculo do total do pedido. A função se encontra no arquivo: `./JsonFormatedParts/itemFormatFunctions.js`

---
2 - Crie uma função que apenas retorne os dados dos restaurantes (merchant) do pedido;

- Visando a organização dos dados, a entidade `"merchant"` recebeu tratamento do campo `"address"`, organizando as propriedades dentro de um objeto e excluindo as propriedades redundantes.

```json
  [
    {
      "merchant": {
        "name": "Reynolds - Goldner",
        "cnpj": "Veum and Sons",
        "address": {
          "country": "South Georgia and the South Sandwich Islands",
          "state": "IA",
          "city": "Roswell",
          "neighborhood": "Rhode Island",
          "streetName": "Will Branch",
          "number": 63178,
          "postalCode": "00394",
          "latitude": "-71.1353",
          "longitude": "29.0286"
        }
      }
    },
    {"..."}
  ]
  ```
Obs.: A função se encontra no arquivo: `./JsonFormatedParts/merchantFormatFunctions.js`.

---
3 - Crie uma função que apenas mantenha os dados dos cliente (customer) do pedido;

```json
  [
    {
     "customer": {
        "firstName": "Miss Maxine Harber",
        "fisplayName": "Gayle Blick",
        "lastName": "Wiegand",
        "phoneNumber": "1-999-984-9782",
        "email": "Green55@yahoo.com",
        "country": "Cuba",
        "neighborhood": "Arizona"
      }
    },
    {"..."}
  ]
  ```
Obs.: A função se encontra no arquivo: `./JsonFormatedParts/customerFormatFunctions.js`.

---
4 - Dentro do arquivo `./orders.json` existem atributos como `"item_totalPrice"` com um texto preenchido e com o prefixo `[FUNCTION_HERE]`, ou seja, para cada atributo com essa informação, deve ser criada uma função que atenda à regra de negócio proposta;

- A principal entidade que continha funções a serem desenvolvidas foi `"payments"`. Foi feito o tratamento dos dados afim de preencher os campos com as informações corretas
de acordo com o retorno das funções. Todas as propriedades foram renomeadas para melhor leitura e entendimento.

```json
  [
    {
      "payments": {
        "method_1": "VOUCHER",
        "code_1": "106",
        "value_1": 1073.32,
        "changeFor_1": 0,
        "method_2": "DEBIT",
        "code_2": "412",
        "value_2": 2179.16,
        "changeFor_2": 0,
        "subTotal": 3282.37,
        "total": 3252.48,
        "totalDiscounts": 29.89,
        "totalInCash": 0,
        "chargesChange": 0
      }
    },
    {"..."}
  ]
  ```

Obs.: As funções se encontram nos seguintes arquivos: `./JsonFormatedParts/paymentFormatFunctions.js` e `./helpers/helperFuncions.js`.

Nota: É bastante claro para mim que o objeto `"payments"` ainda não está distribuído na melhor e mais legível versão. A organização que eu considero apropriada,
está no arquivo `./formatedJson.json`.

- A entidade `"cart"` também continha funções a serem atribuídas às propriedades correspondentes. Segue abaixo organização do objeto,
já com os valores preenchidos e formatados.

```json
  [
    {
      "cart": {
        "cartId": 95468,
        "cartSubTotal": 325.98,
        "cartTotal": 298.24
      }
    },
    {"..."}
  ]
  ```
  
---
5 - Visto que os dados dos pedidos estão de uma forma que não utiliza boas práticas de estrutura de dados,
remodele-os de acordo com o seu entendimento de como poderiam ser melhor manipulados, lidos e acessados.
Gere um novo JSON com esse modelo de dados;

- O novo JSON está disponível no arquivo: `./formatedJson.json`.

---
6 - Explique o motivo do uso da estrutura de dados proposto acima de uma forma simples.

- O desenvolvimento se deu com o pensamento de que as informações precisavam ser separadas e agrupadas de acordo com a entidade à qual fazem referência.

Eu dividi em 5 partes: `"item"`, `"merchant"`, `"cart"`, `"payments"`, `"customer"`.
Cada parte recebeu tratamento adequado para que a divisão e organização das informações fosse bem sucedida.
Falando particularmente da entidade `"payments"`, entendo que ela deve receber um atributo `"payment: []"` que é uma lista de métodos de pagamento e o atributo `"charges: {}"`. `"payment: []"`, receberá dois objetos, cada um contendo as respectivas informações
do método de pagamento. Já o atributo `"charges: {}"` recebe todas as informações finais relativas ao pagamento, descontos e troco.

---

### Próximos passos ⬆️

 - Finalizar a organização da entidade `"payments"` como descrito acima.
 - Unir todas as entidades em um único JSON, escrevendo um novo arquivo.

---

### Desenvolvido por:

💬 Gabriela Azevedo </br>
<a href="https://www.linkedin.com/in/gabiazevedoms/" target="_blank">
  <img src="https://cdn.icon-icons.com/icons2/2558/PNG/512/scribble_social_linkedin_logo_icon_153103.png" width="48px" height="48px">
</a>

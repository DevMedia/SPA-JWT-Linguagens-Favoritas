# App Fullstack JavaScript com JWT: Linguagens favoritas

Nesse projeto veremos a implementação de sistema de login e cadastro completo em uma aplicação SPA, ou Single-page application, utilizando o framework Angular e o padrão JWT, ou JSON Web Token. Essa aplicação se trata de um Dashboard onde podemos visualizar uma lista de linguagens de programação e curtir aquelas que mais gostamos. Podemos, também, visualizar o número de curtidas em cada uma dessas linguagens, bem como um gráfico de pizza com a distribuição do total de curtidas dentre essas linguagens. 

Para a interface utilizamos a biblioteca Bootstrap, que forneceu o sistema de Grid (contêiner, linhas e colunas), o menu superior, as core, o cartão onde mostraremos os dados das linguagens e a estilização dos formulários. Além disso, utilizamos o pacote ngx-toastr para exibir mensagens de sucesso e erro para o usuário e o pacote ng2-charts para a construção do gráfico de pizza. 

Criamos, também, uma API RESTful utilizando o Node.js que servirá como back-end da nossa aplicação, fornecendo a autenticação via JWT e acesso controlado aos recursos necessários para a aplicação, como por exemplo a listagem de linguagens e a opção de curti-las.

Para uma explicação completa sobre esse código confira a Série Autenticação com JWT no Node.js + Angular https://www.devmedia.com.br/jwt-json-web-tokens/

## Destaques do projeto
* Angular 7
* TypeScript
* Autenticação JWT
* Guardiões de rota
* Interceptadores HTTP
* Data Services
* Local Storage
# Exercício de Context API
Vamos alterar uma aplicação de formulários básica utilizando `Redux` para `Context API`!


# SOBRE O EXERCÍCIO

Este exercício consiste em uma aplicação com dois formulários criados, cada um em uma etapa de uma suposta inscrição, um para dados pessoais e outro para dados profissionais, que após preenchidos exibem as informações inseridas na tela.

Para que eles funcionem bem, foi utilizado o Redux para salvar as informações de cada formulário na store e, por fim, na página final `FormDataDisplay`, ao submeter o formulário, acessamos esses dados para que sejam renderizados na tela.

Seu objetivo aqui será o de substituir totalmente a utilização do `Redux` por `Context API` para isso, é interessante que você leia [ESTE CONTEÚDO](https://www.notion.so/beedeveloper/Context-API-do-React-b7981d474b024071a07430bc31495b36);

### Antes de iniciar


Crie um fork desse projeto e para isso siga esse  [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o  `npm install`.

Vá para a branch master do seu projeto e execute o comando:
`git branch`  ou  `git branch -a`

Verifique se a a branch  `master`  apareceu:

-   O exercício deverá ser feito na branch  `master`.

Observe o que deve ser feito nas instruções.

Após a solução dos exercícios, abra um PR no seu repositório `forkado` e, se quiser, `mergeie` para a master, sinta-se a vontade!

**Atenção**! Quando for criar o PR você irá se deparar com essa tela:

[![exemple-pr](https://github.com/Fraitz/summerTest/raw/master/images/examplepr.png)](https://github.com/Fraitz/summerTest/blob/master/images/examplepr.png)

É necessário realizar uma mudança. Clique no base repository como na imagem abaixo:

[![exemple-pr](https://github.com/Fraitz/summerTest/raw/master/images/change-base.png)](https://github.com/Fraitz/summerTest/blob/master/images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo:  `rogerio/redux-to-context`. Depois desse passo a página deve ficar assim:

[![exemple-pr](https://github.com/Fraitz/summerTest/raw/master/images/after-change.png)](https://github.com/Fraitz/summerTest/blob/master/images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão  `Create Pull Request`.


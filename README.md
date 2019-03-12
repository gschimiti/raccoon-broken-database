# raccoon-broken-database

Projeto classificatório do processo seletivo de TI da [Raccoon](https://raccoon.ag/).

## Projeto

O projeto contém a seguinte estrutura

```
raccoon-broken-database/
	database/
	plugins/
	test/
	README.md
```

#### database/

Contém um exemplo de arquivo .json com um banco de dados de estoque de produtos corrompido para testes de recuperação e manipulação de dados.

#### plugins/

Contém três plugins

```
broken-data-plugin.js
data-test-plugin.js
valid-data-plugin.js
```

###### plugins/broken-data-plugin.js

Plugin de correção de nomes, preços e quantidades dos produtos do banco de dados corrompido.

###### plugins/data-test-plugin.js

Plugin de teste dos plugins BrokenData e ValidData.

###### plugins/valid-data-plugin.js

Plugin de manipulação de dados corrigidos do banco de dados corrompido. Ordena e calcula o valor total do estoque de produtos.

#### test/

Contém arquivos da interface de teste dos plugins.

###### test/assets/

Recursos necessários para a execução da interface de testes como: fontes, imagens, CSS e JS.

###### test/index.html

Interface para execução e visualização dos resultados dos testes de recuperação do banco de dados.

#### README.md

Arquivo com a descrição do projeto, sua estrutura e seus componentes.

## Autor

[Gustavo Schimiti](https://github.com/gschimiti)

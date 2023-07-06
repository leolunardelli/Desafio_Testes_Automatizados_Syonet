# Testes Automatizados - Documentação

Este repositório contém testes automatizados desenvolvidos com o uso do framework Cypress para validar os seguintes cenários:

1. Form Authentication
2. Dynamic loading 2
3. Frames / Nested frames

## Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Configuração do Ambiente

1. Clone este repositório em sua máquina local:

```
git clone <URL_DO_REPOSITORIO>
```

2. Acesse a pasta do projeto:

```
cd <NOME_DA_PASTA>
```

3. Instale as dependências do projeto, incluindo o Cypress, Cypress Iframe, Mochawesome e outras dependências:

```
npm run install
```

## Executando os Testes

1. Para executar a suíte completa de testes, execute o seguinte comando:

```
npx cypress run
```

2. Para abrir a interface gráfica do Cypress e executar os testes de forma interativa, utilize o comando:

```
npx cypress open
```

3. Para executar um teste específico, utilize o comando:

```
npx cypress run --spec "<CAMINHO_DO_ARQUIVO_DE_TESTE>"
```

## Visualizando os Relatórios

Após a execução dos testes, é possível visualizar os relatórios no formato HTML e acessar os screenshots das falhas ou erros.

1. Os relatórios de teste são gerados automaticamente após a execução dos testes e estão localizados na pasta `cypress/reports`.

2. Os screenshots das falhas ou erros encontrados durante a execução dos testes estão armazenados na pasta `cypress/screenshots`.

## Testes Disponíveis

### Form Authentication

- Descrição: Realiza o login no sistema, validando fluxos de sucesso e insucesso usando as credenciais disponibilizadas na própria página.
- Arquivo de Teste: `cypress/automated_tests.spec.cy.js`

### Dynamic loading 2

- Descrição: Lê o texto que aparece após um determinado período de tempo, tratando adequadamente a espera.

### Frames / Nested frames

- Descrição: Lê o texto presente no frame superior do meio e exibe no log.

## Conclusão

Este projeto contém testes automatizados usando o Cypress para validar os cenários descritos acima. Sinta-se à vontade para explorar os testes existentes, adicionar novos testes ou fazer melhorias conforme necessário.

Em caso de dúvidas ou problemas, entre em contato com a equipe responsável pelo desenvolvimento e manutenção deste projeto.

Happy testing!
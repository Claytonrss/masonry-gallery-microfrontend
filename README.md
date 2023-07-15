# Projeto Galeria de Fotos com Microfrontends

## Descrição do Projeto com Microfrontends

Este projeto utiliza a arquitetura de microfrontends para construir uma aplicação de galeria de fotos. Consiste em algumas partes principais: um Microfrontend Host, um Microfrontend PhotoGallery, uma biblioteca de componentes e um BFF (Back-end For Front-end).

O Microfrontend Host é responsável por orquestrar os microfrontends, enquanto o Microfrontend PhotoGallery exibe a galeria de fotos. A biblioteca de componentes é usada para compartilhar componentes entre os microfrontends. Por último, o BFF atua como um ponto de acesso centralizado, buscando fotos da API do Pexels e enviando-as para o Microfrontend PhotoGallery.

## Tecnologias Utilizadas

- TypeScript
- Module Federation
- Tailwind CSS
- DaisyUI
- Vite
- Jest para testes
- Node.js
- Express
- React
- Pexels API
- Vercel para implantação

## Instalação e Configuração

1. Clone o repositório.
2. Cada parte do projeto (Host, PhotoGallery, biblioteca de componentes, BFF) tem seu próprio diretório. Entre no diretório da parte do projeto que você deseja configurar.
3. Execute `yarn install` para instalar as dependências.
4. Siga as instruções de configuração específicas de cada parte do projeto (listadas na documentação de cada uma delas).

## Execução

Cada parte do projeto pode ser executada individualmente usando os scripts npm relevantes. Em geral, `yarn dev` irá iniciar o servidor de desenvolvimento, enquanto `yarn build` irá criar a versão de produção do projeto.

## CI/CD Pipeline com GitHub Actions

Este projeto usa o GitHub Actions para implementar um pipeline de CI/CD (Integração Contínua / Entrega Contínua). O pipeline automatiza o processo de construção, teste e análise de qualidade do código.

### Workflow

O workflow é definido no arquivo `ci.yml` na pasta `.github/workflows` do repositório.

Aqui está um resumo dos passos que o pipeline automatiza:

1. **Checkout**: O código do repositório é extraído para o ambiente de execução do GitHub Actions.
2. **Use Node.js**: A versão 18.x do Node.js é configurada para ser usada no ambiente de execução.
3. **Install dependencies**: As dependências do projeto são instaladas com `yarn install --frozen-lockfile`.
4. **Build and test**: A versão de produção do projeto é construída e os testes são executados com `yarn build` e `yarn test` respectivamente.
5. **SonarCloud analysis**: A qualidade do código é analisada com o SonarCloud.

O pipeline é executado sempre que um pull request é feito para o branch `main`.

### Status da Pipeline

O status da pipeline pode ser verificado na aba "Actions" do repositório GitHub. Lá, você pode ver o progresso de cada execução da pipeline e verificar se houve algum erro.

### Notificações

O GitHub Actions está configurado para enviar notificações por e-mail sempre que uma execução da pipeline falha.

## Contribuição

Contribuições são bem-vindas! Se tiver uma ideia para uma funcionalidade ou para a correção de um bug, sinta-se à vontade para abrir uma issue ou fazer um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para qualquer dúvida, problema ou sugestão, entre em contato comigo (https://www.linkedin.com/in/clayton-rafael).

## Back-end For Front-end (BFF)

O BFF é o ponto de acesso centralizado para os microfrontends. Ele foi construído com Node.js e Express, e se comunica com a API do Pexels para fornecer dados para o microfrontend PhotoGallery.

### Tecnologias Utilizadas

- Node.js
- Express
- Axios
- Pexels API
- Cors

### Funcionalidades

- **Rotas**: Atualmente, o BFF possui uma rota que permite buscar fotos por categoria.

- **Middleware de Autenticação**: O BFF usa um middleware personalizado para autenticação. Isso verifica se a chave API passada no cabeçalho de autorização é igual à chave API armazenada no arquivo .env.
- **Middleware CORS**: Este middleware permite que apenas solicitações de domínios específicos acessem o BFF. A lista de domínios permitidos é definida na variável de ambiente `CORS_WHITELIST`. Durante o desenvolvimento, todos os domínios são permitidos.

### Instalação e Configuração

Clone o repositório e navegue até a pasta do BFF:

```
git clone https://github.com/Claytonrss/masonry-gallery-microfrontend.git
cd masonry-gallery-microfrontend/services/BFF
```

Instale as dependências:

```
yarn install
```

Adicione um arquivo `.env` na raiz do projeto com as seguintes variáveis e as preenchas com os valores correspondentes:

```
PEXELS_API_KEY=
BFF_API_KEY=
CORS_WHITELIST=
```

Agora você pode rodar o projeto:

```
yarn dev
```

A aplicação será iniciada e estará disponível em `http://localhost:3000`.

### Build e Execução

Para criar a versão de produção do projeto, use o comando `yarn build`. Isso irá compilar os arquivos TypeScript em JavaScript e colocá-los na pasta `dist`. Você pode então executar o servidor com `yarn start`.

## Uso

O BFF está disponível para uso e teste [aqui](https://masonry-gallery-microfrontend-bff.vercel.app/).

## Contribuição

Contribuições são bem-vindas! Se tiver uma ideia para uma funcionalidade ou para a correção de um bug, sinta-se à vontade para abrir uma issue ou fazer um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para qualquer dúvida, problema ou sugestão, entre em contato com [Clayton

Rafael](https://www.linkedin.com/in/clayton-rafael).

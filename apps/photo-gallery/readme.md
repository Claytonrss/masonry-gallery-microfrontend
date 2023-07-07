# Módulo PhotoGallery do Projeto PhotoGallery

## Descrição

O módulo PhotoGallery é uma aplicação de microfrontend que tem como objetivo exibir uma galeria de fotos, que são fornecidas por um BFF (Back-end For Frontend). Esta aplicação é consumida pelo microfrontend Host, mas também pode funcionar de forma independente. O PhotoGallery também se autentica via uma chave de API (API_KEY) definida no BFF.

Este módulo foi implantado na Vercel e está disponível [neste link](https://masonry-gallery-microfrontend-photo-gallery.vercel.app/).

## Características principais

- Exibe uma galeria de fotos com dados consumidos de um BFF.
- Possui duas opções de layout de exibição.
- Capaz de reordenar as fotos. Estas funcionalidades são controladas via props e eventlistener pelo Host que consome a aplicação.

## Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- Vite
- React
- TypeScript
- Framer-motion
- React-masonry-css
- Module Federation
- TailwindCSS

## Instalação

Clone o repositório e navegue até a pasta do microfrontend photo-gallery:

```
git clone https://github.com/Claytonrss/masonry-gallery-microfrontend.git
cd masonry-gallery-microfrontend/apps/photo-gallery
```

Instale as dependências:

```
yarn install
```

## Configuração

Você precisará configurar duas variáveis de ambiente:

- `VITE_API_KEY`: A chave de API para a autenticação com o BFF.
- `VITE_API_URL`: A URL do BFF.

Essas variáveis de ambiente devem ser definidas no arquivo `.env`.

## Utilização

Para executar o projeto de forma a ser consumido pelo Host, você precisa executar o seguinte comando:

```
yarn build && yarn serve
```

## Contribuição

Contribuições são bem-vindas! Se tiver uma ideia para uma funcionalidade ou para a correção de um bug, sinta-se à vontade para abrir uma issue ou fazer um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para qualquer dúvida, problema ou sugestão, entre em contato com [Clayton

Rafael](https://www.linkedin.com/in/clayton-rafael).

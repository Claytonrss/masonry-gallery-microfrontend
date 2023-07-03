# Biblioteca de Componentes Personalizada

Nome do projeto: `custom-component-library-with-tailwind`

A biblioteca `custom-component-library-with-tailwind` é uma biblioteca de componentes personalizada desenvolvida com o intuito de proporcionar um estudo aprofundado sobre a criação de bibliotecas de componentes. Esta biblioteca foi desenvolvida utilizando as tecnologias React, TypeScript e Tailwind CSS e está publicada no npm. Pode ser acessada através do seguinte link: [Custom Component Library with Tailwind](https://www.npmjs.com/package/custom-component-library-with-tailwind)

## Instalação

Para instalar e utilizar a biblioteca em seus projetos, você pode usar o seguinte comando npm:

```
npm install custom-component-library-with-tailwind
```

Ou, se você estiver usando yarn:

```
yarn add custom-component-library-with-tailwind
```

## Uso

Atualmente, a biblioteca contém apenas um componente: `Loading`. Este componente é usado para exibir uma animação de carregamento quando os dados estão sendo carregados.

Aqui está um exemplo de como você pode usar o componente `Loading`:

```jsx
import Loading from "custom-component-library-with-tailwind";

function Component() {
  return (
    <div>
      {/* Other components */}
      <Loading />
      {/* Other components */}
    </div>
  );
}
```

O código do componente `Loading` é o seguinte:

```jsx
const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative animate-spin rounded-full h-32 w-32 border-t-4 border-blue-400"></div>
    </div>
  );
};

export default Loading;
```

## Contribuição

A biblioteca é de código aberto e aceita contribuições. Se você deseja adicionar novos componentes ou melhorar os componentes existentes, sinta-se à vontade para abrir um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações ou perguntas, entre em contato com o proprietário do projeto, Clayton Rafael, através do seu perfil no LinkedIn: [https://www.linkedin.com/in/clayton-rafael](https://www.linkedin.com/in/clayton-rafael)

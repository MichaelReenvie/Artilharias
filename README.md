# Futebol Artilheiros - README

## Descrição

Este projeto é uma aplicação React que exibe os principais artilheiros do Campeonato Brasileiro de 2024. A aplicação consome a API [API-Futebol](https://www.api-futebol.com.br/) para listar os jogadores com o maior número de gols. Além de exibir um resumo das informações de cada artilheiro, também oferece detalhes adicionais em um formato de lista expansível.

## Funcionalidades

- Listagem dos principais artilheiros do Campeonato Brasileiro de 2024.
- Exibição do nome do time, jogador, posição e quantidade de gols.
- Paginação para navegar entre os artilheiros.
- Detalhes adicionais ao expandir o item correspondente na lista.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS:** Para estilização da interface.
- **Fetch API:** Para consumir a API externa.

## Estrutura do Projeto

```plaintext
futebol-artilheiros/
├── public/
├── src/
│   ├── components/
│   │   ├── Page/
│   │   │   └── Transactions.jsx
│   │   ├── TransactionDetails.jsx
│   │   ├── TransactionItem.jsx
│   │   └── TransactionSummary.jsx
│   ├── styles/
│   │   └── styles.css
│   ├── App.js
│   └── index.js
└── package.json
```

### Componentes Principais

1. **Transactions.jsx:** Componente principal que gerencia a listagem dos artilheiros, faz a chamada à API e controla a paginação.
2. **TransactionItem.jsx:** Componente que agrupa o resumo e os detalhes de cada artilheiro.
3. **TransactionSummary.jsx:** Componente responsável por exibir o resumo das informações de cada artilheiro (nome do time, jogador e quantidade de gols).
4. **TransactionDetails.jsx:** Componente que exibe informações adicionais como a posição do jogador e siglas.

## Estilo e Layout

O projeto utiliza CSS puro para estilizar a interface, oferecendo uma experiência de usuário limpa e responsiva. Algumas características incluem:

- Botões de paginação personalizados.
- Estilo elegante para o resumo e os detalhes dos artilheiros.
- Layout flexível e centralizado para se adaptar a diferentes tamanhos de tela.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/futebol-artilheiros.git
```

2. Navegue até o diretório do projeto:

```bash
cd futebol-artilheiros
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```



## Considerações Finais

Este projeto foi desenvolvido para mostrar de forma simples e interativa os principais artilheiros do Campeonato Brasileiro de 2024, utilizando React e a API Futebol. Além disso, ele implementa um sistema básico de paginação e detalhes expansíveis para melhorar a navegação do usuário.

## Site

<a href="https://artilheiros-de-futebol-no-brasil.vercel.app/">
    <img loading="lazy" src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" alt="MonIP" />
</a>

---

Sinta-se à vontade para explorar e modificar o código conforme sua necessidade!

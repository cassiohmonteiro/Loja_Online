# CH Imports 🛒

Projeto acadêmico desenvolvido para a disciplina de **Desenvolvimento Web**. Trata-se de uma loja virtual de celulares e tablets, com navegação entre produtos, carrinho de compras e sistema de login.

## 🔗 Funcionalidades

- Página principal com listagem de produtos e busca em tempo real
- Página de produto dinâmica — uma única página (`produto.html`) carrega qualquer produto via parâmetro de URL (`?id=N`)
- Carrinho de compras com adição, remoção e total calculado automaticamente
- Sistema de cadastro e login com persistência via `sessionStorage`
- Seção de produtos relacionados em cada página de produto

## 📁 Estrutura do projeto

```
├── pagprincipal.html       # Página inicial com todos os produtos
├── produto.html            # Página dinâmica de detalhes do produto
├── produto.css             # Estilos da página de produto
├── products.js             # Fonte única de dados dos produtos
├── index.css               # Estilos globais
├── index.js                # Lógica de renderização e busca da página principal
├── produtos/               # Imagens dos produtos
├── cartcompras/            # Página e estilos do carrinho
├── login/                  # Página de cadastro/login
└── redessociais/           # Ícones e favicon
```

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Puro
- `localStorage` — persistência do carrinho entre páginas
- `sessionStorage` — persistência do login na sessão

## 🚀 Como executar

Não há dependências ou instalação necessária. Basta abrir o arquivo `pagprincipal.html` no navegador — ou, para evitar restrições de CORS com arquivos locais, usar uma extensão como o **Live Server** (VS Code).


## 👨‍💻 Autor

Desenvolvido por **Cássio Henrique** — [@cassioo__henrique](https://www.instagram.com/cassioo__henrique/)

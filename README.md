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

## 📦 Produtos disponíveis

| Produto | Preço |
|---|---|
| Smartphone Motorola Moto G54 | R$ 999,00 |
| iPhone 13 Apple 128GB | R$ 3.599,00 |
| Apple iPhone 14 Pro | R$ 7.531,50 |
| Smartphone Motorola Moto G84 5G | R$ 1.389,00 |
| Smartphone Xiaomi Redmi 13C | R$ 1.499,00 |
| Samsung Galaxy S21 | R$ 2.999,00 |
| Apple iPad 10ª Geração | R$ 2.448,80 |
| Tablet Samsung Galaxy Tab S6 Lite | R$ 1.865,00 |

## 👨‍💻 Autor

Desenvolvido por **Cássio Henrique** — [@cassioo__henrique](https://www.instagram.com/cassioo__henrique/)

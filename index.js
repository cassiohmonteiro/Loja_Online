// Agora os dados dos produtos ficam em products.js (fonte única)
// index.js apenas renderiza e gerencia a busca da página principal

function renderProducts(filteredProducts = products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    if (filteredProducts.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado</p>';
        return;
    }

    const rows = Math.ceil(filteredProducts.length / 4);

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'product-row';

        for (let j = i * 4; j < (i * 4) + 4 && j < filteredProducts.length; j++) {
            const product = filteredProducts[j];
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <a href="${product.link}">
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p class="description">${product.description}</p>
                    <p class="price">${product.price}</p>
                </a>
            `;
            row.appendChild(productDiv);
        }

        container.appendChild(row);
    }
}

function searchProducts() {
    const searchTerm = document.querySelector('.search input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

function clearSearch() {
    document.querySelector('.search input').value = '';
    renderProducts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.querySelector('.search button').addEventListener('click', searchProducts);
    document.querySelector('.search input').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') searchProducts();
    });
    window.addEventListener('popstate', clearSearch);
});

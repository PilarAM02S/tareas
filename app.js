// URL de la API
const API_BASE_URL = "https://fakestoreapi.com";

// Cargar productos destacados (con mejor calificación)
function loadFeaturedProducts() {
    $.get(`${API_BASE_URL}/products?limit=5`, function (products) {
        let featuredHTML = '';
        products.forEach(product => {
            featuredHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">Rating: ${product.rating.rate} ⭐</p>
                            <p class="card-text">$${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#featured-products').html(featuredHTML);
    });
}

// Cargar categorías
function loadCategories() {
    $.get(`${API_BASE_URL}/products/categories`, function (categories) {
        let categoryHTML = '';
        categories.forEach(category => {
            categoryHTML += `
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <h5 class="card-title text-capitalize">${category}</h5>
                            <a href="products.html?category=${category}" class="btn btn-primary">Ver Productos</a>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#category-list').html(categoryHTML);
    });
}

// Llamadas al cargar la página
$(document).ready(function () {
    loadFeaturedProducts();
    loadCategories();
});

// Cargar productos de una categoría específica
function loadProductsByCategory(category) {
    $.get(`${API_BASE_URL}/products/category/${category}`, function (products) {
        let productsHTML = '';
        products.forEach(product => {
            productsHTML += `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">$${product.price}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-primary">Ver Detalles</a>
                        </div>
                    </div>
                </div>
            `;
        });
        $('#products-list').html(productsHTML);
    });
}

// Obtener la categoría de la URL y cargar los productos correspondientes
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
if (category) {
    loadProductsByCategory(category);
}

// Cargar detalles de un producto específico por su ID
function loadProductDetails(productId) {
    $.get(`${API_BASE_URL}/products/${productId}`, function (product) {
        let productHTML = `
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.title}">
            </div>
            <div class="col-md-6">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
                <p>Categoría: ${product.category}</p>
                <p>Rating: ${product.rating.rate} ⭐</p>
                <button class="btn btn-success">Añadir al Carrito</button>
            </div>
        `;
        $('#product-detail').html(productHTML);
    });
}

// Obtener el ID del producto desde la URL
const productId = new URLSearchParams(window.location.search).get('id');
if (productId) {
    loadProductDetails(productId);
}

$(document).ready(function () {
    // Efecto simple de desvanecer al hacer scroll
    $(window).on('scroll', function () {
        $('.fade-in').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });
});
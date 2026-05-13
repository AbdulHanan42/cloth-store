// Glowsn JavaScript

// Product Data Structure
const products = {
    summer: [
        {
            id: 's1',
            name: 'Floral Summer Dress',
            price: 89.99,
            originalPrice: 129.99,
            image: 'https://picsum.photos/seed/summer1/400/500',
            category: 'summer',
            subcategory: 'dresses',
            rating: 4.5,
            reviews: 23,
            description: 'Beautiful floral print dress perfect for summer occasions',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Pink', 'Blue', 'Yellow'],
            material: 'Cotton',
            sale: true,
            featured: true
        },
        {
            id: 's2',
            name: 'Linen Blouse',
            price: 59.99,
            originalPrice: 79.99,
            image: 'https://picsum.photos/seed/summer2/400/500',
            category: 'summer',
            subcategory: 'tops',
            rating: 4.3,
            reviews: 18,
            description: 'Lightweight linen blouse for casual summer wear',
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['White', 'Beige', 'Light Blue'],
            material: 'Linen',
            sale: false,
            featured: false
        },
        {
            id: 's3',
            name: 'Beach Maxi Skirt',
            price: 49.99,
            originalPrice: 69.99,
            image: 'https://picsum.photos/seed/summer3/400/500',
            category: 'summer',
            subcategory: 'bottoms',
            rating: 4.7,
            reviews: 31,
            description: 'Flowing maxi skirt perfect for beach days',
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Turquoise', 'Coral', 'White'],
            material: 'Polyester',
            sale: true,
            featured: true
        }
    ],
    winter: [
        {
            id: 'w1',
            name: 'Wool Coat',
            price: 199.99,
            originalPrice: 299.99,
            image: 'https://picsum.photos/seed/winter1/400/500',
            category: 'winter',
            subcategory: 'outerwear',
            rating: 4.8,
            reviews: 45,
            description: 'Warm and stylish wool coat for winter',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Black', 'Navy', 'Camel'],
            material: 'Wool',
            sale: true,
            featured: true
        },
        {
            id: 'w2',
            name: 'Cashmere Sweater',
            price: 129.99,
            originalPrice: 179.99,
            image: 'https://picsum.photos/seed/winter2/400/500',
            category: 'winter',
            subcategory: 'tops',
            rating: 4.9,
            reviews: 67,
            description: 'Luxurious cashmere sweater for ultimate comfort',
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Cream', 'Gray', 'Burgundy'],
            material: 'Cashmere',
            sale: false,
            featured: false
        },
        {
            id: 'w3',
            name: 'Winter Boots',
            price: 89.99,
            originalPrice: 129.99,
            image: 'https://picsum.photos/seed/winter3/400/500',
            category: 'winter',
            subcategory: 'footwear',
            rating: 4.4,
            reviews: 28,
            description: 'Warm and waterproof winter boots',
            sizes: ['6', '7', '8', '9', '10'],
            colors: ['Black', 'Brown'],
            material: 'Leather',
            sale: true,
            featured: true
        }
    ],
    essential: [
        {
            id: 'e1',
            name: 'Classic White Shirt',
            price: 49.99,
            originalPrice: 69.99,
            image: 'https://picsum.photos/seed/essential1/400/500',
            category: 'essential',
            subcategory: 'tops',
            rating: 4.6,
            reviews: 89,
            description: 'Timeless white shirt for every wardrobe',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['White'],
            material: 'Cotton',
            sale: false,
            featured: true
        },
        {
            id: 'e2',
            name: 'Black Jeans',
            price: 79.99,
            originalPrice: 99.99,
            image: 'https://picsum.photos/seed/essential2/400/500',
            category: 'essential',
            subcategory: 'bottoms',
            rating: 4.5,
            reviews: 56,
            description: 'Versatile black jeans for any occasion',
            sizes: ['24', '26', '28', '30', '32'],
            colors: ['Black'],
            material: 'Denim',
            sale: false,
            featured: false
        },
        {
            id: 'e3',
            name: 'Leather Handbag',
            price: 149.99,
            originalPrice: 199.99,
            image: 'https://picsum.photos/seed/essential3/400/500',
            category: 'essential',
            subcategory: 'accessories',
            rating: 4.7,
            reviews: 34,
            description: 'Classic leather handbag with timeless design',
            sizes: ['One Size'],
            colors: ['Black', 'Brown', 'Tan'],
            material: 'Leather',
            sale: true,
            featured: true
        }
    ],
    unstitched: [
        {
            id: 'u1',
            name: 'Designer Lawn Suit',
            price: 39.99,
            originalPrice: 59.99,
            image: 'https://picsum.photos/seed/unstitched1/400/500',
            category: 'unstitched',
            subcategory: 'lawn',
            rating: 4.4,
            reviews: 21,
            description: 'Premium quality lawn fabric for custom stitching',
            sizes: ['3 Piece', '2 Piece'],
            colors: ['Multi-color', 'Pastel', 'Vibrant'],
            material: 'Lawn',
            sale: true,
            featured: true
        },
        {
            id: 'u2',
            name: 'Cotton Silk Fabric',
            price: 54.99,
            originalPrice: 74.99,
            image: 'https://picsum.photos/seed/unstitched2/400/500',
            category: 'unstitched',
            subcategory: 'cotton-silk',
            rating: 4.6,
            reviews: 18,
            description: 'Luxurious cotton silk blend fabric',
            sizes: ['3 Piece', '2 Piece'],
            colors: ['Maroon', 'Navy', 'Emerald'],
            material: 'Cotton Silk',
            sale: false,
            featured: false
        }
    ],
    ready: [
        {
            id: 'r1',
            name: 'Formal Gown',
            price: 249.99,
            originalPrice: 349.99,
            image: 'https://picsum.photos/seed/ready1/400/500',
            category: 'ready',
            subcategory: 'formal',
            rating: 4.8,
            reviews: 42,
            description: 'Elegant formal gown for special occasions',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Black', 'Red', 'Navy'],
            material: 'Silk',
            sale: true,
            featured: true
        },
        {
            id: 'r2',
            name: 'Casual Jumpsuit',
            price: 79.99,
            originalPrice: 99.99,
            image: 'https://picsum.photos/seed/ready2/400/500',
            category: 'ready',
            subcategory: 'casual',
            rating: 4.3,
            reviews: 19,
            description: 'Comfortable and stylish jumpsuit',
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Khaki', 'Navy', 'Black'],
            material: 'Cotton Blend',
            sale: false,
            featured: false
        }
    ]
};

// Categories Data
const categories = [
    {
        id: 'summer',
        name: 'Summer Collection',
        description: 'Light and breathable fabrics for warm weather',
        image: 'https://picsum.photos/seed/cat-summer/400/300',
        icon: 'fa-sun'
    },
    {
        id: 'winter',
        name: 'Winter Collection',
        description: 'Warm and cozy clothing for cold seasons',
        image: 'https://picsum.photos/seed/cat-winter/400/300',
        icon: 'fa-snowflake'
    },
    {
        id: 'essential',
        name: 'Essential Wear',
        description: 'Timeless pieces for every wardrobe',
        image: 'https://picsum.photos/seed/cat-essential/400/300',
        icon: 'fa-star'
    },
    {
        id: 'unstitched',
        name: 'Unstitched',
        description: 'Premium fabrics for custom tailoring',
        image: 'https://picsum.photos/seed/cat-unstitched/400/300',
        icon: 'fa-cut'
    },
    {
        id: 'ready',
        name: 'Ready to Wear',
        description: 'Stitched outfits ready to wear',
        image: 'https://picsum.photos/seed/cat-ready/400/300',
        icon: 'fa-tshirt'
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('fashionStoreCart')) || [];

// Make cart globally accessible
window.cart = cart;

// Performance: Cache DOM elements
let cachedElements = {};

// Cache frequently used DOM elements
function cacheElements() {
    cachedElements = {
        loader: $('#loader'),
        cartCount: $('#cartCount'),
        searchModal: $('#searchModal'),
        searchInput: $('#searchInput'),
        searchResults: $('#searchResults'),
        productsContainer: $('#productsContainer'),
        productCount: $('#productCount')
    };
}

// Initialize App
$(document).ready(function() {
    cacheElements();
    initializeApp();
});

function initializeApp() {
    // Hide loader after page loads
    setTimeout(() => {
        cachedElements.loader.addClass('hidden');
        $('#loader').addClass('hidden');
    }, 1500);

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Load homepage content
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        loadCategories();
        loadFeaturedProducts();
        startCountdown();
    }

    // Load products page
    if (window.location.pathname.endsWith('products.html')) {
        loadProducts();
    }

    // Update cart count
    updateCartCount();

    // Update Auth UI
    updateAuthUI();

    // Initialize scroll effects
    initScrollEffects();

    // Initialize 3D effects
    init3DEffects();
}

// Load Categories on Homepage
function loadCategories() {
    const categoriesGrid = $('#categoriesGrid');
    categoriesGrid.empty();

    categories.forEach((category, index) => {
        const categoryCard = `
            <div class="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="category-card" onclick="navigateToCategory('${category.id}')">
                    <div class="position-relative overflow-hidden">
                        <img src="${category.image}" alt="${category.name}">
                        <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
                            <i class="fas ${category.icon} fa-3x mb-2"></i>
                            <h3>${category.name}</h3>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-0">${category.description}</p>
                    </div>
                </div>
            </div>
        `;
        categoriesGrid.append(categoryCard);
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    const featuredProducts = $('#featuredProducts');
    featuredProducts.empty();

    let featured = [];
    Object.keys(products).forEach(category => {
        featured = featured.concat(products[category].filter(p => p.featured));
    });

    featured.slice(0, 4).forEach((product, index) => {
        const productCard = createProductCard(product, index);
        featuredProducts.append(productCard);
    });
}

// Create Product Card HTML
function createProductCard(product, index) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stars = generateStars(product.rating);
    
    return `
        <div class="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.sale ? `<span class="product-badge">${discount}% OFF</span>` : ''}
                    <div class="product-actions d-flex flex-column gap-2">
                        <div class="d-flex gap-2">
                            <button class="btn-quick-view w-100" onclick="quickView('${product.id}')">
                                <i class="fas fa-eye"></i> Quick View
                            </button>
                            <button class="btn-add-cart w-100" onclick="addToCart('${product.id}')">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                        <button class="btn-buy-now w-100" onclick="buyNow('${product.id}')">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating mb-2">
                        ${stars} <small>(${product.reviews})</small>
                    </div>
                    <div class="product-price">
                        $${product.price}
                        ${product.sale ? `<span class="product-old-price">$${product.originalPrice}</span>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate Star Rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Navigate to Category
function navigateToCategory(categoryId) {
    window.location.href = `products.html?category=${categoryId}`;
}

// Add to Cart
function addToCart(productId) {
    if (!isLoggedIn()) {
        showToast('Please login to add items to cart');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }

    let product = null;
    
    // Find product across all categories
    Object.keys(products).forEach(category => {
        const found = products[category].find(p => p.id === productId);
        if (found) product = found;
    });

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        localStorage.setItem('fashionStoreCart', JSON.stringify(cart));
        updateCartCount();
        showToast(`${product.name} added to cart!`);
    }
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cachedElements.cartCount.text(totalItems);
}

// Show Toast Notification
function showToast(message) {
    const toast = `
        <div class="custom-toast">
            <div class="d-flex align-items-center">
                <i class="fas fa-check-circle text-success me-2"></i>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    let toastContainer = $('.toast-container');
    if (toastContainer.length === 0) {
        toastContainer = $('<div class="toast-container"></div>');
        $('body').append(toastContainer);
    }
    
    const toastElement = $(toast);
    toastContainer.append(toastElement);
    
    setTimeout(() => {
        toastElement.fadeOut(() => {
            toastElement.remove();
        });
    }, 3000);
}

// Quick View Product
function quickView(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Countdown Timer
function startCountdown() {
    // Set sale end date (7 days from now)
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 7);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = saleEndDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));

        if (distance < 0) {
            clearInterval(countdownInterval);
            $('#countdown').html('<h4>Sale Ended</h4>');
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Scroll Effects
function initScrollEffects() {
    $(window).scroll(function() {
        const scrollTop = $(this).scrollTop();
        
        // Navbar scroll effect
        if (scrollTop > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Parallax effect for hero section
        $('.hero-image').css('transform', `translateY(${scrollTop * 0.5}px)`);
    });
}

// 3D Effects
function init3DEffects() {
    $(document).mousemove(function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        $('.parallax-element').each(function() {
            const $this = $(this);
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (mouseX - centerX) / 30;
            const deltaY = (mouseY - centerY) / 30;
            
            $this.css('transform', `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`);
        });
    });
}

// Load Products Page
function loadProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');
    
    let productsToShow = [];
    let pageTitle = 'Products';
    
    if (search) {
        // Handle search from URL parameter
        productsToShow = searchProducts(search);
        pageTitle = `Search Results for "${search}"`;
        $('#productCount').text(productsToShow.length);
    } else if (category && products[category]) {
        productsToShow = products[category];
        pageTitle = categories.find(c => c.id === category)?.name || 'Products';
    } else {
        // Show all products
        Object.keys(products).forEach(cat => {
            productsToShow = productsToShow.concat(products[cat]);
        });
    }
    
    // Update page title
    $('h1').text(pageTitle);
    
    // Display products
    const productsContainer = $('#productsContainer');
    productsContainer.empty();
    
    if (productsToShow.length === 0) {
        productsContainer.html(`
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-4x text-muted mb-3"></i>
                <h4>No products found</h4>
                <p class="text-muted">Try adjusting your search or filters</p>
                <button class="btn btn-primary mt-3" onclick="resetFilters()">Reset Filters</button>
            </div>
        `);
        return;
    }
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsContainer.append(productCard);
    });
}

// Buy Now Function
function buyNow(productId) {
    if (!isLoggedIn()) {
        showToast('Please login to buy items');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
        return;
    }
    addToCart(productId);
    window.location.href = 'cart.html';
}

// Filter Products
function applyFilters() {
    const checkedCategories = [];
    $('input[type="checkbox"][id^="cat"]:checked').each(function() {
        checkedCategories.push($(this).val());
    });
    
    const minPrice = parseFloat($('#minPrice').val()) || 0;
    const maxPrice = parseFloat($('#maxPrice').val()) || Infinity;
    const saleOnly = $('#saleOnly').is(':checked');
    
    let filteredProducts = [];
    
    if (checkedCategories.length > 0) {
        checkedCategories.forEach(category => {
            if (products[category]) {
                filteredProducts = filteredProducts.concat(products[category]);
            }
        });
    } else {
        Object.keys(products).forEach(category => {
            filteredProducts = filteredProducts.concat(products[category]);
        });
    }
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
    
    // Apply sale filter
    if (saleOnly) {
        filteredProducts = filteredProducts.filter(product => product.sale);
    }
    
    // Display filtered products
    displayFilteredProducts(filteredProducts);
}

// Search Products
function searchProducts(query) {
    if (!query || query.length < 2) return [];
    
    query = query.toLowerCase();
    let allProducts = [];
    
    // Get all products from all categories
    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            allProducts.push({...product, category});
        });
    });
    
    // Filter products based on search query
    const filtered = allProducts.filter(product => {
        return product.name.toLowerCase().includes(query) ||
               product.description.toLowerCase().includes(query) ||
               product.category.toLowerCase().includes(query) ||
               product.material.toLowerCase().includes(query) ||
               product.colors.some(color => color.toLowerCase().includes(query));
    });
    
    return filtered;
}

// Perform Search
function performSearch() {
    const query = $('#searchInput').val().trim();
    const resultsContainer = $('#searchResults');
    
    if (!query) {
        resultsContainer.html(`
            <div class="text-center text-muted">
                <i class="fas fa-search fa-3x mb-3"></i>
                <p>Please enter a search term...</p>
            </div>
        `);
        return;
    }
    
    const results = searchProducts(query);
    
    if (results.length === 0) {
        resultsContainer.html(`
            <div class="text-center text-muted">
                <i class="fas fa-search fa-3x mb-3"></i>
                <p>No products found for "${query}"</p>
            </div>
        `);
        return;
    }
    
    // Display search results
    let resultsHTML = '<div class="row g-3">';
    results.slice(0, 6).forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const stars = generateStars(product.rating);
        
        resultsHTML += `
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="row g-0">
                        <div class="col-4">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-start h-100" style="object-fit: cover;">
                        </div>
                        <div class="col-8">
                            <div class="card-body p-2">
                                <h6 class="card-title">${product.name}</h6>
                                <div class="small text-muted mb-1">${stars} (${product.reviews})</div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span class="fw-bold text-primary">$${product.price}</span>
                                        ${product.sale ? `<span class="text-decoration-line-through text-muted small ms-1">$${product.originalPrice}</span>` : ''}
                                    </div>
                                    <button class="btn btn-sm btn-primary" onclick="addToCart('${product.id}'); $('#searchModal').modal('hide');">
                                        <i class="fas fa-cart-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    resultsHTML += '</div>';
    
    if (results.length > 6) {
        resultsHTML += `
            <div class="text-center mt-3">
                <a href="products.html?search=${encodeURIComponent(query)}" class="btn btn-outline-primary">View all ${results.length} results</a>
            </div>
        `;
    }
    
    resultsContainer.html(resultsHTML);
}

// Live search as user types
$(document).on('input', '#searchInput', function() {
    const query = $(this).val().trim();
    if (query.length >= 2) {
        performSearch();
    } else if (query.length === 0) {
        $('#searchResults').html(`
            <div class="text-center text-muted">
                <i class="fas fa-search fa-3x mb-3"></i>
                <p>Start typing to search for products...</p>
            </div>
        `);
    }
});

// Handle search on Enter key
$(document).on('keypress', '#searchInput', function(e) {
    if (e.which === 13) {
        performSearch();
    }
});

// Reset Filters
function resetFilters() {
    $('input[type="checkbox"]').prop('checked', false);
    $('#minPrice, #maxPrice').val('');
    $('.size-btn, .color-btn').removeClass('active');
    loadProducts();
}

// Display Filtered Products
function displayFilteredProducts(filteredProducts) {
    const productsContainer = $('#productsContainer');
    productsContainer.empty();
    
    $('#productCount').text(filteredProducts.length);
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsContainer.append(productCard);
    });
}

// Sort Products
$('#sortSelect').on('change', function() {
    const sortBy = $(this).val();
    let productsToShow = [];
    
    Object.keys(products).forEach(category => {
        productsToShow = productsToShow.concat(products[category]);
    });
    
    switch(sortBy) {
        case 'price-low':
            productsToShow.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            productsToShow.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            productsToShow.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            productsToShow.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Featured order
            break;
    }
    
    displayFilteredProducts(productsToShow);
});

// Size and Color Filter Buttons
$(document).on('click', '.size-btn', function() {
    $(this).toggleClass('active');
});

$(document).on('click', '.color-btn', function() {
    $(this).toggleClass('active');
});

// Grid/List View Toggle
$('#gridView').on('click', function() {
    $(this).addClass('active');
    $('#listView').removeClass('active');
    $('#productsContainer .col-lg-3').removeClass('col-lg-12').addClass('col-lg-3');
});

$('#listView').on('click', function() {
    $(this).addClass('active');
    $('#gridView').removeClass('active');
    $('#productsContainer .col-lg-3').removeClass('col-lg-3').addClass('col-lg-12');
});

// ========================================
// Authentication & Profile System
// ========================================

function isLoggedIn() {
    return localStorage.getItem('fashionStoreCurrentUser') !== null;
}

function getCurrentUser() {
    const data = localStorage.getItem('fashionStoreCurrentUser');
    return data ? JSON.parse(data) : null;
}

function getUsers() {
    return JSON.parse(localStorage.getItem('fashionStoreUsers')) || [];
}

function saveUsers(users) {
    localStorage.setItem('fashionStoreUsers', JSON.stringify(users));
}

function saveCurrentUser(user) {
    localStorage.setItem('fashionStoreCurrentUser', JSON.stringify(user));
}

// Show auth alert message
function showAuthAlert(containerId, message, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const icons = {
        success: 'fa-check-circle',
        danger: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    container.innerHTML = `
        <div class="auth-alert-content auth-alert-${type}">
            <i class="fas ${icons[type] || icons.info}"></i>
            <span>${message}</span>
        </div>
    `;
    container.style.display = 'block';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        container.style.display = 'none';
    }, 5000);
}

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation
function isValidPhone(phone) {
    return /^[\d\s\-\+\(\)]{7,15}$/.test(phone);
}

// Toggle password visibility
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const btn = field.parentElement.querySelector('.password-toggle i');
    if (field.type === 'password') {
        field.type = 'text';
        btn.classList.remove('fa-eye');
        btn.classList.add('fa-eye-slash');
    } else {
        field.type = 'password';
        btn.classList.remove('fa-eye-slash');
        btn.classList.add('fa-eye');
    }
}

// ========================================
// SIGNUP
// ========================================
function handleSignup(event) {
    event.preventDefault();
    
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const address = $('#address').val().trim();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();
    const agreeTerms = $('#agreeTerms').is(':checked');

    // Clear previous errors
    $('.invalid-feedback').text('').hide();
    $('.auth-input').removeClass('is-invalid');

    // Validation
    let hasError = false;

    if (!name || name.length < 2) {
        showFieldError('name', 'nameError', 'Please enter a valid name (at least 2 characters)');
        hasError = true;
    }

    if (!email || !isValidEmail(email)) {
        showFieldError('email', 'emailError', 'Please enter a valid email address');
        hasError = true;
    }

    if (!phone || !isValidPhone(phone)) {
        showFieldError('phone', 'phoneError', 'Please enter a valid phone number');
        hasError = true;
    }

    if (!address || address.length < 5) {
        showFieldError('address', 'addressError', 'Please enter your shipping address');
        hasError = true;
    }

    if (!password || password.length < 6) {
        showFieldError('password', 'passwordError', 'Password must be at least 6 characters');
        hasError = true;
    }

    if (password !== confirmPassword) {
        showFieldError('confirmPassword', 'confirmPasswordError', 'Passwords do not match');
        hasError = true;
    }

    if (!agreeTerms) {
        showAuthAlert('signupAlert', 'Please agree to the Terms & Conditions', 'warning');
        hasError = true;
    }

    if (hasError) return;

    // Check if email already exists
    const users = getUsers();
    if (users.find(u => u.email === email)) {
        showAuthAlert('signupAlert', 'This email is already registered. <a href="login.html" class="auth-link">Sign in instead</a>', 'danger');
        return;
    }

    // Show loading state
    $('#signupBtn .btn-text').hide();
    $('#signupBtn .btn-loader').show();
    $('#signupBtn').prop('disabled', true);

    // Simulate a short delay for UX
    setTimeout(() => {
        const newUser = {
            id: 'user_' + Date.now(),
            name,
            email,
            phone,
            address,
            password,
            joinDate: new Date().toISOString(),
            orders: []
        };

        users.push(newUser);
        saveUsers(users);

        // Auto login
        saveCurrentUser({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            phone: newUser.phone,
            address: newUser.address,
            joinDate: newUser.joinDate
        });

        showAuthAlert('signupAlert', 'Account created successfully! Redirecting...', 'success');

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 800);
}

// ========================================
// LOGIN
// ========================================
function handleLogin(event) {
    event.preventDefault();

    const email = $('#email').val().trim();
    const password = $('#password').val();

    // Clear previous errors
    $('.invalid-feedback').text('').hide();
    $('.auth-input').removeClass('is-invalid');

    let hasError = false;

    if (!email || !isValidEmail(email)) {
        showFieldError('email', 'emailError', 'Please enter a valid email address');
        hasError = true;
    }

    if (!password) {
        showFieldError('password', 'passwordError', 'Please enter your password');
        hasError = true;
    }

    if (hasError) return;

    // Show loading state
    $('#loginBtn .btn-text').hide();
    $('#loginBtn .btn-loader').show();
    $('#loginBtn').prop('disabled', true);

    setTimeout(() => {
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            saveCurrentUser({
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone || '',
                address: user.address || '',
                joinDate: user.joinDate || new Date().toISOString()
            });

            showAuthAlert('loginAlert', `Welcome back, ${user.name}! Redirecting...`, 'success');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200);
        } else {
            $('#loginBtn .btn-text').show();
            $('#loginBtn .btn-loader').hide();
            $('#loginBtn').prop('disabled', false);
            showAuthAlert('loginAlert', 'Invalid email or password. Please try again.', 'danger');
        }
    }, 800);
}

// Show field-level validation error
function showFieldError(fieldId, errorId, message) {
    $('#' + fieldId).addClass('is-invalid');
    $('#' + errorId).text(message).show();
}

// ========================================
// LOGOUT
// ========================================
function handleLogout() {
    localStorage.removeItem('fashionStoreCurrentUser');
    showToast('Signed out successfully!');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 800);
}

// ========================================
// PROFILE MANAGEMENT
// ========================================
function loadProfileData() {
    const user = getCurrentUser();
    if (!user) return;

    // Set profile header
    $('#profileGreeting').text(`Hello, ${user.name}!`);
    $('#profileEmail').text(user.email);
    
    // Set avatar initials
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    $('#profileAvatar').html(`<span>${initials}</span>`);

    // Set form values
    $('#profileName').val(user.name);
    $('#profileEmailInput').val(user.email);
    $('#profilePhone').val(user.phone || 'Not set');
    $('#profileAddress').val(user.address || 'Not set');
    
    const joinDate = user.joinDate ? new Date(user.joinDate).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    }) : 'N/A';
    $('#profileJoinDate').val(joinDate);

    // Stats
    const cart = JSON.parse(localStorage.getItem('fashionStoreCart')) || [];
    $('#cartItemsCount').text(cart.length);

    // Load order history
    const users = getUsers();
    const fullUser = users.find(u => u.email === user.email);
    const orders = fullUser?.orders || [];
    $('#totalOrders').text(orders.length);
    loadOrderHistory(orders);
}

function toggleEditProfile() {
    const inputs = ['profileName', 'profilePhone', 'profileAddress'];
    const isEditing = !$('#profileName').prop('disabled');

    if (isEditing) {
        // Cancel editing
        cancelEditProfile();
    } else {
        // Enable editing
        inputs.forEach(id => {
            const input = $('#' + id);
            if (input.val() === 'Not set') input.val('');
            input.prop('disabled', false);
        });
        $('#profileActions').removeClass('d-none');
        $('#editProfileBtn').html('<i class="fas fa-times"></i> Cancel').removeClass('btn-primary').addClass('btn-secondary');
    }
}

function cancelEditProfile() {
    const inputs = ['profileName', 'profilePhone', 'profileAddress'];
    inputs.forEach(id => $('#' + id).prop('disabled', true));
    $('#profileActions').addClass('d-none');
    $('#editProfileBtn').html('<i class="fas fa-edit"></i> Edit').removeClass('btn-secondary').addClass('btn-primary');
    loadProfileData(); // Reset values
}

function handleProfileUpdate(event) {
    event.preventDefault();

    const user = getCurrentUser();
    if (!user) return;

    const name = $('#profileName').val().trim();
    const phone = $('#profilePhone').val().trim();
    const address = $('#profileAddress').val().trim();

    if (!name || name.length < 2) {
        showAuthAlert('profileAlert', 'Name must be at least 2 characters', 'danger');
        return;
    }

    // Update in users list
    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
        users[idx].name = name;
        users[idx].phone = phone;
        users[idx].address = address;
        saveUsers(users);
    }

    // Update current user
    user.name = name;
    user.phone = phone;
    user.address = address;
    saveCurrentUser(user);

    showAuthAlert('profileAlert', 'Profile updated successfully!', 'success');
    
    // Disable fields again
    cancelEditProfile();
    loadProfileData();
}

// ========================================
// ORDER HISTORY
// ========================================
function loadOrderHistory(orders) {
    const container = $('#orderHistoryContainer');
    
    if (!orders || orders.length === 0) {
        container.html(`
            <div class="text-center py-5">
                <i class="fas fa-box-open fa-4x text-muted mb-3" style="opacity: 0.3;"></i>
                <h5 class="text-muted">No orders yet</h5>
                <p class="text-muted small">When you make a purchase, your orders will appear here.</p>
                <a href="products.html" class="btn auth-btn btn-sm mt-2">
                    <i class="fas fa-shopping-bag"></i> Start Shopping
                </a>
            </div>
        `);
        return;
    }

    let html = '';
    orders.forEach((order, index) => {
        const statusColors = {
            'Processing': 'warning',
            'Shipped': 'info',
            'Delivered': 'success',
            'Cancelled': 'danger'
        };
        const statusColor = statusColors[order.status] || 'secondary';
        const date = new Date(order.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });

        html += `
            <div class="order-card mb-3">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <h6 class="mb-1">Order #${order.id}</h6>
                        <small class="text-muted">${date}</small>
                    </div>
                    <span class="badge bg-${statusColor}">${order.status}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted small">${order.items} item(s)</span>
                    <strong class="text-primary">$${order.total.toFixed(2)}</strong>
                </div>
            </div>
        `;
    });

    container.html(html);
}

// Save an order (called from checkout)
function saveOrder(orderData) {
    const user = getCurrentUser();
    if (!user) return;

    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx !== -1) {
        if (!users[idx].orders) users[idx].orders = [];
        users[idx].orders.unshift({
            id: 'ORD-' + Date.now().toString(36).toUpperCase(),
            date: new Date().toISOString(),
            items: orderData.items,
            total: orderData.total,
            status: 'Processing'
        });
        saveUsers(users);
    }
}

// ========================================
// CHANGE PASSWORD
// ========================================
function handleChangePassword(event) {
    event.preventDefault();

    const currentPassword = $('#currentPassword').val();
    const newPassword = $('#newPassword').val();
    const confirmNewPassword = $('#confirmNewPassword').val();

    if (!currentPassword) {
        showAuthAlert('securityAlert', 'Please enter your current password', 'danger');
        return;
    }

    if (!newPassword || newPassword.length < 6) {
        showAuthAlert('securityAlert', 'New password must be at least 6 characters', 'danger');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        showAuthAlert('securityAlert', 'New passwords do not match', 'danger');
        return;
    }

    const user = getCurrentUser();
    const users = getUsers();
    const idx = users.findIndex(u => u.email === user.email);

    if (idx === -1) {
        showAuthAlert('securityAlert', 'User not found', 'danger');
        return;
    }

    if (users[idx].password !== currentPassword) {
        showAuthAlert('securityAlert', 'Current password is incorrect', 'danger');
        return;
    }

    users[idx].password = newPassword;
    saveUsers(users);

    showAuthAlert('securityAlert', 'Password changed successfully!', 'success');
    $('#changePasswordForm')[0].reset();
}

// ========================================
// DELETE ACCOUNT
// ========================================
function handleDeleteAccount() {
    const modal = new bootstrap.Modal(document.getElementById('deleteAccountModal'));
    modal.show();
}

function confirmDeleteAccount() {
    const confirmText = $('#deleteConfirmInput').val().trim();
    if (confirmText !== 'DELETE') {
        alert('Please type DELETE to confirm.');
        return;
    }

    const user = getCurrentUser();
    if (!user) return;

    let users = getUsers();
    users = users.filter(u => u.email !== user.email);
    saveUsers(users);
    localStorage.removeItem('fashionStoreCurrentUser');
    localStorage.removeItem('fashionStoreCart');

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteAccountModal'));
    if (modal) modal.hide();

    showToast('Account deleted successfully.');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1200);
}

// ========================================
// AUTH UI (Navbar)
// ========================================
function updateAuthUI() {
    const userLink = $('a.nav-link i.fa-user').parent();
    if (!userLink.length) return;

    if (isLoggedIn()) {
        const currentUser = getCurrentUser();
        const firstName = currentUser.name.split(' ')[0];
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        
        userLink.parent().addClass('dropdown');
        userLink.replaceWith(`
            <a class="nav-link dropdown-toggle user-nav-link" href="#" data-bs-toggle="dropdown">
                <span class="nav-avatar">${initials}</span> ${firstName}
            </a>
            <ul class="dropdown-menu dropdown-menu-end user-dropdown">
                <li class="dropdown-header">
                    <strong>${currentUser.name}</strong><br>
                    <small class="text-muted">${currentUser.email}</small>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user-circle me-2"></i>My Profile</a></li>
                <li><a class="dropdown-item" href="cart.html"><i class="fas fa-shopping-cart me-2"></i>My Cart</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" onclick="handleLogout()"><i class="fas fa-sign-out-alt me-2"></i>Sign Out</a></li>
            </ul>
        `);
    } else {
        userLink.attr('href', 'login.html');
    }
}

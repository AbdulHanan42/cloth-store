// Fashion Store JavaScript

// Product Data Structure
const products = {
    summer: [
        {
            id: 's1',
            name: 'Yellow Printed Lawn Suit',
            price: 89.99,
            originalPrice: 129.99,
            image: 'images/ess-sum-1.webp',
            category: 'summer',
            subcategory: 'suits',
            rating: 4.5,
            reviews: 23,
            description: 'Vibrant yellow printed 3-piece lawn suit with embroidered dupatta, perfect for summer gatherings',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Yellow', 'Mustard'],
            material: 'Lawn',
            sale: true,
            featured: true
        },
        {
            id: 's2',
            name: 'Teal Embroidered Lawn Suit',
            price: 59.99,
            originalPrice: 79.99,
            image: 'images/ess-sum-2.webp',
            category: 'summer',
            subcategory: 'suits',
            rating: 4.3,
            reviews: 18,
            description: 'Elegant teal lawn suit with intricate embroidery and floral printed dupatta for a chic summer look',
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Teal', 'Sea Green'],
            material: 'Lawn',
            sale: false,
            featured: false
        },
        {
            id: 's3',
            name: 'Pastel Floral Lawn Suit',
            price: 49.99,
            originalPrice: 69.99,
            image: 'images/ess-sum-3.webp',
            category: 'summer',
            subcategory: 'suits',
            rating: 4.7,
            reviews: 31,
            description: 'Soft pastel yellow lawn suit with delicate floral embroidery and scalloped hem details',
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Pastel Yellow', 'Cream'],
            material: 'Lawn',
            sale: true,
            featured: true
        }
    ],
    winter: [
        {
            id: 'w1',
            name: 'Embroidered Woolen Suit',
            price: 199.99,
            originalPrice: 299.99,
            image: 'images/winter/ess-win-1.webp',
            category: 'winter',
            subcategory: 'outerwear',
            rating: 4.8,
            reviews: 45,
            description: 'Elegant embroidered woolen suit, perfect for winter formal events.',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Maroon', 'Deep Red'],
            material: 'Wool',
            sale: true,
            featured: true
        },
        {
            id: 'w2',
            name: 'Classic Velvet Shawl Suit',
            price: 129.99,
            originalPrice: 179.99,
            image: 'images/winter/ess-win-2.webp',
            category: 'winter',
            subcategory: 'tops',
            rating: 4.9,
            reviews: 67,
            description: 'Premium velvet shawl suit with intricate embroidery for ultimate warmth and style.',
            sizes: ['XS', 'S', 'M', 'L'],
            colors: ['Black', 'Gold'],
            material: 'Velvet',
            sale: false,
            featured: false
        },
        {
            id: 'w3',
            name: 'Winter Pashmina Suit',
            price: 89.99,
            originalPrice: 129.99,
            image: 'images/winter/ess-win-3.webp',
            category: 'winter',
            subcategory: 'footwear',
            rating: 4.4,
            reviews: 28,
            description: 'Soft and warm pashmina suit featuring traditional winter patterns.',
            sizes: ['6', '7', '8', '9', '10'],
            colors: ['Blue', 'Silver'],
            material: 'Pashmina',
            sale: true,
            featured: true
        },
        {
            id: 'w4',
            name: 'Premium Karandi Suit',
            price: 149.99,
            originalPrice: 199.99,
            image: 'images/winter/ess-win-4.webp',
            category: 'winter',
            subcategory: 'suits',
            rating: 4.7,
            reviews: 52,
            description: 'High-quality Karandi fabric suit with modern cuts and traditional embroidery.',
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Emerald Green'],
            material: 'Karandi',
            sale: false,
            featured: true
        },
        {
            id: 'w5',
            name: 'Designer Khaddar Suit',
            price: 110.00,
            originalPrice: 150.00,
            image: 'images/winter/ess-win-5.webp',
            category: 'winter',
            subcategory: 'suits',
            rating: 4.6,
            reviews: 39,
            description: 'Stylish designer Khaddar suit, a must-have for the cold season.',
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['Teal', 'Ochre'],
            material: 'Khaddar',
            sale: true,
            featured: false
        }
    ],
    essential: [
        {
            id: 'e1',
            name: 'Navy Embroidered Suit',
            price: 49.99,
            originalPrice: 69.99,
            image: 'images/ess-sum-4.webp',
            category: 'essential',
            subcategory: 'suits',
            rating: 4.6,
            reviews: 89,
            description: 'Sophisticated navy blue suit with silver thread embroidery on kurta and dupatta, a wardrobe essential',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Navy Blue', 'Midnight'],
            material: 'Cambric',
            sale: false,
            featured: true
        },
        {
            id: 'e2',
            name: 'White Floral Printed Suit',
            price: 79.99,
            originalPrice: 99.99,
            image: 'images/ess-sum-5.webp',
            category: 'essential',
            subcategory: 'suits',
            rating: 4.5,
            reviews: 56,
            description: 'Fresh white suit with delicate pink floral print and keyhole neckline detailing, an everyday essential',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['White', 'Off-White'],
            material: 'Cotton',
            sale: false,
            featured: false
        },
        {
            id: 'e3',
            name: 'Classic Embroidered Kameez',
            price: 149.99,
            originalPrice: 199.99,
            image: 'images/ess-sum-1.webp',
            category: 'essential',
            subcategory: 'suits',
            rating: 4.7,
            reviews: 34,
            description: 'A classic printed kameez with geometric embroidery — a timeless piece for every occasion',
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Yellow', 'Mustard'],
            material: 'Lawn',
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

// Initialize App
$(document).ready(function() {
    initializeApp();
});

function initializeApp() {
    // Hide loader after page loads
    setTimeout(() => {
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
    $('#cartCount').text(totalItems);
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
    
    let productsToShow = [];
    if (category && products[category]) {
        productsToShow = products[category];
        $('h1').text(`${categories.find(c => c.id === category)?.name || 'Products'}`);
    } else {
        // Show all products
        Object.keys(products).forEach(cat => {
            productsToShow = productsToShow.concat(products[cat]);
        });
    }
    
    // Display products
    const productsContainer = $('#productsContainer');
    productsContainer.empty();
    
    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsContainer.append(productCard);
    });
}

// Buy Now Function
function buyNow(productId) {
    addToCart(productId);
    window.location.href = 'cart.html';
}

// Filter Products
function filterProducts() {
    // Implementation for product filtering
    console.log('Filter products');
}

// Search Products
function searchProducts(query) {
    // Implementation for product search
    console.log('Search products:', query);
}

// Apply Filters
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
/**
 * Elite Solution - Main JavaScript
 * Modern E-commerce functionality
 */

// =====================================================
// PRODUCT DATA
// =====================================================

const productsData = {
    categories: [
        { id: "analog", name: "Analog Cameras", icon: "📷" },
        { id: "ip", name: "IP Cameras", icon: "🌐" },
        { id: "ptz-wifi", name: "PTZ & WiFi Cameras", icon: "🎥" },
        { id: "dvr", name: "DVR Systems", icon: "📼" },
        { id: "poe", name: "POE Switches", icon: "🔌" },
        { id: "tv", name: "Smart TV", icon: "📺" }
    ],
    products: [
        {
            id: 1,
            name: "2.5 MP Dome Analog Camera",
            slug: "2-5mp-dome-analog",
            model: "ES-UNC-DA4CH-ZA1",
            category: "analog",
            mrp: 1800,
            price: 1300,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.10.jpeg",
            features: ["2.5 MP Resolution", "IR Night Vision", "Indoor/Outdoor", "Weatherproof"],
            popular: true,
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "2.5 MP Bullet Analog Camera",
            slug: "2-5mp-bullet-analog",
            model: "ES-UNC-BA4CH-QB1",
            category: "analog",
            mrp: 1850,
            price: 1350,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.25.jpeg",
            features: ["2.5 MP Resolution", "IR Night Vision", "Metal Body", "Weatherproof"],
            popular: true,
            badge: "Popular"
        },
        {
            id: 3,
            name: "5 MP Dome Analog Camera",
            slug: "5mp-dome-analog",
            model: "ES-UNC-DA5MP-ZA5",
            category: "analog",
            mrp: 2499,
            price: 1899,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.39.jpeg",
            features: ["5 MP HD", "Day/Night Vision", "IP65 Rated", "DWDR"],
            badge: "5MP HD"
        },
        {
            id: 4,
            name: "5 MP Bullet Analog Camera",
            slug: "5mp-bullet-analog",
            model: "ES-UNC-BA5MP-QA5",
            category: "analog",
            mrp: 2599,
            price: 1999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.53.jpeg",
            features: ["5 MP HD", "Day/Night Vision", "IP65 Rated", "DWDR"],
            badge: "5MP HD"
        },
        {
            id: 5,
            name: "8 MP Bullet Analog Camera",
            slug: "8mp-bullet-analog",
            model: "ES-UNC-BA8MP-QA8",
            category: "analog",
            mrp: 3499,
            price: 2699,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.40.21.jpeg",
            features: ["8 MP Ultra HD", "Long Range IR", "Metal Body", "Weatherproof"],
            popular: true,
            badge: "8MP Ultra HD"
        },
        {
            id: 6,
            name: "8 MP Dome Analog Camera",
            slug: "8mp-dome-analog",
            model: "ES-UNC-DA8MP-ZA8",
            category: "analog",
            mrp: 3399,
            price: 2599,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.40.38.jpeg",
            features: ["8 MP Ultra HD", "IR Night Vision", "Indoor Use", "Wide Angle"],
            badge: "8MP Ultra HD"
        },
        {
            id: 7,
            name: "Elite PTZ Camera 5 MP",
            slug: "elite-ptz-5mp",
            model: "ES-PTZ8990-05MP",
            category: "ptz-wifi",
            mrp: 8999,
            price: 6999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.36.53.jpeg",
            features: ["5 MP HD", "30X Zoom", "360° Rotation", "Day/Night Vision"],
            popular: true,
            badge: "30X Zoom"
        },
        {
            id: 8,
            name: "Elite PTZ Camera 8 MP",
            slug: "elite-ptz-8mp",
            model: "ES-PTZ287531-G008MP",
            category: "ptz-wifi",
            mrp: 12999,
            price: 9999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.47.59.jpeg",
            features: ["8 MP Ultra HD", "Wall Mount", "360° Rotation", "Professional Grade"],
            badge: "Professional"
        },
        {
            id: 9,
            name: "Elite WiFi Dome Camera 3 MP",
            slug: "elite-wifi-dome-3mp",
            model: "ES-IPC360",
            category: "ptz-wifi",
            mrp: 3999,
            price: 2999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 20.03.27.jpeg",
            features: ["3 MP HD", "WiFi Enabled", "Pan & Tilt", "Two-Way Audio"],
            popular: true,
            badge: "Indoor"
        },
        {
            id: 10,
            name: "Elite Smart PTZ Bullet 5 MP",
            slug: "smart-ptz-bullet-5mp",
            model: "ES-GX200-SV4G",
            category: "ptz-wifi",
            mrp: 5499,
            price: 4299,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 20.54.21.jpeg",
            features: ["5 MP HD", "Dual Antenna", "Outdoor Use", "Smart Detection"],
            badge: "Outdoor"
        },
        {
            id: 11,
            name: "Elite Guard Pro PTZ 2-Way",
            slug: "guard-pro-ptz-2way",
            model: "ES-PTZ-SG500",
            category: "ptz-wifi",
            mrp: 6999,
            price: 5499,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 20.54.25.jpeg",
            features: ["2-Way Communication", "Dual Antenna", "Smart Alerts", "Night Vision"],
            badge: "2-Way Audio"
        },
        {
            id: 12,
            name: "Elite SecureBullet Pro",
            slug: "securebullet-pro",
            model: "ES-CV240",
            category: "ip",
            mrp: 4999,
            price: 3799,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 20.54.26.jpeg",
            features: ["Dual Antenna WiFi", "4 LED Lights", "Outdoor Use", "Metal Body"],
            badge: "WiFi"
        },
        {
            id: 13,
            name: "8 MP Bullet IP Camera",
            slug: "8mp-bullet-ip",
            model: "ES-LNC-BI8MP-QI08",
            category: "ip",
            mrp: 4499,
            price: 3499,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.42.jpeg",
            features: ["8 MP Ultra HD", "PoE Enabled", "LED Lights", "H.265"],
            popular: true,
            badge: "8MP Ultra HD"
        },
        {
            id: 14,
            name: "8 MP Dome IP Camera",
            slug: "8mp-dome-ip",
            model: "ES-LNC-DI8MP-ZI08",
            category: "ip",
            mrp: 4299,
            price: 3299,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.15.jpeg",
            features: ["8 MP Ultra HD", "Built-in Speaker", "4 LED Lights", "Indoor Use"],
            badge: "8MP Ultra HD"
        },
        {
            id: 15,
            name: "5 MP Bullet IP Camera",
            slug: "5mp-bullet-ip",
            model: "ES-LNC-BI5MP-QI05",
            category: "ip",
            mrp: 3499,
            price: 2699,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.08.jpeg",
            features: ["5 MP HD", "Smart Color Night", "IR 30M", "H.265"],
            badge: "Smart Color"
        },
        {
            id: 16,
            name: "5 MP Dome IP Camera",
            slug: "5mp-dome-ip",
            model: "ES-LNC-DI5MP-ZI05",
            category: "ip",
            mrp: 3299,
            price: 2499,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.05.26.jpeg",
            features: ["5 MP HD", "Smart Color Night", "IR 30M", "H.265"],
            badge: "Smart Color"
        },
        {
            id: 17,
            name: "2.5 MP Bullet IP Camera",
            slug: "2-5mp-bullet-ip",
            model: "ES-LNC-BI2MP-QI02",
            category: "ip",
            mrp: 2499,
            price: 1899,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.05.13.jpeg",
            features: ["2.5 MP HD", "PoE Enabled", "IR Night Vision", "H.265"]
        },
        {
            id: 18,
            name: "2.5 MP Dome IP Camera",
            slug: "2-5mp-dome-ip",
            model: "ES-LNC-DI2MP-ZI02",
            category: "ip",
            mrp: 2299,
            price: 1799,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.05.01.jpeg",
            features: ["2.5 MP HD", "IR Night Vision", "Indoor Use", "H.265"]
        },
        {
            id: 19,
            name: "Elite 4 Channel DVR",
            slug: "4-channel-dvr",
            model: "ES-UVR-004CH-ZQS",
            category: "dvr",
            mrp: 4999,
            price: 3999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.49.45.jpeg",
            features: ["4 Channel", "H.265+", "Mobile App", "1 SATA Port"],
            popular: true,
            badge: "4 Channel"
        },
        {
            id: 20,
            name: "Elite 8 Channel DVR",
            slug: "8-channel-dvr",
            model: "ES-UVR-008CH-ZQS01",
            category: "dvr",
            mrp: 6999,
            price: 5499,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
            features: ["8 Channel", "H.265+", "USB Backup", "2 SATA Ports"],
            badge: "8 Channel"
        },
        {
            id: 21,
            name: "Elite 16 Channel DVR",
            slug: "16-channel-dvr",
            model: "ES-UVR-0016CH-ZQS02",
            category: "dvr",
            mrp: 9999,
            price: 7999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
            features: ["16 Channel", "H.265+", "HDMI Output", "4 SATA Ports"],
            badge: "16 Channel"
        },
        {
            id: 22,
            name: "Elite 32 Channel DVR",
            slug: "32-channel-dvr",
            model: "ES-UVR-0032CH-ZQS03",
            category: "dvr",
            mrp: 14999,
            price: 11999,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
            features: ["32 Channel", "H.265+", "RAID Support", "8 SATA Ports"],
            badge: "32 Channel"
        },
        {
            id: 23,
            name: "Elite 4 Port POE Switch",
            slug: "4-port-poe",
            model: "ES-POE3690LIP04",
            category: "poe",
            mrp: 2999,
            price: 2399,
            image: "assets/images/poe-switch-4port.png",
            features: ["4 POE Ports", "60W Total", "Gigabit", "Plug & Play"],
            badge: "4 Port"
        },
        {
            id: 24,
            name: "Elite 8 Port POE Switch",
            slug: "8-port-poe",
            model: "ES-POE2580LIP08",
            category: "poe",
            mrp: 4999,
            price: 3999,
            image: "assets/images/poe-switch-8port.png",
            features: ["8 POE Ports", "120W Total", "Gigabit", "2 Uplinks"],
            popular: true,
            badge: "8 Port"
        },
        {
            id: 25,
            name: "Elite 16 Port POE Switch",
            slug: "16-port-poe",
            model: "ES-POE1470LIP016",
            category: "poe",
            mrp: 8999,
            price: 6999,
            image: "assets/images/poe-switch-16port.png",
            features: ["16 POE Ports", "250W Total", "Rack Mount", "Gigabit"],
            badge: "16 Port"
        },
        {
            id: 26,
            name: "Elite 43\" OptimaX QLED Smart TV",
            slug: "43-qled-smart-tv",
            model: "ES-TV43-QLED-OX",
            category: "tv",
            mrp: 29999,
            price: 22999,
            image: "assets/images/tv-43-qled-main.jpg",
            features: ["43\" QLED Display", "Android TV", "Quad Core", "Smart Remote"],
            popular: true,
            badge: "New Arrival"
        }
    ]
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Format price to INR
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(price);
}

// Generate product slug for URL
function generateSlug(name) {
    return name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// Get products by category
function getProductsByCategory(categoryId) {
    return productsData.products.filter(p => p.category === categoryId);
}

// Get popular products
function getPopularProducts() {
    return productsData.products.filter(p => p.popular);
}

// Get product by slug
function getProductBySlug(slug) {
    return productsData.products.find(p => p.slug === slug);
}

// Get product by ID
function getProductById(id) {
    return productsData.products.find(p => p.id === id);
}

// Get category by ID
function getCategoryById(categoryId) {
    return productsData.categories.find(c => c.id === categoryId);
}

// Get related products (same category, different product)
function getRelatedProducts(productId, limit = 4) {
    const product = getProductById(productId);
    if (!product) return [];
    return productsData.products
        .filter(p => p.category === product.category && p.id !== productId)
        .slice(0, limit);
}

// WhatsApp URL generator
function getWhatsAppUrl(productName, modelNumber) {
    const message = encodeURIComponent(`Hi, I'm interested in ${productName} (${modelNumber}). Please share more details.`);
    return `https://wa.me/919548323302?text=${message}`;
}

// =====================================================
// PRODUCT CARD GENERATOR
// =====================================================

function createProductCard(product, basePath = '') {
    const categoryInfo = getCategoryById(product.category);
    const productUrl = `${basePath}products/${product.slug}.html`;
    const whatsappUrl = getWhatsAppUrl(product.name, product.model);

    return `
        <article class="product-card">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${basePath}${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <a href="${whatsappUrl}" target="_blank" class="product-action-btn" title="Buy on WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                    </a>
                    <a href="${productUrl}" class="product-action-btn" title="View Details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${categoryInfo ? categoryInfo.name : ''}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.model} • ${product.features.slice(0, 2).join(' • ')}</p>
                <div class="product-price">
                    <a href="${whatsappUrl}" target="_blank" class="price-contact">💬 Contact for Price</a>
                </div>
                <div class="product-cta">
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp" style="padding: var(--space-sm) var(--space-md); font-size: var(--font-size-sm);">
                        Buy on WhatsApp
                    </a>
                    <a href="${productUrl}" class="btn btn-outline" style="padding: var(--space-sm) var(--space-md); font-size: var(--font-size-sm);">
                        View
                    </a>
                </div>
            </div>
        </article>
    `;
}

// =====================================================
// HERO SLIDER
// =====================================================

function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slidesContainer = slider.querySelector('.slides-container');
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    let currentSlide = 0;
    let autoSlideInterval;
    const slideCount = slides.length;

    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;

        currentSlide = index;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Start auto-slide
    startAutoSlide();

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
}

// =====================================================
// POPULAR PRODUCTS CAROUSEL
// =====================================================

function initPopularCarousel() {
    const carousel = document.getElementById('popularCarousel');
    if (!carousel) return;

    const popularProducts = getPopularProducts();

    // Render products
    carousel.innerHTML = popularProducts.map(product => `
        <div class="carousel-item">
            ${createProductCard(product)}
        </div>
    `).join('');

    // Carousel navigation
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let scrollPosition = 0;
    const itemWidth = 296; // 280px + 16px gap
    const visibleItems = Math.floor(carousel.parentElement.offsetWidth / itemWidth);
    const maxScroll = (popularProducts.length - visibleItems) * itemWidth;

    function scrollCarousel(direction) {
        scrollPosition += direction * itemWidth * 2;
        scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => scrollCarousel(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollCarousel(1));
}

// =====================================================
// FEATURED PRODUCTS
// =====================================================

function initFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    // Get first 8 products for featured section
    const featuredProducts = productsData.products.slice(0, 8);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// =====================================================
// SHOP PAGE PRODUCTS
// =====================================================

function initShopProducts() {
    const container = document.getElementById('shopProducts');
    if (!container) return;

    // Get filters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('category');
    const searchQuery = urlParams.get('search');

    let products = productsData.products;

    // Apply category filter
    if (categoryFilter) {
        products = getProductsByCategory(categoryFilter);
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        products = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.model.toLowerCase().includes(query) ||
            p.features.some(f => f.toLowerCase().includes(query)) ||
            (getCategoryById(p.category)?.name || '').toLowerCase().includes(query)
        );

        // Show search results message
        if (products.length === 0) {
            container.innerHTML = `<div style="text-align: center; padding: 3rem; grid-column: 1/-1;"><h3>No products found for "${searchQuery}"</h3><p>Try a different search term or <a href="shop.html">browse all products</a></p></div>`;
            return;
        }
    }

    container.innerHTML = products.map(product => createProductCard(product)).join('');

    // Category filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            let filtered = productsData.products;
            if (category && category !== 'all') {
                filtered = getProductsByCategory(category);
            }

            // Also apply search filter if present
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filtered = filtered.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.model.toLowerCase().includes(query) ||
                    p.features.some(f => f.toLowerCase().includes(query))
                );
            }

            container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        });
    });
}

// =====================================================
// CATEGORY PAGE PRODUCTS
// =====================================================

function initCategoryProducts() {
    const container = document.getElementById('categoryProducts');
    if (!container) return;

    const categoryId = container.dataset.category;
    const products = getProductsByCategory(categoryId);

    container.innerHTML = products.map(product => createProductCard(product, '../')).join('');
}

// =====================================================
// PRODUCT PAGE
// =====================================================

function initProductPage() {
    const productDetails = document.getElementById('productDetails');
    if (!productDetails) return;

    const productSlug = productDetails.dataset.slug;
    const product = getProductBySlug(productSlug);

    if (!product) {
        productDetails.innerHTML = '<p>Product not found.</p>';
        return;
    }

    const categoryInfo = getCategoryById(product.category);
    const whatsappUrl = getWhatsAppUrl(product.name, product.model);
    const relatedProducts = getRelatedProducts(product.id);

    // Update page title
    document.title = `${product.name} - Elite Solution`;

    // Render product details
    productDetails.innerHTML = `
        <div class="product-page-grid">
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="../${product.image}" alt="${product.name}">
                </div>
            </div>
            <div class="product-details">
                <div class="product-breadcrumb">
                    <a href="../index.html">Home</a>
                    <span>/</span>
                    <a href="../categories/${product.category === 'ptz-wifi' ? 'ptz-wifi' : product.category.replace('-', '-')}.html">${categoryInfo ? categoryInfo.name : ''}</a>
                    <span>/</span>
                    <span>${product.name}</span>
                </div>
                
                <h1 class="product-page-title">${product.name}</h1>
                <p class="product-model">Model: ${product.model}</p>
                
                <div class="product-features">
                    <h4>Features</h4>
                    <div class="features-list">
                        ${product.features.map(feature => `
                            <div class="feature-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="product-price" style="margin-bottom: var(--space-xl);">
                    <span class="price-current" style="font-size: var(--font-size-3xl);">${formatPrice(product.price)}</span>
                    <span class="price-original" style="font-size: var(--font-size-xl);">${formatPrice(product.mrp)}</span>
                </div>
                
                <div class="product-cta-section">
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                        Buy on WhatsApp
                    </a>
                    <div class="contact-info">
                        <a href="tel:+919548323302">📞 +91 95483 23302</a>
                        <a href="mailto:elitesolutions906@gmail.com">📧 Email Us</a>
                    </div>
                </div>
            </div>
        </div>
        
        ${relatedProducts.length > 0 ? `
            <div class="related-products">
                <h2 class="section-title">Related Products</h2>
                <div class="products-grid">
                    ${relatedProducts.map(p => createProductCard(p, '../')).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

// =====================================================
// MOBILE MENU
// =====================================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// =====================================================
// HEADER SCROLL
// =====================================================

function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =====================================================
// SEARCH FUNCTIONALITY
// =====================================================

function initSearch() {
    const searchForm = document.querySelector('.search-form');
    if (!searchForm) return;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = searchForm.querySelector('.search-input');
        const query = searchInput.value.trim().toLowerCase();

        if (query) {
            // Redirect to shop page with search query
            window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
        }
    });
}

// =====================================================
// CONTACT FORM
// =====================================================

function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const requirement = document.getElementById('requirement').value;

    // Create WhatsApp message
    const message = `New Inquiry from Website:%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0ARequirement:%0A${requirement}`;

    // Open WhatsApp
    window.open(`https://wa.me/919548323302?text=${message}`, '_blank');
}

// =====================================================
// INITIALIZE
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initPopularCarousel();
    initFeaturedProducts();
    initShopProducts();
    initCategoryProducts();
    initProductPage();
    initMobileMenu();
    initHeaderScroll();
    initSearch();
});

// Make functions globally available
window.handleContactSubmit = handleContactSubmit;
window.productsData = productsData;

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
            model: "ES-UNC-DA2MP-ZA1",
            category: "analog",
            mrp: 1800,
            price: 1300,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.10.jpeg",
            features: ["2.5 MP HD Output", "Clear Day & Night", "Strong Dome Design", "Low Light Performance"],
            description: "Delivers clear high-definition video with reliable day and night performance. Compact dome housing ideal for discreet monitoring.",
            specifications: "3.6mm Fixed Lens, Analog (CVBS/AHD) Video Output, 20-30m IR Distance, Auto IR Cut Filter, Plastic/Metal Dome Body, DC 12V, -10°C to 55°C",
            popular: true,
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "2.5 MP Bullet Analog Camera",
            slug: "2-5mp-bullet-analog",
            model: "ES-UNC-BA2MP-QA2",
            category: "analog",
            mrp: 1850,
            price: 1350,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.25.jpeg",
            features: ["2.5 MP HD Output", "Long-range Night Vision", "Weatherproof Bullet", "Low Power Consumption"],
            description: "Durable and reliable outdoor security solution with sharp HD quality and powerful infrared night vision.",
            specifications: "High-quality CMOS sensor, Analog HD (AHD) Output, 20-30m IR Distance, 0 Lux (IR ON), DC 12V, Weatherproof",
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
            features: ["5 MP Ultra-HD", "Sharp Image Quality", "Infrared Night Vision", "Weather-resistant"],
            description: "Ultra-clear HD video with enhanced detail for professional surveillance. Suitable for both indoor and outdoor discreet monitoring.",
            specifications: "Fixed Lens, AHD Output, Up to 30m IR Distance, Auto (ICR), 0 Lux (IR ON), DC 12V, Weatherproof",
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
            features: ["5 MP Ultra-HD", "Powerful IR Night Vision", "Weatherproof Housing", "Long-distance Viewing"],
            description: "Ideal for outdoor surveillance with excellent clarity and long-range visibility. Robust design ensures performance in various conditions.",
            specifications: "High-performance CMOS sensor, AHD Output, Up to 30m IR Distance, 0 Lux (IR ON), DC 12V, -10°C to +55°C, Weatherproof",
            badge: "5MP HD"
        },
        {
            id: 5,
            name: "8 MP Bullet Analog Camera",
            slug: "8mp-bullet-analog",
            model: "ES-LNC-BI8MP-QI08",
            category: "analog",
            mrp: 3499,
            price: 2699,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.40.21.jpeg",
            features: ["8 MP Analog Output", "Stable Transmission", "Long-range Night Vision", "Weather-resistant"],
            description: "Engineered for high-resolution analog surveillance with ultra-clear video. Ideal for outdoor and long-range monitoring.",
            specifications: "AHD Output, 30-40m IR Distance, Auto (ICR), 0 Lux (IR ON), DC 12V, Weatherproof Metal/Plastic Body",
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
            features: ["8 MP Ultra-resolution", "Advanced Analog HD", "Powerful IR LEDs", "Indoor/Outdoor"],
            description: "High-precision surveillance with ultra-clear video and enhanced depth. Blends easily into any environment.",
            specifications: "Advanced CMOS Sensor, AHD Output, Up to 30m Night Vision, Auto (ICR), 0 Lux (IR ON), DC 12V, Ceiling/Wall Mounting",
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
        // === SMART TV ===
        {
            id: 101,
            name: "Elite Smart LED TV",
            slug: "smart-led-tv",
            model: "ES-TV-SMART-SERIES",
            category: "tv",
            mrp: 18999,
            price: 8999,
            image: "assets/images/smart-tv-48-front.jpg",
            images: [
                "assets/images/smart-tv-48-front.jpg",
                "assets/images/smart-tv-48-persp.jpg"
            ],
            variants: [
                {
                    id: "32",
                    name: "32 Inch",
                    image: "assets/images/smart-tv-32-front.jpg",
                    images: ["assets/images/smart-tv-32-front.jpg"],
                    price: 8999,
                    mrp: 18999
                },
                {
                    id: "48",
                    name: "48 Inch",
                    image: "assets/images/smart-tv-48-front.jpg",
                    images: ["assets/images/smart-tv-48-front.jpg", "assets/images/smart-tv-48-persp.jpg"],
                    price: 24999,
                    mrp: 45999
                }
            ],
            features: ["HD Ready / Full HD", "Android OS", "20W Sound", "Netflix/Prime/Hotstar"],
            description: "Our company is the most reputed manufacturer, exporter and supplier of 32 inch TV to customers. Elegant design and durable, this TV is designed and manufactured by experienced professional with innovative technique and quality components in line with industry standards. We offer this TV at the most reasonable prices.<br><br>Can make in customer’s Brand also.",
            specifications: "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube, Operating System: Android Based, Resolution: HD Ready 1366 x 768 Pixels (32\") / Full HD (48\"), Sound Output: 20 W, Refresh Rate: 60 Hz, Warranty: 1 Year Pan India",
            popular: true,
            badge: "Best Seller"
        },
        // === IP CAMERAS ===
        {
            id: 30,
            name: "2.5 MP Dome IP Camera",
            slug: "2-5mp-dome-ip",
            model: "ES-LNC-DI2MP-Z02",
            category: "ip",
            mrp: 2999,
            price: 1800,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.42.jpeg",
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
            id: 31,
            name: "5 MP Bullet IP Camera",
            slug: "5mp-bullet-ip",
            model: "ES-LNC-BI5MP-QI05",
            category: "ip",
            mrp: 3299,
            price: 2499,
            image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.34.47.jpeg",
            features: ["5 MP HD", "Long Range IR", "Weatherproof", "H.265"],
            description: "Robust 5MP outdoor camera with high-performance IR LEDs for clear night vision.",
            badge: "5MP"
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
            slug: "2-5mp-dome-ip-zi02",
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
            features: ["4 Analog Channels", "HD Recording", "Easy Interface", "HDMI/VGA Output"],
            description: "Reliable solution for small surveillance setups like homes, shops, and offices.",
            specifications: "BNC Input, H.264/H.265 Compression, 1 SATA HDD Support, HDMI/VGA, USB Ports, RJ45 Ethernet, DC 12V",
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
            features: ["8 HD Analog Channels", "Multi-channel Playback", "Optimized Compression", "Advanced Search"],
            description: "Designed for retail spaces, warehouses, and residential complexes requiring extended coverage.",
            specifications: "HD/Full HD Recording, 1 SATA HDD (high capacity), HDMI/VGA, 2x USB, RJ45, Remote Access via App",
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
            features: ["16 HD Cameras", "Real-time Recording", "Smart Search", "High-capacity Storage"],
            description: "High-capacity solution for large-scale installations like commercial buildings and factories.",
            specifications: "HD/Full HD Recording, 2 SATA HDD Support, HDMI/VGA, 2x USB, RJ45, Remote Access via CMS/App",
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
            features: ["32 HD Channels", "Powerful Processing", "Smart Search", "Enterprise Security"],
            description: "High-performance system for campuses, malls, and enterprise environments.",
            specifications: "HD/Full HD Recording, 2/4 SATA HDD Support, HDMI/VGA, Multiple USB Ports, RJ45, Remote Access via CMS/App, DC 12V",
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
                <p class="product-model">Model: <span id="productModel">${product.model}</span></p>
                
                ${product.variants ? `
                    <div class="product-variants" style="margin-bottom: var(--space-lg);">
                        <h4 style="font-size: var(--font-size-base); margin-bottom: var(--space-sm);">Size:</h4>
                        <div class="variant-options" style="display: flex; gap: var(--space-sm);">
                            ${product.variants.map((v, index) => `
                                <button class="variant-btn ${index === 0 ? 'active' : ''}" 
                                        data-id="${v.id}"
                                        data-image="${v.image}"
                                        data-price="${v.price}"
                                        data-mrp="${v.mrp}"
                                        data-name="${v.name}"
                                        data-images='${JSON.stringify(v.images || [v.image])}'
                                        onclick="selectVariant(this)"
                                        style="padding: 8px 16px; border: 2px solid var(--color-bg-alt); background: transparent; border-radius: var(--radius-md); cursor: pointer; font-weight: 500; transition: all 0.2s;">
                                    ${v.name}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${product.description ? `<p class="product-description-text" style="color:var(--color-text-light); margin-bottom:var(--space-md); line-height:1.6;">${product.description}</p>` : ''}
                
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

                ${product.specifications ? `
                <div class="product-specifications" style="margin-top: var(--space-lg); margin-bottom: var(--space-lg);">
                    <h4 style="margin-bottom: var(--space-sm);">Specifications</h4>
                    <ul class="specs-list" style="list-style: disc; padding-left: 1.5rem; color: var(--color-text-light);">
                        ${product.specifications.split(',').map(spec => `<li style="margin-bottom: 0.5rem;">${spec.trim()}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="product-price" style="margin-bottom: var(--space-xl);">
                    <a id="whatsappBtn" href="${whatsappUrl}" target="_blank" class="price-contact">💬 Contact for Price</a>
                </div>
                
                <div class="product-cta-section">
                    <a id="buyBtn" href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp" style="width: 100%; font-size: 1.1rem; padding: 1rem 2rem;">
                         Buy on WhatsApp
                    </a>
                    <p style="text-align: center; margin-top: 1rem; color: var(--color-text-light);">
                        📞 +91 95483 23302
                    </p>
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

    // Initialize Images
    let currentImages = product.variants ? (product.variants[0].images || [product.image]) : (product.images || [product.image]);
    updateGallery(currentImages);

    // Initial Variant State
    if (product.variants) {
        window.selectedVariant = product.variants[0];
    }
}

function updateGallery(images) {
    const galleryContainer = document.querySelector('.product-gallery');
    if (!galleryContainer) return;

    // Only rebuild if meaningful change, but strictly normally we replace content.
    // Simple gallery: Main Image + Thumbnails (if > 1)

    galleryContainer.innerHTML = `
        <div class="product-main-image">
            <img id="mainImage" src="../${images[0]}" alt="Product Image">
        </div>
        ${images.length > 1 ? `
        <div class="product-thumbnails" style="display: flex; gap: 10px; margin-top: 10px;">
            ${images.map((img, idx) => `
                <div class="thumbnail" onclick="switchMainImage('${img}')" style="width: 60px; height: 60px; border-radius: 8px; overflow: hidden; curor: pointer; border: 2px solid transparent;">
                    <img src="../${img}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            `).join('')}
        </div>
        ` : ''}
    `;
}

window.switchMainImage = function (src) {
    const mainImg = document.getElementById('mainImage');
    if (mainImg) mainImg.src = "../" + src;
}

window.selectVariant = function (btn) {
    // Styling
    document.querySelectorAll('.variant-btn').forEach(b => {
        b.style.borderColor = 'var(--color-bg-alt)';
        b.style.color = 'var(--color-text)';
    });
    btn.style.borderColor = 'var(--color-secondary)';
    btn.style.color = 'var(--color-secondary)';

    // Data
    const image = btn.dataset.image;
    const name = btn.dataset.name;
    const images = JSON.parse(btn.dataset.images);

    // Update Gallery
    updateGallery(images);

    // Update Links
    const productDetails = document.getElementById('productDetails');
    const productSlug = productDetails.dataset.slug;
    const product = getProductBySlug(productSlug);

    const message = `Hi, I'm interested in ${product.name} (Size: ${name}). Please share more details.`;
    const url = `https://wa.me/919548323302?text=${encodeURIComponent(message)}`;

    document.getElementById('whatsappBtn').href = url;
    document.getElementById('buyBtn').href = url;
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

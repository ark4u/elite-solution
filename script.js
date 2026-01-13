/**
 * Elite Solution - E-commerce Website
 * Vanilla JavaScript for Interactivity
 */

// ===================================
// DOM Ready Handler
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    initSlider();
    initMobileMenu();
    initTabs();
    initPagination();
    initSmoothScroll();
    initChatSupport();
    initLazyLoading();
});

// ===================================
// Hero Slider
// ===================================
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const slidesContainer = slider.querySelector('.slides-container');
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-arrow--prev');
    const nextBtn = slider.querySelector('.slider-arrow--next');

    let currentSlide = 0;
    let autoPlayInterval;
    const slideCount = slides.length;
    const autoPlayDelay = 5000; // 5 seconds

    // Update slider position
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

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Start autoplay
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    // Stop autoplay
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoPlay();
        });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Initialize
    goToSlide(0);
    startAutoPlay();
}

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// Product Category Tabs
// ===================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-tab') === targetTab) {
                    content.classList.add('active');
                    // Animate cards
                    const cards = content.querySelectorAll('.product-card');
                    cards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.transition = 'all 0.3s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        });
    });
}

// ===================================
// Blog Pagination
// ===================================
function initPagination() {
    const pageButtons = document.querySelectorAll('.page-btn');
    const blogGrid = document.querySelector('.blog-grid');

    if (pageButtons.length === 0) return;

    // Sample blog data for simulation
    const blogData = [
        {
            title: "Why You Don't Need Professional Security Camera Installation",
            excerpt: "Learn how to install your security cameras like a pro. Our comprehensive guide walks you through every step.",
            image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=250&fit=crop",
            date: "Jan 10, 2026",
            author: "Admin"
        },
        {
            title: "Different types of Security Cameras and when to use them",
            excerpt: "Explore the various types of security cameras available and find the perfect match for your needs.",
            image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=250&fit=crop",
            date: "Jan 8, 2026",
            author: "Admin"
        },
        {
            title: "आधुनिक सीसीटीवी सिस्टम से भारत को सुरक्षित बना रहा है",
            titleClass: "hindi",
            excerpt: "जानिए कैसे आधुनिक सीसीटीवी तकनीक भारत में सुरक्षा को बेहतर बना रही है।",
            image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=250&fit=crop",
            date: "Jan 5, 2026",
            author: "Admin"
        }
    ];

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            pageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Simulate page change with animation
            if (blogGrid) {
                blogGrid.style.opacity = '0';
                blogGrid.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    // In a real app, you would fetch new data here
                    // For demo, we just animate the existing content
                    blogGrid.style.transition = 'all 0.3s ease';
                    blogGrid.style.opacity = '1';
                    blogGrid.style.transform = 'translateY(0)';
                }, 200);
            }

            // Scroll to blog section
            const blogSection = document.querySelector('.blog');
            if (blogSection) {
                blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===================================
// Smooth Scroll for Internal Links
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 70; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Chat Support
// ===================================
function initChatSupport() {
    const chatBtn = document.querySelector('.chat-btn');
    const chatPrompt = document.querySelector('.chat-prompt');

    if (!chatBtn) return;

    chatBtn.addEventListener('click', () => {
        // In a real app, this would open a chat widget
        // For demo, we show an alert
        showChatModal();
    });

    // Hide prompt after a few seconds
    if (chatPrompt) {
        setTimeout(() => {
            chatPrompt.style.opacity = '0';
            chatPrompt.style.transform = 'translateY(10px)';
            setTimeout(() => {
                chatPrompt.style.display = 'none';
            }, 300);
        }, 8000);
    }
}

function showChatModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'chat-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'chat-modal';
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        animation: slideUp 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">💬</div>
        <h3 style="margin-bottom: 1rem; color: #0D47A1;">Chat Support</h3>
        <p style="margin-bottom: 1.5rem; color: #666;">Our support team is available 24/7 to help you with any questions.</p>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
            <a href="tel:+919548323302" class="btn btn-primary" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.41-4.07-6.9-6.9l1.97-1.57c.26-.26.35-.63.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                Call Us: +91 95483 23302
            </a>
            <a href="https://wa.me/919548323302" target="_blank" class="btn btn-whatsapp" style="text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp Chat
            </a>
            <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
                📧 elitesolutions906@gmail.com
            </div>
        </div>

        <button class="close-chat-modal" style="
            background: #f1f1f1;
            color: #333;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease;
        ">Close</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close handlers
    const closeBtn = modal.querySelector('.close-chat-modal');
    closeBtn.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 300);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        }
    });

    // Close on escape
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// ===================================
// Lazy Loading Images
// ===================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy-image');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// ===================================
// Newsletter Form Handler
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const email = input.value.trim();

            if (email && isValidEmail(email)) {
                // Simulate subscription success
                input.value = '';
                showToast('Thank you for subscribing!', 'success');
            } else {
                showToast('Please enter a valid email address', 'error');
            }
        });
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#0D47A1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10001;
        animation: slideUp 0.3s ease;
        font-weight: 500;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===================================
// Search Functionality (Demo)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = searchForm.querySelector('.search-input');
            const query = input.value.trim();

            if (query) {
                // In a real app, this would navigate to search results
                showToast(`Searching for: "${query}"`, 'info');
            }
        });
    }
});

// ===================================
// Header Scroll Effect
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    }, { passive: true });
});

// ===================================
// Add to Cart Demo
// ===================================
function addToCart(productName, price) {
    showToast(`${productName} added to cart!`, 'success');

    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;

        // Animate the cart icon
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Make addToCart available globally
window.addToCart = addToCart;

function buyViaWhatsapp(productName) {
    const phoneNumber = "919548323302";
    const text = encodeURIComponent(`Hi, I am interested in buying *${productName}*. Please let me know the details.`);
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
}
window.buyViaWhatsapp = buyViaWhatsapp;

function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const requirement = document.getElementById('requirement').value;

    // Simulate successful submission
    showToast(`Thank you ${name}! We have received your requirement.`, 'success');

    // Construct WhatsApp message URL for immediate action (optional feature)
    const text = encodeURIComponent(`*New Requirement*\nName: ${name}\nPhone: ${phone}\nRequirement: ${requirement}`);

    // Reset form
    document.getElementById('contactForm').reset();

    // Optional: Open WhatsApp with the requirement
    setTimeout(() => {
        if (confirm("Would you like to send this requirement via WhatsApp as well?")) {
            window.open(`https://wa.me/919548323302?text=${text}`, '_blank');
        }
    }, 1500);
}
window.handleContactSubmit = handleContactSubmit;

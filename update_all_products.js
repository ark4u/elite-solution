
const fs = require('fs');
const path = require('path');

// FULL PRODUCT DATA (Synced with script.js)
const products = [
    // === SMART TV ===
    {
        name: "Elite Smart LED TV",
        slug: "smart-led-tv",
        model: "ES-TV-SMART-SERIES",
        category: "smart-tv",
        image: "assets/images/smart-tv-48-front.jpg",
        description: "Our company is the most reputed manufacturer, exporter and supplier of 32 inch TV to customers...",
        categoryName: "Smart TV",
        categorySlug: "smart-tv.html"
    },
    // === IP CAMERAS ===
    {
        name: "2.5 MP Dome IP Camera",
        slug: "2-5mp-dome-ip",
        model: "ES-LNC-DI2MP-ZI02",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.42.jpeg",
        description: "Compact 2.5MP dome IP camera with clear HD video output. Ideal for indoor monitoring with discreet design and reliable network connectivity.",
        features: ["2.5 MP HD", "PoE / DC 12V", "IR Night Vision 30M", "H.265 Compression"],
        specifications: "2.5 MP CMOS Sensor, 3.6mm Fixed Lens, H.265/H.264, IR Distance 30M, PoE (802.3af) / DC 12V, IP66 Weatherproof, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    {
        name: "2.5 MP Bullet IP Camera",
        slug: "2-5mp-bullet-ip",
        model: "ES-LNC-BI2MP-QI02",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.05.13.jpeg",
        description: "Durable 2.5MP bullet IP camera suitable for outdoor installations. Weatherproof design with reliable PoE connectivity for easy deployment.",
        features: ["2.5 MP HD", "PoE Enabled", "IR Night Vision 30M", "H.265"],
        specifications: "2.5 MP CMOS Sensor, 3.6mm Fixed Lens, H.265/H.264, IR Distance 30M, PoE (802.3af) / DC 12V, IP66 Weatherproof, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    {
        name: "5 MP Dome IP Camera",
        slug: "5mp-dome-ip",
        model: "ES-LNC-DI5MP-ZI05",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.05.26.jpeg",
        description: "High-resolution 5MP dome IP camera delivering crystal-clear footage. Enhanced compression for efficient storage and smooth streaming.",
        features: ["5 MP Ultra-HD", "Smart IR 30M", "H.265+", "PoE Enabled"],
        specifications: "5 MP CMOS Sensor, 2.8mm/3.6mm Fixed Lens, H.265+/H.264, Smart IR 30M, PoE (802.3af) / DC 12V, IP67, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    {
        name: "5 MP Bullet IP Camera",
        slug: "5mp-bullet-ip",
        model: "ES-LNC-BI5MP-QI05",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.53.jpeg",
        description: "Robust 5MP outdoor bullet IP camera engineered for demanding environments. High-performance IR LEDs provide clear night vision up to 40 meters.",
        features: ["5 MP Ultra-HD", "Long Range IR 40M", "Weatherproof IP67", "H.265+"],
        specifications: "5 MP CMOS Sensor, 3.6mm Fixed Lens, H.265+/H.264, IR Distance 40M, PoE (802.3af) / DC 12V, IP67 Weatherproof, Metal Housing, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    {
        name: "8 MP Bullet IP Camera",
        slug: "8mp-bullet-ip",
        model: "ES-LNC-BI8MP-QI08",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.15.jpeg",
        description: "Top-tier 8MP (4K) bullet IP camera for professional-grade surveillance. Extended IR range up to 50 meters for expansive outdoor coverage.",
        features: ["8 MP 4K Ultra-HD", "Long Range IR 50M", "Weatherproof IP67", "H.265+"],
        specifications: "8 MP CMOS Sensor, 3.6mm Fixed Lens, H.265+/H.264, IR Distance 50M, PoE (802.3af) / DC 12V, IP67 Weatherproof, Metal Housing, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    {
        name: "8 MP Dome IP Camera",
        slug: "8mp-dome-ip",
        model: "ES-LNC-DI8MP-ZI08",
        category: "ip",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.07.08.jpeg",
        description: "Premium 8MP (4K) dome IP camera for superior detail and clarity. Advanced smart IR technology ensures optimal night vision without overexposure.",
        features: ["8 MP 4K Ultra-HD", "Smart IR 30M", "H.265+", "PoE Enabled"],
        specifications: "8 MP CMOS Sensor, 2.8mm Fixed Lens, H.265+/H.264, Smart IR 30M, PoE (802.3af) / DC 12V, IP67, -30°C to +60°C",
        categoryName: "IP Cameras",
        categorySlug: "ip-cameras.html"
    },
    // === NVR SYSTEMS ===
    {
        name: "4 Channel NVR",
        slug: "4-channel-nvr",
        model: "ES-LNC-NVR04-PI04",
        category: "nvr",
        image: "assets/images/nvr-4ch.png",
        description: "Compact 4-channel NVR with built-in PoE ports for easy IP camera installation. Supports 4K recording with H.265+ compression.",
        features: ["4 IP Channels", "4K Recording", "H.265+", "PoE Ports"],
        specifications: "4 IP Camera Inputs, 4K/8MP Recording, H.265+/H.264, 1 SATA HDD (up to 8TB), 4 PoE Ports, HDMI/VGA Output, RJ45 Ethernet, DC 48V",
        categoryName: "NVR Systems",
        categorySlug: "nvr-systems.html"
    },
    {
        name: "Elite 8 Channel NVR",
        slug: "8-channel-nvr",
        model: "ES-LNC-NVR08-PI08",
        category: "nvr",
        image: "assets/images/nvr-8ch.png",
        description: "Professional 8-channel NVR with 8 built-in PoE ports. Ideal for medium-sized installations with advanced recording features.",
        features: ["8 IP Channels", "4K Recording", "H.265+", "8 PoE Ports"],
        specifications: "8 IP Camera Inputs, 4K/8MP Recording, H.265+/H.264, 2 SATA HDD (up to 16TB), 8 PoE Ports, HDMI/VGA Output, RJ45 Ethernet, DC 48V",
        categoryName: "NVR Systems",
        categorySlug: "nvr-systems.html"
    },
    {
        name: "Elite 16 Channel NVR",
        slug: "16-channel-nvr",
        model: "ES-LNC-NVR16-PI16",
        category: "nvr",
        image: "assets/images/nvr-16ch.png",
        description: "High-capacity 16-channel NVR with 16 PoE ports for large installations. Supports dual SATA HDDs for extended storage.",
        features: ["16 IP Channels", "4K Recording", "H.265+", "16 PoE Ports"],
        specifications: "16 IP Camera Inputs, 4K/8MP Recording, H.265+/H.264, 2 SATA HDD (up to 20TB), 16 PoE Ports, HDMI/VGA Output, RJ45 Ethernet, DC 48V",
        categoryName: "NVR Systems",
        categorySlug: "nvr-systems.html"
    },
    {
        name: "32 Channel NVR",
        slug: "32-channel-nvr",
        model: "ES-LNC-NVR32-PI32",
        category: "ip",
        image: "assets/images/nvr-32ch.png",
        description: "Enterprise-grade 32-channel NVR for large-scale surveillance. Supports multiple HDDs and remote management.",
        features: ["32 IP Channels", "4K Recording", "H.265+", "Enterprise Grade"],
        specifications: "32 IP Camera Inputs, 4K/8MP Recording, H.265+/H.264, 4 SATA HDD (up to 40TB), HDMI/VGA Output, RJ45 Ethernet, DC 12V/AC 100-240V",
        categoryName: "NVR Systems",
        categorySlug: "nvr-systems.html"
    },
    // === POE SWITCHES ===
    {
        name: "Elite 4 Port POE Switch",
        slug: "4-port-poe",
        model: "ES-POE3690LIP04",
        category: "poe",
        image: "assets/images/poe-switch-4port.png",
        description: "Compact 4-port PoE switch ideal for small IP camera installations. Delivers up to 60W total power with Gigabit speeds.",
        features: ["4 POE Ports", "60W Total Power", "Gigabit Speed", "Plug & Play"],
        specifications: "4 PoE Ports (IEEE 802.3af/at), 60W Total Power Budget, 2 Uplink Ports, 10/100/1000Mbps, Plug & Play, Metal Housing",
        categoryName: "POE Switches",
        categorySlug: "poe-switches.html"
    },
    {
        name: "Elite 8 Port POE Switch",
        slug: "8-port-poe",
        model: "ES-POE2580LIP08",
        category: "poe",
        image: "assets/images/poe-switch-8port.png",
        description: "Professional 8-port PoE switch with 120W power budget for medium installations. Features 2 Gigabit uplink ports for network expansion.",
        features: ["8 POE Ports", "120W Total Power", "Gigabit Speed", "2 Uplink Ports"],
        specifications: "8 PoE Ports (IEEE 802.3af/at), 120W Total Power Budget, 2 Gigabit Uplink Ports, 10/100/1000Mbps, LED Indicators, Rack Mountable",
        categoryName: "POE Switches",
        categorySlug: "poe-switches.html"
    },
    {
        name: "Elite 16 Port POE Switch",
        slug: "16-port-poe",
        model: "ES-POE1470LIP016",
        category: "poe",
        image: "assets/images/poe-switch-16port.png",
        description: "High-power 16-port PoE switch with 250W power budget for large installations. Rack mountable design for professional deployment.",
        features: ["16 POE Ports", "250W Total Power", "Gigabit Speed", "Rack Mountable"],
        specifications: "16 PoE Ports (IEEE 802.3af/at), 250W Total Power Budget, 2 SFP Uplink Ports, 10/100/1000Mbps, 19-inch Rack Mount, Metal Chassis",
        categoryName: "POE Switches",
        categorySlug: "poe-switches.html"
    },
    // === PTZ & WIFI ===
    {
        name: "Elite Wifi DOME Camera 3 MP",
        slug: "elite-wifi-dome-3mp",
        model: "ES-IPC360",
        category: "ptz-wifi",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.36.53.jpeg",
        description: "Smart 3MP WiFi Dome camera with 360-degree panoramic view.",
        categoryName: "PTZ & WiFi",
        categorySlug: "ptz-wifi.html"
    },
    {
        name: "ELITE SecureBullet Pro Camera",
        slug: "securebullet-pro",
        model: "ES-CV240",
        category: "ptz-wifi",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.37.06.jpeg",
        description: "Pro-grade 4MP WiFi Bullet camera.",
        categoryName: "PTZ & WiFi",
        categorySlug: "ptz-wifi.html"
    },
    {
        name: "Bullet Outdoor Camera 5 MP",
        slug: "smart-ptz-bullet-5mp",
        model: "ES-GX200-5V4G",
        category: "ptz-wifi",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.37.26.jpeg",
        description: "Versatile 5MP Outdoor PTZ Bullet camera.",
        categoryName: "PTZ & WiFi",
        categorySlug: "ptz-wifi.html"
    },
    {
        name: "ELITE ApexGuard PTZ 5MP",
        slug: "elite-ptz-5mp",
        model: "ES-PTZ8990-05MP",
        category: "ptz-wifi",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.37.49.jpeg",
        description: "Heavy-duty 5MP speed dome PTZ camera with 30X optical zoom for long-distance surveillance. Full 360° pan and high-speed tracking for comprehensive coverage.",
        features: ["5 MP HD", "30X Optical Zoom", "360° Pan/Tilt", "IR Night Vision 150M"],
        specifications: "5 MP CMOS Sensor, 30X Optical Zoom, Pan: 360° endless, Tilt: -15° to 90°, IR Distance 150M, PoE+ / DC 24V, IP66 Weatherproof, -40°C to +70°C",
        categoryName: "PTZ & WiFi",
        categorySlug: "ptz-wifi.html"
    },
    {
        name: "Elite PTZ Camera 8 MP",
        slug: "elite-ptz-8mp",
        model: "ES-PTZ287531-G008MP",
        category: "ptz-wifi",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.47.59.jpeg",
        description: "Professional-grade 8MP (4K) PTZ camera with 25X optical zoom. Designed for large-scale installations requiring maximum detail and extended range.",
        features: ["8 MP 4K Ultra-HD", "25X Optical Zoom", "360° Pan/Tilt", "IR Night Vision 200M"],
        specifications: "8 MP CMOS Sensor, 25X Optical Zoom, Pan: 360° endless, Tilt: -15° to 90°, IR Distance 200M, PoE+ / DC 24V, IP67 Weatherproof, -40°C to +70°C",
        categoryName: "PTZ & WiFi",
        categorySlug: "ptz-wifi.html"
    },
    // === ANALOG CAMERAS (Existing - Keeping Logic) ===
    {
        name: "2.5 MP Dome Analog Camera",
        slug: "2-5mp-dome-analog",
        model: "ES-UNC-DA2MP-ZA1",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.10.jpeg",
        description: "Delivers clear high-definition video with reliable day and night performance.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    {
        name: "2.5 MP Bullet Analog Camera",
        slug: "2-5mp-bullet-analog",
        model: "ES-UNC-BA2MP-QA2",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.25.jpeg",
        description: "Durable and reliable outdoor security solution.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    {
        name: "5 MP Dome Analog Camera",
        slug: "5mp-dome-analog",
        model: "ES-UNC-DA5MP-ZA5",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.39.jpeg",
        description: "Ultra-clear HD video with enhanced detail.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    {
        name: "5 MP Bullet Analog Camera",
        slug: "5mp-bullet-analog",
        model: "ES-UNC-BA5MP-QA5",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.39.53.jpeg",
        description: "Ideal for outdoor surveillance with excellent clarity.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    {
        name: "8 MP Bullet Analog Camera",
        slug: "8mp-bullet-analog",
        model: "ES-LNC-BI8MP-QI08",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.40.21.jpeg",
        description: "Engineered for high-resolution analog surveillance.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    {
        name: "8 MP Dome Analog Camera",
        slug: "8mp-dome-analog",
        model: "ES-UNC-DA8MP-ZA8",
        category: "analog",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.40.38.jpeg",
        description: "High-precision surveillance with ultra-clear video.",
        categoryName: "Analog Cameras",
        categorySlug: "analog-cameras.html"
    },
    // === DVR SYSTEMS ===
    {
        name: "Elite 4 Channel DVR",
        slug: "4-channel-dvr",
        model: "ES-UVR-004CH-ZQS",
        category: "dvr",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 18.49.45.jpeg",
        description: "Reliable solution for small surveillance setups.",
        categoryName: "DVR Systems",
        categorySlug: "dvr-systems.html"
    },
    {
        name: "Elite 8 Channel DVR",
        slug: "8-channel-dvr",
        model: "ES-UVR-008CH-ZQS01",
        category: "dvr",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
        description: "Designed for retail spaces and warehouses.",
        categoryName: "DVR Systems",
        categorySlug: "dvr-systems.html"
    },
    {
        name: "Elite 16 Channel DVR",
        slug: "16-channel-dvr",
        model: "ES-UVR-0016CH-ZQS02",
        category: "dvr",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
        description: "High-capacity solution for large-scale installations.",
        categoryName: "DVR Systems",
        categorySlug: "dvr-systems.html"
    },
    {
        name: "Elite 32 Channel DVR",
        slug: "32-channel-dvr",
        model: "ES-UVR-0032CH-ZQS03",
        category: "dvr",
        image: "assets/New_Images/WhatsApp Image 2026-01-13 at 19.09.41.jpeg",
        description: "High-performance system for enterprise environments.",
        categoryName: "DVR Systems",
        categorySlug: "dvr-systems.html"
    }
];

const template = (p) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.name} - Elite Solution</title>
    <link rel="icon" type="image/png" href="../assets/images/logo.png">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header class="header" id="header">
        <div class="header-container">
            <a href="../index.html" class="logo">
                <img src="../assets/images/logo.png" alt="Elite Solution Logo">
                <span class="logo-text">Elite <span>Solution</span></span>
            </a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="../index.html" class="nav-link">Home</a></li>
                    <li><a href="../shop.html" class="nav-link">Shop</a></li>
                    <li><a href="../contact.html" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            <div class="header-actions">
                <form class="search-form" role="search">
                    <input type="search" class="search-input" placeholder="Search products...">
                    <button type="submit" class="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </form>
                <button class="menu-toggle" id="menuToggle">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </header>

    <nav class="mobile-menu" id="mobileMenu">
        <ul class="nav-list">
            <li><a href="../index.html" class="nav-link">Home</a></li>
            <li><a href="../shop.html" class="nav-link">Shop</a></li>
            <li><a href="../contact.html" class="nav-link">Contact</a></li>
        </ul>
    </nav>

    <main class="product-page">
        <div class="container">
            <div id="productDetails" data-slug="${p.slug}">
                <div class="product-page-grid">
                    <div class="product-gallery">
                         <div class="product-main-image">
                            <img src="../${p.image}" alt="${p.name}">
                        </div>
                    </div>
                    <div class="product-details">
                         <div class="product-breadcrumb">
                            <a href="../index.html">Home</a>
                            <span>/</span>
                            <a href="../categories/${p.categorySlug}">${p.categoryName}</a>
                            <span>/</span>
                            <span>${p.name}</span>
                        </div>
                        <h1 class="product-page-title">${p.name}</h1>
                        <p class="product-model">Model: ${p.model}</p>
                        <p class="product-description-text">${p.description}</p>
                        
                        ${p.features ? `
                        <div class="product-features" style="margin-top: 1.5rem;">
                            <h4 style="margin-bottom: 0.75rem;">Key Features</h4>
                            <div class="features-list" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                                ${p.features.map(f => `
                                <div class="feature-item" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#10b981"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                    <span>${f}</span>
                                </div>`).join('')}
                            </div>
                        </div>` : ''}
                        
                        ${p.specifications ? `
                        <div class="product-specifications" style="margin-top: 1.5rem;">
                            <h4 style="margin-bottom: 0.75rem;">Specifications</h4>
                            <ul style="list-style: disc; padding-left: 1.5rem; color: #666;">
                                ${p.specifications.split(',').map(s => `<li style="margin-bottom: 0.5rem;">${s.trim()}</li>`).join('')}
                            </ul>
                        </div>` : ''}
                        
                        <div class="product-cta" style="margin-top: 2rem;">
                            <a href="https://wa.me/919548323302?text=${encodeURIComponent('Hi, I am interested in ' + p.name + ' (' + p.model + '). Please share more details.')}" target="_blank" class="btn btn-whatsapp" style="display: inline-block; padding: 1rem 2rem; background: #25d366; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                                Buy on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 Elite Solution.</p>
            </div>
        </div>
    </footer>

     <div class="floating-buttons floating-whatsapp">
        <a href="https://wa.me/919548323302" class="float-btn whatsapp" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            <span>WhatsApp</span>
        </a>
    </div>
    
    <div class="floating-buttons floating-call">
         <a href="tel:+919548323302" class="float-btn call">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.41-4.07-6.9-6.9l1.97-1.57c.26-.26.35-.63.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span>Call Us</span>
        </a>
    </div>

    <script src="../script.js"></script>
</body>
</html>`;

products.forEach(p => {
    const filePath = path.join(__dirname, 'products', `${p.slug}.html`);
    fs.writeFileSync(filePath, template(p));
    console.log(`Updated/Created ${p.slug}.html`);
});

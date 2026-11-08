// Pazhampori Global Enterprise (പഴംപൊരി) - Master Application Controller
// Managing Standard & Premium Varieties, Multi-Item Cart, Persistent Order Storage,
// Live Delivery Journey Tracking with "Gate Distance Cancel Lockout",
// Founder Dr. Aleena Jacob Funny Pazhampori Frame, and Subtle Interactive Animations.

const App = {
  // Global Logistics Dataset
  logisticsData: {
    "India": {
      currency: "₹",
      currencyRate: 1,
      districts: [
        { name: "Kozhikode (Calicut)", time: "4 mins", distanceM: 1800, hub: "Beach Road Hyper-Oil Terminal" },
        { name: "Ernakulam (Kochi)", time: "5 mins", distanceM: 2200, hub: "Marine Drive Rapid Fryer" },
        { name: "Thiruvananthapuram", time: "6 mins", distanceM: 2600, hub: "Technopark Fritter Node Alpha" },
        { name: "Malappuram", time: "5 mins", distanceM: 2100, hub: "Kottakkal Golden Corridor" },
        { name: "Thrissur", time: "6 mins", distanceM: 2400, hub: "Swaraj Round Fritter Hub" },
        { name: "Kannur", time: "7 mins", distanceM: 2900, hub: "Theyyam Speed Chute" },
        { name: "Kottayam", time: "6 mins", distanceM: 2500, hub: "Rubber-Belt Thermal Conveyor" },
        { name: "Wayanad", time: "8 mins", distanceM: 3200, hub: "Direct Nendran Plantation Link" },
        { name: "Bengaluru", time: "14 mins", distanceM: 5800, hub: "Indiranagar Drone Bay" },
        { name: "Mumbai", time: "18 mins", distanceM: 7400, hub: "BKC Financial Fritter Despatch" },
        { name: "New Delhi", time: "22 mins", distanceM: 8900, hub: "Connaught Place Diplomatic Pod" }
      ]
    },
    "United Arab Emirates": {
      currency: "AED ",
      currencyRate: 0.045,
      districts: [
        { name: "Dubai - Deira", time: "8 mins", distanceM: 3100, hub: "Gold Souk Hyper-Cart #1" },
        { name: "Dubai - Karama", time: "7 mins", distanceM: 2800, hub: "Al Attar Centre Rapid Fryer" },
        { name: "Dubai - Downtown", time: "11 mins", distanceM: 4500, hub: "Burj Khalifa Terrace Cart" },
        { name: "Abu Dhabi", time: "13 mins", distanceM: 5200, hub: "Corniche Pavilion Station" },
        { name: "Sharjah", time: "10 mins", distanceM: 4100, hub: "Rolla Square High-Speed Line" }
      ]
    },
    "United Kingdom": {
      currency: "£",
      currencyRate: 0.0095,
      districts: [
        { name: "London - Southall", time: "12 mins", distanceM: 4900, hub: "The Broadway Fritter Express" },
        { name: "London - Canary Wharf", time: "14 mins", distanceM: 5600, hub: "Banker Underground Chute" },
        { name: "London - Wembley", time: "13 mins", distanceM: 5100, hub: "Ealing Road Golden Cart" },
        { name: "Birmingham", time: "17 mins", distanceM: 6800, hub: "Bullring Golden Fryer Pod" },
        { name: "Manchester", time: "19 mins", distanceM: 7600, hub: "Piccadilly Station Capsule" }
      ]
    },
    "United States": {
      currency: "$",
      currencyRate: 0.012,
      districts: [
        { name: "New York - Wall Street", time: "15 mins", distanceM: 6100, hub: "NYSE Fritter Bell Cart" },
        { name: "New York - Jackson Heights", time: "12 mins", distanceM: 4800, hub: "74th Street Rapid Terminal" },
        { name: "California - Silicon Valley", time: "14 mins", distanceM: 5700, hub: "Palo Alto Y-Combinator Fryer" },
        { name: "Texas - Dallas", time: "18 mins", distanceM: 7200, hub: "Irving South Asian Corridor" }
      ]
    },
    "Singapore": {
      currency: "S$",
      currencyRate: 0.016,
      districts: [
        { name: "Little India", time: "7 mins", distanceM: 2700, hub: "Mustafa Sky-Cart Terminal" },
        { name: "Marina Bay", time: "9 mins", distanceM: 3600, hub: "Financial District Hyper-Chute" },
        { name: "Jurong", time: "12 mins", distanceM: 4700, hub: "West Logistics Outpost" }
      ]
    },
    "Canada": {
      currency: "CA$",
      currencyRate: 0.016,
      districts: [
        { name: "Toronto - Mississauga", time: "16 mins", distanceM: 6400, hub: "Hurontario Fritter Hub" },
        { name: "Vancouver - Surrey", time: "18 mins", distanceM: 7100, hub: "Pacific Northwest Fryer" }
      ]
    },
    "Australia": {
      currency: "A$",
      currencyRate: 0.018,
      districts: [
        { name: "Melbourne - CBD", time: "18 mins", distanceM: 7300, hub: "Flinders Lane Cart" },
        { name: "Sydney - Parramatta", time: "17 mins", distanceM: 6900, hub: "Church Street Outpost" }
      ]
    }
  },

  // Varieties of Pazhampori: Standard & Premium
  pazhamporiCatalog: [
    {
      id: "std-classic",
      tier: "standard",
      name: "Classic Kerala Pazhampori",
      malayalam: "ക്ലാസിക് കേരള പഴംപൊരി",
      priceINR: 20,
      desc: "Traditional ripe Wayanad Nendran banana dipped in sweet turmeric-cardamom batter, fried in pure coconut oil and packed hot in our branded paper cover.",
      specs: ["100% Wayanad Nendran", "Coconut Oil Fried", "Branded Eco-Cover"],
      badge: "TRADITIONAL"
    },
    {
      id: "std-crispy",
      tier: "standard",
      name: "Crispy Street-Cut Pazhampori",
      malayalam: "തട്ടുകട മൊരിഞ്ഞ പഴംപൊരി",
      priceINR: 25,
      desc: "Extra-crispy tea-stall cut with thin caramelized batter edges that produce a 78 dB crunch. Handed over piping hot in our ventilated cover.",
      specs: ["Extra Crunch Crust", "Tea-Stall Cut", "Acoustic 78 dB"],
      badge: "POPULAR"
    },
    {
      id: "std-cardamom",
      tier: "standard",
      name: "Cardamom Infused Pazhampori",
      malayalam: "ഏലക്കായ് സുഗന്ധ പഴംപൊരി",
      priceINR: 30,
      desc: "Freshly crushed green Idukki cardamom pods folded directly into the batter for an aromatic sweet punch.",
      specs: ["Idukki Green Cardamom", "Aromatic Batter", "Heritage Recipe"],
      badge: "AROMATIC"
    },
    {
      id: "std-zero-sugar",
      tier: "standard",
      name: "Zero-Sugar Organic Fritter",
      malayalam: "പഞ്ചസാരയില്ലാത്ത ഓർഗാനിക് പഴംപൊരി",
      priceINR: 35,
      desc: "Zero added cane sugar. Relies 100% on the natural caramelization of over-ripe heritage bananas.",
      specs: ["No Added Sugar", "Diabetic Conscious", "Organic Certified"],
      badge: "HEALTHY"
    },

    // Premium Varieties
    {
      id: "prem-ghee",
      tier: "premium",
      name: "Royal Cow-Ghee Pazhampori",
      malayalam: "റോയൽ നാടൻ നെയ്യ് പഴംപൊരി",
      priceINR: 75,
      desc: "Exclusive luxury: Sliced Nendran bananas fried exclusively in pure, golden Kasaragod cow ghee, glazed with saffron essence and packed in gold-accented cover.",
      specs: ["100% Pure Cow Ghee", "Saffron Glaze", "Gold-Accent Cover"],
      badge: "ROYAL LUXURY"
    },
    {
      id: "prem-gold-honey",
      tier: "premium",
      name: "24K Gold Leaf & Forest Honey Reserve",
      malayalam: "24K സ്വർണ്ണ പഴംപൊരി റിസർവ്",
      priceINR: 199,
      desc: "The pinnacle of confectionery prestige. Coated with Wayanad wild forest honey, roasted almond flakes, and a layer of edible 24-Karat gold leaf.",
      specs: ["Edible 24K Gold Leaf", "Wayanad Forest Honey", "Almond Flakes"],
      badge: "ULTRA VIP"
    },
    {
      id: "prem-jaggery-coconut",
      tier: "premium",
      name: "Jaggery & Roasted Coconut Stuffed Fritter",
      malayalam: "ശർക്കര-തേങ്ങ സ്റ്റഫ്ഡ് പഴംപൊരി",
      priceINR: 60,
      desc: "Slit down the center and stuffed with caramelized Marayoor jaggery and freshly scraped coconut roasted in cardamom ghee.",
      specs: ["Marayoor Jaggery", "Roasted Coconut Filling", "Molten Core"],
      badge: "CHEF SPECIAL"
    },
    {
      id: "prem-halwa",
      tier: "premium",
      name: "Kozhikode Halwa Layered Fritter",
      malayalam: "കോഴിക്കോടൻ ഹൽവ പഴംപൊരി",
      priceINR: 85,
      desc: "A hot, soft ribbon of Kozhikode black halwa encased between two crisp banana fritters, forming a sweet molten sandwich inside the branded cover.",
      specs: ["Authentic Black Halwa", "Double Fritter Sandwich", "Kozhikode Legacy"],
      badge: "FUSION ICON"
    },
    {
      id: "prem-beef",
      tier: "premium",
      name: "Malabar Spicy Beef-Roast Stuffed Pazhampori",
      malayalam: "മലബാർ ബീഫ് റോസ്റ്റ് പഴംപൊരി",
      priceINR: 110,
      desc: "The legendary Kerala paradox: Slow-roasted spicy Malabar beef encased inside sweet crispy banana fritter. The ultimate culinary balance.",
      specs: ["Slow-Cooked Beef Roast", "Sweet & Spicy Paradox", "Malabar Legend"],
      badge: "LEGENDARY"
    }
  ],

  // State Management
  currentFilter: "all",
  cart: {},
  selectedCountry: "India",
  selectedDistrict: null,
  deliveryMode: "ONLINE",
  activeOrder: null,
  orderTrackingInterval: null,
  soundMuted: false,

  // Initialize Application
  init() {
    this.selectedDistrict = this.logisticsData["India"].districts[0];

    // Load active order from localStorage if exists
    this.loadSavedOrders();

    // Render components
    this.renderHeaderAndHeroCovers();
    this.renderFounderFunnyFrame();
    this.renderCart();
    this.renderCatalog();
    this.populateCountrySelector();
    this.updateDistrictSelector();
    this.renderDistrictsTable();
    this.updateCartBadge();
    this.setupEventListeners();

    console.log("🍌 പഴംപൊരി Global Enterprise Master Engine Initialized.");
  },

  // Render Founder Funny Pazhampori Frame
  renderFounderFunnyFrame() {
    Graphics.renderFunnyPazhamporiFrame("founder-photo-container");
  },

  // Trigger Corner Fritter Crunch Animation & Sound
  triggerCornerFritterCrunch(cornerLabel = "Golden Fritter") {
    if (window.soundFX) soundFX.crunch();
    this.showInteractiveToast(`🍌 ${cornerLabel} Crisped! (Tested by Dr. Aleena Jacob)`);
  },

  // Test Fritter Acoustics (dB Meter Toast)
  testFritterAcoustics() {
    if (window.soundFX) {
      soundFX.crunch();
      setTimeout(() => soundFX.bell(), 180);
    }
    const dbValue = (78 + Math.random() * 8).toFixed(1);
    this.showInteractiveToast(`🔥 Crust Acoustic Test: ${dbValue} dB (Standard Approved)`);
  },

  // Show subtle toast notification (clean, corporate, unobtrusive)
  showInteractiveToast(message) {
    const existing = document.querySelector(".interactive-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "interactive-toast";
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },

  // Render SVG covers in Header and Hero
  renderHeaderAndHeroCovers() {
    const headerLogo = document.getElementById("header-logo-container");
    if (headerLogo) {
      headerLogo.innerHTML = Graphics.getBrandedPazhamporiCoverSVG(48, false);
    }
    const heroCover = document.getElementById("hero-cover-container");
    if (heroCover) {
      heroCover.innerHTML = Graphics.getBrandedPazhamporiCoverSVG(160, true);
      heroCover.style.cursor = "pointer";
      heroCover.title = "Click to test Pazhampori Acoustic Crunch!";
      heroCover.onclick = () => this.testFritterAcoustics();
    }
    const packagingGallery = document.getElementById("packaging-gallery-mount");
    if (packagingGallery) {
      packagingGallery.innerHTML = Graphics.getBrandedPazhamporiCoverSVG(220, true);
    }
  },

  // Render Cartoon Large Cart
  renderCart() {
    Graphics.renderCartoonCart("large-cart-canvas-mount");
  },

  // Filter Catalog
  filterCatalog(tier) {
    this.currentFilter = tier;
    document.querySelectorAll(".filter-pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === tier);
    });
    this.renderCatalog();
  },

  // Render Catalog
  renderCatalog() {
    const container = document.getElementById("catalog-list");
    if (!container) return;

    const countryObj = this.logisticsData[this.selectedCountry];
    const rate = countryObj.currencyRate;
    const curr = countryObj.currency;

    const filtered = this.pazhamporiCatalog.filter(item => {
      if (this.currentFilter === "all") return true;
      return item.tier === this.currentFilter;
    });

    container.innerHTML = filtered.map(item => {
      const qty = this.cart[item.id] || 0;
      const convertedPrice = (item.priceINR * rate).toFixed(rate === 1 ? 0 : 2);
      const isPremium = item.tier === "premium";

      return `
        <div class="product-card ${isPremium ? 'premium-item-card' : 'standard-item-card'}" data-id="${item.id}">
          <span class="product-badge ${isPremium ? 'badge-premium' : 'badge-standard'}">
            ${isPremium ? '★ ' + item.badge : item.badge}
          </span>
          
          <div class="product-thumb-container">
            ${Graphics.getBrandedPazhamporiCoverSVG(75, false)}
          </div>

          <div class="product-details">
            <h4>${item.name} <span class="malayalam-subtitle">${item.malayalam}</span></h4>
            <p class="product-desc">${item.desc}</p>
            <div class="product-specs-pills">
              <span class="spec-pill tier-pill ${isPremium ? 'spec-prem' : 'spec-std'}">
                ${isPremium ? 'പ്രീമിയം (Premium)' : 'സ്റ്റാൻഡേർഡ് (Standard)'}
              </span>
              ${item.specs.map(s => `<span class="spec-pill">✓ ${s}</span>`).join('')}
            </div>
          </div>

          <div class="product-price-action">
            <div class="product-price">
              <span class="product-currency">${curr}</span>${convertedPrice}
            </div>

            <div class="cart-qty-controller">
              ${qty > 0 ? `
                <button class="btn-qty btn-minus" onclick="App.updateQuantity('${item.id}', -1, event)">-</button>
                <span class="qty-count">${qty}</span>
                <button class="btn-qty btn-plus" onclick="App.updateQuantity('${item.id}', 1, event)">+</button>
              ` : `
                <button class="btn-add-to-cart" onclick="App.updateQuantity('${item.id}', 1, event)">
                  + Add to Order
                </button>
              `}
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.updateOrderSummary();
  },

  // Update Item Quantity in Cart with Flying Particle Animation
  updateQuantity(productId, delta, event) {
    const current = this.cart[productId] || 0;
    const next = current + delta;
    if (next <= 0) {
      delete this.cart[productId];
    } else {
      this.cart[productId] = next;
    }

    if (window.soundFX) {
      if (delta > 0) soundFX.crunch();
      else soundFX.bell();
    }

    // Trigger subtle Flying Fritter Particle Animation toward Header Cart Badge
    if (delta > 0 && event && event.clientX) {
      this.spawnFlyingParticle(event.clientX, event.clientY);
    }

    this.renderCatalog();
    this.updateCartBadge();
    this.updateOrderSummary();
  },

  // Smooth flying particle animation
  spawnFlyingParticle(startX, startY) {
    const badge = document.querySelector(".btn-header-orders");
    if (!badge) return;

    const rect = badge.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;

    const particle = document.createElement("div");
    particle.className = "flying-fritter-particle";
    particle.textContent = "🍌";
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translate(${targetX - startX}px, ${targetY - startY}px) scale(0.5)`;
      particle.style.opacity = "0.2";
    });

    setTimeout(() => {
      particle.remove();
      // Gentle bounce on badge
      badge.style.transform = "scale(1.15)";
      setTimeout(() => badge.style.transform = "none", 200);
    }, 750);
  },

  // Update Header Cart Badge
  updateCartBadge() {
    const totalCount = Object.values(this.cart).reduce((a, b) => a + b, 0);
    const badge = document.getElementById("header-cart-count");
    if (badge) {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? "inline-block" : "none";
    }
  },

  // Set Delivery Mode
  setDeliveryMode(mode) {
    this.deliveryMode = mode;
    document.querySelectorAll(".btn-mode").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });

    if (window.soundFX) soundFX.sizzle(0.4);
    this.updateDeliveryTimeDisplay();
    this.updateOrderSummary();
  },

  // Populate Country Dropdowns
  populateCountrySelector() {
    const select = document.getElementById("country-select");
    const logisticsSelect = document.getElementById("logistics-country-select");
    if (!select) return;

    const countries = Object.keys(this.logisticsData);
    const options = countries.map(c => `<option value="${c}">${c}</option>`).join('');

    select.innerHTML = options;
    select.value = this.selectedCountry;

    if (logisticsSelect) {
      logisticsSelect.innerHTML = options;
      logisticsSelect.value = this.selectedCountry;
    }
  },

  // Update District Dropdown
  updateDistrictSelector() {
    const select = document.getElementById("district-select");
    if (!select) return;

    const districts = this.logisticsData[this.selectedCountry].districts;
    select.innerHTML = districts.map(d => `<option value="${d.name}">${d.name} (ETA: ${d.time})</option>`).join('');

    this.selectedDistrict = districts[0];
    this.updateDeliveryTimeDisplay();
  },

  // Render Logistics Table
  renderDistrictsTable() {
    const tbody = document.getElementById("districts-table-body");
    if (!tbody) return;

    const countryObj = this.logisticsData[this.selectedCountry];
    tbody.innerHTML = countryObj.districts.map(d => `
      <tr>
        <td><strong>${d.name}</strong></td>
        <td><span class="delivery-badge-pill">⚡ ${d.time}</span></td>
        <td>${d.hub}</td>
        <td><span style="color:#059669; font-weight:700;">● Active Sizzle</span></td>
        <td><code>${d.distanceM}m Radius</code></td>
      </tr>
    `).join('');
  },

  // Update Delivery Time Display
  updateDeliveryTimeDisplay() {
    const timeDisplay = document.getElementById("eta-time-display");
    const hubDisplay = document.getElementById("eta-hub-display");

    if (!timeDisplay) return;

    if (this.deliveryMode === 'OFFLINE') {
      timeDisplay.textContent = "Instant (Drive-Thru / Cart)";
      if (hubDisplay) hubDisplay.textContent = `Physical pickup at nearest ${this.selectedDistrict.hub}`;
    } else {
      timeDisplay.textContent = this.selectedDistrict.time;
      if (hubDisplay) hubDisplay.textContent = `Branded Cover Dispatched from ${this.selectedDistrict.hub}`;
    }
  },

  // Update Order Pricing & Summary
  updateOrderSummary() {
    const countryObj = this.logisticsData[this.selectedCountry];
    const rate = countryObj.currencyRate;
    const curr = countryObj.currency;

    let subtotalINR = 0;
    const itemsListContainer = document.getElementById("order-summary-items");
    const itemsHtml = [];

    for (const [id, qty] of Object.entries(this.cart)) {
      const prod = this.pazhamporiCatalog.find(p => p.id === id);
      if (prod) {
        const itemTotal = prod.priceINR * qty * rate;
        subtotalINR += prod.priceINR * qty;
        itemsHtml.push(`
          <div class="summary-item-line">
            <span>${qty}x ${prod.name} (${prod.malayalam})</span>
            <strong>${curr}${(itemTotal).toFixed(rate === 1 ? 0 : 2)}</strong>
          </div>
        `);
      }
    }

    if (itemsHtml.length === 0) {
      if (itemsListContainer) {
        itemsListContainer.innerHTML = `<div style="color:#94A3B8; font-size:12px; font-style:italic;">No Pazhampori items added yet. Click "+ Add to Order" above!</div>`;
      }
    } else {
      if (itemsListContainer) itemsListContainer.innerHTML = itemsHtml.join('');
    }

    const subtotal = subtotalINR * rate;
    const deliveryFee = (subtotalINR === 0 || this.deliveryMode === 'OFFLINE') ? 0 : (15 * rate);
    const tax = subtotal * 0.05;
    const total = subtotal + deliveryFee + tax;

    const fmt = (num) => rate === 1 ? Math.round(num) : num.toFixed(2);

    document.getElementById("summary-subtotal").textContent = `${curr}${fmt(subtotal)}`;
    document.getElementById("summary-delivery-fee").textContent = deliveryFee === 0 ? "FREE" : `${curr}${fmt(deliveryFee)}`;
    document.getElementById("summary-tax").textContent = `${curr}${fmt(tax)}`;
    document.getElementById("summary-total-price").textContent = `${curr}${fmt(total)}`;
  },

  // -------------------------------------------------------------
  // PLACING ORDER: VALIDATE, SAVE TO LOCALSTORAGE, RUN ANIMATION
  // -------------------------------------------------------------
  placeOrder() {
    const totalItems = Object.values(this.cart).reduce((a, b) => a + b, 0);
    if (totalItems === 0) {
      alert("Please add at least one Pazhampori (Standard or Premium) to your order!");
      return;
    }

    const customerName = document.getElementById("cust-name").value.trim() || "Valued Customer";
    const customerPhone = document.getElementById("cust-phone").value.trim() || "+91 98470 12345";
    const customerAddress = document.getElementById("cust-address").value.trim() || "Flat 4B, Emerald Heights";
    const customerGate = document.getElementById("cust-gate").value.trim() || "Main Gate Entrance";

    const orderId = "PZP-" + Math.floor(1000 + Math.random() * 9000);
    const countryObj = this.logisticsData[this.selectedCountry];
    const rate = countryObj.currencyRate;
    const curr = countryObj.currency;

    let subtotalINR = 0;
    const items = [];
    for (const [id, qty] of Object.entries(this.cart)) {
      const prod = this.pazhamporiCatalog.find(p => p.id === id);
      if (prod) {
        subtotalINR += prod.priceINR * qty;
        items.push({
          id: prod.id,
          name: prod.name,
          malayalam: prod.malayalam,
          tier: prod.tier,
          quantity: qty,
          unitPrice: prod.priceINR * rate,
          totalPrice: prod.priceINR * qty * rate
        });
      }
    }

    const subtotal = subtotalINR * rate;
    const deliveryFee = this.deliveryMode === 'OFFLINE' ? 0 : (15 * rate);
    const tax = subtotal * 0.05;
    const total = subtotal + deliveryFee + tax;

    const newOrder = {
      id: orderId,
      timestamp: Date.now(),
      customer: {
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
        gate: customerGate
      },
      country: this.selectedCountry,
      district: this.selectedDistrict.name,
      hub: this.selectedDistrict.hub,
      deliveryMode: this.deliveryMode,
      currency: curr,
      items: items,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      tax: tax,
      total: total,
      progress: 5,
      distanceMeters: this.selectedDistrict.distanceM,
      status: "FRYING",
      canCancel: true
    };

    this.saveOrder(newOrder);
    this.activeOrder = newOrder;

    this.cart = {};
    this.updateCartBadge();
    this.renderCatalog();

    if (window.soundFX) {
      soundFX.bell();
      setTimeout(() => soundFX.sizzle(1.2), 200);
    }

    this.runBoyPackagingModal(newOrder);
  },

  saveOrder(order) {
    try {
      const orders = JSON.parse(localStorage.getItem("pazhampori_saved_orders") || "[]");
      const existingIdx = orders.findIndex(o => o.id === order.id);
      if (existingIdx >= 0) {
        orders[existingIdx] = order;
      } else {
        orders.unshift(order);
      }
      localStorage.setItem("pazhampori_saved_orders", JSON.stringify(orders));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  },

  loadSavedOrders() {
    try {
      const orders = JSON.parse(localStorage.getItem("pazhampori_saved_orders") || "[]");
      if (orders.length > 0) {
        const recent = orders[0];
        if (recent.status !== "DELIVERED" && recent.status !== "CANCELLED") {
          this.activeOrder = recent;
          this.startGateTrackingSimulator();
        }
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  },

  runBoyPackagingModal(order) {
    const modal = document.getElementById("order-animation-modal");
    modal.classList.add("active");

    const stageContainer = document.getElementById("modal-animation-stage");
    const statusTitle = document.getElementById("modal-status-title");
    const statusDesc = document.getElementById("modal-status-desc");
    const orderIdTag = document.getElementById("modal-order-id");

    orderIdTag.textContent = `ORDER #${order.id} • PACKAGING IN BRANDED COVER`;

    stageContainer.innerHTML = Graphics.renderBoyPackagingInCover(1);
    statusTitle.textContent = "Step 1: Fresh Extraction from 182°C Pure Coconut Oil";
    statusDesc.textContent = "Babu extracts golden caramelized Pazhampori with sterilized tongs...";

    setTimeout(() => {
      stageContainer.innerHTML = Graphics.renderBoyPackagingInCover(2);
      statusTitle.textContent = "Step 2: Preparing Eco-Branded Paper Cover with Aligned Logo";
      statusDesc.textContent = "Opening food-grade kraft pouch certified by Dr. Aleena Jacob Foundation...";
      if (window.soundFX) soundFX.wrapPaper();
    }, 900);

    setTimeout(() => {
      stageContainer.innerHTML = Graphics.renderBoyPackagingInCover(3);
      statusTitle.textContent = "Step 3: Sliding Pazhampori into Branded Cover";
      statusDesc.textContent = "Ventilation slits aligned to prevent sogginess. Core temperature locked at 94.2°C...";
      if (window.soundFX) soundFX.wrapPaper();
    }, 1800);

    setTimeout(() => {
      stageContainer.innerHTML = Graphics.renderBoyPackagingInCover(4);
      statusTitle.textContent = "Step 4: Official 'പഴംപൊരി' Golden Hologram Sealed";
      statusDesc.textContent = "Standard & Premium quality verified. Dr. Aleena Jacob standard approved.";
      if (window.soundFX) soundFX.crunch();
    }, 2600);

    setTimeout(() => {
      stageContainer.innerHTML = Graphics.renderBoyPackagingInCover(5);
      statusTitle.textContent = "Step 5: Handover Ready! Ready for Dispatch to Your Gate!";
      statusDesc.textContent = `Babu holds out the piping hot branded cover packed with your favorite Pazhampori!`;
      if (window.soundFX) soundFX.chime();

      this.startGateTrackingSimulator();
    }, 3400);
  },

  // -------------------------------------------------------------
  // DYNAMIC GATE JOURNEY SIMULATOR & CANCEL LOCKOUT
  // -------------------------------------------------------------
  startGateTrackingSimulator() {
    if (this.orderTrackingInterval) clearInterval(this.orderTrackingInterval);

    this.orderTrackingInterval = setInterval(() => {
      if (!this.activeOrder) return;
      if (this.activeOrder.status === "DELIVERED" || this.activeOrder.status === "CANCELLED") {
        clearInterval(this.orderTrackingInterval);
        return;
      }

      this.activeOrder.progress += 4;
      if (this.activeOrder.distanceMeters > 20) {
        this.activeOrder.distanceMeters = Math.max(0, this.activeOrder.distanceMeters - 120);
      }

      if (this.activeOrder.progress < 25) {
        this.activeOrder.status = "FRYING";
        this.activeOrder.canCancel = true;
      } else if (this.activeOrder.progress < 50) {
        this.activeOrder.status = "PACKED";
        this.activeOrder.canCancel = true;
      } else if (this.activeOrder.progress < 75) {
        this.activeOrder.status = "DISPATCHED";
        this.activeOrder.canCancel = true;
      } else if (this.activeOrder.progress < 88) {
        this.activeOrder.status = "NEAR_GATE";
        this.activeOrder.canCancel = true;
      } else if (this.activeOrder.progress < 100) {
        this.activeOrder.status = "AT_GATE";
        this.activeOrder.canCancel = false; // LOCK CANCEL!
      } else {
        this.activeOrder.status = "DELIVERED";
        this.activeOrder.canCancel = false;
        clearInterval(this.orderTrackingInterval);
      }

      this.saveOrder(this.activeOrder);
      this.updateLiveTrackingModalUI();
    }, 1500);
  },

  openTrackingModal() {
    if (!this.activeOrder) {
      alert("No active order currently! Place an order from the menu below.");
      return;
    }
    const modal = document.getElementById("order-tracking-modal");
    if (modal) {
      modal.classList.add("active");
      this.updateLiveTrackingModalUI();
    }
  },

  updateLiveTrackingModalUI() {
    if (!this.activeOrder) return;

    const ord = this.activeOrder;
    const progressPercent = Math.min(100, ord.progress);

    const barFill = document.getElementById("tracking-bar-fill");
    if (barFill) barFill.style.width = `${progressPercent}%`;

    const distText = document.getElementById("tracking-distance-text");
    const gateStatusTag = document.getElementById("gate-status-tag");
    const gateNameDisplay = document.getElementById("tracking-gate-name");

    if (gateNameDisplay) gateNameDisplay.textContent = ord.customer.gate;

    if (distText && gateStatusTag) {
      if (ord.status === "AT_GATE") {
        distText.textContent = `🚨 15 METERS (AT YOUR GATE!)`;
        gateStatusTag.textContent = "DELIVERY BOY STANDING AT YOUR GATE WITH STEAMING COVER";
        gateStatusTag.style.color = "#DC2626";
      } else if (ord.status === "DELIVERED") {
        distText.textContent = `0 METERS (DELIVERED)`;
        gateStatusTag.textContent = "Pazhampori handed over! Enjoy!";
        gateStatusTag.style.color = "#15803D";
      } else {
        distText.textContent = `${ord.distanceMeters} meters away from ${ord.customer.gate}`;
        gateStatusTag.textContent = `En route from ${ord.hub} via ${ord.deliveryMode === 'OFFLINE' ? 'Drive-Thru Lane' : 'Rapid Courier'}`;
        gateStatusTag.style.color = "#854D0E";
      }
    }

    document.querySelectorAll(".tracking-step-node").forEach(node => {
      const stepVal = parseInt(node.dataset.stepVal || "0");
      node.classList.toggle("completed", progressPercent >= stepVal);
      node.classList.toggle("current", progressPercent >= stepVal && progressPercent < stepVal + 25);
    });

    const cancelBtn = document.getElementById("btn-gate-cancel");
    const cancelLockoutNotice = document.getElementById("cancel-lockout-notice");

    if (cancelBtn) {
      if (ord.canCancel) {
        cancelBtn.disabled = false;
        cancelBtn.classList.remove("btn-disabled-gate");
        cancelBtn.innerHTML = `<span>⚠️ Cancel Order (${ord.distanceMeters}m away)</span>`;
        if (cancelLockoutNotice) cancelLockoutNotice.style.display = "none";
      } else {
        cancelBtn.disabled = true;
        cancelBtn.classList.add("btn-disabled-gate");
        cancelBtn.innerHTML = `<span>🔒 Cancel Disabled (Order at Your Gate!)</span>`;
        if (cancelLockoutNotice) {
          cancelLockoutNotice.style.display = "block";
          cancelLockoutNotice.innerHTML = `
            <strong>🛑 CANCELLATION STRICTLY PROHIBITED:</strong><br>
            The delivery boy has already arrived at your gate (<strong>${ord.customer.gate}</strong>) 
            holding the hot, freshly fried Pazhampori in the branded cover! 
            Dr. Aleena Jacob's charter strictly forbids refusing fresh Pazhampori at your gate!
          `;
        }
      }
    }
  },

  // -------------------------------------------------------------
  // CANCELLATION PROTOCOL WITH RAGEBAITING
  // -------------------------------------------------------------
  initiateCancellation() {
    if (!this.activeOrder) return;

    if (!this.activeOrder.canCancel) {
      alert("🚫 CANCEL PROHIBITED! The delivery boy is already at your gate! Please receive your Pazhampori.");
      return;
    }

    this.closeModal("order-animation-modal");
    this.closeModal("order-tracking-modal");

    if (window.soundFX) soundFX.alarm();

    const rageModal = document.getElementById("ragebait-modal");
    rageModal.classList.add("active");

    document.getElementById("rage-title").textContent = "🚨 CRITICAL ETHICAL WARNING: PAZHAMFORI CANCELLATION INITIATED!";
    document.getElementById("rage-dialog-text").innerHTML = `
      HOLD ON! Are you seriously trying to cancel authentic 
      <span class="guilt-trip-highlight">പഴംപൊരി</span>?!<br><br>
      A Grade-A Wayanad Nendran banana surrendered its life. 
      The branded eco-cover was folded and verified under Dr. Aleena Jacob's quality standard. 
      The rider is only <strong>${this.activeOrder.distanceMeters} meters away</strong> from your gate!
    `;

    document.getElementById("rage-stat-1").textContent = "1";
    document.getElementById("rage-lbl-1").textContent = "Banana Disrespected";
    document.getElementById("rage-stat-2").textContent = "14";
    document.getElementById("rage-lbl-2").textContent = "Wayanad Farmers Crying";
    document.getElementById("rage-stat-3").textContent = "-0.004%";
    document.getElementById("rage-lbl-3").textContent = "Kerala GDP Impact";

    const repentBtn = document.getElementById("btn-rage-repent");
    repentBtn.textContent = "I Repent! Keep My Pazhampori Safe!";
    repentBtn.onclick = () => this.repentAndKeepOrder();

    const cancelBtn = document.getElementById("btn-rage-insist");
    cancelBtn.textContent = "I Still Want To Cancel...";
    cancelBtn.onclick = () => this.ragebaitPhase2();
  },

  dodgeCancelButton() {
    const btn = document.getElementById("btn-rage-insist");
    if (!btn) return;
    const randomX = (Math.random() - 0.5) * 60;
    const randomY = (Math.random() - 0.5) * 40;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  },

  ragebaitPhase2() {
    if (window.soundFX) soundFX.alarm();

    document.getElementById("rage-title").textContent = "📉 DR. ALEENA JACOB DISAPPOINTED: $PZMP STOCK DROPPING!";
    document.getElementById("rage-dialog-text").innerHTML = `
      DO YOU REALIZE WHAT YOU HAVE DONE?!<br><br>
      Babu was already speeding toward <strong>${this.activeOrder.customer.gate}</strong>! 
      The coconut oil aroma is filling your street! Dr. Aleena Jacob personally signed the charter for this delivery!
      <br><br>
      <span class="guilt-trip-highlight">Will you really break Babu's heart and leave hot Pazhampori abandoned?!</span>
    `;

    document.getElementById("rage-stat-1").textContent = "-42.8%";
    document.getElementById("rage-lbl-1").textContent = "$PZMP Stock Crash";
    document.getElementById("rage-stat-2").textContent = "98 Liters";
    document.getElementById("rage-lbl-2").textContent = "Tears Shed in Kitchen";
    document.getElementById("rage-stat-3").textContent = "SEVERED";
    document.getElementById("rage-lbl-3").textContent = "Banana Trust Index";

    const repentBtn = document.getElementById("btn-rage-repent");
    repentBtn.textContent = "Babu, I'm Sorry! Keep Frying!";
    repentBtn.onclick = () => this.repentAndKeepOrder();

    const cancelBtn = document.getElementById("btn-rage-insist");
    cancelBtn.textContent = "I Have No Soul (Finalize Cancellation)";
    cancelBtn.style.transform = "none";
    cancelBtn.onclick = () => this.executeFinalCancellation();
  },

  repentAndKeepOrder() {
    this.closeModal("ragebait-modal");
    if (window.soundFX) soundFX.chime();
    this.openTrackingModal();
    this.showInteractiveToast("🙌 Repentance accepted! Babu is smiling and your Pazhampori is on its way!");
  },

  executeFinalCancellation() {
    this.closeModal("ragebait-modal");

    if (this.orderTrackingInterval) clearInterval(this.orderTrackingInterval);

    if (this.activeOrder) {
      this.activeOrder.status = "CANCELLED";
      this.activeOrder.canCancel = false;
      this.saveOrder(this.activeOrder);
    }

    if (window.soundFX) soundFX.sadMelody();

    const returnModal = document.getElementById("cancelled-return-modal");
    returnModal.classList.add("active");

    const stage = document.getElementById("cancel-return-stage");
    stage.innerHTML = Graphics.renderBoyReturningAnimation(3);

    document.getElementById("cancel-order-tag").textContent = `ORDER #${this.activeOrder ? this.activeOrder.id : 'PZP-000'} CANCELLED • DE-CRISP LOCKDOWN`;
    document.getElementById("cancel-desc-text").innerHTML = `
      <strong>ORDER TERMINATED WITH EXTREME PREJUDICE.</strong><br>
      Babu has aggressively snatched back the branded Pazhampori cover and locked it in the 
      <em>Cryogenic De-Crisp Vault</em>. Dr. Aleena Jacob has flagged your gate address with the Kerala Banana Council.
    `;
  },

  resetAfterCancellation() {
    this.closeModal("cancelled-return-modal");
    this.activeOrder = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  openOrderHistoryModal() {
    const modal = document.getElementById("order-history-modal");
    const container = document.getElementById("history-orders-list");
    if (!modal || !container) return;

    const orders = JSON.parse(localStorage.getItem("pazhampori_saved_orders") || "[]");
    if (orders.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:30px; color:#94A3B8;">No saved orders yet. Go ahead and order some hot Pazhampori!</div>`;
    } else {
      container.innerHTML = orders.map(ord => {
        const dateStr = new Date(ord.timestamp).toLocaleString();
        const isCancelled = ord.status === "CANCELLED";
        const isDelivered = ord.status === "DELIVERED";

        return `
          <div class="saved-order-card ${isCancelled ? 'card-cancelled' : ''}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <div>
                <strong>#${ord.id}</strong> • <span style="font-size:11px; color:#64748B;">${dateStr}</span>
              </div>
              <span class="status-pill-badge ${isCancelled ? 'pill-red' : (isDelivered ? 'pill-green' : 'pill-yellow')}">
                ${ord.status}
              </span>
            </div>

            <div style="font-size:12.5px; color:#1E293B; margin-bottom:6px;">
              <strong>Items:</strong> ${ord.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
            </div>

            <div style="font-size:12px; color:#64748B; margin-bottom:6px;">
              📍 Gate: <strong>${ord.customer.gate}</strong> | ${ord.district}, ${ord.country}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #E2E8F0; padding-top:8px;">
              <span style="font-weight:900; color:#D97706;">Total: ${ord.currency}${(ord.total).toFixed(2)}</span>
              ${(!isCancelled && !isDelivered) ? `
                <button class="btn-track-order" onclick="App.activeOrder = App.getOrderById('${ord.id}'); App.openTrackingModal(); App.closeModal('order-history-modal');" style="padding:4px 10px; font-size:11px;">
                  ⚡ Track Live Delivery
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    modal.classList.add("active");
  },

  getOrderById(id) {
    const orders = JSON.parse(localStorage.getItem("pazhampori_saved_orders") || "[]");
    return orders.find(o => o.id === id);
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  },

  setupEventListeners() {
    const countrySelect = document.getElementById("country-select");
    if (countrySelect) {
      countrySelect.addEventListener("change", (e) => {
        this.selectedCountry = e.target.value;
        this.updateDistrictSelector();
        this.renderCatalog();
        this.renderDistrictsTable();
      });
    }

    const districtSelect = document.getElementById("district-select");
    if (districtSelect) {
      districtSelect.addEventListener("change", (e) => {
        const found = this.logisticsData[this.selectedCountry].districts.find(d => d.name === e.target.value);
        if (found) {
          this.selectedDistrict = found;
          this.updateDeliveryTimeDisplay();
        }
      });
    }

    const logCountrySelect = document.getElementById("logistics-country-select");
    if (logCountrySelect) {
      logCountrySelect.addEventListener("change", (e) => {
        this.selectedCountry = e.target.value;
        const mainSelect = document.getElementById("country-select");
        if (mainSelect) mainSelect.value = e.target.value;
        this.updateDistrictSelector();
        this.renderDistrictsTable();
        this.renderCatalog();
      });
    }

    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        this.soundMuted = !this.soundMuted;
        if (window.soundFX) soundFX.enabled = !this.soundMuted;
        soundBtn.innerHTML = this.soundMuted ? "🔇 Sound Off" : "🔊 Sound On";
      });
    }

    // Ticker interactive click
    const ticker = document.querySelector(".executive-ticker");
    if (ticker) {
      ticker.title = "Click to view Live Fritter Cap Valuation";
      ticker.addEventListener("click", () => {
        if (window.soundFX) soundFX.bell();
        this.showInteractiveToast("📈 $PZMP Market Cap: $42.8 Billion • All systems sizzling!");
      });
    }
  },

  switchTab(tabId) {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.dataset.tab === tabId);
    });

    const targetEl = document.getElementById(tabId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  },

  triggerCartSizzle() {
    if (window.soundFX) soundFX.sizzle(1.8);
    this.showInteractiveToast("🔥 Uruli Coconut Oil Sizzling at 182.5°C!");
  },
  triggerBananaShake() {
    if (window.soundFX) soundFX.crunch();
    this.showInteractiveToast("🍌 Fresh Wayanad Bananas Inspected for Sugar Ripeness!");
  },
  triggerBellRing() {
    if (window.soundFX) soundFX.bell();
    this.showInteractiveToast("🔔 Ting! Next batch ready for packing!");
  }
};

window.App = App;

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

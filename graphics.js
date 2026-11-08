// Graphics & Animation Engine for Pazhampori Global Enterprise (പഴംപൊരി)
// Features: Branded Pazhampori Cover/Pouch with Aligned Logo & Name,
// Cartoon Large Cart, Animated Boy Packaging, Funny Pazhampori Frame for Founder,
// Animated Cancellation Return, and Interactive Particles.

const Graphics = {
  // 1. Generate the Branded Pazhampori Cover / Pouch SVG (Logo and Name Aligned)
  getBrandedPazhamporiCoverSVG(size = 120, showSteam = true) {
    return `
      <svg class="pazham-cover-svg" width="${size}" height="${size * 1.15}" viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fritterGoldenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047" />
            <stop offset="25%" stop-color="#EAB308" />
            <stop offset="65%" stop-color="#CA8A04" />
            <stop offset="100%" stop-color="#78350F" />
          </linearGradient>

          <linearGradient id="kraftCoverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF3C7" />
            <stop offset="40%" stop-color="#FDE68A" />
            <stop offset="85%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#D97706" />
          </linearGradient>

          <filter id="coverShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.22"/>
          </filter>
        </defs>

        <ellipse cx="100" cy="218" rx="72" ry="8" fill="#0F172A" opacity="0.14" />

        ${showSteam ? `
          <g class="steam-group" opacity="0.85">
            <path d="M 85 45 Q 75 30 85 18 Q 95 8 88 2" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round" fill="none" class="fryer-steam-1" />
            <path d="M 105 40 Q 115 26 106 14 Q 98 6 108 0" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" fill="none" class="fryer-steam-2" />
            <path d="M 125 45 Q 135 32 124 20 Q 118 10 126 4" stroke="#CBD5E1" stroke-width="3" stroke-linecap="round" fill="none" class="fryer-steam-3" />
          </g>
        ` : ''}

        <!-- Golden Crispy Pazhampori (Banana Fritters) Peeking Out of the Cover -->
        <g class="fritter-peeking" transform="translate(100, 75)">
          <path d="M -38 -20 C -42 -62, -22 -72, -10 -72 C 2 -72, 8 -50, 4 -15 Z" 
                fill="url(#fritterGoldenGrad)" stroke="#78350F" stroke-width="2.5" transform="rotate(-12)" />
          <ellipse cx="-20" cy="-45" rx="3.5" ry="6" fill="#713F12" opacity="0.65" transform="rotate(-15 -20 -45)" />

          <path d="M -24 -15 C -25 -72, -5 -85, 12 -84 C 30 -82, 34 -58, 25 -10 Z" 
                fill="url(#fritterGoldenGrad)" stroke="#78350F" stroke-width="3" />
          <ellipse cx="6" cy="-55" rx="4.5" ry="8" fill="#713F12" opacity="0.75" transform="rotate(10 6 -55)" />
          <ellipse cx="-6" cy="-40" rx="3.5" ry="5.5" fill="#713F12" opacity="0.6" />
          <ellipse cx="14" cy="-30" rx="3" ry="5" fill="#B45309" opacity="0.8" />
          <path d="M -12 -58 Q 8 -72 20 -48" stroke="#FEF08A" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.9" />

          <path d="M 14 -12 C 18 -45, 36 -55, 45 -50 C 52 -45, 48 -25, 38 -5 Z" 
                fill="url(#fritterGoldenGrad)" stroke="#78350F" stroke-width="2.5" transform="rotate(8)" />
        </g>

        <!-- Back Inside of Paper Cover -->
        <path d="M 42 75 L 158 75 L 152 210 L 48 210 Z" fill="#78350F" opacity="0.4" />

        <!-- Main Branded Paper Cover / Pouch -->
        <g filter="url(#coverShadow)">
          <path d="M 40 78 L 70 84 L 100 78 L 130 84 L 160 78 L 150 215 C 130 220, 70 220, 50 215 Z" 
                fill="url(#kraftCoverGrad)" stroke="#92400E" stroke-width="3" />
          <path d="M 40 78 L 160 78" stroke="#B45309" stroke-width="2.5" stroke-dasharray="4 2" />
          <path d="M 52 82 L 58 214" stroke="#B45309" stroke-width="1.8" opacity="0.7" />
          <path d="M 148 82 L 142 214" stroke="#B45309" stroke-width="1.8" opacity="0.7" />

          <!-- ALIGNED LOGO & NAME EMBLEM ON COVER -->
          <g class="aligned-cover-brand" transform="translate(100, 142)">
            <circle cx="0" cy="0" r="38" fill="#FFFBEB" stroke="#B45309" stroke-width="2.5" />
            <circle cx="0" cy="0" r="34" fill="none" stroke="#D97706" stroke-width="1.5" stroke-dasharray="3 2" />

            <path d="M -14 -16 Q 0 -26 14 -16 Q 0 -19 -14 -16 Z" fill="#EAB308" stroke="#78350F" stroke-width="1.5" />

            <!-- PROMINENT MALAYALAM NAME: "പഴംപൊരി" -->
            <text x="0" y="2" 
                  font-family="'Noto Sans Malayalam', 'Manjari', sans-serif" 
                  font-weight="900" 
                  font-size="16" 
                  fill="#78350F" 
                  text-anchor="middle"
                  letter-spacing="0.5">
              പഴംപൊരി
            </text>

            <text x="0" y="14" 
                  font-family="sans-serif" 
                  font-weight="800" 
                  font-size="6.5" 
                  fill="#92400E" 
                  text-anchor="middle" 
                  letter-spacing="1">
              PAZHAMFORI GLOBAL
            </text>

            <text x="0" y="24" 
                  font-family="sans-serif" 
                  font-weight="700" 
                  font-size="5.2" 
                  fill="#B45309" 
                  text-anchor="middle">
              DR. ALEENA JACOB FOUNDATION
            </text>
          </g>

          <!-- Stamps -->
          <g transform="translate(56, 192) rotate(-8)">
            <rect x="0" y="0" width="36" height="15" rx="3" fill="#DC2626" stroke="#FEF08A" stroke-width="1.5" />
            <text x="18" y="11" font-family="sans-serif" font-weight="900" font-size="7" fill="#FFFFFF" text-anchor="middle">100% HOT</text>
          </g>
          <g transform="translate(108, 192) rotate(6)">
            <rect x="0" y="0" width="38" height="15" rx="3" fill="#15803D" stroke="#FEF08A" stroke-width="1.5" />
            <text x="19" y="11" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="7" fill="#FFFFFF" text-anchor="middle">ശുദ്ധം</text>
          </g>
        </g>
      </svg>
    `;
  },

  // 2. Funny Ornate Frame Sculpted with Pazhampories for Dr. Aleena Jacob
  renderFunnyPazhamporiFrame(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="funny-pazham-frame">
        <!-- SVG Ornate Fritter Frame Overlay -->
        <svg class="fritter-frame-svg" viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="frameFritterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="30%" stop-color="#F59E0B" />
              <stop offset="70%" stop-color="#D97706" />
              <stop offset="100%" stop-color="#78350F" />
            </linearGradient>
            <filter id="fritterGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#CA8A04" flood-opacity="0.35"/>
            </filter>
          </defs>

          <!-- Outer Gold Bevel -->
          <rect x="8" y="8" width="244" height="304" rx="16" fill="none" stroke="#D97706" stroke-width="4" stroke-dasharray="6 4"/>
          <rect x="14" y="14" width="232" height="292" rx="12" fill="none" stroke="#F59E0B" stroke-width="2.5"/>

          <!-- ============================================================== -->
          <!-- 4 CORNER PAZHAMFORIES (CLICKABLE / HOVER INTERACTIVE ANIMATION) -->
          <!-- ============================================================== -->
          <!-- Top Left Corner Pazhampori -->
          <g class="interactive-corner-fritter top-left-fritter" transform="translate(18, 18)" onclick="App.triggerCornerFritterCrunch('Top-Left Royal Fritter')">
            <path d="M 0 35 C -5 5, 25 -5, 45 5 C 30 15, 10 25, 0 35 Z" fill="url(#frameFritterGrad)" stroke="#78350F" stroke-width="2" filter="url(#fritterGlow)"/>
            <circle cx="20" cy="10" r="2.5" fill="#713F12"/>
            <circle cx="32" cy="8" r="2" fill="#713F12"/>
            <!-- Steam from corner -->
            <path d="M 22 -2 Q 26 -10 20 -16" stroke="#CBD5E1" stroke-width="2" fill="none" opacity="0.7"/>
          </g>

          <!-- Top Right Corner Pazhampori -->
          <g class="interactive-corner-fritter top-right-fritter" transform="translate(242, 18) scale(-1, 1)" onclick="App.triggerCornerFritterCrunch('Top-Right Royal Fritter')">
            <path d="M 0 35 C -5 5, 25 -5, 45 5 C 30 15, 10 25, 0 35 Z" fill="url(#frameFritterGrad)" stroke="#78350F" stroke-width="2" filter="url(#fritterGlow)"/>
            <circle cx="20" cy="10" r="2.5" fill="#713F12"/>
            <circle cx="32" cy="8" r="2" fill="#713F12"/>
            <path d="M 22 -2 Q 26 -10 20 -16" stroke="#CBD5E1" stroke-width="2" fill="none" opacity="0.7"/>
          </g>

          <!-- Top Center Banana Leaf & Triple Banana Crest -->
          <g transform="translate(130, 10)">
            <ellipse cx="0" cy="6" rx="22" ry="8" fill="#15803D" stroke="#166534" stroke-width="1.5"/>
            <!-- 3 Mini Golden Bananas as Crown -->
            <path d="M -10 4 Q 0 -6 10 4" fill="#FACC15" stroke="#78350F" stroke-width="2"/>
            <circle cx="0" cy="-4" r="3.5" fill="#EAB308" stroke="#78350F" stroke-width="1"/>
          </g>

          <!-- Bottom Left Corner Pazhampori -->
          <g class="interactive-corner-fritter bottom-left-fritter" transform="translate(18, 270) scale(1, -1)" onclick="App.triggerCornerFritterCrunch('Bottom-Left Crispy Fritter')">
            <path d="M 0 35 C -5 5, 25 -5, 45 5 C 30 15, 10 25, 0 35 Z" fill="url(#frameFritterGrad)" stroke="#78350F" stroke-width="2" filter="url(#fritterGlow)"/>
            <circle cx="20" cy="10" r="2.5" fill="#713F12"/>
          </g>

          <!-- Bottom Right Corner Pazhampori -->
          <g class="interactive-corner-fritter bottom-right-fritter" transform="translate(242, 270) scale(-1, -1)" onclick="App.triggerCornerFritterCrunch('Bottom-Right Crispy Fritter')">
            <path d="M 0 35 C -5 5, 25 -5, 45 5 C 30 15, 10 25, 0 35 Z" fill="url(#frameFritterGrad)" stroke="#78350F" stroke-width="2" filter="url(#fritterGlow)"/>
            <circle cx="20" cy="10" r="2.5" fill="#713F12"/>
          </g>

          <!-- Bottom Plaque Supported by Pazhamporis -->
          <g transform="translate(130, 296)">
            <rect x="-85" y="-14" width="170" height="24" rx="6" fill="#0F172A" stroke="#F59E0B" stroke-width="2"/>
            <text x="0" y="-1" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="9" fill="#FDE047" text-anchor="middle">ഡോ. അലീന ജേക്കബ്</text>
            <text x="0" y="7" font-family="sans-serif" font-weight="bold" font-size="6" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">DR. ALEENA JACOB • FOUNDER</text>
          </g>
        </svg>

        <!-- The Photo Viewport Window (Centered inside the Pazhampori frame) -->
        <div class="founder-photo-viewport">
          <img id="founder-photo" 
               src="dr-aleena-jacob.png" 
               onerror="this.onerror=null; this.src='dr-aleena-jacob.svg';" 
               alt="Dr. Aleena Jacob - Founder & CEO" 
               class="founder-portrait-img">
        </div>
      </div>
    `;
  },

  // 3. Render Cartoon Large Cart with Malayalam Marquee "പഴംപൊരി"
  renderCartoonCart(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="cartoon-cart-wrapper">
        <svg class="large-cartoon-cart" viewBox="0 0 900 620" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cartStripesYellowWhite" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="30" height="60" fill="#EAB308" />
              <rect x="30" width="30" height="60" fill="#FFFFFF" />
            </pattern>
            <radialGradient id="oilGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#FEF08A" />
              <stop offset="45%" stop-color="#F59E0B" />
              <stop offset="85%" stop-color="#B45309" />
              <stop offset="100%" stop-color="#451A03" />
            </radialGradient>
            <filter id="neonCartGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="450" cy="575" rx="380" ry="24" fill="#0F172A" opacity="0.16" />

          <!-- High-Tech Global Satellite Uplink -->
          <g class="cart-satellite-group" transform="translate(710, 30)">
            <line x1="0" y1="90" x2="0" y2="40" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
            <path d="M -30 35 Q 0 10 30 35 Z" fill="#E2E8F0" stroke="#0F172A" stroke-width="4"/>
            <line x1="0" y1="20" x2="0" y2="5" stroke="#EAB308" stroke-width="4"/>
            <circle cx="0" cy="4" r="5" fill="#EF4444" class="blinking-satellite-light"/>
            <path d="M -15 -2 Q 0 -12 15 -2" stroke="#EAB308" stroke-width="2.5" fill="none" opacity="0.7" class="pulse-wave-1"/>
          </g>

          <line x1="180" y1="220" x2="180" y2="120" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
          <line x1="720" y1="220" x2="720" y2="120" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
          <line x1="450" y1="220" x2="450" y2="120" stroke="#CBD5E1" stroke-width="6" stroke-linecap="round"/>

          <!-- Hanging Wayanad Bananas -->
          <g class="banana-bunch-group" transform="translate(130, 140)">
            <path d="M 0 0 C 15 -5, 30 0, 35 15" stroke="#15803D" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M 10 10 Q -5 45 15 75 Q 5 45 15 10" fill="#FACC15" stroke="#854D0E" stroke-width="2.5"/>
            <path d="M 18 10 Q 30 50 20 82 Q 10 50 18 10" fill="#FDE047" stroke="#854D0E" stroke-width="2.5"/>
            <path d="M 28 10 Q 50 48 40 76 Q 30 45 28 10" fill="#EAB308" stroke="#854D0E" stroke-width="2.5"/>
            <rect x="-35" y="85" width="95" height="22" rx="4" fill="#0F172A"/>
            <text x="12" y="100" fill="#FEF08A" font-size="10.5" font-weight="bold" font-family="sans-serif" text-anchor="middle">WAYANAD ORGANIC</text>
          </g>

          <!-- Yellow & White Striped Canopy -->
          <g class="cart-awning">
            <path d="M 110 120 L 790 120 L 820 60 L 80 60 Z" fill="url(#cartStripesYellowWhite)" stroke="#CA8A04" stroke-width="3" />
            <line x1="110" y1="120" x2="790" y2="120" stroke="#713F12" stroke-width="5"/>
            <g class="awning-scallops" stroke="#713F12" stroke-width="3">
              <path d="M 110 120 Q 135 145 160 120" fill="#EAB308"/>
              <path d="M 160 120 Q 185 145 210 120" fill="#FFFFFF"/>
              <path d="M 210 120 Q 235 145 260 120" fill="#EAB308"/>
              <path d="M 260 120 Q 285 145 310 120" fill="#FFFFFF"/>
              <path d="M 310 120 Q 335 145 360 120" fill="#EAB308"/>
              <path d="M 360 120 Q 385 145 410 120" fill="#FFFFFF"/>
              <path d="M 410 120 Q 435 145 460 120" fill="#EAB308"/>
              <path d="M 460 120 Q 485 145 510 120" fill="#FFFFFF"/>
              <path d="M 510 120 Q 535 145 560 120" fill="#EAB308"/>
              <path d="M 560 120 Q 585 145 610 120" fill="#FFFFFF"/>
              <path d="M 610 120 Q 635 145 660 120" fill="#EAB308"/>
              <path d="M 660 120 Q 685 145 710 120" fill="#FFFFFF"/>
              <path d="M 710 120 Q 735 145 760 120" fill="#EAB308"/>
              <path d="M 760 120 Q 780 145 790 120" fill="#FFFFFF"/>
            </g>
          </g>

          <rect x="140" y="215" width="620" height="280" rx="20" fill="#FFFBEB" stroke="#0F172A" stroke-width="8"/>
          <rect x="140" y="325" width="620" height="30" fill="#FACC15" stroke="#0F172A" stroke-width="4"/>

          <!-- Glass Showcase (Left) -->
          <g class="cart-glass-case" transform="translate(170, 235)">
            <rect x="0" y="0" width="230" height="80" rx="8" fill="#F8FAFC" fill-opacity="0.9" stroke="#0F172A" stroke-width="4"/>
            <path d="M 10 5 L 60 5 L 20 75 L 5 75 Z" fill="#FFFFFF" opacity="0.6"/>
            <path d="M 25 65 C 25 45, 80 40, 95 65 Z" fill="#F59E0B" stroke="#78350F" stroke-width="2"/>
            <path d="M 85 65 C 90 42, 140 40, 155 65 Z" fill="#EAB308" stroke="#78350F" stroke-width="2"/>
            <path d="M 145 65 C 150 45, 200 42, 215 65 Z" fill="#F59E0B" stroke="#78350F" stroke-width="2"/>
            <path d="M 60 50 C 65 30, 115 30, 125 50 Z" fill="#FDE047" stroke="#78350F" stroke-width="2"/>
            <text x="115" y="75" fill="#78350F" font-size="9" font-weight="900" font-family="sans-serif" text-anchor="middle">FRESH BATCH • 182°C CRISP</text>
          </g>

          <!-- Sizzling Oil Fryer Uruli (Center/Right) -->
          <g class="cart-fryer-vat" transform="translate(430, 230)">
            <ellipse cx="90" cy="65" rx="85" ry="25" fill="#334155" stroke="#0F172A" stroke-width="5"/>
            <ellipse cx="90" cy="62" rx="78" ry="20" fill="url(#oilGlow)"/>
            <ellipse cx="65" cy="62" rx="22" ry="7" fill="#FACC15" stroke="#78350F" stroke-width="2" transform="rotate(-10 65 62)"/>
            <ellipse cx="115" cy="61" rx="20" ry="6" fill="#EAB308" stroke="#78350F" stroke-width="2" transform="rotate(8 115 61)"/>
            <circle cx="55" cy="58" r="4" fill="#FFFFFF" opacity="0.9" class="boil-bubble-1"/>
            <circle cx="85" cy="64" r="5" fill="#FEF08A" opacity="0.8" class="boil-bubble-2"/>
            <circle cx="120" cy="57" r="3.5" fill="#FFFFFF" opacity="0.9" class="boil-bubble-3"/>
            <path d="M 70 45 Q 60 25 72 10" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.75" class="fryer-steam-1"/>
            <path d="M 95 40 Q 110 20 98 5" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity="0.8" class="fryer-steam-2"/>
          </g>

          <!-- Branded Cover Counter Station -->
          <g class="cart-wrap-station" transform="translate(630, 235)">
            <rect x="0" y="0" width="105" height="78" rx="6" fill="#FEF3C7" stroke="#0F172A" stroke-width="3"/>
            <rect x="15" y="10" width="75" height="24" rx="4" fill="#FDE68A" stroke="#B45309" stroke-width="1.8"/>
            <text x="52.5" y="22" font-size="7.5" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" fill="#78350F" text-anchor="middle">പഴംപൊരി കവറുകൾ</text>
            <text x="52.5" y="30" font-size="5.5" font-family="sans-serif" font-weight="bold" fill="#92400E" text-anchor="middle">ECO-BRANDED COVERS</text>
            <rect x="25" y="40" width="55" height="28" rx="5" fill="#F59E0B" stroke="#78350F" stroke-width="2"/>
            <text x="52.5" y="58" font-size="8" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" fill="#FFFFFF" text-anchor="middle">പൊരി പാക്ക്</text>
          </g>

          <!-- CENTRAL SIGNBOARD: "പഴംപൊരി" WITH FOUNDER ATTRIBUTION -->
          <g class="cart-main-signboard" transform="translate(190, 365)">
            <rect x="0" y="0" width="520" height="110" rx="18" fill="#0F172A" stroke="#F59E0B" stroke-width="6" />
            <rect x="10" y="10" width="500" height="90" rx="12" fill="#1E293B" />
            <rect x="15" y="15" width="490" height="80" rx="8" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="8 6"/>

            <!-- Branded Cover Logo Emblem (Left) -->
            <g transform="translate(42, 18) scale(0.38)">
              <rect x="0" y="0" width="90" height="110" rx="8" fill="#FDE68A" stroke="#B45309" stroke-width="4"/>
              <circle cx="45" cy="55" r="28" fill="#FFFBEB" stroke="#78350F" stroke-width="3"/>
              <text x="45" y="60" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="14" fill="#78350F" text-anchor="middle">പഴം</text>
            </g>

            <text x="280" y="62" 
                  font-family="'Noto Sans Malayalam', 'Manjari', sans-serif" 
                  font-weight="900" 
                  font-size="46" 
                  fill="#FACC15" 
                  text-anchor="middle" 
                  filter="url(#neonCartGlow)"
                  letter-spacing="2">
              പഴംപൊരി
            </text>
            <text x="280" y="62" 
                  font-family="'Noto Sans Malayalam', 'Manjari', sans-serif" 
                  font-weight="900" 
                  font-size="46" 
                  fill="#FFFBEB" 
                  text-anchor="middle"
                  letter-spacing="2">
              പഴംപൊരി
            </text>

            <text x="280" y="85" 
                  font-family="system-ui, sans-serif" 
                  font-weight="800" 
                  font-size="10.5" 
                  fill="#FCD34D" 
                  text-anchor="middle" 
                  letter-spacing="2">
              FOUNDED BY DR. ALEENA JACOB • PLANETARY FRITTER ENTERPRISE
            </text>

            <g transform="translate(435, 18) scale(0.38)">
              <rect x="0" y="0" width="90" height="110" rx="8" fill="#FDE68A" stroke="#B45309" stroke-width="4"/>
              <circle cx="45" cy="55" r="28" fill="#FFFBEB" stroke="#78350F" stroke-width="3"/>
              <text x="45" y="60" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="14" fill="#78350F" text-anchor="middle">പൊരി</text>
            </g>
          </g>

          <!-- Wheels -->
          <g class="cart-wheel cart-wheel-left" transform="translate(240, 490)">
            <circle cx="0" cy="0" r="65" fill="#1E293B" stroke="#0F172A" stroke-width="12"/>
            <circle cx="0" cy="0" r="52" fill="none" stroke="#F59E0B" stroke-width="4"/>
            <line x1="0" y1="-46" x2="0" y2="46" stroke="#E2E8F0" stroke-width="4"/>
            <line x1="-46" y1="0" x2="46" y2="0" stroke="#E2E8F0" stroke-width="4"/>
            <circle cx="0" cy="0" r="16" fill="#FACC15" stroke="#78350F" stroke-width="4"/>
          </g>
          <g class="cart-wheel cart-wheel-right" transform="translate(660, 490)">
            <circle cx="0" cy="0" r="65" fill="#1E293B" stroke="#0F172A" stroke-width="12"/>
            <circle cx="0" cy="0" r="52" fill="none" stroke="#F59E0B" stroke-width="4"/>
            <line x1="0" y1="-46" x2="0" y2="46" stroke="#E2E8F0" stroke-width="4"/>
            <line x1="-46" y1="0" x2="46" y2="0" stroke="#E2E8F0" stroke-width="4"/>
            <circle cx="0" cy="0" r="16" fill="#FACC15" stroke="#78350F" stroke-width="4"/>
          </g>

          <g transform="translate(760, 205)">
            <rect x="0" y="0" width="24" height="34" rx="4" fill="#0F172A"/>
            <circle cx="12" cy="17" r="8" fill="#10B981" class="pulsing-green-light"/>
          </g>
        </svg>
      </div>
    `;
  },

  // 4. Render Animated Boy Packaging Pazhampori in Branded Cover & Handing Over
  renderBoyPackagingInCover(step = 1) {
    return `
      <div class="boy-animation-stage stage-step-${step}">
        <svg class="boy-wrap-svg" viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="handGlow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.4"/>
            </filter>
          </defs>

          <rect x="40" y="270" width="420" height="130" rx="10" fill="#E2E8F0" stroke="#0F172A" stroke-width="4"/>
          <rect x="110" y="280" width="280" height="90" rx="6" fill="#F8FAFC" stroke="#94A3B8" stroke-width="3"/>

          <!-- Boy Torso -->
          <path d="M 190 220 L 310 220 L 330 330 L 170 330 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="4"/>
          <path d="M 210 220 L 290 220 L 315 330 L 185 330 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
          <text x="250" y="260" font-size="12" font-weight="900" font-family="'Noto Sans Malayalam', sans-serif" fill="#78350F" text-anchor="middle">പഴംപൊരി</text>
          <text x="250" y="275" font-size="7.5" font-weight="bold" font-family="sans-serif" fill="#0F172A" text-anchor="middle">DR. ALEENA JACOB FLEET</text>

          <!-- Boy Head & Face -->
          <g class="boy-head-group">
            <ellipse cx="178" cy="140" rx="9" ry="12" fill="#FBBF24" stroke="#0F172A" stroke-width="3"/>
            <ellipse cx="322" cy="140" rx="9" ry="12" fill="#FBBF24" stroke="#0F172A" stroke-width="3"/>
            <ellipse cx="250" cy="140" rx="65" ry="68" fill="#FEF08A" stroke="#0F172A" stroke-width="4"/>

            <ellipse cx="225" cy="130" rx="12" ry="16" fill="#FFFFFF" stroke="#0F172A" stroke-width="3.5"/>
            <ellipse cx="275" cy="130" rx="12" ry="16" fill="#FFFFFF" stroke="#0F172A" stroke-width="3.5"/>
            <circle cx="${step === 5 ? 225 : 228}" cy="132" r="7" fill="#0F172A"/>
            <circle cx="${step === 5 ? 275 : 278}" cy="132" r="7" fill="#0F172A"/>
            <circle cx="223" cy="128" r="2.5" fill="#FFFFFF"/>
            <circle cx="273" cy="128" r="2.5" fill="#FFFFFF"/>

            <path d="M 212 110 Q 225 102 238 110" stroke="#0F172A" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M 262 110 Q 275 102 288 110" stroke="#0F172A" stroke-width="4" stroke-linecap="round" fill="none"/>
            <ellipse cx="205" cy="155" rx="11" ry="7" fill="#F43F5E" opacity="0.45"/>
            <ellipse cx="295" cy="155" rx="11" ry="7" fill="#F43F5E" opacity="0.45"/>

            <path d="M 228 162 Q 250 185 272 162 Z" fill="#DC2626" stroke="#0F172A" stroke-width="3"/>
            <path d="M 233 164 Q 250 172 267 164 Z" fill="#FFFFFF"/>

            <path d="M 185 110 C 185 70, 315 70, 315 110 C 315 85, 290 75, 250 75 C 205 75, 185 90, 185 110 Z" fill="#0F172A"/>
            <path d="M 205 80 L 295 80 L 310 18 C 290 8, 270 2, 250 2 C 230 2, 210 8, 190 18 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="4"/>
            <ellipse cx="250" cy="80" rx="45" ry="8" fill="#F59E0B" stroke="#0F172A" stroke-width="3"/>
            <text x="250" y="50" font-family="'Noto Sans Malayalam', sans-serif" font-size="12" font-weight="900" fill="#CA8A04" text-anchor="middle">പഴംപൊരി</text>
          </g>

          ${step < 5 ? `
            <path d="M 185 230 Q 140 280 200 300" stroke="#FBBF24" stroke-width="22" stroke-linecap="round" fill="none"/>
            <path d="M 315 230 Q 360 280 300 300" stroke="#FBBF24" stroke-width="22" stroke-linecap="round" fill="none"/>

            <g transform="translate(195, 260) scale(0.65)">
              <rect x="0" y="20" width="110" height="130" rx="8" fill="#FDE68A" stroke="#B45309" stroke-width="3"/>
              <path d="M 20 10 C 20 -20, 70 -25, 85 15 Z" fill="#F59E0B" stroke="#78350F" stroke-width="3"/>
              <circle cx="55" cy="85" r="26" fill="#FFFBEB" stroke="#78350F" stroke-width="2"/>
              <text x="55" y="88" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="10" fill="#78350F" text-anchor="middle">പഴംപൊരി</text>
            </g>
          ` : `
            <g class="handover-animation" filter="url(#handGlow2)">
              <path d="M 195 230 Q 180 270 205 310" stroke="#FBBF24" stroke-width="26" stroke-linecap="round" fill="none"/>
              <path d="M 305 230 Q 320 270 295 310" stroke="#FBBF24" stroke-width="26" stroke-linecap="round" fill="none"/>

              <g class="presented-pazhamcover" transform="translate(250, 305) scale(1.1)">
                <path d="M -30 -40 C -32 -80, -10 -90, 4 -85 C 18 -80, 24 -55, 18 -35 Z" fill="#F59E0B" stroke="#78350F" stroke-width="3"/>
                <circle cx="-5" cy="-65" r="3.5" fill="#713F12" opacity="0.7"/>
                <circle cx="8" cy="-55" r="3" fill="#713F12" opacity="0.7"/>

                <path d="M -8 -95 Q -15 -115 -5 -130" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.85"/>
                <path d="M 8 -95 Q 15 -118 5 -132" stroke="#E2E8F0" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.85"/>

                <rect x="-45" y="-35" width="90" height="110" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="3"/>
                <rect x="-42" y="-32" width="84" height="104" rx="8" fill="#FDE68A" />

                <circle cx="0" cy="20" r="26" fill="#FFFBEB" stroke="#78350F" stroke-width="2"/>
                <text x="0" y="24" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="12" fill="#78350F" text-anchor="middle">പഴംപൊരി</text>
                <text x="0" y="34" font-family="sans-serif" font-weight="bold" font-size="5" fill="#92400E" text-anchor="middle">DR. ALEENA JACOB</text>

                <circle cx="-45" cy="20" r="13" fill="#FBBF24" stroke="#0F172A" stroke-width="2.5"/>
                <circle cx="45" cy="20" r="13" fill="#FBBF24" stroke="#0F172A" stroke-width="2.5"/>
              </g>

              <g class="celebration-stars" fill="#FACC15">
                <path d="M 120 280 L 124 290 L 134 294 L 124 298 L 120 308 L 116 298 L 106 294 L 116 290 Z"/>
                <path d="M 380 280 L 384 290 L 394 294 L 384 298 L 380 308 L 376 298 L 366 294 L 376 290 Z"/>
              </g>
            </g>
          `}
        </svg>
      </div>
    `;
  },

  // 5. Render Animated Boy Cancellation Return
  renderBoyReturningAnimation(rageLevel = 1) {
    return `
      <div class="boy-cancel-stage rage-level-${rageLevel}">
        <svg class="boy-cancel-svg" viewBox="0 0 520 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vaultDoor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155" />
              <stop offset="50%" stop-color="#1E293B" />
              <stop offset="100%" stop-color="#0F172A" />
            </linearGradient>
            <radialGradient id="alarmRedGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#EF4444" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <rect width="520" height="440" fill="url(#alarmRedGlow)" opacity="0.35"/>

          <g class="cryo-vault-group" transform="translate(340, 90)">
            <rect x="0" y="0" width="150" height="260" rx="12" fill="url(#vaultDoor)" stroke="#DC2626" stroke-width="4"/>
            <rect x="25" y="25" width="45" height="40" rx="4" fill="#0F172A" stroke="#94A3B8" stroke-width="2"/>
            <text x="47" y="48" font-size="9" font-family="monospace" fill="#EF4444" font-weight="bold" text-anchor="middle">LOCKED</text>
            <circle cx="75" cy="140" r="32" fill="#475569" stroke="#E2E8F0" stroke-width="5"/>
            <circle cx="75" cy="140" r="10" fill="#EF4444"/>
            <line x1="75" y1="108" x2="75" y2="172" stroke="#E2E8F0" stroke-width="4"/>
            <line x1="43" y1="140" x2="107" y2="140" stroke="#E2E8F0" stroke-width="4"/>
            <rect x="15" y="200" width="120" height="35" rx="4" fill="#7F1D1D"/>
            <text x="75" y="215" font-size="8" font-family="sans-serif" font-weight="900" fill="#FCA5A5" text-anchor="middle">DE-CRISP VAULT</text>
            <text x="75" y="228" font-size="7" font-family="sans-serif" fill="#FEF2F2" text-anchor="middle">REJECTED COVERS</text>
          </g>

          <path d="M 140 250 L 260 250 L 280 390 L 120 390 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="4"/>
          <path d="M 160 250 L 240 250 L 265 390 L 135 390 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="3"/>
          <text x="200" y="300" font-size="11" font-weight="900" font-family="'Noto Sans Malayalam', sans-serif" fill="#7F1D1D" text-anchor="middle">നിരാശ</text>

          <g class="boy-head-cancel" transform="translate(-10, 0)">
            <ellipse cx="200" cy="160" rx="60" ry="64" fill="#FEF08A" stroke="#0F172A" stroke-width="4"/>
            <ellipse cx="178" cy="150" rx="13" ry="17" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <ellipse cx="222" cy="150" rx="13" ry="17" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <circle cx="178" cy="152" r="7" fill="#0F172A"/>
            <circle cx="222" cy="152" r="7" fill="#0F172A"/>

            <path d="M 162 136 L 190 124" stroke="#0F172A" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 238 136 L 210 124" stroke="#0F172A" stroke-width="4.5" stroke-linecap="round"/>

            <path d="M 175 165 C 160 200, 150 250, 140 310" stroke="#38BDF8" stroke-width="6" stroke-linecap="round" fill="none"/>
            <path d="M 225 165 C 240 200, 250 250, 260 310" stroke="#38BDF8" stroke-width="6" stroke-linecap="round" fill="none"/>
            <circle cx="140" cy="315" r="5" fill="#38BDF8"/>
            <circle cx="260" cy="315" r="5" fill="#38BDF8"/>

            <path d="M 180 185 Q 200 170 220 185 Q 200 215 180 185 Z" fill="#991B1B" stroke="#0F172A" stroke-width="3"/>
          </g>

          <g class="snatch-arms">
            <path d="M 245 260 Q 320 250 360 210" stroke="#FBBF24" stroke-width="24" stroke-linecap="round" fill="none"/>
            <g class="snatched-cover" transform="translate(365, 205) rotate(35) scale(0.75)">
              <rect x="-40" y="-30" width="80" height="95" rx="8" fill="#FDE68A" stroke="#78350F" stroke-width="3"/>
              <text x="0" y="25" font-family="'Noto Sans Malayalam', sans-serif" font-weight="900" font-size="10" fill="#78350F" text-anchor="middle">പഴംപൊരി</text>
            </g>
          </g>

          <g class="protest-placard" transform="translate(50, 80) rotate(-6)">
            <line x1="50" y1="80" x2="50" y2="150" stroke="#78350F" stroke-width="6"/>
            <rect x="0" y="0" width="140" height="80" rx="6" fill="#FEF08A" stroke="#0F172A" stroke-width="3"/>
            <text x="70" y="24" font-family="'Noto Sans Malayalam', sans-serif" font-size="13" font-weight="900" fill="#DC2626" text-anchor="middle">പഴംപൊരിയെ</text>
            <text x="70" y="42" font-family="'Noto Sans Malayalam', sans-serif" font-size="11" font-weight="900" fill="#0F172A" text-anchor="middle">വഞ്ചിക്കരുത്!</text>
            <text x="70" y="62" font-family="sans-serif" font-size="8" font-weight="bold" fill="#7F1D1D" text-anchor="middle">DR. ALEENA JACOB REGULATION</text>
          </g>
        </svg>
      </div>
    `;
  }
};

window.Graphics = Graphics;

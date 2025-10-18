export const serviceVisuals = {
  saas: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Cloud layers -->
      <g class="animate-float">
        <ellipse cx="200" cy="180" rx="80" ry="40" fill="hsl(var(--primary))" opacity="0.2"/>
        <ellipse cx="200" cy="200" rx="100" ry="50" fill="hsl(var(--primary))" opacity="0.3"/>
        <ellipse cx="200" cy="220" rx="120" ry="60" fill="hsl(var(--primary))" opacity="0.4"/>
      </g>
      
      <!-- Cloud icon -->
      <path d="M 160 160 Q 160 140 180 140 Q 185 125 200 125 Q 215 125 220 140 Q 240 140 240 160 Q 250 160 250 175 Q 250 190 240 190 L 160 190 Q 150 190 150 175 Q 150 160 160 160 Z" 
            fill="hsl(var(--chart-2))" opacity="0.7"/>
      
      <!-- Server racks in cloud -->
      <g transform="translate(175, 155)">
        <rect x="0" y="0" width="15" height="25" rx="2" fill="hsl(var(--primary))" opacity="0.9"/>
        <rect x="2" y="3" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="8" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="13" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="18" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
      </g>
      <g transform="translate(210, 155)">
        <rect x="0" y="0" width="15" height="25" rx="2" fill="hsl(var(--primary))" opacity="0.9"/>
        <rect x="2" y="3" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="8" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="13" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
        <rect x="2" y="18" width="11" height="3" rx="1" fill="white" opacity="0.3"/>
      </g>
      
      <!-- Connecting dots -->
      <circle cx="150" cy="250" r="8" fill="hsl(var(--chart-2))" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="270" r="8" fill="hsl(var(--primary))" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="250" cy="250" r="8" fill="hsl(var(--chart-2))" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Connection lines -->
      <line x1="150" y1="250" x2="200" y2="220" stroke="hsl(var(--primary))" stroke-width="2" opacity="0.3" stroke-dasharray="4,4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="250" y1="250" x2="200" y2="220" stroke="hsl(var(--primary))" stroke-width="2" opacity="0.3" stroke-dasharray="4,4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="200" y1="270" x2="200" y2="220" stroke="hsl(var(--chart-2))" stroke-width="2" opacity="0.3" stroke-dasharray="4,4">
        <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
      </line>
    </svg>
  `,
  
  asp: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Mobile devices -->
      <g transform="translate(120, 100)">
        <rect x="0" y="0" width="60" height="100" rx="8" fill="hsl(var(--primary))" opacity="0.2" stroke="hsl(var(--primary))" stroke-width="3"/>
        <rect x="5" y="10" width="50" height="70" rx="2" fill="hsl(var(--chart-2))" opacity="0.3"/>
        <circle cx="30" cy="90" r="5" fill="hsl(var(--primary))" opacity="0.5"/>
      </g>
      
      <g transform="translate(220, 100)">
        <rect x="0" y="0" width="60" height="100" rx="8" fill="hsl(var(--chart-2))" opacity="0.2" stroke="hsl(var(--chart-2))" stroke-width="3"/>
        <rect x="5" y="10" width="50" height="70" rx="2" fill="hsl(var(--primary))" opacity="0.3"/>
        <circle cx="30" cy="90" r="5" fill="hsl(var(--chart-2))" opacity="0.5"/>
      </g>
      
      <!-- Data flow circles -->
      <g>
        <circle cx="150" cy="240" r="6" fill="hsl(var(--primary))">
          <animate attributeName="cy" values="240;280;240" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="250" cy="240" r="6" fill="hsl(var(--chart-2))">
          <animate attributeName="cy" values="240;280;240" dur="3s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0;1" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Central server -->
      <rect x="175" y="280" width="50" height="60" rx="4" fill="hsl(var(--primary))" opacity="0.8"/>
      <rect x="180" y="290" width="40" height="8" rx="2" fill="white" opacity="0.3"/>
      <rect x="180" y="305" width="40" height="8" rx="2" fill="white" opacity="0.3"/>
      <rect x="180" y="320" width="40" height="8" rx="2" fill="white" opacity="0.3"/>
      
      <!-- Signal waves -->
      <circle cx="200" cy="250" r="30" fill="none" stroke="hsl(var(--chart-2))" stroke-width="2" opacity="0">
        <animate attributeName="r" values="30;60;30" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="250" r="30" fill="none" stroke="hsl(var(--primary))" stroke-width="2" opacity="0">
        <animate attributeName="r" values="30;60;30" dur="2s" begin="1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  virtualization: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Physical server -->
      <g transform="translate(80, 100)">
        <rect x="0" y="0" width="80" height="120" rx="4" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" stroke-width="2"/>
        <text x="40" y="20" text-anchor="middle" fill="hsl(var(--primary))" font-size="12" font-weight="bold">Physical</text>
        <rect x="10" y="30" width="60" height="15" rx="2" fill="hsl(var(--primary))" opacity="0.6"/>
        <rect x="10" y="50" width="60" height="15" rx="2" fill="hsl(var(--primary))" opacity="0.6"/>
        <rect x="10" y="70" width="60" height="15" rx="2" fill="hsl(var(--primary))" opacity="0.6"/>
      </g>
      
      <!-- Arrow -->
      <path d="M 170 160 L 210 160" stroke="hsl(var(--chart-2))" stroke-width="3" marker-end="url(#arrowhead)"/>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--chart-2))"/>
        </marker>
      </defs>
      
      <!-- Virtual machines -->
      <g transform="translate(220, 80)">
        <!-- VM 1 -->
        <rect x="0" y="0" width="50" height="50" rx="3" fill="hsl(var(--chart-2))" opacity="0.4" stroke="hsl(var(--chart-2))" stroke-width="2">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite"/>
        </rect>
        <text x="25" y="28" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VM1</text>
        
        <!-- VM 2 -->
        <rect x="60" y="0" width="50" height="50" rx="3" fill="hsl(var(--chart-2))" opacity="0.4" stroke="hsl(var(--chart-2))" stroke-width="2">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </rect>
        <text x="85" y="28" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VM2</text>
        
        <!-- VM 3 -->
        <rect x="0" y="60" width="50" height="50" rx="3" fill="hsl(var(--chart-2))" opacity="0.4" stroke="hsl(var(--chart-2))" stroke-width="2">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1s" repeatCount="indefinite"/>
        </rect>
        <text x="25" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VM3</text>
        
        <!-- VM 4 -->
        <rect x="60" y="60" width="50" height="50" rx="3" fill="hsl(var(--chart-2))" opacity="0.4" stroke="hsl(var(--chart-2))" stroke-width="2">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </rect>
        <text x="85" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="bold">VM4</text>
      </g>
      
      <!-- Resource allocation bars -->
      <g transform="translate(100, 260)">
        <text x="0" y="0" fill="hsl(var(--primary))" font-size="12">Resources</text>
        <rect x="0" y="10" width="200" height="20" rx="10" fill="hsl(var(--primary))" opacity="0.2"/>
        <rect x="0" y="10" width="160" height="20" rx="10" fill="hsl(var(--chart-2))" opacity="0.6">
          <animate attributeName="width" values="160;180;160" dur="3s" repeatCount="indefinite"/>
        </rect>
        <text x="10" y="25" fill="white" font-size="10" font-weight="bold">80% Utilized</text>
      </g>
    </svg>
  `,
  
  cloud: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Large central cloud -->
      <g transform="translate(200, 150)">
        <ellipse cx="0" cy="0" rx="100" ry="60" fill="hsl(var(--primary))" opacity="0.2"/>
        <circle cx="-40" cy="0" r="40" fill="hsl(var(--primary))" opacity="0.3"/>
        <circle cx="40" cy="0" r="40" fill="hsl(var(--primary))" opacity="0.3"/>
        <circle cx="0" cy="-20" r="50" fill="hsl(var(--primary))" opacity="0.4"/>
      </g>
      
      <!-- Cloud icon detail -->
      <path d="M 140 140 Q 140 120 160 120 Q 165 105 180 105 Q 195 105 200 120 Q 215 115 225 120 Q 235 115 245 120 Q 260 120 260 140 Q 270 140 270 155 Q 270 170 260 170 L 140 170 Q 130 170 130 155 Q 130 140 140 140 Z" 
            fill="hsl(var(--chart-2))" opacity="0.6"/>
      
      <!-- Data nodes -->
      <circle cx="120" cy="240" r="12" fill="hsl(var(--chart-2))" opacity="0.7">
        <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="260" r="12" fill="hsl(var(--primary))" opacity="0.7">
        <animate attributeName="r" values="12;15;12" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="280" cy="240" r="12" fill="hsl(var(--chart-2))" opacity="0.7">
        <animate attributeName="r" values="12;15;12" dur="2s" begin="1s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Upload/Download arrows -->
      <g opacity="0.5">
        <path d="M 200 200 L 200 240" stroke="hsl(var(--primary))" stroke-width="3" marker-end="url(#arrowdown)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M 220 240 L 220 200" stroke="hsl(var(--chart-2))" stroke-width="3" marker-end="url(#arrowup)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
        </path>
      </g>
      
      <defs>
        <marker id="arrowdown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0 0, 10 0, 5 10" fill="hsl(var(--primary))"/>
        </marker>
        <marker id="arrowup" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <polygon points="0 10, 10 10, 5 0" fill="hsl(var(--chart-2))"/>
        </marker>
      </defs>
      
      <!-- Orbital elements -->
      <circle cx="200" cy="150" r="90" fill="none" stroke="hsl(var(--primary))" stroke-width="1" opacity="0.2" stroke-dasharray="5,5">
        <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="20s" repeatCount="indefinite"/>
      </circle>
      <circle cx="290" cy="150" r="8" fill="hsl(var(--chart-2))">
        <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="20s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  erp: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Central hub -->
      <circle cx="200" cy="200" r="50" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" stroke-width="3"/>
      <text x="200" y="205" text-anchor="middle" fill="hsl(var(--primary))" font-size="16" font-weight="bold">ERP</text>
      
      <!-- Connected modules in circle -->
      <g>
        <!-- Finance -->
        <circle cx="200" cy="100" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite"/>
        </circle>
        <text x="200" y="105" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Finance</text>
        <line x1="200" y1="130" x2="200" y2="150" stroke="hsl(var(--primary))" stroke-width="2"/>
        
        <!-- HR -->
        <circle cx="300" cy="150" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <text x="300" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="bold">HR</text>
        <line x1="280" y1="170" x2="245" y2="185" stroke="hsl(var(--primary))" stroke-width="2"/>
        
        <!-- Supply Chain -->
        <circle cx="300" cy="250" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <text x="300" y="250" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Supply</text>
        <text x="300" y="260" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Chain</text>
        <line x1="280" y1="230" x2="245" y2="215" stroke="hsl(var(--primary))" stroke-width="2"/>
        
        <!-- Sales -->
        <circle cx="200" cy="300" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <text x="200" y="305" text-anchor="middle" fill="white" font-size="10" font-weight="bold">Sales</text>
        <line x1="200" y1="270" x2="200" y2="250" stroke="hsl(var(--primary))" stroke-width="2"/>
        
        <!-- Inventory -->
        <circle cx="100" cy="250" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="2s" repeatCount="indefinite"/>
        </circle>
        <text x="100" y="250" text-anchor="middle" fill="white" font-size="9" font-weight="bold">Inventory</text>
        <line x1="120" y1="230" x2="155" y2="215" stroke="hsl(var(--primary))" stroke-width="2"/>
        
        <!-- CRM -->
        <circle cx="100" cy="150" r="30" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="2.5s" repeatCount="indefinite"/>
        </circle>
        <text x="100" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="bold">CRM</text>
        <line x1="120" y1="170" x2="155" y2="185" stroke="hsl(var(--primary))" stroke-width="2"/>
      </g>
      
      <!-- Rotating ring -->
      <circle cx="200" cy="200" r="120" fill="none" stroke="hsl(var(--primary))" stroke-width="2" opacity="0.2" stroke-dasharray="10,10">
        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  crm: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Customer at center -->
      <circle cx="200" cy="200" r="60" fill="hsl(var(--primary))" opacity="0.3"/>
      <circle cx="200" cy="180" r="25" fill="hsl(var(--chart-2))" opacity="0.6"/>
      <path d="M 160 230 Q 200 210 240 230 L 240 250 Q 240 260 200 260 Q 160 260 160 250 Z" fill="hsl(var(--chart-2))" opacity="0.6"/>
      
      <!-- Interaction touchpoints -->
      <g>
        <!-- Email -->
        <circle cx="320" cy="140" r="25" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <rect x="310" y="135" width="20" height="15" rx="2" fill="white" opacity="0.8"/>
        <path d="M 310 135 L 320 143 L 330 135" stroke="hsl(var(--primary))" stroke-width="2" fill="none"/>
        <line x1="295" y1="150" x2="260" y2="180" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4"/>
        
        <!-- Phone -->
        <circle cx="320" cy="260" r="25" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <rect x="312" y="250" width="16" height="22" rx="3" fill="white" opacity="0.8"/>
        <rect x="318" y="267" width="4" height="2" rx="1" fill="hsl(var(--primary))"/>
        <line x1="295" y1="250" x2="260" y2="220" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4"/>
        
        <!-- Web -->
        <circle cx="80" cy="140" r="25" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80" cy="140" r="12" fill="none" stroke="white" stroke-width="2" opacity="0.8"/>
        <circle cx="80" cy="140" r="6" fill="none" stroke="white" stroke-width="2" opacity="0.8"/>
        <line x1="68" y1="140" x2="92" y2="140" stroke="white" stroke-width="2" opacity="0.8"/>
        <line x1="105" y1="150" x2="140" y2="180" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4"/>
        
        <!-- Social -->
        <circle cx="80" cy="260" r="25" fill="hsl(var(--chart-2))" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
        <path d="M 75 250 Q 80 245 85 250 L 85 265 Q 80 270 75 265 Z" fill="white" opacity="0.8"/>
        <circle cx="82" cy="253" r="2" fill="hsl(var(--primary))"/>
        <line x1="105" y1="250" x2="140" y2="220" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4"/>
      </g>
      
      <!-- Data flow particles -->
      <circle cx="280" cy="165" r="4" fill="hsl(var(--primary))">
        <animateMotion path="M 0,0 L -80,-65" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="280" cy="235" r="4" fill="hsl(var(--chart-2))">
        <animateMotion path="M 0,0 L -80,65" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  iaas: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Infrastructure layers -->
      <g transform="translate(100, 100)">
        <!-- Bottom layer - Storage -->
        <rect x="0" y="140" width="200" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.4" stroke="hsl(var(--primary))" stroke-width="2"/>
        <text x="100" y="165" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Storage</text>
        
        <!-- Middle layer - Servers -->
        <rect x="20" y="80" width="160" height="40" rx="4" fill="hsl(var(--chart-2))" opacity="0.5" stroke="hsl(var(--chart-2))" stroke-width="2"/>
        <text x="100" y="105" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Servers</text>
        
        <!-- Top layer - Network -->
        <rect x="40" y="20" width="120" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.6" stroke="hsl(var(--primary))" stroke-width="2"/>
        <text x="100" y="45" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Network</text>
      </g>
      
      <!-- Resource meters -->
      <g transform="translate(80, 260)">
        <text x="0" y="0" fill="hsl(var(--primary))" font-size="12" font-weight="bold">CPU</text>
        <rect x="0" y="5" width="100" height="12" rx="6" fill="hsl(var(--primary))" opacity="0.2"/>
        <rect x="0" y="5" width="75" height="12" rx="6" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="width" values="75;85;75" dur="2s" repeatCount="indefinite"/>
        </rect>
        
        <text x="120" y="0" fill="hsl(var(--primary))" font-size="12" font-weight="bold">RAM</text>
        <rect x="120" y="5" width="100" height="12" rx="6" fill="hsl(var(--primary))" opacity="0.2"/>
        <rect x="120" y="5" width="60" height="12" rx="6" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="width" values="60;70;60" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        
        <text x="0" y="35" fill="hsl(var(--primary))" font-size="12" font-weight="bold">DISK</text>
        <rect x="0" y="40" width="100" height="12" rx="6" fill="hsl(var(--primary))" opacity="0.2"/>
        <rect x="0" y="40" width="45" height="12" rx="6" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="width" values="45;55;45" dur="3s" repeatCount="indefinite"/>
        </rect>
        
        <text x="120" y="35" fill="hsl(var(--primary))" font-size="12" font-weight="bold">NET</text>
        <rect x="120" y="40" width="100" height="12" rx="6" fill="hsl(var(--primary))" opacity="0.2"/>
        <rect x="120" y="40" width="80" height="12" rx="6" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="width" values="80;90;80" dur="1.8s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      <!-- Activity indicators -->
      <circle cx="50" cy="50" r="6" fill="hsl(var(--chart-2))">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
      </circle>
      <circle cx="350" cy="50" r="6" fill="hsl(var(--primary))">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  iot: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Central gateway/hub -->
      <circle cx="200" cy="200" r="40" fill="hsl(var(--primary))" opacity="0.4" stroke="hsl(var(--primary))" stroke-width="3"/>
      <circle cx="200" cy="200" r="25" fill="hsl(var(--chart-2))" opacity="0.6"/>
      
      <!-- IoT devices around the hub -->
      <!-- Smart home -->
      <g transform="translate(280, 120)">
        <rect x="0" y="0" width="40" height="40" rx="4" fill="hsl(var(--chart-2))" opacity="0.5"/>
        <path d="M 5 20 L 20 5 L 35 20" stroke="white" stroke-width="2" fill="none"/>
        <rect x="15" y="20" width="10" height="15" fill="white" opacity="0.8"/>
        <circle cx="280" cy="140" r="50" fill="none" stroke="hsl(var(--primary))" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="50;70;50" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>
      <line x1="240" y1="200" x2="280" y2="140" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      
      <!-- Wearable -->
      <g transform="translate(310, 240)">
        <circle cx="20" cy="20" r="18" fill="hsl(var(--chart-2))" opacity="0.5"/>
        <circle cx="20" cy="20" r="12" fill="white" opacity="0.8"/>
        <circle cx="330" cy="260" r="50" fill="none" stroke="hsl(var(--chart-2))" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="50;70;50" dur="2s" begin="0.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      <line x1="230" y1="220" x2="310" y2="240" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      
      <!-- Sensor -->
      <g transform="translate(100, 280)">
        <circle cx="20" cy="20" r="20" fill="hsl(var(--chart-2))" opacity="0.5"/>
        <circle cx="20" cy="20" r="8" fill="hsl(var(--primary))" opacity="0.8">
          <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="120" cy="300" r="50" fill="none" stroke="hsl(var(--chart-2))" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="50;70;50" dur="2s" begin="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      <line x1="180" y1="220" x2="120" y2="280" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      
      <!-- Vehicle -->
      <g transform="translate(60, 150)">
        <rect x="0" y="10" width="50" height="20" rx="4" fill="hsl(var(--chart-2))" opacity="0.5"/>
        <rect x="10" y="0" width="30" height="15" rx="2" fill="hsl(var(--chart-2))" opacity="0.5"/>
        <circle cx="12" cy="30" r="6" fill="white" opacity="0.8"/>
        <circle cx="38" cy="30" r="6" fill="white" opacity="0.8"/>
        <circle cx="85" cy="175" r="50" fill="none" stroke="hsl(var(--primary))" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="50;70;50" dur="2s" begin="1.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" begin="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      <line x1="170" y1="195" x2="110" y2="175" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      
      <!-- Data transmission particles -->
      <circle cx="240" cy="200" r="3" fill="hsl(var(--chart-2))">
        <animateMotion path="M 0,0 L 80,-60" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="230" cy="220" r="3" fill="hsl(var(--primary))">
        <animateMotion path="M 0,0 L 100,40" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `,
  
  bigdata: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Data streams -->
      <g>
        <path d="M 50 100 Q 100 80 150 100" stroke="hsl(var(--chart-2))" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M 50 150 Q 100 130 150 150" stroke="hsl(var(--primary))" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M 50 200 Q 100 180 150 200" stroke="hsl(var(--chart-2))" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M 50 250 Q 100 230 150 250" stroke="hsl(var(--primary))" stroke-width="3" fill="none" opacity="0.5"/>
        
        <!-- Flowing data points -->
        <circle cx="50" cy="100" r="5" fill="hsl(var(--chart-2))">
          <animateMotion path="M 0,0 Q 50,-20 100,0" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50" cy="150" r="5" fill="hsl(var(--primary))">
          <animateMotion path="M 0,0 Q 50,-20 100,0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50" cy="200" r="5" fill="hsl(var(--chart-2))">
          <animateMotion path="M 0,0 Q 50,-20 100,0" dur="2s" begin="1s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Processing center -->
      <g transform="translate(200, 150)">
        <rect x="-40" y="-40" width="80" height="80" rx="8" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" stroke-width="3"/>
        <circle cx="0" cy="0" r="25" fill="hsl(var(--chart-2))" opacity="0.6">
          <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="5" text-anchor="middle" fill="white" font-size="12" font-weight="bold">PROCESS</text>
      </g>
      
      <!-- Bar chart output -->
      <g transform="translate(280, 80)">
        <rect x="0" y="120" width="20" height="0" rx="2" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="height" values="0;60;60" dur="1s" fill="freeze"/>
          <animate attributeName="y" values="120;60;60" dur="1s" fill="freeze"/>
        </rect>
        <rect x="30" y="120" width="20" height="0" rx="2" fill="hsl(var(--primary))" opacity="0.7">
          <animate attributeName="height" values="0;100;100" dur="1s" begin="0.2s" fill="freeze"/>
          <animate attributeName="y" values="120;20;20" dur="1s" begin="0.2s" fill="freeze"/>
        </rect>
        <rect x="60" y="120" width="20" height="0" rx="2" fill="hsl(var(--chart-2))" opacity="0.7">
          <animate attributeName="height" values="0;80;80" dur="1s" begin="0.4s" fill="freeze"/>
          <animate attributeName="y" values="120;40;40" dur="1s" begin="0.4s" fill="freeze"/>
        </rect>
        <line x1="0" y1="130" x2="80" y2="130" stroke="hsl(var(--primary))" stroke-width="2" opacity="0.3"/>
      </g>
      
      <!-- Connection lines -->
      <line x1="150" y1="175" x2="160" y2="175" stroke="hsl(var(--primary))" stroke-width="2" stroke-dasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="240" y1="150" x2="280" y2="120" stroke="hsl(var(--chart-2))" stroke-width="2" stroke-dasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
      </line>
      
      <!-- Analytics icons -->
      <g transform="translate(100, 280)">
        <circle cx="30" cy="0" r="20" fill="hsl(var(--primary))" opacity="0.3"/>
        <text x="30" y="5" text-anchor="middle" fill="hsl(var(--primary))" font-size="10" font-weight="bold">ML</text>
        
        <circle cx="80" cy="0" r="20" fill="hsl(var(--chart-2))" opacity="0.3"/>
        <text x="80" y="5" text-anchor="middle" fill="hsl(var(--chart-2))" font-size="10" font-weight="bold">AI</text>
        
        <circle cx="130" cy="0" r="20" fill="hsl(var(--primary))" opacity="0.3"/>
        <path d="M 125 -5 L 130 5 L 135 -5" stroke="hsl(var(--primary))" stroke-width="2" fill="none"/>
        <line x1="125" y1="0" x2="135" y2="0" stroke="hsl(var(--primary))" stroke-width="2"/>
      </g>
    </svg>
  `
};

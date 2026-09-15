export interface NavPromoItem {
  eyebrow: string;
  title: string;
  image: string;
  href: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  sectionId?: string;
  desc?: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
}

export interface NavColumnItem {
  title?: string;
  links: NavLinkItem[];
}

export interface PrimaryNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
  links: NavLinkItem[];
  columns: NavColumnItem[];
  promos: NavPromoItem[];
}

export const primaryNav: PrimaryNavItem[] = [
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    sectionId: '#overview',
    page: 'about',
    links: [
      { label: 'Overview', href: '/about#overview', sectionId: '#overview', page: 'about', desc: 'Mission, institutional heritage, ecosystem & four strategic fronts' },
      { label: 'IP3 People', href: '/about#people', sectionId: '#people', page: 'about', desc: 'Global faculty of economists, researchers, fellows & executive leadership' },
      { label: 'Approach', href: '/about#approach', sectionId: '#approach', page: 'about', desc: '6-stage delivery lifecycle from complexity & evidence to sustainable handover' },
    ],
    columns: [
      {
        title: 'About Sub-Pages',
        links: [
          { label: '01. Overview', href: '/about#overview', sectionId: '#overview', page: 'about' },
          { label: '02. IP3 People', href: '/about#people', sectionId: '#people', page: 'about' },
          { label: '03. Approach', href: '/about#approach', sectionId: '#approach', page: 'about' },
        ],
      },
      {
        title: 'Institutional Governance',
        links: [
          { label: 'Mission & Operating Model', href: '/about#overview', sectionId: '#overview', page: 'about' },
          { label: 'Faculty & Global Fellows', href: '/about#people', sectionId: '#people', page: 'about' },
          { label: 'Delivery Lifecycle', href: '/about#approach', sectionId: '#approach', page: 'about' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'IP3 PEOPLE',
        title: 'Meet our global faculty of economists, researchers, and policy practitioners',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        href: '/about#people',
      },
      {
        eyebrow: 'OUR APPROACH',
        title: 'The 6-stage lifecycle from systemic complexity to sustainable sovereign delivery',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/about#approach',
      },
    ],
  },
  {
    id: 'focus-areas',
    label: 'Focus Areas',
    href: '/focus',
    sectionId: '#focus-areas',
    page: 'focus',
    links: [
      { label: 'Education & Capacity Development', href: '/focus#education', sectionId: '#education', page: 'focus', desc: 'Transformative learning, dynamic pedagogy & curriculum reform' },
      { label: 'Public Policy Innovation', href: '/focus#innovation', sectionId: '#innovation', page: 'focus', desc: 'Policy sandboxes, evidence synthesis & action research frameworks' },
      { label: 'Data & Digital Governance', href: '/focus#data', sectionId: '#data', page: 'focus', desc: 'National data architecture, municipal telemetry & AI governance' },
      { label: 'Climate Action & Sustainability', href: '/focus#climate', sectionId: '#climate', page: 'focus', desc: 'Decarbonization audits, circular economy & industrial ESG roadmaps' },
    ],
    columns: [
      {
        title: 'Focus Area Sub-Pages',
        links: [
          { label: '01. Education & Capacity', href: '/focus#education', sectionId: '#education', page: 'focus' },
          { label: '02. Policy Innovation', href: '/focus#innovation', sectionId: '#innovation', page: 'focus' },
          { label: '03. Data & Governance', href: '/focus#data', sectionId: '#data', page: 'focus' },
          { label: '04. Climate Action & ESG', href: '/focus#climate', sectionId: '#climate', page: 'focus' },
          { label: '00. All Strategic Pillars', href: '/focus#overview', sectionId: '#overview', page: 'focus' },
        ],
      },
      {
        title: 'Institutional Pillars',
        links: [
          { label: 'Transformative Learning', href: '/focus#education', sectionId: '#education', page: 'focus' },
          { label: 'Policy Sandboxes & Pilots', href: '/focus#innovation', sectionId: '#innovation', page: 'focus' },
          { label: 'Sovereign Data Infrastructure', href: '/focus#data', sectionId: '#data', page: 'focus' },
          { label: 'Decarbonization Pathways', href: '/focus#climate', sectionId: '#climate', page: 'focus' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'CORE FOCUS • EDUCATION',
        title: 'Educational Innovation & Transformative Pedagogy in Emerging Markets',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        href: '/focus#education',
      },
      {
        eyebrow: 'CORE FOCUS • INNOVATION',
        title: 'Public Policy Innovation & Action Research Sandboxes',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
        href: '/focus#innovation',
      },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    href: '/services',
    sectionId: '#services',
    page: 'services',
    links: [
      { label: 'Economic Assessment & Feasibility', href: '/services#economic', sectionId: '#economic', page: 'services', desc: 'Cost-benefit analysis, tariff modeling & financial viability' },
      { label: 'Climate Action & Sustainability', href: '/services#climate', sectionId: '#climate', page: 'services', desc: 'Regenerative economics, carbon audits & ESG disclosure' },
      { label: 'Program & Survey Design (CAPI)', href: '/services#design', sectionId: '#design', page: 'services', desc: 'Sampling frameworks, multi-tier QA & nationwide data engines' },
      { label: 'Monitoring & Evaluation (MERLA)', href: '/services#merla', sectionId: '#merla', page: 'services', desc: 'Impact evaluation, results frameworks & digital monitoring' },
      { label: 'Macro & Sector Policy Advisory', href: '/services#macro-policy', sectionId: '#macro-policy', page: 'services', desc: 'Fiscal frameworks, industrial policy & structural reforms' },
    ],
    columns: [
      {
        title: 'Analytical & Survey Practices',
        links: [
          { label: '01. Economic Assessment', href: '/services#economic', sectionId: '#economic', page: 'services' },
          { label: '02. Climate Action & ESG', href: '/services#climate', sectionId: '#climate', page: 'services' },
          { label: '03. Program & Survey Design', href: '/services#design', sectionId: '#design', page: 'services' },
          { label: '04. MERLA Solutions', href: '/services#merla', sectionId: '#merla', page: 'services' },
        ],
      },
      {
        title: 'Advisory & Systems',
        links: [
          { label: 'Macro & Sector Advisory', href: '/services#macro-policy', sectionId: '#macro-policy', page: 'services' },
          { label: 'Digital Transformation Systems', href: '/services#digital-systems', sectionId: '#digital-systems', page: 'services' },
          { label: 'Institutional Capacity Building', href: '/services#capacity-building', sectionId: '#capacity-building', page: 'services' },
          { label: 'All Practice Deliverables', href: '/services', sectionId: '#services', page: 'services' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'PRACTICE 01 • ECONOMIC',
        title: 'Rigorous Economic & Environmental Feasibility Assessments',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        href: '/services#economic',
      },
      {
        eyebrow: 'PRACTICE 04 • MERLA',
        title: 'Impact Evaluation & Adaptive Real-Time Monitoring Systems',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/services#merla',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Navbar chrome (brand, CTA, top bar) — CMS controlled                */
/* ------------------------------------------------------------------ */

export interface NavbarBrandConfig {
  /** Short mark shown inside the coloured logo tile, e.g. "IP3". */
  badgeText: string;
  /** Wordmark next to the logo tile. */
  name: string;
  /** Small line under the wordmark. */
  tagline: string;
  /** Green "live" dot on the logo tile. */
  showStatusDot: boolean;
  /** Optional image URL; replaces the badge tile when set. */
  logoImage?: string;
}

export interface NavbarCtaConfig {
  enabled: boolean;
  label: string;
  /** Section id to scroll to, e.g. "#contact-advisory". */
  targetId: string;
}

export interface NavbarTopBarConfig {
  enabled: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  /** Pulsing-dot label on the right, e.g. "Global Policy Advisory Desk". */
  statusLabel: string;
}

export interface NavbarConfig {
  brand: NavbarBrandConfig;
  cta: NavbarCtaConfig;
  topBar: NavbarTopBarConfig;
  searchEnabled: boolean;
  searchPlaceholder: string;
  /** Badge in the top-right of every mega menu panel. */
  megaMenuBadge: string;
  skipLinkLabel: string;
}

export const defaultNavbarConfig: NavbarConfig = {
  brand: {
    badgeText: 'IP3',
    name: 'IP3 AGRISCIENCE',
    tagline: 'Precision Research Farm',
    showStatusDot: true,
    logoImage: '',
  },
  cta: {
    enabled: true,
    label: 'Field Trials & Contact',
    targetId: '#contact-advisory',
  },
  topBar: {
    enabled: true,
    showEmail: true,
    showPhone: true,
    showLocation: true,
    statusLabel: 'Research Farm Operations Active',
  },
  searchEnabled: true,
  searchPlaceholder: 'Search field trials, soil science & research data...',
  megaMenuBadge: 'IP3 AGRISCIENCE',
  skipLinkLabel: 'Skip to main content',
};


import React, { useState } from 'react';
import {
  TrendingUp,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  BarChart3,
  Globe2,
  FileCheck,
  Coins
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';

interface EconomicServiceProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const EconomicService: React.FC<EconomicServiceProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const sliderItems: CardFanItem[] = [
    {
      tag: 'Data-Driven Insights',
      title: 'Scenario Analysis',
      description: 'Evaluating future scenarios with robust economic modeling, Monte Carlo risk simulation, and sensitivity testing for complex sovereign investments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      actionText: 'Viability Metric',
    },
    {
      tag: 'Integrated Studies',
      title: 'Comprehensive Feasibility',
      description: 'Assessing integrated project feasibility combining macroeconomic forecasting, environmental impacts, and institutional capacity roadmaps.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      actionText: 'Viability Metric',
    },
    {
      tag: 'Economic Evaluation',
      title: 'Costs & Benefits',
      description: 'Detailed financial modeling, internal rate of return (IRR) calculations, and multi-criteria sustainability benchmarks for policymakers.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
      actionText: 'Viability Metric',
    },
  ];

  const projectCards = [
    {
      year: '2024',
      tag: 'ADB TA-6950-BAN',
      title: 'Shaping the Future of Education: Feasibility Study for Secondary and Madrasah Education (2024)',
      description: "IP3 Consulting conducted Bangladesh's first economic and financial feasibility study for secondary and madrasah education projects under ADB TA-6950-BAN. Our expertise in market analysis, cost-benefit assessment, risk modeling, and institutional capacity evaluation provided a comprehensive strategic roadmap for education sector investments, ensuring alignment with national development priorities and ADB guidelines to drive impactful, future-ready education.",
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    },
    {
      year: '2017',
      tag: 'Maritime Infrastructure',
      title: 'Strategic Economic and Financial Advisory for Payra Seaport Development (2017)',
      description: "IP3 Consulting provided technical expertise in economic and financial feasibility analysis for Payra Seaport, Bangladesh's third seaport, under a detailed techno-economic study and master planning initiative. Our work included cost-benefit assessments, a 15-year financial model, and investment viability analysis, ensuring data-driven decision-making to optimize the port's long-term economic sustainability and strategic growth.",
      image: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=800&q=80',
    },
    {
      year: '2019',
      tag: 'Urban Master Planning',
      title: 'Comprehensive Feasibility Study for Jolshiri Aqua Green City (2019)',
      description: "IP3 Consulting conducted an economic, social, financial, and market feasibility study for Jolshiri Aqua Green City, a major Army Officers Housing Scheme development project in Bangladesh. Our work included a 10-year projection, cost-benefit analyses, financial modeling, and market segmentation, providing investment strategies, pricing models, and funding opportunities to ensure the project's long-term viability and sustainable urban growth.",
      image: 'https://images.unsplash.com/photo-1518001073206-621699099754?w=800&q=80',
    },
    {
      year: '2017',
      tag: 'JICA • BEZA • BIFFL',
      title: 'Strategic Advisory for Equity Investment & Special Economic Zone Development (2017)',
      description: 'IP3 Consulting provided technical coordination and advisory support to Bangladesh Infrastructure Finance Fund Limited (BIFFL) and Bangladesh Economic Zones Authority (BEZA) for the formulation of Equity Investment Policy and Special Purpose Company (SPC) structures. We collaborated with JICA and Japan Development Institute (JDI) to design an investment framework, shareholder agreements, and project structuring to strengthen Special Economic Zone (SEZ) development and financing strategies.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    },
    {
      year: '2015',
      tag: 'Clean Energy Markets',
      title: 'Global LEAP Clean Energy Financing & Market Development (2015)',
      description: 'IP3 Consulting led the design and implementation of a results-based financing strategy for the Global Lighting & Energy Access Partnership (Global LEAP), accelerating the adoption of off-grid solar home systems. Our work included market matchmaking, cost-benefit analysis, and a four-year M&E framework, bridging viability gaps for clean energy companies and fostering self-sustaining commercial markets for affordable, high-quality energy solutions.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    },
    {
      year: '2016',
      tag: 'World Bank ESMAP',
      title: "Evaluation of World Bank's ESMAP & ASTAE Programs (2016)",
      description: "IP3 Consulting conducted a comprehensive financial, economic, and social impact evaluation of renewable energy projects under the World Bank's Energy Sector Management Assistance Program (ESMAP) and Asia Sustainable Alternative Energy Program (ASTAE) in Bangladesh and Nepal. Our assessment covered hydroelectric, biomass, wind, geothermal, and solar initiatives, analyzing cost-benefit performance, return on investment, poverty reduction, and economic growth impacts to shape future strategies in sustainable energy development and infrastructure.",
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <Coins className="w-3.5 h-3.5" />
            <span>Service Practice 01 • Economic &amp; Feasibility Assessment</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Economic, Financial and Environmental Assessment, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              Feasibility Studies
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Rigorous economic modeling, financial viability analysis, and environmental impact evaluation to de-risk sovereign infrastructure investments and maximize social returns.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#feasibility"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Explore Feasibility Dimensions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Economic, Financial & Environmental Feasibility') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Request Feasibility Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Feasibility Card Fan Slider */}
      <section id="feasibility" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Project Viability
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Assessing Project Feasibility, <span className="text-[#ff7e67]">Economic and Environmental Viability</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Interactive physical card deck fan — hover cards to pull them from the deck, or use arrow controls to paginate through our core assessment pillars.
          </p>
        </div>

        <CardFanSlider
          items={sliderItems}
          theme="dark"
          badgeDefault="Viability"
          actionDefault="Viability Metric"
          ariaLabel="Feasibility Assessment Card Fan"
        />

        <p className="text-center max-w-3xl mx-auto mt-12 text-sm sm:text-base text-slate-300 leading-relaxed">
          We specialize in developing and assessing the integrated feasibility of project concepts that combine economic, financial, and environmental assessments. With expertise in econometric modeling, financial engineering, and environmental impact evaluation, we provide decision-makers with the unassailable evidence needed to make high-stakes investment choices.
        </p>
      </section>

      {/* 3. Our Expertise (Tabbed Dashboard) */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Methodology &amp; Analytics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our <span className="text-[#ff7e67]">Expertise</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-[#081220] min-h-[460px]">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 bg-[#050a12]/80 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col gap-3">
            {[
              { id: 1, label: 'Economic and Financial Feasibility' },
              { id: 2, label: 'Environmental Impact Assessments (EIA)' },
              { id: 3, label: 'Integrated Feasibility Frameworks' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-xs sm:text-sm cursor-pointer ${
                    isActive
                      ? 'bg-[#ff7e67] text-[#050a12] shadow-md font-bold'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <ChevronRight className="w-4 h-4 hidden lg:block opacity-70" />
                </button>
              );
            })}
          </div>

          {/* Content Panes */}
          <div className="w-full lg:w-2/3 p-7 md:p-12 relative bg-[#081220] flex items-center">
            {activeTab === 1 && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                    alt="Financial Feasibility"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Economic and Financial Feasibility
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Advanced economic and financial modeling for evaluating project viability, cash flow risks, and potential returns.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Cost-benefit analysis (CBA) and multi-scenario forecasting for sovereign ministries and multilateral development banks.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Strategic financial planning, including capital expenditure prioritization, debt service sustainability, and funding architectures.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 2 && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
                    alt="Environmental Impact"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Environmental Impact Assessments (EIA)
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>In-depth analysis of environmental and social impacts to ensure compliance with World Bank, ADB, and IFC Performance Standards.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Integration of climate resilience, nature-positive pathways, and green taxonomy guidelines into project infrastructure planning.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Ecological footprint audits and biodiversity impact mitigation strategies for large-scale engineering works.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 3 && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                    alt="Integrated Frameworks"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Integrated Feasibility Frameworks
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Development of holistic frameworks that combine institutional capability, financial return, and environmental stewardship for mega-projects.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Balancing macroeconomic industrial growth with climate decarbonization and social protection safeguards.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Establishing automated KPI dashboards for long-term project performance telemetry after commissioning.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Why IP3 Section */}
      <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-b border-slate-800/80 space-y-6">
        <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
          Value Proposition
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Why <span className="text-[#ff7e67]">IP3 Consulting?</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
          Our deep expertise in economic and financial modeling, combined with a commitment to environmental sustainability, positions us as the ideal partner for assessing project feasibility and driving sustainable growth. With a strong track record of delivering actionable solutions for large-scale infrastructure and transformative policy projects, IP3 Consulting ensures that your initiatives are economically viable, environmentally sustainable, and socially impactful.
        </p>
      </section>

      {/* 5. Assessment and Feasibility Studies Portfolio Track Record */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Portfolio Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Assessment and <span className="text-[#ff7e67]">Feasibility Studies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Verified institutional project engagements delivered across Asia, multilateral lenders, and sovereign ministries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#081220] rounded-[2rem] overflow-hidden border border-slate-800 shadow-xl flex flex-col group hover:border-[#ff7e67]/40 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#050a12]">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#ff7e67] text-[#050a12] text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {card.year} • {card.tag}
                </span>
              </div>

              <div className="p-7 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-[#ff7e67] transition-colors mb-2 line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[#ff7e67] font-bold text-xs uppercase tracking-wider">
                    <span>Read Study Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Partner with Us / CTA */}
      <section className="bg-gradient-to-b from-[#081220] to-[#050a12] py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/30">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Partner with Us for <span className="text-[#ff7e67]">Sustainable Growth</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Rigorous economic and environmental assessments are the cornerstone of successful infrastructure and development projects. At IP3 Consulting, we combine technical excellence and strategic advisory to de-risk investments and maximize social return.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Economic & Feasibility Studies') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Consult Our Feasibility Experts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

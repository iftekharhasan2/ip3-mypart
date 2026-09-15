import React, { useState } from 'react';
import {
  ClipboardCheck,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Cpu,
  BarChart3,
  Globe2,
  Layers,
  FileSpreadsheet
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';

interface DesignServiceProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const DesignService: React.FC<DesignServiceProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [coreTab, setCoreTab] = useState<'program' | 'survey' | 'data'>('program');
  const [matrixTab, setMatrixTab] = useState<'prog-design' | 'surv-design' | 'data-col' | 'data-sci' | 'policy'>('prog-design');

  const surveyPortfolioItems: CardFanItem[] = [
    {
      tag: 'World Bank • 2019',
      title: 'Surveyed 1200 Manufacturing Industries (2019)',
      description: 'Expert of IP3 Consulting supported the World Bank Firm-Level Adoption of Technology (FAT) Survey 2019, assessing technology adoption across 1,200 firms in Bangladesh to identify productivity barriers and inform policy reforms.',
      image: 'https://images.unsplash.com/photo-1565611448834-802521c32729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      actionText: 'Case Impact',
    },
    {
      tag: 'South Asia • 2021',
      title: 'Surveyed 500 Suppliers for Digitalization & Informality Study',
      description: 'Contributed to the Bangladesh Digital and Informality Survey 2021, analyzing the impact of digital technologies and new business models on informality in South Asia, delivering evidence for policy recommendations.',
      image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      actionText: 'Case Impact',
    },
    {
      tag: 'RMG & Textile • 2023',
      title: '400 firms, 120 KIIs, and 7 FGDs for Green Transition (2023)',
      description: 'Led a comprehensive research and advocacy program to drive the green transition of Bangladesh textile and RMG industry, focusing on policy reform, sustainable financing, and renewable energy integration.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      actionText: 'Case Impact',
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Service Practice 03 • Institutional Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Program and Survey<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              Design, And Management
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Executing nationwide survey logistics, CAPI telemetry, sample stratification, and evidence-grounded program architecture.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#core-services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Program & Survey Design') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Commission Survey Fieldwork</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Management Services (Tabbed Dashboard) */}
      <section id="core-services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Service Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Core Management Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-[#081220] min-h-[460px]">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 bg-[#050a12]/80 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col gap-3">
            {[
              { id: 'program', label: 'Comprehensive Program Design' },
              { id: 'survey', label: 'Survey Design and Implementation' },
              { id: 'data', label: 'Data Analytics and Reporting' },
            ].map((tab) => {
              const isActive = coreTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCoreTab(tab.id as any)}
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

          {/* Content Pane */}
          <div className="w-full lg:w-2/3 p-7 md:p-12 relative bg-[#081220] flex items-center">
            {coreTab === 'program' && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                    alt="Program Design"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Comprehensive Program Design
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Crafting program frameworks aligned with policy, economic growth, and sovereign development goals.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Using Theory of Change (ToC) and logical frameworks to guide institutional design and accountability.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Integration of sustainability, scalability, and impact measurement metrics into early program planning.</span>
                  </li>
                </ul>
              </div>
            )}

            {coreTab === 'survey' && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                    alt="Survey Implementation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Survey Design and Implementation
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Developing tailor-made survey tools, bilingual questionnaires, and field testing protocols.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Employing digital platforms like ODK, SurveyCTO, and KoboToolbox with automated telemetry.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Managing large-scale baseline, midline, and end-line surveys with GPS and biometric verification.</span>
                  </li>
                </ul>
              </div>
            )}

            {coreTab === 'data' && (
              <div className="w-full space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Data Analytics"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">
                  Data Analytics and Reporting
                </h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Advanced econometric analysis, difference-in-differences, and visualization for executive decision-makers.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Synthesizing large-scale primary data into clear, actionable policy memos and ministerial briefs.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#ff7e67] font-bold text-base leading-none">●</span>
                    <span>Ensuring unassailable quality assurance through automated multi-tiered data validation scripts.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Our Distinctive Edge */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Distinctive Edge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              badge: 'Global Track Record',
              title: 'Expertise',
              desc: 'Over a decade of experience with international organizations, including the World Bank, ADB, and European Commission.',
              img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80',
            },
            {
              badge: 'Long-term Vision',
              title: 'Sustainability',
              desc: 'Commitment to crafting programs with long-term environmental, social, and economic impacts.',
              img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
            },
            {
              badge: 'Modern Tech',
              title: 'Innovation',
              desc: 'Implementation of technology-driven survey platforms for seamless, high-speed data collection and analysis.',
              img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
            },
            {
              badge: 'Adaptive Models',
              title: 'Customization',
              desc: 'Solutions tailored to specific industries and operational contexts. We build adaptive frameworks to ensure maximum relevance.',
              img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#081220] rounded-[2rem] p-6 shadow-xl border border-slate-800 hover:border-[#ff7e67]/40 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="aspect-[16/10] w-full rounded-2xl mb-5 overflow-hidden bg-[#050a12] border border-slate-800">
                  <img
                    src={card.img}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-[#ff7e67] font-bold text-xs uppercase tracking-widest bg-[#ff7e67]/10 px-3 py-1 rounded-full w-fit mb-3 inline-block border border-[#ff7e67]/20">
                  {card.badge}
                </span>
                <h3 className="text-white font-bold mb-2 text-xl tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Execution Matrix Section (5 Tabs) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-16 text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Execution Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Program Design, High-Quality Surveys, &amp; Data Excellence
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We specialize in crafting transformative program designs, managing high-quality surveys, and delivering actionable data insights.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden bg-[#081220] min-h-[500px]">
          {/* Matrix Tabs */}
          <div className="w-full lg:w-1/3 bg-[#050a12]/80 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col gap-2.5">
            {[
              { id: 'prog-design', label: 'Program Design & Scaling' },
              { id: 'surv-design', label: 'Survey Design & Management' },
              { id: 'data-col', label: 'Data Collection & Analysis' },
              { id: 'data-sci', label: 'Data Science & Engineering' },
              { id: 'policy', label: 'Policy-Relevant Insights' },
            ].map((tab) => {
              const isActive = matrixTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setMatrixTab(tab.id as any)}
                  className={`text-left font-semibold py-3.5 px-5 rounded-xl transition-all duration-200 flex items-center justify-between group text-xs sm:text-sm cursor-pointer ${
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

          {/* Matrix Panes */}
          <div className="w-full lg:w-2/3 p-7 md:p-12 relative bg-[#081220]">
            {matrixTab === 'prog-design' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Program Scaling" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">Program Design and Scaling Solutions</h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">01</span><span>Crafting scalable programs tailored to the unique needs of communities and industries.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">02</span><span>Developing evidence-based frameworks that ensure sustainability and long-term impact.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">03</span><span>Supporting pilot programs and enabling their transition to full-scale sovereign implementation.</span></li>
                </ul>
              </div>
            )}

            {matrixTab === 'surv-design' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" alt="Survey Design" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">Survey Design and Management</h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">01</span><span>Designing comprehensive probabilistic surveys for large-scale national data collection.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">02</span><span>Employing innovative spatial sampling techniques to ensure data accuracy and inclusivity.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">03</span><span>Managing survey logistics, from field staff biometric verification to multi-tiered quality assurance.</span></li>
                </ul>
              </div>
            )}

            {matrixTab === 'data-col' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Data Collection" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">High-Quality Data Collection &amp; Analysis</h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">01</span><span>Developing rigorous data collection protocols aligned with international standards.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">02</span><span>Using advanced econometric and statistical tools for actionable institutional insights.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">03</span><span>Ensuring transparency, cryptographic validation, and reproducibility in every dataset.</span></li>
                </ul>
              </div>
            )}

            {matrixTab === 'data-sci' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Data Science" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">Data Science and Digital Engineering</h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">01</span><span>Leveraging machine learning, NLP, and geospatial analysis tools for impactful solutions.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">02</span><span>Automating data extraction pipelines for operational efficiency and scaling.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">03</span><span>Building interactive executive dashboards for real-time ministerial decision-making.</span></li>
                </ul>
              </div>
            )}

            {matrixTab === 'policy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-56">
                  <img src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" alt="Policy Insights" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white border-b border-slate-800 pb-3">Policy-Relevant Insights and Adaptation</h3>
                <ul className="space-y-3.5 text-slate-300 text-xs sm:text-sm">
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">01</span><span>The evidence we generate is put to use through better programs and sovereign policies.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">02</span><span>Integrating program learnings into continuous policymaking for adaptive management.</span></li>
                  <li className="flex gap-3 items-start"><span className="text-[#ff7e67] font-bold text-xs bg-[#ff7e67]/15 px-2 py-0.5 rounded border border-[#ff7e67]/30">03</span><span>Delivering customized stakeholder strategies that address deep-rooted structural causes.</span></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Survey Portfolio Card Fan Slider */}
      <section id="survey-portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Case Studies &amp; Fieldwork
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Program Management and Surveys
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Interactive physical card deck fan — hover cards to pull them from the deck, or use controls to navigate through our major field research achievements.
          </p>
        </div>

        <CardFanSlider
          items={surveyPortfolioItems}
          theme="dark"
          badgeDefault="Fieldwork"
          actionDefault="Case Impact"
          ariaLabel="Survey Portfolio Card Fan"
        />
      </section>

      {/* 6. Partner with Us / CTA */}
      <section className="bg-gradient-to-b from-[#081220] to-[#050a12] py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/30">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Partner with Us for <span className="text-[#ff7e67]">Program &amp; Survey Excellence</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            High-quality primary data and disciplined program management are critical for impactful policy design. At IP3 Consulting, we combine nationwide field machinery with institutional analytical rigor to deliver unassailable evidence.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Program & Survey Design') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Consult Our Survey &amp; Program Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

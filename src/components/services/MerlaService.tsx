import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Cpu,
  Users2,
  LineChart
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';

interface MerlaServiceProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const MerlaService: React.FC<MerlaServiceProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'impact' | 'monitoring' | 'fit' | 'digital' | 'research'>('impact');

  const merlaProjects: CardFanItem[] = [
    {
      tag: 'M&S • GSK • 2019',
      title: 'Health Access & Linkage for Workers [HALOW+] (2019)',
      description:
        'IP3 Consulting played a key role in the HALOW+ Program, a multi-stakeholder initiative led by Marks & Spencer, GSK, PwC-UK, and Care International to improve health service markets and worker well-being in RMG sector.',
      image: 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?auto=format&fit=crop&w=600&q=80',
      actionText: 'Project Brief',
    },
    {
      tag: 'DSIP • 2020',
      title: 'Transforming Urban Sanitation with Data-Driven M&E (2020)',
      description:
        'IP3 Consulting designed the Monitoring & Evaluation (M&E) and Results Framework for the Dhaka Sewerage Improvement Project (DSIP), enhancing sewerage networks, wastewater treatment, and non-network sanitation services.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      actionText: 'Project Brief',
    },
    {
      tag: 'Global LEAP • 2018',
      title: 'Accelerating Clean Energy Access Through Results-Based Financing (2018)',
      description:
        'IP3 Consulting led the design and implementation of a results-based financing strategy for the Global Lighting & Energy Access Partnership (Global LEAP), fostering commercial markets for off-grid solar solutions.',
      image: 'https://images.unsplash.com/photo-1509391366360-1f9509e9247e?auto=format&fit=crop&w=600&q=80',
      actionText: 'Project Brief',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050a12] text-slate-100 selection:bg-[#ff7e67] selection:text-white">
      {/* Hero Section */}
      <header className="relative w-full min-h-[60vh] py-28 md:py-36 flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-[#050a12]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/90 via-[#050a12]/80 to-[#050a12]"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6 border border-[#ff7e67]/20">
            <Activity className="w-3.5 h-3.5" />
            MERLA Framework
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight font-sans drop-shadow-2xl leading-tight mb-8">
            MONITORING, EVALUATION, RESEARCH, LEARNING, AND ADAPTATION{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-rose-300 to-amber-200">
              (MERLA)
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tailored MERLA architectures that empower evidence-based decision-making, optimize resource allocation, and drive systemic, sustained development outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#merla-offerings"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff7e67] text-white text-base font-semibold rounded-full hover:bg-[#d95a43] transition-all duration-200 shadow-lg hover:scale-105"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            {onOpenCollaborate && (
              <button
                onClick={() => onOpenCollaborate('MERLA Practice')}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white text-base font-semibold rounded-full border border-slate-700 transition-all duration-200"
              >
                Inquire Practice Brief
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Core Offerings & Standardized Dashboard Section */}
      <section id="merla-offerings" className="py-24 px-6 max-w-7xl mx-auto">
        {/* Intro Context */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#ff7e67]/20">
            Service Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">Our Core Offerings</h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            At IP3 Consulting, we deliver tailored MERLA solutions to empower effective decision-making, enhance performance, and drive systemic change. Combining social science expertise, digital innovation, and adaptive learning, we help organizations achieve measurable impact across diverse sectors.
          </p>
        </div>

        {/* 5-Tab Dark Dashboard */}
        <div className="bg-[#081220] text-white rounded-[2rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-slate-800 min-h-[660px]">
          {/* Left Sidebar: Options */}
          <div className="w-full lg:w-1/3 bg-[#050a12]/80 p-6 lg:p-8 flex flex-col gap-3 border-b lg:border-b-0 lg:border-r border-slate-800 shrink-0 z-10">
            <button
              onClick={() => setActiveTab('impact')}
              className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-sm md:text-base ${
                activeTab === 'impact'
                  ? 'bg-[#ff7e67] text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-white/80" />
                <span>Impact Evaluation</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-opacity duration-300 hidden lg:block ${
                  activeTab === 'impact' ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>

            <button
              onClick={() => setActiveTab('monitoring')}
              className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-sm md:text-base ${
                activeTab === 'monitoring'
                  ? 'bg-[#ff7e67] text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <LineChart className="w-4 h-4 text-white/80" />
                <span>Monitoring & Results</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-opacity duration-300 hidden lg:block ${
                  activeTab === 'monitoring' ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>

            <button
              onClick={() => setActiveTab('fit')}
              className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-sm md:text-base ${
                activeTab === 'fit'
                  ? 'bg-[#ff7e67] text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                <span>Fit-for-Purpose Evaluation</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-opacity duration-300 hidden lg:block ${
                  activeTab === 'fit' ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>

            <button
              onClick={() => setActiveTab('digital')}
              className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-sm md:text-base ${
                activeTab === 'digital'
                  ? 'bg-[#ff7e67] text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-white/80" />
                <span>Digital Monitoring Solutions</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-opacity duration-300 hidden lg:block ${
                  activeTab === 'digital' ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>

            <button
              onClick={() => setActiveTab('research')}
              className={`text-left px-5 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-between group text-sm md:text-base ${
                activeTab === 'research'
                  ? 'bg-[#ff7e67] text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users2 className="w-4 h-4 text-white/80" />
                <span>Action Research & Learning</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-opacity duration-300 hidden lg:block ${
                  activeTab === 'research' ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>

          {/* Right Content Area */}
          <div className="w-full lg:w-2/3 p-8 lg:p-12 bg-[#081220]/95 text-slate-300 relative">
            {/* Impact Evaluation */}
            {activeTab === 'impact' && (
              <div className="space-y-8 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Impact Evaluation"
                  loading="lazy"
                  className="w-full h-60 lg:h-72 object-cover rounded-2xl shadow-lg border border-slate-700/80"
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white mb-2">Impact Evaluation</h3>
                  <h4 className="text-base lg:text-lg text-[#ff7e67] font-medium">
                    Globally Benchmarked Methodologies for Informed Decision-Making
                  </h4>
                </div>

                <div className="bg-[#050a12] p-6 rounded-2xl border-l-4 border-[#ff7e67] border-r border-t border-b border-slate-700/60 shadow-sm">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-white">Our Distinctive Edge:</strong> Data-driven impact assessment frameworks, globally benchmarked evaluation methodologies, and gender-inclusive causal attribution analysis.
                  </p>
                </div>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      Conducting rigorous outcome and impact evaluations leveraging quasi-experimental and counterfactual methodologies to measure effectiveness and causal attribution.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      Applying mixed method frameworks integrating qualitative insights with quantitative techniques for holistic impact assessments.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      Ensuring high quality, globally benchmarked data collection, adhering to World Bank, OECD-DAC criteria, Randomized methodologies, and DFID's best practices.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Monitoring & Results */}
            {activeTab === 'monitoring' && (
              <div className="space-y-8 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Monitoring"
                  loading="lazy"
                  className="w-full h-60 lg:h-72 object-cover rounded-2xl shadow-lg border border-slate-700/80"
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                    Monitoring & Results Measurement
                  </h3>
                  <h4 className="text-base lg:text-lg text-[#ff7e67] font-medium">
                    Harnessing Real-Time Insights for Adaptive Program Management
                  </h4>
                </div>

                <div className="bg-[#050a12] p-6 rounded-2xl border-l-4 border-[#ff7e67] border-r border-t border-b border-slate-700/60 shadow-sm">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-white">Our Distinctive Edge:</strong> Real-time monitoring systems, Geospatial data integration, and adaptive management dashboards.
                  </p>
                </div>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Designing & Deploying Secure, Scalable Data Systems</strong> — Developing context-specific, high-integrity data ecosystems that enhance decision-making, transparency, and accountability.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Real-Time Monitoring & Predictive Analytics</strong> — Leveraging interactive dashboards, AI-powered analytics, and geospatial tools for real-time program tracking and impact assessment.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Capacity Building & Institutional Strengthening</strong> — Supporting national governments and development organizations in building resilient, high-quality monitoring frameworks.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Fit-for-Purpose Evaluation */}
            {activeTab === 'fit' && (
              <div className="space-y-8 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Evaluation"
                  loading="lazy"
                  className="w-full h-60 lg:h-72 object-cover rounded-2xl shadow-lg border border-slate-700/80"
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                    Fit-for-Purpose Evaluation
                  </h3>
                  <h4 className="text-base lg:text-lg text-[#ff7e67] font-medium">
                    Tailored, Adaptive, and Data-Driven Evaluation for Complex Challenges
                  </h4>
                </div>

                <div className="bg-[#050a12] p-6 rounded-2xl border-l-4 border-[#ff7e67] border-r border-t border-b border-slate-700/60 shadow-sm">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-white">Our Distinctive Edge:</strong> Mixed method evaluation design, Context-specific MEL frameworks, Adaptive evaluation for specific programs.
                  </p>
                </div>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Bespoke Mixed Method Evaluation Design</strong> — Crafting customized evaluation frameworks that integrate advanced quantitative analytics with qualitative methodologies for context specific insights.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Sector-Specific Evaluation & Local Adaptation</strong> — Developing targeted evaluation approaches for key sectors, including climate resilience, global health, education, and sustainable development.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Operational & Adaptive Research</strong> — Conducting real-time operational research to identify bottlenecks, enhance resource efficiency, and optimize implementation strategies.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Digital Monitoring Solutions */}
            {activeTab === 'digital' && (
              <div className="space-y-8 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Solutions"
                  loading="lazy"
                  className="w-full h-60 lg:h-72 object-cover rounded-2xl shadow-lg border border-slate-700/80"
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                    Digital Monitoring Solutions
                  </h3>
                  <h4 className="text-base lg:text-lg text-[#ff7e67] font-medium">
                    Harnessing AI, Automation, and Digital Transformation
                  </h4>
                </div>

                <div className="bg-[#050a12] p-6 rounded-2xl border-l-4 border-[#ff7e67] border-r border-t border-b border-slate-700/60 shadow-sm">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-white">Our Distinctive Edge:</strong> AI-powered pipelines, automated indicator feeds, geospatial tracking, and real-time executive visualizers.
                  </p>
                </div>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">AI-Powered Data Analytics & Predictive Modeling</strong> — Leveraging machine learning and AI-driven automation to enhance data accuracy and optimize trend forecasting.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Scalable Digital Platforms & Visualization Dashboards</strong> — Deploying cost-effective, interactive data ecosystems that integrate custom analytics and real-time performance tracking.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">IoT & ICT Integration for Seamless Data Collection</strong> — Utilizing Internet of Things (IoT) devices and digital reporting tools to ensure enhanced data integrity.
                    </p>
                  </li>
                </ul>
              </div>
            )}

            {/* Action Research & Collaboration */}
            {activeTab === 'research' && (
              <div className="space-y-8 animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                  alt="Action Research"
                  loading="lazy"
                  className="w-full h-60 lg:h-72 object-cover rounded-2xl shadow-lg border border-slate-700/80"
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                    Action Research & Collaboration
                  </h3>
                  <h4 className="text-base lg:text-lg text-[#ff7e67] font-medium">
                    Tailored Solutions for Complex Development Challenges
                  </h4>
                </div>

                <div className="bg-[#050a12] p-6 rounded-2xl border-l-4 border-[#ff7e67] border-r border-t border-b border-slate-700/60 shadow-sm">
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-white">Our Distinctive Edge:</strong> Participatory action research, iterative feedback loops, stakeholder co-creation, and agile policy adaptation.
                  </p>
                </div>

                <ul className="space-y-4 pt-2">
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Stakeholder-Led Knowledge Co-Creation</strong> — Implementing participatory action research models that engage local communities to generate data-driven solutions.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Adaptive Learning & Iterative Strategy Refinement</strong> — Facilitating "Pause and Reflect" workshops, real-time program adaptation, and continuous learning cycles.
                    </p>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#ff7e67] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-300">
                      <strong className="text-white">Multi-Level Knowledge Exchange for Scalable Solutions</strong> — Aligning local insights with global development frameworks through cross-sectoral collaboration.
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MERLA Projects with Card Fan Animation */}
      <section id="merla-projects" className="py-24 px-6 border-t border-slate-800/80 bg-[#050a12] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#ff7e67]/20">
              Track Record
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">MERLA Projects</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              Interactive physical card deck fan — select, drag, or navigate through our major monitoring, evaluation, and results-based financing engagements.
            </p>
          </div>

          <CardFanSlider items={merlaProjects} theme="dark" onCardAction={(item) => onOpenCollaborate?.(item.title)} />
        </div>
      </section>

      {/* CALL TO ACTION / PARTNER WITH US */}
      <section id="merla-contact" className="py-24 px-6 text-center relative overflow-hidden border-t border-slate-800 bg-[#081220]">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-[#ff7e67]/20">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Partner with Us for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-rose-300 to-amber-200">
              Adaptive MERLA Systems
            </span>
          </h2>
          <p className="mb-6 text-slate-300 text-base md:text-lg leading-relaxed">
            Turn data into continuous improvement and measurable outcomes. At IP3 Consulting, we build real-time monitoring platforms, independent evaluations, and adaptive learning architectures for national programs.
          </p>
          <p className="font-semibold text-[#ff7e67] mb-8 text-base md:text-lg">
            Together, we ensure accountability, transparency, and sustained impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenCollaborate?.('MERLA Systems')}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff7e67] text-white text-base font-semibold rounded-full hover:bg-[#d95a43] transition-all duration-200 shadow-lg hover:scale-105"
            >
              Consult Our MERLA Specialists
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-white text-base font-semibold rounded-full border border-slate-700 transition-all duration-200"
              >
                Contact IP3
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

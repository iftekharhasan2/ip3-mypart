import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Target,
  BarChart3,
  Globe2
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';
import { FlipCard } from '../FlipCard';

interface InnovationFocusProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const InnovationFocus: React.FC<InnovationFocusProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [activeDashboardTab, setActiveDashboardTab] = useState<string>('development');

  const dashboardTabs = [
    {
      id: 'development',
      label: 'Policy Development',
      title: 'Policy Development: Crafting with Innovative Solutions',
      description: 'We assist governments and organizations in conceptualizing, drafting, and implementing forward-thinking policies. By utilizing evidence-based frameworks, we ensure that new policies are actionable, inclusive, and tailored to meet both immediate needs and long-term strategic objectives.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
      features: [
        { title: 'Evidence-Based Frameworks', desc: 'Crafting legislative blueprints and decrees rooted in empirical micro-econometric data.' },
        { title: 'Stakeholder Harmonization', desc: 'Facilitating multi-ministerial consensus and civil society alignment.' },
        { title: 'Implementation Roadmaps', desc: 'Detailed transition pathways with milestone benchmarking and risk mitigation.' },
      ],
    },
    {
      id: 'regulation',
      label: 'Regulation',
      title: 'Regulation: Enabling Transparent and Efficient Governance',
      description: 'Regulation underpins thriving economies and societies. We help governments and regulators develop, reform, and implement policies that safeguard citizens, ensure business efficiency, and reduce bureaucratic burdens.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      features: [
        { title: 'Regulatory design and strategic reforms', desc: 'We craft evidence-based regulatory frameworks that enhance compliance, streamline processes, and promote economic competitiveness.' },
        { title: 'Frameworks for Transparent Governance', desc: 'Our approach ensures accountability, minimizes bureaucratic inefficiencies, and fosters public trust in governance structures.' },
        { title: 'Balanced Solutions', desc: 'We develop regulations that promote business growth while safeguarding environmental sustainability, social equity, and consumer protection.' },
      ],
    },
    {
      id: 'evaluation',
      label: 'Evaluation',
      title: 'Evaluation: Measuring Impact, Driving Improvement',
      description: 'Our robust evaluation frameworks offer governments and organizations the tools to assess program performance and refine implementation strategies. Using cutting-edge data analysis and ethical engagement practices, we ensure results inform impactful decision-making.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
      features: [
        { title: 'Design and Implementation of Monitoring Frameworks', desc: 'We develop customized monitoring and evaluation (M&E) systems that track progress, measure effectiveness, and provide actionable insights for continuous improvement.' },
        { title: 'In-depth Impact Assessments and Strategic Reviews', desc: 'Our team conducts rigorous evaluations using qualitative and quantitative methodologies to assess the long-term effectiveness and scalability of policies and programs.' },
        { title: 'Data Modeling to Evaluate Effectiveness', desc: 'Leveraging advanced analytics, AI-driven tools, and econometric models, we quantify the success of interventions, helping policymakers make data-driven adjustments.' },
      ],
    },
    {
      id: 'economic',
      label: 'Economic Analysis',
      title: 'Economic Analysis: Decision-Making with new economic thinking',
      description: 'Economic uncertainty demands rigorous analysis to inform public sector decisions. We apply tailored economic methodologies to evaluate the outcomes of policies, investments, and programs, providing the evidence leaders need to move forward confidently.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
      features: [
        { title: 'Cost-Benefit Analysis and Outcome Quantification', desc: 'We assess the economic feasibility and long-term impact of policies and projects, helping decision-makers allocate resources efficiently and maximize returns.' },
        { title: 'Problem-Solving Through Economic Modeling', desc: 'Our experts use advanced economic modeling techniques, including predictive analytics and scenario planning, to simulate policy outcomes and anticipate future challenges.' },
        { title: 'Data-Driven Solutions to Advance Public Agendas', desc: 'By integrating big data analytics and real-time market insights, we provide evidence-based recommendations that drive inclusive economic growth, sustainability, and resilience.' },
      ],
    },
  ];

  const currentTab = dashboardTabs.find((t) => t.id === activeDashboardTab) || dashboardTabs[0];

  const influenceSlides: CardFanItem[] = [
    {
      step: 'Step 01',
      title: 'Evidence-Based Policymaking',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      points: [
        'Conducting robust research to identify root causes and policy gaps.',
        'Providing actionable insights to design policies that address real-world needs.',
        'Developing frameworks that align with global sustainability goals.',
      ],
      actionText: 'View Phase',
    },
    {
      step: 'Step 02',
      title: 'Stakeholder Collaboration',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      points: [
        'Building inclusive platforms for dialogue among policymakers, industry leaders, and communities.',
        'Facilitating knowledge exchange to co-create impactful policies and programs.',
        'Ensuring participatory governance for equitable and transparent decision-making.',
      ],
      actionText: 'View Phase',
    },
    {
      step: 'Step 03',
      title: 'Policy Experimentation and Adaptation',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      points: [
        'Designing pilot programs to test innovative policy approaches.',
        'Utilizing adaptive management to refine policies based on real-time data and feedback.',
        'Scaling successful interventions for broader societal impact.',
      ],
      actionText: 'View Phase',
    },
  ];

  const programmingSlides: CardFanItem[] = [
    {
      step: 'Phase 01',
      title: 'Policy Research and Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      points: [
        'Conducting in-depth policy studies to inform decision-making.',
        'Evaluating policy impacts using advanced data analytics and scenario modeling.',
      ],
      actionText: 'View Roadmap',
    },
    {
      step: 'Phase 02',
      title: 'Capacity Building for Policymakers',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      points: [
        'Training government officials and institutional leaders in policy formulation and implementation.',
        'Developing tools and methodologies for continuous learning and improvement.',
      ],
      actionText: 'View Roadmap',
    },
    {
      step: 'Phase 03',
      title: 'Program Design and Implementation',
      image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800',
      points: [
        'Designing evidence-based programs tailored to client goals and contexts.',
        'Supporting execution with on-ground expertise and stakeholder engagement.',
      ],
      actionText: 'View Roadmap',
    },
    {
      step: 'Phase 04',
      title: 'Monitoring, Evaluation, and Learning (MEL)',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      points: [
        'Establishing frameworks to track and evaluate policy and program effectiveness.',
        'Driving adaptive management through feedback loops and actionable insights.',
      ],
      actionText: 'View Roadmap',
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920"
          alt="Policy Innovation background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Focus Area 02 • Policy Innovation &amp; Action Research</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Public Policy Innovation<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              and Action Research
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Driving Evidence-Based Insights and Innovative Strategies to Shape Policies that Foster Inclusive Growth, Educational Reform, and Sustainable Environmental Stewardship.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Policy Innovation & Action Research') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Commission Policy Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Offerings Section */}
      <section id="offerings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Core Offerings
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging the gap between high-level ideas and impactful outcomes.
          </p>
        </div>

        <div className="space-y-12">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row bg-[#081220] border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl group">
            <div className="md:w-1/2 bg-[#050a12] relative min-h-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                alt="Policy Research"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#081220]/60" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7e67]">Practice 01</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Policy Research and Analysis Tailored to Your Needs
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Policymakers often face the challenge of turning ambitious visions into tangible results. At IP3 Consulting, we specialize in bridging the gap between high-level ideas and impactful outcomes. By integrating people-centric and planet-conscious approaches into economic and development policies, we deliver clear, data-driven insights and bespoke solutions that drive sustainable transformation.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse bg-[#081220] border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl group">
            <div className="md:w-1/2 bg-[#050a12] relative min-h-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                alt="Transformative Programming"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-[#081220]/60" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7e67]">Practice 02</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Influencing Policy and Driving Transformative Programming
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                From conceptualization to implementation, we turn bold ideas into meaningful change by transforming rigorous evidence into actionable policies and programs. Our approach combines cutting-edge methodologies, stakeholder-inclusive frameworks, and strategic collaboration with decision-makers. We empower governments, donors, and organizations to navigate complex challenges with innovative, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Your Benefits (3D Flip Cards) */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Your Benefits
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Empowering decision-makers with clarity, confidence, and actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FlipCard
            title="Informed Decisions"
            frontSubtitle="Societal & Economic Impact Projections"
            frontBadge="Strategic Clarity"
            backBadge="Decision Support"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            backText="We help our clients explore the effects of existing policies and project the broader societal impacts of proposed frameworks. Our team employs rigorous methodologies, leveraging advanced data analytics, systems thinking, and stakeholder engagement to inform long-term strategic decisions."
            heightClass="h-[460px]"
          />

          <FlipCard
            title="Policy Impact"
            frontSubtitle="Systematic Cost-Benefit Analysis"
            frontBadge="Empirical Rigor"
            backBadge="Impact Verification"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            backText="We cater to decision-makers who require immediate, evidence-based insights to tackle pressing public policy challenges. We systematically compare policy alternatives, conduct economic, financial, and environmental cost-benefit analyses, and project option impacts under tight constraints."
            heightClass="h-[460px]"
          />

          <FlipCard
            title="Actionable Insights"
            frontSubtitle="Bridging Research to Sovereign Delivery"
            frontBadge="Implementation"
            backBadge="Actionable Intel"
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            backText="We bridge the gap between policy research and policy analysis to provide actionable insights for a diverse range of clients. From policy development to regulation, economic analysis to service design and delivery, our consultants are experienced across the full suite of government functions."
            heightClass="h-[460px]"
          />
        </div>
      </section>

      {/* 4. Policy Research Dashboard Section */}
      <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Service Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Policy Research &amp; Analysis
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our services address critical areas of policy design, regulation, evaluation, and economic analysis, integrating cutting-edge methodologies with deep sectoral insights.
          </p>
        </div>

        <div className="bg-[#081220] rounded-[2rem] shadow-2xl border border-slate-800 overflow-hidden flex flex-col lg:flex-row min-h-[580px]">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 bg-[#050a12]/80 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-row lg:flex-col gap-3 overflow-x-auto no-scrollbar">
            {dashboardTabs.map((tab) => {
              const isActive = activeDashboardTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDashboardTab(tab.id)}
                  className={`whitespace-nowrap lg:whitespace-normal text-left px-5 py-4 rounded-xl font-semibold transition-all flex items-center justify-between group text-xs sm:text-sm cursor-pointer shrink-0 lg:shrink ${
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
          <div className="lg:w-2/3 p-7 md:p-12 relative space-y-6">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800">
              <img
                src={currentTab.image}
                alt={currentTab.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {currentTab.title}
            </h3>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {currentTab.description}
            </p>

            {currentTab.features && currentTab.features.length > 0 && (
              <div className="space-y-4 pt-2">
                {currentTab.features.map((feat, fIdx) => (
                  <div key={fIdx} className="border-l-2 border-[#ff7e67] pl-5 space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">{feat.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Global Dialogue / Influence Banner */}
      <section className="bg-gradient-to-br from-[#0c1c2e] via-[#081220] to-[#050a12] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Global Dialogue
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Influencing Policy and Driving Transformative Programming
          </h2>
          <p className="text-sm sm:text-base font-mono font-medium text-[#ff9d8c] uppercase tracking-wider">
            Bridging Research and Real-World Sovereign Impact
          </p>

          <div className="aspect-video w-full max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/80">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
              alt="Conference and high level advisory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs sm:text-base leading-relaxed text-slate-300 max-w-4xl mx-auto pt-2">
            At IP3 Consulting, we transform rigorous research into actionable policies and programs that drive meaningful impact. Leveraging data-driven insights, cutting-edge methodologies, and collaborative partnerships, we bridge the gap between policy development and on-the-ground implementation.
          </p>
        </div>
      </section>

      {/* 6. Approach to Policy Influence (Card Fan Slider 1) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Policy In Action
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Approach to Policy Influence
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Interactive physical card deck fan — hover cards to pull them from the deck, or use arrow controls to navigate through each policy influence stage.
          </p>
        </div>

        <CardFanSlider
          items={influenceSlides}
          theme="dark"
          badgeDefault="Step"
          actionDefault="View Phase"
          ariaLabel="Policy Influence Card Fan"
        />
      </section>

      {/* 7. Approach to Policy Programming (Card Fan Slider 2) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full inline-block border border-emerald-500/20">
            Execution Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Approach to Policy Programming
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Explore our sequential lifecycle from in-depth policy studies to continuous Monitoring, Evaluation, and Learning (MEL).
          </p>
        </div>

        <CardFanSlider
          items={programmingSlides}
          theme="dark"
          badgeDefault="Phase"
          actionDefault="View Roadmap"
          ariaLabel="Policy Programming Card Fan"
        />
      </section>

      {/* 8. Why Choose IP3 Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Why Choose IP3 for Policy Innovation?
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Bridging Policy and Practice',
                  desc: 'Our approach goes beyond theoretical frameworks. By integrating policy research, stakeholder collaboration, and practical execution, we deliver policies that work in real-world contexts. IP3 brings cutting-edge tools to transform policies into actionable solutions addressing critical issues like growth, inequality, sustainability, and resilience.',
                },
                {
                  title: 'Customization and Local Contexts',
                  desc: 'One-size-fits-all policies fail to create meaningful change. IP3 designs tailored strategies that reflect the unique socio-economic, political, and environmental realities of each sovereign project, aligning local contexts with international best practices.',
                },
                {
                  title: 'Innovation-Driven Policy Development',
                  desc: 'We leverage breakthrough technologies, such as AI-powered data analytics and predictive econometric modeling, to inform policymaking. This ensures our clients stay ahead of trends, enabling smarter decisions and more effective governance.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff7e67]/10 border border-[#ff7e67]/30 flex items-center justify-center shrink-0 text-[#ff7e67] font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 bg-[#081220]">
            <img
              src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800"
              alt="Policy Innovation Advantage"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#081220]/85 backdrop-blur-md border border-slate-700/60">
              <div className="text-xs font-mono font-bold text-[#ff7e67] uppercase">IP3 Innovation Lab</div>
              <div className="text-sm font-semibold text-white mt-0.5">Empirical Simulation &amp; Action Research Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-gradient-to-b from-[#081220] to-[#050a12] py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/30">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Partner with Us for <span className="text-[#ff7e67]">Policy Innovation</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Turn evidence into impact with cutting-edge policy methodologies and action research. At IP3 Consulting, we empower governments, development partners, and leaders to achieve lasting systemic change.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Public Policy Innovation & Action Research') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Connect With Our Policy Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

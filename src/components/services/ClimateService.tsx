import React, { useState } from 'react';
import {
  Leaf,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Building2,
  Cpu,
  BarChart3,
  Recycle,
  Trees,
  Users2
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';

interface ClimateServiceProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const ClimateService: React.FC<ClimateServiceProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'environmental' | 'social' | 'governance'>('environmental');

  const climateFocusItems: CardFanItem[] = [
    {
      tag: 'Policy Frameworks',
      title: 'Green Transition Policy & Governance',
      description: 'Designing inclusive policies and governance frameworks that drive equitable, nature-positive, and resilient climate transitions for a sustainable future.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      actionText: 'Climate Pillar',
    },
    {
      tag: 'Regenerative Economy',
      title: 'Circularity & Regenerative Pathways',
      description: 'Advancing circular and regenerative economic pathways to build resilient, resource-efficient, and sustainable closed-loop industrial systems.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
      actionText: 'Climate Pillar',
    },
    {
      tag: 'Global Integration',
      title: 'Sustainable Market Solutions & Green Finance',
      description: 'Empowering businesses, governments, and financial institutions with data-driven strategies to align sustainability efforts with global standards.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      actionText: 'Climate Pillar',
    },
  ];

  const environmentalItems = [
    {
      title: 'Climate Change Policies',
      desc: 'Developing and implementing ESG strategies that mitigate climate change impacts by focusing on reducing carbon emissions and enhancing resilience to environmental risks.',
    },
    {
      title: 'Resource Optimization',
      desc: 'Working with businesses to enhance the efficiency of water, energy, and raw materials in production processes, driving cost savings and sustainability.',
    },
    {
      title: 'Waste Management',
      desc: 'Implementing waste reduction, recycling, and responsible disposal strategies to minimize environmental impact, helping companies move towards a zero-waste model.',
    },
    {
      title: 'Pollution Control',
      desc: 'Developing and deploying measures to control air and water pollution, including cutting-edge emission reduction technologies and water treatment systems.',
    },
    {
      title: 'Sustainable Sourcing',
      desc: 'Promoting sustainable procurement practices, ensuring that companies source materials in an eco-friendly and socially responsible manner.',
    },
    {
      title: 'Biodiversity Conservation',
      desc: 'Our team designs and implements programs to protect and restore natural habitats, supporting biodiversity conservation efforts in emerging economies.',
    },
  ];

  const socialItems = [
    {
      title: 'Labor Standards and Employee Engagement',
      desc: 'We help businesses ensure fair labor practices, safe working conditions, and employee well-being programs, fostering a motivated and productive workforce.',
    },
    {
      title: 'Community Relations',
      desc: 'We develop strategies for meaningful community engagement, building strong relationships that support local development and enhance corporate reputation.',
    },
    {
      title: 'Corporate Social Responsibility (CSR)',
      desc: 'We design and manage impactful CSR initiatives that contribute to the welfare of local communities, aligning business goals with social development.',
    },
    {
      title: 'Customer Satisfaction and Data Privacy',
      desc: 'We implement best practices to protect customer data and ensure high levels of satisfaction through transparent and ethical business practices.',
    },
    {
      title: 'Diversity and Inclusion',
      desc: 'Our services promote gender diversity, inclusion, and equal opportunities within organizations, helping businesses build a more inclusive workplace.',
    },
  ];

  const governanceItems = [
    {
      title: 'Transparency and Reporting',
      desc: 'We develop comprehensive ESG reporting frameworks aligned with global standards (GRI, TCFD, ISSB), ensuring transparency and accountability in business operations.',
    },
    {
      title: 'Board Composition and Leadership',
      desc: 'We provide expert advice on board diversity, independence, and effective governance structures, strengthening leadership at the highest levels.',
    },
    {
      title: 'Anti-corruption and Ethics',
      desc: 'We help businesses implement robust anti-corruption policies and ethical guidelines to prevent fraud and unethical behavior.',
    },
    {
      title: 'Regulatory Compliance',
      desc: 'Our services ensure that businesses adhere to both local and international regulations, including mandatory ESG disclosures, safeguarding against legal and reputational risks.',
    },
    {
      title: 'Stakeholder Engagement',
      desc: 'We facilitate effective communication and engagement with all stakeholders, including shareholders, employees, customers, and regulators, fostering trust.',
    },
  ];

  const additionalServices = [
    {
      title: 'ESG Strategy Development',
      desc: 'We craft tailored ESG strategies that align with your company goals and stakeholder expectations, positioning your business as a leader in sustainability.',
      icon: <ShieldCheck className="w-6 h-6 text-[#ff7e67]" />,
    },
    {
      title: 'Impact Assessment',
      desc: 'Our team conducts thorough ESG impact assessments to identify areas for improvement and measure the effectiveness of your sustainability initiatives.',
      icon: <BarChart3 className="w-6 h-6 text-[#ff7e67]" />,
    },
    {
      title: 'Training and Capacity Building',
      desc: 'We offer training programs to enhance the ESG knowledge and skills of your employees and management, ensuring your team is equipped to drive sustainable practices.',
      icon: <Users2 className="w-6 h-6 text-[#ff7e67]" />,
    },
    {
      title: 'Technology Integration',
      desc: 'We leverage the latest digital tools and technologies to enhance ESG data collection, analysis, and reporting, providing actionable insights for continuous improvement.',
      icon: <Cpu className="w-6 h-6 text-[#ff7e67]" />,
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Service Practice 02 • Sustainability &amp; Resilience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Climate Action, Sustainability Analysis and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              Solutions
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#ff9d8c] font-medium max-w-3xl mx-auto leading-relaxed">
            Empowering Sustainable Growth with Climate Action Strategies, Decarbonization Audits and Green Transition Solutions.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Advising governments, corporates, and financial institutions on climate risk mitigation, circular pathways, and ESG compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#climate-focus"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Explore Climate Focus</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Climate Action & Sustainability') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Request ESG Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Our Climate Focus Card Fan Slider */}
      <section id="climate-focus" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Strategic Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Climate Focus
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed">
            Interactive physical card deck fan — hover cards to pull them from the deck, or use arrow controls to explore our green transition policies, regenerative practices, and green market integration.
          </p>
        </div>

        <CardFanSlider
          items={climateFocusItems}
          theme="dark"
          badgeDefault="Climate"
          actionDefault="Climate Pillar"
          ariaLabel="Climate Focus Card Fan"
        />
      </section>

      {/* 3. Our ESG Services (Tabbed Dashboard) */}
      <section id="esg-services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Service Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our ESG Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-[#081220] min-h-[540px]">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 bg-[#050a12]/80 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col gap-3">
            {[
              { id: 'environmental', label: 'Environmental Services' },
              { id: 'social', label: 'Social Services' },
              { id: 'governance', label: 'Governance Services' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
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
          <div className="w-full lg:w-2/3 p-7 md:p-12 relative bg-[#081220] space-y-6">
            {activeTab === 'environmental' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                    alt="Environmental Services"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Our environmental services help businesses and sovereign ministries minimize their ecological footprint while maximizing resource efficiency and decarbonization.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {environmentalItems.map((item, i) => (
                    <div key={i} className="bg-[#050a12] p-4 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="font-bold text-[#ff7e67] text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                    alt="Social Services"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  We understand that social responsibility is a critical component of sustainable business practices. Our social services focus on enhancing labor standards, community relations, and social impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {socialItems.map((item, i) => (
                    <div key={i} className="bg-[#050a12] p-4 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="font-bold text-[#ff7e67] text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'governance' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 max-h-52">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                    alt="Governance Services"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Strong governance is essential for sustainable growth. Our governance services are designed to enhance transparency, institutional accountability, and ethical disclosures.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {governanceItems.map((item, i) => (
                    <div key={i} className="bg-[#050a12] p-4 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="font-bold text-[#ff7e67] text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Additional Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Expanded Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Additional Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Beyond our core pillars, we offer specialized interventions to support your institution's sustainability journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, i) => (
            <div
              key={i}
              className="bg-[#081220] p-8 rounded-[2rem] border border-slate-800 shadow-xl space-y-4 hover:border-[#ff7e67]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#050a12] border border-slate-800 flex items-center justify-center">
                {service.icon}
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#ff7e67] transition-colors">
                {service.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-gradient-to-b from-[#081220] to-[#050a12] py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/30">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Partner with Us for a <span className="text-[#ff7e67]">Sustainable Future</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Emerging economies stand at a critical juncture in their transition towards sustainable development. At IP3 Consulting, we are committed to supporting your institution in this journey, providing the expertise, tools, and strategies needed to integrate ESG principles into core operations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Climate Action & Sustainability Solutions') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Contact Our Climate Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

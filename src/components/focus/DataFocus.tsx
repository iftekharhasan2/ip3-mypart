import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Database,
  Cpu,
  Building2,
  BarChart3,
  Sparkles,
  Layers,
  Network
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';
import { FlipCard } from '../FlipCard';

interface DataFocusProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const DataFocus: React.FC<DataFocusProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const sliderCards: CardFanItem[] = [
    {
      tag: 'IP3 Consulting',
      title: 'Empowering Digital Governance',
      description: 'Empowering Institutions Through Data-Driven Solutions: Strengthening governance, enhancing service delivery, and building digital ecosystems for sustainable transformation.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actionText: 'Domain Focus',
    },
    {
      tag: 'Transformation',
      title: 'Driving Transformation',
      description: 'Digital tools are no longer optional—they are integral to creating impactful and scalable solutions. We go beyond traditional consulting by embedding cutting-edge technologies into our services.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actionText: 'Domain Focus',
    },
    {
      tag: 'Agritech',
      title: 'Intelligence to the Farm',
      description: 'Transform farms into high-tech fields using sensors, drones, and AI. Provide real-time data to optimize planting, watering, and harvesting, maximizing yield while conserving resources.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actionText: 'Domain Focus',
    },
    {
      tag: 'EdTech',
      title: 'Innovative Teaching',
      description: 'In many ways and at most institutional sites, education is still relatively untouched by technology. We are making a case for the transformative power of technology in learning for the digital age.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actionText: 'Domain Focus',
    },
  ];

  const frameworks = [
    {
      title: 'Digitization',
      subtitle: 'Unlocking Institutional Efficiency',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: false,
      sections: [
        {
          heading: 'Digital Capability Roadmaps',
          points: [
            'Develop long-term strategies tailored to institutional goals.',
            'Build digital infrastructures to streamline sovereign operations.',
          ],
        },
        {
          heading: 'Smart Data Systems',
          points: [
            'Design and deploy integrated platforms for analytics and operational telemetry.',
            'Establish advanced tools for ESG and compliance tracking.',
          ],
        },
        {
          heading: 'Sustainable Frameworks',
          points: [
            'Embed scalable digital solutions for continuous improvement.',
            'Facilitate seamless institutional transitions to modern cloud ecosystems.',
          ],
        },
      ],
    },
    {
      title: 'Systems Thinking',
      subtitle: 'Interconnected Policy Frameworks',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: true,
      sections: [
        {
          heading: 'Multi-Sector Diagnostics',
          points: [
            'Analyze cross-sector interactions to identify systemic bottlenecks.',
            'Develop holistic policies balancing economic, environmental, and social goals.',
          ],
        },
        {
          heading: 'Cross-Disciplinary Integration',
          points: [
            'Combine technology, economics, and sociology to solve complex challenges.',
            'Facilitate inter-agency collaboration for coherent governance.',
          ],
        },
        {
          heading: 'Strategic Resilience',
          points: [
            'Design adaptable frameworks to withstand external global shocks.',
            'Equip institutions with future-proof planning and simulation toolkits.',
          ],
        },
      ],
    },
    {
      title: 'Regulatory Design',
      subtitle: 'Balancing Innovation and Governance',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: false,
      sections: [
        {
          heading: 'Ethical Standards',
          points: [
            'Create governance models ensuring transparency, equity, and accountability.',
            'Develop policies safeguarding data privacy and consumer rights.',
          ],
        },
        {
          heading: 'Public-Private Partnerships',
          points: [
            'Foster collaboration between public sectors and private industries.',
            'Align regulations to stimulate investment while protecting public welfare.',
          ],
        },
        {
          heading: 'Digital Accountability',
          points: [
            'Establish compliance audits for algorithmic systems and automated tools.',
            'Mitigate institutional risks related to emerging technologies.',
          ],
        },
      ],
    },
    {
      title: 'Municipal Capacity',
      subtitle: 'Empowering Local Governance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: true,
      sections: [
        {
          heading: 'Service Delivery Transformation',
          points: [
            'Modernize public service portals to improve citizen accessibility.',
            'Implement automated workflows to eliminate bureaucratic delays.',
          ],
        },
        {
          heading: 'Decentralized Data Management',
          points: [
            'Build local capacity to collect, analyze, and leverage municipal data.',
            'Train local civil service administrators in data-driven governance.',
          ],
        },
        {
          heading: 'Citizen Engagement',
          points: [
            'Deploy feedback platforms to incorporate citizen input into policy decisions.',
            'Enhance public trust through transparent community reporting.',
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Data and digital governance background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Focus Area 03 • Institutional Effectiveness &amp; Digital Governance</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Institutional Effectiveness,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              Data and Digital Governance
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Empowering Institutions with Data-Driven Governance and Inclusive Digital Ecosystems for Resilient, Future-Ready Sovereign Services.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#framework"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Discover Strategic Framework</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Data & Digital Governance') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Commission Governance Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Focus Areas Card Fan Slider */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Featured Highlights
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Core Focus Domains
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Interactive physical card deck fan — hover cards to pull them from the deck, or use arrow controls to navigate through our key data governance domains.
          </p>
        </div>

        <CardFanSlider
          items={sliderCards}
          theme="dark"
          badgeDefault="Domain"
          actionDefault="Domain Focus"
          ariaLabel="Data Governance Card Fan"
        />
      </section>

      {/* 3. Strategic Framework (with 3D FlipCards) */}
      <section id="framework" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center mb-20 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Methodology &amp; Execution
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Strategic Framework
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Tap or hover cards to reveal detailed empirical methodologies and sovereign roadmaps.
          </p>
        </div>

        <div className="space-y-20">
          {frameworks.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-10 lg:gap-14 ${
                item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2 w-full h-[400px] lg:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 bg-[#081220] group">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#081220]/85 backdrop-blur-md border border-slate-700/60">
                  <div className="text-xs font-mono font-bold text-[#ff7e67] uppercase">Pillar 0{idx + 1}</div>
                  <div className="text-sm font-semibold text-white mt-0.5">{item.title} — {item.subtitle}</div>
                </div>
              </div>

              {/* 3D FlipCard Column */}
              <div className="lg:w-1/2 w-full">
                <FlipCard
                  title={item.title}
                  frontSubtitle={item.subtitle}
                  frontHint="Tap or hover for strategic roadmap"
                  frontBadge={`Framework 0${idx + 1}`}
                  backBadge="Methodology"
                  backTitle={`${item.title} Strategy`}
                  backSections={item.sections}
                  heightClass="h-[400px] lg:h-[460px]"
                  icon={<Network className="w-10 h-10" />}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Partner with Us / CTA */}
      <section className="bg-gradient-to-b from-[#081220] to-[#050a12] py-24 px-4 sm:px-6 lg:px-8 text-center border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7e67]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/30">
            Next Steps
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Partner with Us for <span className="text-[#ff7e67]">Digital Transformation</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Modern institutions require resilient digital ecosystems and data-driven intelligence. At IP3 Consulting, we partner with governments, utilities, and multilateral organizations to design and deploy transformative digital solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Institutional Effectiveness & Digital Governance') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Consult Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

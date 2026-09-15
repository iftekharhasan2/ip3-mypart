import React, { useState } from 'react';
import {
  GraduationCap,
  Play,
  X,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CardFanSlider, CardFanItem } from '../CardFanSlider';
import { FlipCard } from '../FlipCard';

interface EducationFocusProps {
  onOpenCollaborate?: (area?: string) => void;
  onOpenTalk?: () => void;
  onNavigateContact?: () => void;
}

export const EducationFocus: React.FC<EducationFocusProps> = ({
  onOpenCollaborate,
  onOpenTalk,
  onNavigateContact,
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'digital' | 'human' | 'impact'>('digital');

  const articles: CardFanItem[] = [
    {
      tag: 'Data & Analytics',
      title: 'Data-driven learning tools',
      description: 'Deploying data-driven tools to monitor and enhance learning outcomes in underprivileged and disaster-prone schools.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
      actionText: 'Read Dossier',
    },
    {
      tag: 'Digital Pedagogy',
      title: 'Digital Age Teaching',
      description: 'Innovative Approaches to Teaching and Learning for the Digital Age, empowering classrooms with adaptive LMS architectures.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      actionText: 'Read Dossier',
    },
    {
      tag: 'System Reform',
      title: 'Experiential Learning',
      description: 'Crafting national education reforms to integrate distant and experiential learning for marginalized and vulnerable communities.',
      image: 'https://images.unsplash.com/photo-1427504494785-319ce51d1544?auto=format&fit=crop&q=80',
      actionText: 'Read Dossier',
    },
  ];

  const digitalExpertise = [
    {
      title: 'Data & Curriculum',
      items: [
        { label: 'Datafication', text: 'Integrating analytics to monitor performance and optimize institutional resources.' },
        { label: 'Curriculum Design', text: 'Developing adaptive STEM curriculums leveraging AI.' },
        { label: 'Virtual Environments', text: 'Establishing blended e-learning platforms for hybrid learning.' },
      ],
    },
    {
      title: 'Policy & Systems',
      items: [
        { label: 'Strategic Policy', text: 'Embed Digital Education Strategy and student data privacy into national policies.' },
        { label: 'Modernization', text: 'Align secondary school curricula to prepare learners for global digital employment.' },
        { label: 'Integration', text: 'Establishing comprehensive, interoperable digital environments across ministries.' },
      ],
    },
    {
      title: 'EdTech & Training',
      items: [
        { label: 'EdTech Deployment', text: 'Partnering to introduce AI, AR, and interactive simulation labs into teaching.' },
        { label: 'Teacher Training', text: 'Equipping educators to effectively implement digital solutions and continuous evaluation.' },
        { label: 'Digital Literacy', text: 'Ensuring students have foundational technological competencies.' },
      ],
    },
  ];

  return (
    <div className="w-full text-slate-100 bg-[#050a12] font-sans antialiased">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] py-32 md:py-40 flex items-center justify-center overflow-hidden border-b border-slate-800">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
          alt="Education background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/80 via-[#050a12]/75 to-[#050a12]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Focus Area 01 • Human Capital Systems</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Education and Human<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e67] via-[#ff9d8c] to-amber-300">
              Capacity Development
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Transforming national education systems through data, digital pedagogy, curriculum modernization, and strategic sovereign reform.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-sm shadow-xl shadow-[#ff7e67]/20 transition-all cursor-pointer hover:scale-105"
            >
              <span>Explore Core Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Educational Innovation & Pedagogy') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#081220] hover:bg-[#0c1c2e] text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Commission Education Advisory</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Transformative Learning Section */}
      <section id="transformative" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
              Transformative Learning
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Innovative Approaches to Teaching and Learning for the Digital Age
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              In many ways and at most institutions, the enterprise of education is still relatively untouched by technology. Changes sometimes seem insignificant and the results disappointing. We are making an empirical case for the transformative power of technology in learning.
            </p>
            <div className="pt-2">
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 bg-[#081220] hover:bg-[#0c1c2e] text-[#ff7e67] border border-[#ff7e67]/30 hover:border-[#ff7e67] font-semibold py-3 px-6 rounded-full transition-all text-xs sm:text-sm"
              >
                <span>Discover Our Efforts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative h-[380px] lg:h-[460px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 bg-[#081220] group">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
              alt="Digital Learning"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#081220]/80 backdrop-blur-md border border-slate-700/60">
              <div className="text-xs font-mono font-bold text-[#ff7e67] uppercase">Interactive Pilot</div>
              <div className="text-sm font-semibold text-white mt-0.5">Blended Classroom & Outcome Analytics Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Online Seminar Banner & Video Modal */}
      <section id="seminar" className="px-4 sm:px-6 lg:px-8 py-20 max-w-6xl mx-auto border-b border-slate-800/80">
        <div className="bg-[#081220] text-white rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-slate-800">
          <div className="flex-1 space-y-4">
            <span className="text-[#ff7e67] font-semibold tracking-wide uppercase text-xs bg-[#ff7e67]/15 px-3 py-1 rounded-full inline-block border border-[#ff7e67]/30">
              IP3 Consulting • Online Seminar
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The New Education<br />in BANGLADESH 2.0
            </h2>
            <p className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>March 01, 10:00 AM (BST)</span>
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-slate-200">
              What changes in education is needed, and will it continue evolving?
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Come join us in our efforts to create a more contemporary, resilient education system that equips youth for high-value future industries.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold py-3 px-7 rounded-full transition shadow-lg shadow-[#ff7e67]/20 flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Seminar Preview</span>
              </button>
              <a
                href="#offerings"
                className="text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition flex items-center gap-1.5"
              >
                <span>Learn More →</span>
              </a>
            </div>
          </div>

          {/* Video Thumbnail */}
          <div
            onClick={() => setVideoModalOpen(true)}
            className="w-full md:w-[360px] h-60 bg-[#050a12] rounded-2xl relative overflow-hidden group cursor-pointer border border-slate-700 shadow-xl shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
              alt="Seminar Preview"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#ff7e67] rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition duration-300">
                <Play className="w-7 h-7 text-[#050a12] fill-current" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 text-[10px] font-mono bg-black/70 px-2 py-1 rounded text-white border border-white/10">
              Click to Play Stream
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/70 hover:bg-black p-2.5 rounded-full transition cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Seminar Presentation"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. Publications & Research Section with Card Fan Slider */}
      <section id="publications" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto border-b border-slate-800/80 overflow-hidden">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Publications &amp; Research
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto text-white">
            Unlocking Inclusive Green Finance & Pedagogical Systems
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-xs sm:text-sm leading-relaxed">
            Empirical publications benchmarked against regional ASEAN and OECD secondary education transitions.
          </p>
        </div>

        {/* Reusable Card Fan Slider */}
        <CardFanSlider
          items={articles}
          theme="dark"
          badgeDefault="Research"
          actionDefault="Read Article"
          ariaLabel="Publications & Research Card Fan"
        />
      </section>

      {/* 5. Service Matrix (What We Offer Dashboard) */}
      <section id="offerings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#ff7e67] uppercase tracking-widest bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#ff7e67]/20">
            Service Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            What We Offer
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Select a category below to explore our core advisory pillars and institutional capabilities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/4">
            <div className="bg-[#081220] rounded-2xl p-3 flex flex-col gap-2 sticky top-24 border border-slate-800 shadow-xl">
              {[
                { id: 'digital', label: 'Digital Education' },
                { id: 'human', label: 'Human Capacity' },
                { id: 'impact', label: 'Impact Assessment' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-200 flex justify-between items-center text-xs sm:text-sm cursor-pointer ${
                      isActive
                        ? 'bg-[#ff7e67] text-[#050a12] shadow-md font-bold'
                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Pane */}
          <div className="w-full lg:w-3/4 min-h-[550px]">
            {/* Digital Tab */}
            {activeTab === 'digital' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-[#081220] p-7 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    Digital Education Transformation
                  </h3>
                  <p className="text-sm font-semibold text-[#ff7e67]">
                    Revolutionizing Education with Digital Innovation and Strategic Reform
                  </p>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    Our core offerings include datafication of education, mediated through technology — a transnational assemblage of people, technologies, and policies that increasingly affects how national education systems are organized and managed.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 pt-2">
                    {[
                      'Designing and deploying data-driven tools and platforms for learning and management.',
                      'Creating technology solutions that enhance digital inclusion and bridge access gaps.',
                      'Developing national and institutional policies to foster a future-ready education system.',
                    ].map((hl, i) => (
                      <div
                        key={i}
                        className="bg-[#050a12] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed"
                      >
                        {hl}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-6">Our Expertise</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {digitalExpertise.map((exp, i) => (
                      <FlipCard
                        key={i}
                        title={exp.title}
                        frontSubtitle="Digital & Institutional Reform"
                        frontHint="Tap or hover for items"
                        frontBadge={`Module 0${i + 1}`}
                        backBadge="Curriculum & Policy"
                        backItems={exp.items}
                        heightClass="h-[360px]"
                        icon={<GraduationCap className="w-8 h-8" />}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Human Tab */}
            {activeTab === 'human' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-[#081220] p-7 md:p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      Human Capacity Development
                    </h3>
                    <p className="text-sm font-semibold text-[#ff7e67]">
                      Empowering Individuals, Strengthening Institutions
                    </p>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      IP3 Consulting believes that human capacity development is at the heart of sustainable growth. By building the skills, knowledge, and leadership required to drive systemic change, we ensure long-term impact in education and beyond.
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff7e67] font-bold">●</span>
                        <div><strong className="text-white">Teacher Innovation:</strong> Pedagogical innovation and blended digital integration.</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff7e67] font-bold">●</span>
                        <div><strong className="text-white">Leadership Excellence:</strong> Institutional training programs to enhance governance.</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#ff7e67] font-bold">●</span>
                        <div><strong className="text-white">Knowledge Empowerment:</strong> Facilitating high-impact workshops and faculty exchanges.</div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/3 h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-md shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
                      alt="Human Capacity"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Leadership Training',
                      items: [
                        { label: 'Equipping Educators', text: 'Comprehensive capacity building programs.' },
                        { label: 'Custom Modules', text: 'Focusing on digital literacy and performance management.' },
                      ],
                    },
                    {
                      title: 'Collaborative Ecosystems',
                      items: [
                        { label: 'Knowledge Exchange', text: 'Cross-institutional platforms for sharing pedagogical insights.' },
                        { label: 'Innovation Incubators', text: 'Collaborative hubs for EdTech co-creation.' },
                      ],
                    },
                    {
                      title: 'Localized Capacity',
                      items: [
                        { label: 'Regional Focus', text: 'Addressing localized structural and geographical challenges.' },
                        { label: 'Community Solutions', text: 'Engaging parents and administrators in program design.' },
                      ],
                    },
                  ].map((exp, i) => (
                    <div key={i} className="bg-[#081220] p-6 rounded-2xl border border-slate-800 space-y-3">
                      <h4 className="font-bold text-base text-[#ff7e67]">{exp.title}</h4>
                      <ul className="space-y-3 text-xs text-slate-300">
                        {exp.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-bold text-white block">{item.label}:</span>
                            <span className="text-slate-400">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Tab */}
            {activeTab === 'impact' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-[#081220] p-7 md:p-10 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    Impact Assessment &amp; Learning Outcomes
                  </h3>
                  <p className="text-sm font-semibold text-[#ff7e67]">
                    Measuring Success, Driving Continuous Improvement
                  </p>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    IP3 Consulting employs innovative methodologies and telemetry tools to assess the effectiveness of educational programs, ensuring they deliver measurable, scalable, and sustainable impact.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#081220] p-7 rounded-2xl border border-slate-800 space-y-4">
                    <h4 className="font-bold text-lg text-white">Comprehensive Assessments</h4>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Program Evaluation</h5>
                        <p className="text-slate-400">Assessing the effectiveness of policies, programs, and interventions using rigorous econometric methodologies.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Learning Outcomes</h5>
                        <p className="text-slate-400">Developing robust metrics and telemetry indicators to track and enhance student performance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a182b] p-7 rounded-2xl border border-[#ff7e67]/40 space-y-4 shadow-xl">
                    <h4 className="font-bold text-lg text-white">Evidence-Based Decisions</h4>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Data-Driven Insights</h5>
                        <p className="text-slate-300">Utilizing big data, AI, and predictive analytics to inform policy adjustments and program refinements.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Systemic Reviews</h5>
                        <p className="text-slate-300">Conducting in-depth evaluations of education systems to identify gaps and opportunities for improvement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#081220] p-7 rounded-2xl border border-slate-800 md:col-span-2 space-y-4">
                    <h4 className="font-bold text-lg text-white">Real-Time Monitoring & Adaptive Learning</h4>
                    <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Digital Dashboards</h5>
                        <p className="text-slate-400">Developing real-time data platforms for continuous program monitoring and school-level performance tracking.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-[#ff7e67]">Adaptive Feedback Cycles</h5>
                        <p className="text-slate-400">Using continuous feedback mechanisms to ensure education systems remain agile and responsive.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
            Partner with Us for <span className="text-[#ff7e67]">Education Reform</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Developing human potential and transforming national education systems requires actionable strategies, teacher empowerment, and innovative EdTech integration. At IP3 Consulting, we empower institutions for the challenges of tomorrow.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenCollaborate ? onOpenCollaborate('Educational Innovation & Pedagogy') : onNavigateContact?.()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] text-sm font-bold rounded-full transition-all shadow-xl shadow-[#ff7e67]/25 hover:scale-105 cursor-pointer"
            >
              <span>Consult Our Education Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

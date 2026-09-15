import React, { useState } from 'react';
import { RotateCcw, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface FlipCardProps {
  image?: string;
  title: string;
  frontSubtitle?: string;
  frontHint?: string;
  frontBadge?: string;
  backTitle?: string;
  backSubtitle?: string;
  backText?: string;
  backBadge?: string;
  backSections?: Array<{
    heading: string;
    points: string[];
  }>;
  backItems?: Array<{
    label: string;
    text: string;
  }>;
  className?: string;
  heightClass?: string;
  icon?: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  image,
  title,
  frontSubtitle,
  frontHint = 'Tap or hover to read details',
  frontBadge,
  backTitle,
  backSubtitle,
  backText,
  backBadge = 'Methodology',
  backSections,
  backItems,
  className = '',
  heightClass = 'h-[460px]',
  icon,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`${title} - Click to flip`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleFlip();
        }
      }}
      onClick={toggleFlip}
      onMouseLeave={() => setIsFlipped(false)}
      className={`group perspective-1000 w-full ${heightClass} cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#ff7e67] rounded-[2rem] ${className}`}
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d rounded-[2rem] shadow-2xl transition-transform ${
          isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#081220] rounded-[2rem] p-7 flex flex-col justify-between border border-slate-800 shadow-xl group-hover:border-[#ff7e67]/40 transition-colors">
          <div>
            {image ? (
              <div className="aspect-[16/10] rounded-2xl mb-5 overflow-hidden bg-[#050a12] relative border border-slate-800">
                <img
                  src={image}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {frontBadge && (
                  <span className="absolute top-3 left-3 bg-[#ff7e67] text-[#050a12] text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {frontBadge}
                  </span>
                )}
              </div>
            ) : icon ? (
              <div className="w-16 h-16 rounded-2xl bg-[#050a12] border border-slate-800 text-[#ff7e67] flex items-center justify-center mb-6 shadow-inner">
                {icon}
              </div>
            ) : null}

            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 tracking-tight">
              {title}
            </h3>
            {frontSubtitle && (
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                {frontSubtitle}
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#ff7e67] inline-flex items-center gap-2 bg-[#ff7e67]/10 px-3.5 py-1.5 rounded-full border border-[#ff7e67]/20 group-hover:bg-[#ff7e67] group-hover:text-[#050a12] transition-colors">
              <span>{frontHint}</span>
              <RotateCcw className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#0a182b] text-slate-100 rounded-[2rem] p-7 flex flex-col justify-between overflow-y-auto custom-scroll border border-[#ff7e67]/40 shadow-2xl">
          <div>
            <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7e67] bg-[#ff7e67]/10 border border-[#ff7e67]/30 px-2.5 py-1 rounded-full">
                {backBadge}
              </span>
              <span className="text-[10px] font-mono text-slate-400">Click to flip</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              {backTitle || title}
            </h3>

            {backSubtitle && (
              <p className="text-xs font-medium text-[#ff7e67] mb-3">
                {backSubtitle}
              </p>
            )}

            {backText && (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {backText}
              </p>
            )}

            {/* Back Sections (e.g. Policy Data / Strategic Framework) */}
            {backSections && backSections.length > 0 && (
              <div className="space-y-4 my-3">
                {backSections.map((sec, secIdx) => (
                  <div key={secIdx} className="bg-[#050a12]/70 p-3.5 rounded-xl border border-slate-800">
                    <h4 className="font-mono font-bold text-xs text-[#ff7e67] uppercase tracking-wider mb-2">
                      {sec.heading}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {sec.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7e67] shrink-0 mt-0.5" />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Back Items (e.g. Education Dashboard / Expertise items) */}
            {backItems && backItems.length > 0 && (
              <div className="space-y-2.5 my-3">
                {backItems.map((item, itemIdx) => (
                  <div key={itemIdx} className="text-xs">
                    <span className="font-bold text-slate-200 block">{item.label}:</span>
                    <span className="text-slate-400 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-700/80 flex items-center justify-center text-[11px] font-mono text-slate-400">
            Tap or click to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export interface CardFanItem {
  id?: string | number;
  tag?: string;
  step?: string;
  title: string;
  description?: string;
  desc?: string;
  back_text?: string;
  points?: string[];
  image?: string;
  img?: string;
  actionText?: string;
  onAction?: () => void;
}

interface CardFanSliderProps {
  items: CardFanItem[];
  theme?: 'dark' | 'light';
  ariaLabel?: string;
  badgeDefault?: string;
  actionDefault?: string;
  onCardClick?: (item: CardFanItem, index: number) => void;
  onCardAction?: (item: CardFanItem, index: number) => void;
  className?: string;
}

function getResponsiveMultiplier(width: number): number {
  if (width < 480) return 0.32;
  if (width < 640) return 0.48;
  if (width < 768) return 0.68;
  if (width < 1024) return 0.85;
  return 1.0;
}

function getRelativeDiff(index: number, selectedIndex: number, total: number): number {
  let diff = index - selectedIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export const CardFanSlider: React.FC<CardFanSliderProps> = ({
  items,
  theme = 'dark',
  ariaLabel = 'Interactive Card Fan Carousel',
  badgeDefault = 'Featured',
  actionDefault = 'Explore',
  onCardClick,
  onCardAction,
  className = '',
}) => {
  const total = items.length;
  const initialIndex = Math.max(0, Math.floor((total - 1) / 2));
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const multiplier = getResponsiveMultiplier(windowWidth);
  const heightMultiplier = Math.min(1.0, Math.max(0.45, multiplier));

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setSelectedIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setSelectedIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSelectedIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSelectedIndex(total - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  if (total === 0) return null;

  const isDark = theme === 'dark';

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
      className={`relative w-full select-none focus:outline-none py-6 ${className}`}
    >
      {/* Stage and Desktop Arrow Controls */}
      <div className="relative w-full flex items-center justify-center">
        {/* Desktop Left Button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={total <= 1}
          aria-label="Previous card"
          className={`hidden md:flex absolute left-2 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full items-center justify-center backdrop-blur-md border shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:pointer-events-none hover:scale-105 active:scale-95 ${
            isDark
              ? 'bg-[#081220]/90 text-slate-200 border-slate-700/80 hover:border-[#ff7e67] hover:text-[#ff7e67]'
              : 'bg-white/90 text-slate-800 border-slate-300 hover:border-[#ff7e67] hover:text-[#ff7e67]'
          }`}
        >
          <ChevronLeft className="w-6 h-6 -translate-x-0.5" />
        </button>

        {/* Fan Stage Container */}
        <div
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative mx-auto w-full h-[500px] sm:h-[530px] md:h-[560px] lg:h-[580px] flex items-center justify-center overflow-visible"
        >
          {/* Center Anchor */}
          <div className="relative w-0 h-0 flex items-center justify-center">
            {items.map((item, index) => {
              const diff = getRelativeDiff(index, selectedIndex, total);
              const isCenter = diff === 0;
              const absD = Math.abs(diff);
              const sign = diff < 0 ? -1 : diff > 0 ? 1 : 0;

              let xRem = 0;
              let yRem = 0;
              let rot = 0;
              let scale = 1;
              let zIndex = 1;

              if (isCenter) {
                xRem = 0;
                yRem = -1.5 * heightMultiplier;
                rot = 0;
                scale = 1.05;
                zIndex = 40;
              } else {
                xRem = sign * (13.5 + (absD - 1) * 11.5) * multiplier;
                yRem = (absD * 1.5 + (absD - 1) * 1.2) * heightMultiplier;
                rot = sign * (9 + (absD - 1) * 8);
                scale = Math.max(0.72, 1.0 - absD * 0.08);
                zIndex = Math.max(1, 30 - absD * 5);
              }

              // Hover effect
              const isHovered = hoveredIndex === index;
              if (isHovered && !isCenter) {
                yRem -= 1.8 * heightMultiplier;
                scale *= 1.05;
                zIndex = 35;
              }

              const badge = item.tag || item.step || badgeDefault;
              const imageSrc = item.image || item.img;
              const descriptionText = item.description || item.desc || item.back_text || '';
              const actionLabel = item.actionText || actionDefault;

              return (
                <div
                  key={index}
                  data-index={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setSelectedIndex(index);
                    onCardClick?.(item, index);
                    onCardAction?.(item, index);
                  }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: `translate(-50%, -50%) translate(${xRem}rem, ${yRem}rem) rotate(${rot}deg) scale(${scale})`,
                    transformOrigin: 'center 85%',
                    zIndex,
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
                  }}
                  className={`w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] rounded-[2rem] overflow-hidden shadow-2xl border cursor-pointer select-none will-change-transform ${
                    isDark
                      ? isCenter
                        ? 'bg-[#0a182b] border-[#ff7e67]/50 shadow-[#ff7e67]/10'
                        : 'bg-[#081220] border-slate-800 hover:border-slate-700'
                      : isCenter
                        ? 'bg-white border-[#ff7e67]/50 shadow-xl'
                        : 'bg-white/95 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover pointer-events-none transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#081220] to-[#0c1c2e] flex items-center justify-center">
                        <span className="text-3xl font-mono text-[#ff7e67] font-bold">IP3</span>
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-[#ff7e67] text-[#050a12] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                      {badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between min-h-[190px]">
                    <div>
                      <h3
                        className={`font-bold text-base sm:text-lg leading-snug mb-2 tracking-tight line-clamp-2 ${
                          isDark ? 'text-slate-100' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.points && item.points.length > 0 ? (
                        <ul className="space-y-1.5 mb-4 text-xs text-slate-400">
                          {item.points.slice(0, 2).map((pt, ptIdx) => (
                            <li key={ptIdx} className="flex items-start gap-2 line-clamp-2">
                              <span className="w-1.5 h-1.5 bg-[#ff7e67] rounded-full mt-1.5 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p
                          className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {descriptionText}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ff7e67] inline-flex items-center gap-1">
                        <span>{actionLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500">
                        {index + 1} / {total}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Right Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={total <= 1}
          aria-label="Next card"
          className={`hidden md:flex absolute right-2 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full items-center justify-center backdrop-blur-md border shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:pointer-events-none hover:scale-105 active:scale-95 ${
            isDark
              ? 'bg-[#081220]/90 text-slate-200 border-slate-700/80 hover:border-[#ff7e67] hover:text-[#ff7e67]'
              : 'bg-white/90 text-slate-800 border-slate-300 hover:border-[#ff7e67] hover:text-[#ff7e67]'
          }`}
        >
          <ChevronRight className="w-6 h-6 translate-x-0.5" />
        </button>
      </div>

      {/* Navigation Controls: Mobile Arrows & Indicators */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Mobile Prev */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={total <= 1}
          aria-label="Previous card"
          className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-[#081220] border border-slate-800 text-slate-200 shadow-md active:scale-95 transition-all disabled:opacity-40"
        >
          <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Select card ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === idx ? 'w-8 bg-[#ff7e67]' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Mobile Next */}
        <button
          type="button"
          onClick={handleNext}
          disabled={total <= 1}
          aria-label="Next card"
          className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-[#081220] border border-slate-800 text-slate-200 shadow-md active:scale-95 transition-all disabled:opacity-40"
        >
          <ChevronRight className="w-5 h-5 translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};

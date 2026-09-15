import React, { useState } from 'react';
import {
  Palette,
  Type,
  Sparkles,
  RotateCcw,
  Check,
  Eye,
  Sliders,
  Maximize2,
  SlidersHorizontal,
} from 'lucide-react';
import { SiteThemeConfig, SlideItem, ImportedFont } from '../types';
import { defaultThemeConfig } from '../data/defaultContent';
import { FontImporter } from './FontImporter';

interface ThemeTypographyStudioProps {
  themeConfig: SiteThemeConfig;
  updateThemeConfig: (config: SiteThemeConfig) => void;
  slides: SlideItem[];
  updateSlides: (slides: SlideItem[]) => void;
  showToast: (msg: string) => void;
}

const HEADER_FONTS = [
  { id: 'Archivo', name: 'Archivo (Default)', style: 'Sovereign Precision Modern Sans' },
  { id: 'Plus Jakarta Sans', name: 'Plus Jakarta Sans', style: 'Geometric Clean & Contemporary' },
  { id: 'Newsreader', name: 'Newsreader', style: 'Refined Editorial Academic Serif' },
  { id: 'Playfair Display', name: 'Playfair Display', style: 'High-Contrast Luxury Serif' },
  { id: 'Outfit', name: 'Outfit', style: 'Minimal Architectural Sans' },
  { id: 'Inter', name: 'Inter', style: 'Clean Neutral Enterprise UI' },
  { id: 'Space Grotesk', name: 'Space Grotesk', style: 'Tech Modernist & Scientific' },
  { id: 'Syne', name: 'Syne', style: 'Bold Contemporary Avant-Garde' },
  { id: 'Montserrat', name: 'Montserrat', style: 'Structured Geometric Sans' },
  { id: 'Cinzel', name: 'Cinzel', style: 'Classical Sovereign Serif' },
  { id: 'Roboto', name: 'Roboto', style: 'Functional Neutral Grotesque' },
  { id: 'JetBrains Mono', name: 'JetBrains Mono', style: 'Terminal Precision Monospace' },
];

const BODY_FONTS = [
  { id: 'Plus Jakarta Sans', name: 'Plus Jakarta Sans (Default)', style: 'Balanced & High Legibility' },
  { id: 'Inter', name: 'Inter', style: 'Universal Enterprise Standard' },
  { id: 'Roboto', name: 'Roboto', style: 'Engineered Clean Legibility' },
  { id: 'Newsreader', name: 'Newsreader', style: 'Literary Long-form Serif' },
  { id: 'Archivo', name: 'Archivo', style: 'Technical Unified Modern Sans' },
  { id: 'Outfit', name: 'Outfit', style: 'Light Contemporary Feel' },
];

const FONT_WEIGHTS = [
  { value: '400', label: 'Regular (400)' },
  { value: '500', label: 'Medium (500)' },
  { value: '600', label: 'Semi-Bold (600)' },
  { value: '700', label: 'Bold (700 — Default)' },
  { value: '800', label: 'Extra-Bold (800)' },
  { value: '900', label: 'Black (900)' },
];

const LETTER_SPACINGS = [
  { value: '-0.05em', label: 'Tighter (-0.05em)' },
  { value: '-0.025em', label: 'Tight (-0.025em)' },
  { value: '0em', label: 'Normal (0em — Default)' },
  { value: '0.025em', label: 'Wide (+0.025em)' },
  { value: '0.05em', label: 'Widest (+0.05em)' },
];

const TEXT_TRANSFORMS = [
  { value: 'none', label: 'As Typed (Default)' },
  { value: 'uppercase', label: 'UPPERCASE' },
  { value: 'capitalize', label: 'Capitalize Each Word' },
];

const THEME_PRESETS = [
  {
    name: 'IP3 Sovereign Coral & Slate',
    primary: '#ff7e67',
    accent: '#2dd4bf',
    tag: '#ff7e67',
    title: '#f8fafc',
    subtitle: '#94a3b8',
    btnBg: '#ff7e67',
    btnText: '#ffffff',
    bg: '#050a12',
    card: '#081220',
    border: '#1e293b',
    headerFont: 'Archivo',
    bodyFont: 'Plus Jakarta Sans',
    swatch: ['#ff7e67', '#2dd4bf', '#050a12'],
  },
  {
    name: 'Emerald Precision Agriscience',
    primary: '#10b981',
    accent: '#34d399',
    tag: '#10b981',
    title: '#f0fdf4',
    subtitle: '#a7f3d0',
    btnBg: '#10b981',
    btnText: '#ffffff',
    bg: '#031710',
    card: '#052e16',
    border: '#065f46',
    headerFont: 'Outfit',
    bodyFont: 'Plus Jakarta Sans',
    swatch: ['#10b981', '#34d399', '#031710'],
  },
  {
    name: 'Royal Diplomatic Navy & Gold',
    primary: '#f59e0b',
    accent: '#38bdf8',
    tag: '#f59e0b',
    title: '#ffffff',
    subtitle: '#cbd5e1',
    btnBg: '#f59e0b',
    btnText: '#0f172a',
    bg: '#0b132b',
    card: '#1c2541',
    border: '#3a506b',
    headerFont: 'Cinzel',
    bodyFont: 'Plus Jakarta Sans',
    swatch: ['#f59e0b', '#38bdf8', '#0b132b'],
  },
  {
    name: 'High-Contrast Monochrome Obsidian',
    primary: '#ffffff',
    accent: '#94a3b8',
    tag: '#ffffff',
    title: '#ffffff',
    subtitle: '#94a3b8',
    btnBg: '#ffffff',
    btnText: '#000000',
    bg: '#000000',
    card: '#0a0a0a',
    border: '#262626',
    headerFont: 'Space Grotesk',
    bodyFont: 'Inter',
    swatch: ['#ffffff', '#737373', '#000000'],
  },
  {
    name: 'Cyberpunk Neon Violet',
    primary: '#a855f7',
    accent: '#06b6d4',
    tag: '#a855f7',
    title: '#faf5ff',
    subtitle: '#d8b4fe',
    btnBg: '#a855f7',
    btnText: '#ffffff',
    bg: '#090314',
    card: '#150828',
    border: '#3b0764',
    headerFont: 'Syne',
    bodyFont: 'Inter',
    swatch: ['#a855f7', '#06b6d4', '#090314'],
  },
  {
    name: 'Executive Editorial Serif',
    primary: '#e2e8f0',
    accent: '#38bdf8',
    tag: '#e2e8f0',
    title: '#ffffff',
    subtitle: '#94a3b8',
    btnBg: '#38bdf8',
    btnText: '#081220',
    bg: '#070d18',
    card: '#0c1626',
    border: '#1f2d42',
    headerFont: 'Newsreader',
    bodyFont: 'Newsreader',
    swatch: ['#e2e8f0', '#38bdf8', '#070d18'],
  },
];

export const ThemeTypographyStudio: React.FC<ThemeTypographyStudioProps> = ({
  themeConfig,
  updateThemeConfig,
  slides,
  updateSlides,
  showToast,
}) => {
  const currentTheme = themeConfig || defaultThemeConfig;
  const [sampleHeadline, setSampleHeadline] = useState(
    'Turning Institutional Pressure Into Actionable Architecture'
  );

  const handleUpdate = (partial: Partial<SiteThemeConfig>) => {
    updateThemeConfig({
      ...currentTheme,
      ...partial,
    });
  };

  const handleAddImportedFont = (newFont: ImportedFont) => {
    const existing = currentTheme.importedFonts || [];
    const updated = [...existing, newFont];
    handleUpdate({
      importedFonts: updated,
      // Automatically set as header font if none set or if user wants
      headerFont: newFont.name,
    });
  };

  const handleRemoveImportedFont = (fontId: string) => {
    const existing = currentTheme.importedFonts || [];
    const removedFont = existing.find((f) => f.id === fontId);
    const updated = existing.filter((f) => f.id !== fontId);

    const updates: Partial<SiteThemeConfig> = { importedFonts: updated };
    if (removedFont && currentTheme.headerFont === removedFont.name) {
      updates.headerFont = 'Archivo';
    }
    if (removedFont && currentTheme.bodyFont === removedFont.name) {
      updates.bodyFont = 'Plus Jakarta Sans';
    }
    handleUpdate(updates);
    showToast(`Removed custom font "${removedFont?.name || fontId}".`);
  };

  const currentHeaderScale = currentTheme.headerScale ?? 1;
  const currentBodyScale = currentTheme.bodyScale ?? 1;

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Type className="w-5 h-5 text-amber-400" />
            <span>Typography, Fonts, Sizes & Color Studio</span>
          </h3>
          <p className="text-xs text-slate-400">
            Total control over header and body fonts, scale multipliers, letter-spacing, font weights, and global color themes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const updatedSlides = slides.map((s) => ({
                ...s,
                accentColor: currentTheme.heroTagColor,
                tagColor: currentTheme.heroTagColor,
                titleColor: currentTheme.heroTitleColor,
                subtitleColor: currentTheme.heroSubtitleColor,
                ctaBgColor: currentTheme.heroButtonBgColor,
                ctaTextColor: currentTheme.heroButtonTextColor,
                overlayTint: currentTheme.heroOverlayStyle,
              }));
              updateSlides(updatedSlides);
              showToast('Applied current colors across all hero slides!');
            }}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Apply to All Slides</span>
          </button>

          <button
            onClick={() => {
              updateThemeConfig(defaultThemeConfig);
              showToast('Reset typography & theme to default IP3 configuration.');
            }}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Preset Themes Selector */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Quick Theme & Typography Palettes</span>
          </h4>
          <span className="text-[11px] text-slate-500">Click any preset to apply typography and colors together</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {THEME_PRESETS.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                handleUpdate({
                  primaryColor: preset.primary,
                  accentColor: preset.accent,
                  heroTagColor: preset.tag,
                  heroTitleColor: preset.title,
                  heroSubtitleColor: preset.subtitle,
                  heroButtonBgColor: preset.btnBg,
                  heroButtonTextColor: preset.btnText,
                  backgroundColor: preset.bg,
                  cardBgColor: preset.card,
                  borderColor: preset.border,
                  headerFont: preset.headerFont,
                  bodyFont: preset.bodyFont,
                });
                showToast(`Loaded palette: ${preset.name}`);
              }}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/60 text-left transition-all hover:scale-[1.02] cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 mb-2">
                {preset.swatch.map((c, i) => (
                  <span
                    key={i}
                    className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold text-slate-200 block truncate group-hover:text-amber-400">
                {preset.name}
              </span>
              <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                {preset.headerFont}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: GLOBAL TYPOGRAPHY CONTROLS */}
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <Type className="w-4 h-4" />
            <span>Global Typography & Font Architecture</span>
          </h4>
          <span className="text-xs text-slate-400">Controls all headers, hero titles, cards & body copy</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Header Font Family */}
          <div className="space-y-2 p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200">
                Header Font Family
              </label>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                {currentTheme.headerFont || 'Archivo'}
              </span>
            </div>
            <select
              value={currentTheme.headerFont || 'Archivo'}
              onChange={(e) => handleUpdate({ headerFont: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white cursor-pointer"
            >
              <optgroup label="Standard Built-in Fonts">
                {HEADER_FONTS.map((font) => (
                  <option key={font.id} value={font.id}>
                    {font.name} — {font.style}
                  </option>
                ))}
              </optgroup>
              {currentTheme.importedFonts && currentTheme.importedFonts.length > 0 && (
                <optgroup label="★ Your Imported Custom Fonts">
                  {currentTheme.importedFonts.map((font) => (
                    <option key={font.id} value={font.name}>
                      ★ {font.name} ({font.source === 'google' ? 'Google Font' : font.source === 'file' ? 'Uploaded File' : 'Web URL'})
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
            <p className="text-[11px] text-slate-400">
              Applied to every `h1`, `h2`, `h3`, `h4`, `h5`, and section headline across the entire application.
            </p>
          </div>

          {/* Body Font Family */}
          <div className="space-y-2 p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200">
                Body Font Family
              </label>
              <span className="text-[11px] font-mono text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded">
                {currentTheme.bodyFont || 'Plus Jakarta Sans'}
              </span>
            </div>
            <select
              value={currentTheme.bodyFont || 'Plus Jakarta Sans'}
              onChange={(e) => handleUpdate({ bodyFont: e.target.value })}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white cursor-pointer"
            >
              <optgroup label="Standard Built-in Fonts">
                {BODY_FONTS.map((font) => (
                  <option key={font.id} value={font.id}>
                    {font.name} — {font.style}
                  </option>
                ))}
              </optgroup>
              {currentTheme.importedFonts && currentTheme.importedFonts.length > 0 && (
                <optgroup label="★ Your Imported Custom Fonts">
                  {currentTheme.importedFonts.map((font) => (
                    <option key={font.id} value={font.name}>
                      ★ {font.name} ({font.source === 'google' ? 'Google Font' : font.source === 'file' ? 'Uploaded File' : 'Web URL'})
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
            <p className="text-[11px] text-slate-400">
              Applied to regular paragraphs, labels, cards body copy, table rows, and descriptions.
            </p>
          </div>
        </div>

        {/* Font Scaling Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Header Scale */}
          <div className="space-y-3 p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span>Header Font Size Multiplier</span>
              </label>
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
                {Math.round(currentHeaderScale * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0.75"
              max="1.50"
              step="0.05"
              value={currentHeaderScale}
              onChange={(e) => handleUpdate({ headerScale: parseFloat(e.target.value) })}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />

            <div className="flex items-center justify-between gap-1.5">
              {[
                { label: 'Compact (85%)', scale: 0.85 },
                { label: 'Default (100%)', scale: 1.0 },
                { label: 'Bold (115%)', scale: 1.15 },
                { label: 'Majestic (130%)', scale: 1.3 },
              ].map((p) => (
                <button
                  key={p.scale}
                  onClick={() => handleUpdate({ headerScale: p.scale })}
                  className={`flex-1 py-1 rounded text-[10px] font-mono transition-all cursor-pointer ${
                    Math.abs(currentHeaderScale - p.scale) < 0.02
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Body Scale */}
          <div className="space-y-3 p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
                <span>Body Font Size Multiplier</span>
              </label>
              <span className="text-xs font-mono font-bold text-sky-400 bg-sky-400/10 px-2.5 py-0.5 rounded">
                {Math.round(currentBodyScale * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0.80"
              max="1.35"
              step="0.05"
              value={currentBodyScale}
              onChange={(e) => handleUpdate({ bodyScale: parseFloat(e.target.value) })}
              className="w-full accent-sky-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />

            <div className="flex items-center justify-between gap-1.5">
              {[
                { label: 'Refined (90%)', scale: 0.9 },
                { label: 'Default (100%)', scale: 1.0 },
                { label: 'Roomy (110%)', scale: 1.1 },
                { label: 'Large (120%)', scale: 1.2 },
              ].map((p) => (
                <button
                  key={p.scale}
                  onClick={() => handleUpdate({ bodyScale: p.scale })}
                  className={`flex-1 py-1 rounded text-[10px] font-mono transition-all cursor-pointer ${
                    Math.abs(currentBodyScale - p.scale) < 0.02
                      ? 'bg-sky-400 text-slate-950 font-bold'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Header Font Weight, Tracking & Transform */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Font Weight */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Header Font Weight
            </label>
            <select
              value={currentTheme.headerFontWeight || '700'}
              onChange={(e) => handleUpdate({ headerFontWeight: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
            >
              {FONT_WEIGHTS.map((w) => (
                <option key={w.value} value={w.value}>
                  {w.label}
                </option>
              ))}
            </select>
          </div>

          {/* Letter Spacing */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Header Letter Spacing (Tracking)
            </label>
            <select
              value={currentTheme.headerLetterSpacing || '0em'}
              onChange={(e) => handleUpdate({ headerLetterSpacing: e.target.value })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
            >
              {LETTER_SPACINGS.map((ls) => (
                <option key={ls.value} value={ls.value}>
                  {ls.label}
                </option>
              ))}
            </select>
          </div>

          {/* Text Transform */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Header Text Transform
            </label>
            <select
              value={currentTheme.headerTransform || 'none'}
              onChange={(e) => handleUpdate({ headerTransform: e.target.value as 'none' | 'uppercase' | 'capitalize' | 'lowercase' })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
            >
              {TEXT_TRANSFORMS.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FONT IMPORTER & CUSTOM FONT LIBRARY */}
      <FontImporter
        importedFonts={currentTheme.importedFonts || []}
        onAddFont={handleAddImportedFont}
        onRemoveFont={handleRemoveImportedFont}
        onSelectHeaderFont={(fontName) => {
          handleUpdate({ headerFont: fontName });
          showToast(`Set "${fontName}" as Header Font!`);
        }}
        onSelectBodyFont={(fontName) => {
          handleUpdate({ bodyFont: fontName });
          showToast(`Set "${fontName}" as Body Font!`);
        }}
        currentHeaderFont={currentTheme.headerFont}
        currentBodyFont={currentTheme.bodyFont}
        showToast={showToast}
      />

      {/* LIVE INTERACTIVE TYPOGRAPHY PREVIEW STUDIO */}
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-400" />
            <span>Live Interactive Typography Simulation</span>
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400">
              Header: <span className="text-amber-400">{currentTheme.headerFont || 'Archivo'}</span> ({Math.round(currentHeaderScale * 100)}%)
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-[11px] font-mono text-slate-400">
              Body: <span className="text-sky-400">{currentTheme.bodyFont || 'Plus Jakarta Sans'}</span> ({Math.round(currentBodyScale * 100)}%)
            </span>
          </div>
        </div>

        {/* Editable test sentence */}
        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Test Your Headline (Type below to test live rendering):
          </label>
          <input
            type="text"
            value={sampleHeadline}
            onChange={(e) => setSampleHeadline(e.target.value)}
            className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
          />
        </div>

        {/* Live Simulation Card */}
        <div
          className="p-6 rounded-xl border border-slate-800 shadow-xl transition-all"
          style={{
            backgroundColor: currentTheme.cardBgColor || '#081220',
          }}
        >
          <div className="space-y-4">
            {/* Tag Badge */}
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: currentTheme.primaryColor || '#ff7e67' }}
              />
              <span
                className="text-[11px] font-mono uppercase tracking-widest font-bold"
                style={{ color: currentTheme.primaryColor || '#ff7e67' }}
              >
                Simulated Live Typography
              </span>
            </div>

            {/* Rendered H1 */}
            <h1
              style={{
                fontFamily: `'${currentTheme.headerFont || 'Archivo'}', sans-serif`,
                fontWeight: currentTheme.headerFontWeight || '700',
                letterSpacing: currentTheme.headerLetterSpacing || '0em',
                textTransform: (currentTheme.headerTransform || 'none') as any,
                fontSize: `calc(2rem * ${currentHeaderScale})`,
                color: currentTheme.textColor || '#f8fafc',
                lineHeight: 1.15,
              }}
            >
              {sampleHeadline}
            </h1>

            {/* Rendered H2 */}
            <h2
              style={{
                fontFamily: `'${currentTheme.headerFont || 'Archivo'}', sans-serif`,
                fontWeight: currentTheme.headerFontWeight || '700',
                letterSpacing: currentTheme.headerLetterSpacing || '0em',
                textTransform: (currentTheme.headerTransform || 'none') as any,
                fontSize: `calc(1.25rem * ${currentHeaderScale})`,
                color: currentTheme.accentColor || '#2dd4bf',
                lineHeight: 1.25,
              }}
            >
              Sub-Framework: Precision Agriscience & Institutional Resilience
            </h2>

            {/* Rendered Body Text */}
            <p
              style={{
                fontFamily: `'${currentTheme.bodyFont || 'Plus Jakarta Sans'}', sans-serif`,
                fontSize: `calc(0.95rem * ${currentBodyScale})`,
                color: currentTheme.textMutedColor || '#94a3b8',
                lineHeight: 1.6,
              }}
            >
              When overlapping biological, climate, and institutional supply systems are properly modeled, friction ceases to be merely a threat. It transforms into direct material for architectural engineering and sustainable food sovereignty.
            </p>

            {/* Interactive action button */}
            <div className="pt-2 flex items-center gap-3">
              <button
                style={{
                  backgroundColor: currentTheme.heroButtonBgColor || currentTheme.primaryColor || '#ff7e67',
                  color: currentTheme.heroButtonTextColor || '#ffffff',
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-opacity hover:opacity-90"
              >
                Simulated CTA Action
              </button>
              <span className="text-[11px] text-slate-500 font-mono">
                Weight: {currentTheme.headerFontWeight || '700'} | Tracking: {currentTheme.headerLetterSpacing || '0em'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: GLOBAL COLOR PALETTE */}
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span>Global Theme Color Palette</span>
          </h4>
          <p className="text-xs text-slate-400">
            Control primary accents, backgrounds, surfaces, borders, and typography colors throughout the site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Primary Coral / Accent */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Primary Brand Accent
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.primaryColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ primaryColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.primaryColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ primaryColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Buttons & Highlights</span>
            </div>
          </div>

          {/* Secondary Teal Accent */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Secondary Accent
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.accentColor || '#2dd4bf'}
                onChange={(e) => handleUpdate({ accentColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.accentColor || '#2dd4bf'}
                onChange={(e) => handleUpdate({ accentColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Badges & Subheads</span>
            </div>
          </div>

          {/* Canvas Background */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Canvas Background
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.backgroundColor || '#050a12'}
                onChange={(e) => handleUpdate({ backgroundColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.backgroundColor || '#050a12'}
                onChange={(e) => handleUpdate({ backgroundColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Page Canvas</span>
            </div>
          </div>

          {/* Card / Surface Background */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Card / Surface Background
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.cardBgColor || '#081220'}
                onChange={(e) => handleUpdate({ cardBgColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.cardBgColor || '#081220'}
                onChange={(e) => handleUpdate({ cardBgColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Container Panels</span>
            </div>
          </div>

          {/* Border Line Color */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Borders & Dividers
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.borderColor || '#1e293b'}
                onChange={(e) => handleUpdate({ borderColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.borderColor || '#1e293b'}
                onChange={(e) => handleUpdate({ borderColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Dividing Lines</span>
            </div>
          </div>

          {/* Primary Text Color */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Primary Text Color
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.textColor || '#f8fafc'}
                onChange={(e) => handleUpdate({ textColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.textColor || '#f8fafc'}
                onChange={(e) => handleUpdate({ textColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-mono text-white"
              />
              <span className="text-[10px] text-slate-400">Main Headlines</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: HERO SLIDES SPECIFIC CUSTOMIZATION */}
      <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            <span>Hero Presentation Slide Specific Defaults</span>
          </h4>
          <p className="text-xs text-slate-400">
            Set default appearance for the top carousel presentation slides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Headline Title Color
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.heroTitleColor || '#f8fafc'}
                onChange={(e) => handleUpdate({ heroTitleColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.heroTitleColor || '#f8fafc'}
                onChange={(e) => handleUpdate({ heroTitleColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Subtitle / Description Color
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.heroSubtitleColor || '#94a3b8'}
                onChange={(e) => handleUpdate({ heroSubtitleColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.heroSubtitleColor || '#94a3b8'}
                onChange={(e) => handleUpdate({ heroSubtitleColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Hero Tag Accent Color
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.heroTagColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ heroTagColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.heroTagColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ heroTagColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              CTA Button Background
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.heroButtonBgColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ heroButtonBgColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.heroButtonBgColor || '#ff7e67'}
                onChange={(e) => handleUpdate({ heroButtonBgColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              CTA Button Text Color
            </label>
            <div className="flex items-center gap-2.5">
              <input
                type="color"
                value={currentTheme.heroButtonTextColor || '#ffffff'}
                onChange={(e) => handleUpdate({ heroButtonTextColor: e.target.value })}
                className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
              />
              <input
                type="text"
                value={currentTheme.heroButtonTextColor || '#ffffff'}
                onChange={(e) => handleUpdate({ heroButtonTextColor: e.target.value })}
                className="w-28 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Hero Background Overlay Tint
            </label>
            <select
              value={currentTheme.heroOverlayStyle || 'dark'}
              onChange={(e) => handleUpdate({ heroOverlayStyle: e.target.value as any })}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
            >
              <option value="dark">Dark Cinematic Vignette</option>
              <option value="light">Light Frost</option>
              <option value="gradient">Soft Left-to-Right Gradient</option>
              <option value="glass">Subtle Glassmorphism Blur</option>
              <option value="none">None (Clean Raw Photography)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

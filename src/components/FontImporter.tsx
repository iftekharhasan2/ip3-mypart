import React, { useState, useRef } from 'react';
import {
  Download,
  Upload,
  Globe,
  Link2,
  Plus,
  Trash2,
  Check,
  Sparkles,
  ExternalLink,
  FileCode,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { ImportedFont } from '../types';

interface FontImporterProps {
  importedFonts: ImportedFont[];
  onAddFont: (font: ImportedFont) => void;
  onRemoveFont: (fontId: string) => void;
  onSelectHeaderFont: (fontName: string) => void;
  onSelectBodyFont: (fontName: string) => void;
  currentHeaderFont?: string;
  currentBodyFont?: string;
  showToast: (msg: string) => void;
}

// Curated one-click popular web fonts from Google Fonts
const POPULAR_GOOGLE_FONTS = [
  { name: 'DM Sans', category: 'sans-serif', note: 'Modern Minimal Geometric' },
  { name: 'Fraunces', category: 'serif', note: 'Expressive Editorial Serif' },
  { name: 'Manrope', category: 'sans-serif', note: 'Architectural Tech Sans' },
  { name: 'Sora', category: 'sans-serif', note: 'Clean Futuristic Grotesque' },
  { name: 'Epilogue', category: 'sans-serif', note: 'Strong Impact Headline' },
  { name: 'Poppins', category: 'sans-serif', note: 'Friendly Balanced Geometric' },
  { name: 'Lora', category: 'serif', note: 'Academic Contemporary Serif' },
  { name: 'Oswald', category: 'display', note: 'Condensed Bold Headline' },
  { name: 'Bebas Neue', category: 'display', note: 'Tall Sovereign Poster Display' },
  { name: 'Fira Code', category: 'monospace', note: 'Precision Monospace' },
];

export const FontImporter: React.FC<FontImporterProps> = ({
  importedFonts,
  onAddFont,
  onRemoveFont,
  onSelectHeaderFont,
  onSelectBodyFont,
  currentHeaderFont,
  currentBodyFont,
  showToast,
}) => {
  const [activeMode, setActiveMode] = useState<'google' | 'url' | 'file'>('google');

  // Mode 1: Google Font state
  const [googleFontInput, setGoogleFontInput] = useState('');
  const [googleFontCategory, setGoogleFontCategory] = useState<'sans-serif' | 'serif' | 'display' | 'monospace'>('sans-serif');

  // Mode 2: External Web URL state
  const [urlFontName, setUrlFontName] = useState('');
  const [urlFontLink, setUrlFontLink] = useState('');
  const [urlFontFormat, setUrlFontFormat] = useState<'woff2' | 'woff' | 'truetype' | 'opentype'>('woff2');

  // Mode 3: Local file upload state
  const [localFontName, setLocalFontName] = useState('');
  const [localFileDataUrl, setLocalFileDataUrl] = useState<string | null>(null);
  const [localFileName, setLocalFileName] = useState('');
  const [localFileSize, setLocalFileSize] = useState<number | null>(null);
  const [localFontFormat, setLocalFontFormat] = useState<'woff2' | 'woff' | 'truetype' | 'opentype'>('woff2');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper to parse Google Fonts name from URL or embed code
  const parseGoogleFontName = (input: string): { name: string; url: string } => {
    const trimmed = input.trim();

    // Check if user pasted an @import or <link> or direct URL
    const hrefMatch = trimmed.match(/href=["'](https:\/\/fonts\.googleapis\.com\/css2[^"']+)["']/i);
    const importMatch = trimmed.match(/url\(["']?(https:\/\/fonts\.googleapis\.com\/css2[^"')]+)["']?\)/i);
    const directUrlMatch = trimmed.startsWith('https://fonts.googleapis.com/css2') ? trimmed : null;

    const fullUrl = hrefMatch?.[1] || importMatch?.[1] || directUrlMatch;

    if (fullUrl) {
      try {
        const parsedUrl = new URL(fullUrl);
        const familyParam = parsedUrl.searchParams.get('family');
        if (familyParam) {
          const rawName = familyParam.split(':')[0].replace(/\+/g, ' ');
          return { name: rawName, url: fullUrl };
        }
      } catch {
        // Fallback to regex
        const familyMatch = fullUrl.match(/family=([^:&]+)/);
        if (familyMatch) {
          return { name: decodeURIComponent(familyMatch[1]).replace(/\+/g, ' '), url: fullUrl };
        }
      }
    }

    // Otherwise, treat input as the font family name
    const cleanedName = trimmed.replace(/[<>"';]/g, '');
    const encoded = encodeURIComponent(cleanedName).replace(/%20/g, '+');
    const generatedUrl = `https://fonts.googleapis.com/css2?family=${encoded}:ital,wght@0,300..900;1,300..900&display=swap`;
    return { name: cleanedName, url: generatedUrl };
  };

  const handleImportGoogleFont = (fontNameOrUrl: string) => {
    if (!fontNameOrUrl.trim()) {
      showToast('Please enter a Google Font name or URL.');
      return;
    }

    const { name, url } = parseGoogleFontName(fontNameOrUrl);
    if (!name) {
      showToast('Could not extract font name. Please check your input.');
      return;
    }

    // Check if already imported
    if (importedFonts.some((f) => f.name.toLowerCase() === name.toLowerCase())) {
      showToast(`Font "${name}" is already in your library!`);
      return;
    }

    const newFont: ImportedFont = {
      id: `font-google-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name,
      source: 'google',
      url,
      category: googleFontCategory,
      addedAt: new Date().toISOString(),
    };

    onAddFont(newFont);
    setGoogleFontInput('');
    showToast(`Successfully imported Google Font: "${name}"!`);
  };

  const handleImportWebUrlFont = () => {
    if (!urlFontName.trim()) {
      showToast('Please enter a font family name.');
      return;
    }
    if (!urlFontLink.trim()) {
      showToast('Please enter the font stylesheet or file URL.');
      return;
    }

    const name = urlFontName.trim();
    if (importedFonts.some((f) => f.name.toLowerCase() === name.toLowerCase())) {
      showToast(`Font "${name}" is already in your library!`);
      return;
    }

    // Detect format if direct font file
    let detectedFormat = urlFontFormat;
    const lowerUrl = urlFontLink.toLowerCase();
    if (lowerUrl.includes('.woff2')) detectedFormat = 'woff2';
    else if (lowerUrl.includes('.woff')) detectedFormat = 'woff';
    else if (lowerUrl.includes('.ttf')) detectedFormat = 'truetype';
    else if (lowerUrl.includes('.otf')) detectedFormat = 'opentype';

    const newFont: ImportedFont = {
      id: `font-url-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name,
      source: 'url',
      url: urlFontLink.trim(),
      format: detectedFormat,
      addedAt: new Date().toISOString(),
    };

    onAddFont(newFont);
    setUrlFontName('');
    setUrlFontLink('');
    showToast(`Successfully imported Web Font: "${name}"!`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit: max 6MB
    if (file.size > 6 * 1024 * 1024) {
      showToast('Font file exceeds 6MB. Please upload a smaller .woff2 or .woff file.');
      return;
    }

    const ext = file.name.split('.').pop()?.toLowerCase();
    let format: 'woff2' | 'woff' | 'truetype' | 'opentype' = 'woff2';
    if (ext === 'woff2') format = 'woff2';
    else if (ext === 'woff') format = 'woff';
    else if (ext === 'ttf') format = 'truetype';
    else if (ext === 'otf') format = 'opentype';

    // Auto-generate clean font family name from file name
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    const cleanedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setLocalFileDataUrl(dataUrl);
      setLocalFontName(cleanedName);
      setLocalFileName(file.name);
      setLocalFileSize(file.size);
      setLocalFontFormat(format);
      showToast(`Loaded ${file.name}. Review name and click "Embed & Save Font".`);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveLocalFont = () => {
    if (!localFontName.trim()) {
      showToast('Please provide a name for your custom font.');
      return;
    }
    if (!localFileDataUrl) {
      showToast('Please select a font file first.');
      return;
    }

    const name = localFontName.trim();
    if (importedFonts.some((f) => f.name.toLowerCase() === name.toLowerCase())) {
      showToast(`Font "${name}" is already in your library!`);
      return;
    }

    const newFont: ImportedFont = {
      id: `font-file-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name,
      source: 'file',
      dataUrl: localFileDataUrl,
      format: localFontFormat,
      addedAt: new Date().toISOString(),
    };

    onAddFont(newFont);
    setLocalFontName('');
    setLocalFileDataUrl(null);
    setLocalFileName('');
    setLocalFileSize(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    showToast(`Successfully saved and embedded custom font: "${name}"!`);
  };

  return (
    <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-6">
      {/* Importer Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Font Importer Studio</span>
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Import Google Fonts by name/URL, external web font stylesheets, or upload local .woff2, .woff, and .ttf font files.
          </p>
        </div>

        {/* Source Mode Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveMode('google')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'google'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Google Fonts</span>
          </button>

          <button
            onClick={() => setActiveMode('url')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'url'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Web URL / CSS</span>
          </button>

          <button
            onClick={() => setActiveMode('file')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              activeMode === 'file'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload File</span>
          </button>
        </div>
      </div>

      {/* TAB 1: GOOGLE FONTS IMPORTER */}
      {activeMode === 'google' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
            <label className="block text-xs font-semibold text-slate-200">
              Enter Google Font Name or Paste Embed Code / URL
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="e.g. DM Sans, Fraunces, Manrope, or https://fonts.googleapis.com/css2?family=..."
                  value={googleFontInput}
                  onChange={(e) => setGoogleFontInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleImportGoogleFont(googleFontInput);
                    }
                  }}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <select
                value={googleFontCategory}
                onChange={(e) => setGoogleFontCategory(e.target.value as any)}
                className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-300"
              >
                <option value="sans-serif">Sans-Serif</option>
                <option value="serif">Serif</option>
                <option value="display">Display</option>
                <option value="monospace">Monospace</option>
              </select>

              <button
                onClick={() => handleImportGoogleFont(googleFontInput)}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Import Font</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-400">
              Tip: You can paste the direct font name (e.g. <span className="text-amber-400 font-mono">Fraunces</span>) or the full <span className="font-mono text-slate-300">&lt;link&gt;</span> tag from Google Fonts. Weights 300 to 900 are loaded automatically.
            </p>
          </div>

          {/* Quick-import popular fonts chips */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>One-Click Popular Font Presets</span>
            </span>

            <div className="flex flex-wrap gap-2">
              {POPULAR_GOOGLE_FONTS.map((gf) => {
                const isImported = importedFonts.some((f) => f.name.toLowerCase() === gf.name.toLowerCase());
                return (
                  <button
                    key={gf.name}
                    onClick={() => {
                      if (isImported) {
                        onSelectHeaderFont(gf.name);
                        showToast(`Activated ${gf.name} as header font!`);
                      } else {
                        handleImportGoogleFont(gf.name);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-2 transition-all cursor-pointer ${
                      isImported
                        ? 'bg-amber-400/10 border-amber-400/50 text-amber-300 hover:bg-amber-400/20'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-bold">{gf.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal">({gf.note})</span>
                    {isImported ? (
                      <Check className="w-3 h-3 text-amber-400" />
                    ) : (
                      <Plus className="w-3 h-3 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXTERNAL WEB URL / CSS IMPORTER */}
      {activeMode === 'url' && (
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Font Family Name
              </label>
              <input
                type="text"
                placeholder="e.g. General Sans, Clash Grotesk, CustomFont"
                value={urlFontName}
                onChange={(e) => setUrlFontName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Format
              </label>
              <select
                value={urlFontFormat}
                onChange={(e) => setUrlFontFormat(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-300"
              >
                <option value="woff2">WOFF2 (Modern Web - Recommended)</option>
                <option value="woff">WOFF (Web Font)</option>
                <option value="truetype">TrueType (.ttf)</option>
                <option value="opentype">OpenType (.otf)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1">
              CSS Stylesheet URL or Direct Font File URL
            </label>
            <input
              type="url"
              placeholder="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap or https://.../font.woff2"
              value={urlFontLink}
              onChange={(e) => setUrlFontLink(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={handleImportWebUrlFont}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Import Web Font URL</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: LOCAL FILE UPLOAD IMPORTER */}
      {activeMode === 'file' && (
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-amber-400/60 bg-slate-950/80 rounded-xl p-6 text-center cursor-pointer transition-all group"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".woff2,.woff,.ttf,.otf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-900 group-hover:bg-amber-400/10 flex items-center justify-center text-slate-400 group-hover:text-amber-400 transition-all mb-3">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-xs font-bold text-slate-200 group-hover:text-amber-400">
              {localFileName ? `Selected: ${localFileName}` : 'Click to Upload Font File (.woff2, .woff, .ttf, .otf)'}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              File is embedded directly in your CMS state as a web-safe Data URL.
            </p>
            {localFileSize && (
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                {(localFileSize / 1024).toFixed(1)} KB • {localFontFormat.toUpperCase()}
              </span>
            )}
          </div>

          {localFileDataUrl && (
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Font Family Name
                  </label>
                  <input
                    type="text"
                    value={localFontName}
                    onChange={(e) => setLocalFontName(e.target.value)}
                    placeholder="e.g. MyCustomFont"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Detected Format
                  </label>
                  <select
                    value={localFontFormat}
                    onChange={(e) => setLocalFontFormat(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-300"
                  >
                    <option value="woff2">WOFF2 (Recommended)</option>
                    <option value="woff">WOFF</option>
                    <option value="truetype">TrueType (.ttf)</option>
                    <option value="opentype">OpenType (.otf)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  onClick={() => {
                    setLocalFileDataUrl(null);
                    setLocalFileName('');
                    setLocalFontName('');
                  }}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveLocalFont}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Check className="w-4 h-4" />
                  <span>Embed & Save Font</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SECTION: IMPORTED FONTS LIBRARY LIST */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Your Imported Custom Fonts ({importedFonts.length})</span>
          </h4>
          <span className="text-[11px] text-slate-500">
            Imported fonts can be assigned as Header Font, Body Font, or slide overrides
          </span>
        </div>

        {importedFonts.length === 0 ? (
          <div className="p-6 text-center rounded-xl bg-slate-900/40 border border-slate-800/80">
            <p className="text-xs text-slate-400">
              No custom fonts imported yet. Use the tabs above to import any Google Font, Web font, or upload a local font file.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {importedFonts.map((font) => {
              const isHeaderActive = currentHeaderFont === font.name;
              const isBodyActive = currentBodyFont === font.name;

              return (
                <div
                  key={font.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-sm font-bold text-white block">
                        {font.name}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                          {font.source === 'google'
                            ? 'Google Fonts'
                            : font.source === 'file'
                            ? 'Uploaded File'
                            : 'Web URL'}
                        </span>
                        {font.category && (
                          <span className="text-[10px] text-slate-400 capitalize">
                            {font.category}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Remove custom font "${font.name}"?`)) {
                          onRemoveFont(font.id);
                        }
                      }}
                      className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                      title="Delete font"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Specimen Preview in that exact font */}
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80">
                    <p
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                      className="text-base text-slate-200 tracking-tight leading-snug line-clamp-1"
                    >
                      Agriscience & Strategic Ecosystem Architecture
                    </p>
                    <p
                      style={{ fontFamily: `'${font.name}', sans-serif` }}
                      className="text-xs text-slate-400 mt-1 line-clamp-1"
                    >
                      The quick brown fox jumps over the lazy dog • 0123456789
                    </p>
                  </div>

                  {/* One-click assignment buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onSelectHeaderFont(font.name)}
                      className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isHeaderActive
                          ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {isHeaderActive ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3 h-3" />}
                      <span>{isHeaderActive ? 'Header Active' : 'Set as Header'}</span>
                    </button>

                    <button
                      onClick={() => onSelectBodyFont(font.name)}
                      className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isBodyActive
                          ? 'bg-sky-400 text-slate-950 font-bold shadow-sm'
                          : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      {isBodyActive ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3 h-3" />}
                      <span>{isBodyActive ? 'Body Active' : 'Set as Body'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

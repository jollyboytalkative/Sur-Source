import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface TopBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const SUBTITLE_TEXT = 'Bollywood Music Origins';

export const TopBar: React.FC<TopBarProps> = ({ onNavigate }) => {
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    let cancelled = false;

    const alignSubtitleKerning = () => {
      if (cancelled) return;
      const titleEl = titleRef.current;
      const subEl = subtitleRef.current;
      if (!titleEl || !subEl) return;

      subEl.style.letterSpacing = '0px';
      subEl.style.marginRight = '0px';

      const titleWidth = titleEl.getBoundingClientRect().width;
      const baseWidth = subEl.getBoundingClientRect().width;
      const gaps = SUBTITLE_TEXT.length - 1;

      if (titleWidth <= 0 || baseWidth <= 0 || gaps <= 0) return;

      if (baseWidth >= titleWidth) {
        subEl.style.letterSpacing = '0px';
        subEl.style.marginRight = '0px';
        return;
      }

      const targetSpacing = (titleWidth - baseWidth) / gaps;
      subEl.style.letterSpacing = `${targetSpacing.toFixed(3)}px`;

      const renderedWidth = subEl.getBoundingClientRect().width;
      const trailingOverhang = Math.max(0, renderedWidth - titleWidth);
      if (trailingOverhang > 0.1) {
        subEl.style.marginRight = `-${trailingOverhang.toFixed(2)}px`;
      }
    };

    alignSubtitleKerning();
    window.addEventListener('resize', alignSubtitleKerning);

    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
      document.fonts.ready.then(alignSubtitleKerning);
    }

    return () => {
      cancelled = true;
      window.removeEventListener('resize', alignSubtitleKerning);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#E4DDD0]">
      <div className="max-w-[1280px] mx-auto px-6 min-h-16 py-2 flex items-center justify-between gap-4 lg:gap-8">
        <a
          href="/"
          onClick={(e) => {
            if (
              !e.metaKey &&
              !e.ctrlKey &&
              !e.shiftKey &&
              !e.altKey &&
              e.button === 0
            ) {
              e.preventDefault();
              onNavigate('top');
            }
          }}
          className="flex items-center gap-3 shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
        >
          <img
            src="/assets/aistudio/sur_source_83510373.png"
            alt="Sur & Source — Bollywood Music Origins emblem"
            className="w-[51px] h-[51px] sm:w-[55px] sm:h-[55px] object-contain mix-blend-multiply shrink-0"
          />
          <div className="inline-flex flex-col items-start leading-none">
            <span
              ref={titleRef}
              className="font-serif text-[26px] sm:text-[31px] font-semibold tracking-tight leading-none text-[#1C1917] whitespace-nowrap"
            >
              Sur &amp; Source
            </span>
            <span
              ref={subtitleRef}
              className="text-[9px] sm:text-[10px] font-medium text-[#6B655D] mt-1 whitespace-nowrap"
            >
              {SUBTITLE_TEXT}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <a
            href="#director-tabs"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('director-tabs');
            }}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Directors
          </a>
          <a
            href="#song-origin-table"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('song-origin-table');
            }}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Songs &amp; Origins
          </a>
          <a
            href="#filmography"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('filmography');
            }}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Filmography
          </a>
          <a
            href="#archive-notes"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('archive-notes');
            }}
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Methodology
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('song-origin-table')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
          >
            <span>Browse Archive</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

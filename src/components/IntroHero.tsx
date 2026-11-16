import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface IntroHeroProps {
  onStartExploring: () => void;
  onOpenDisclaimer: () => void;
  onOpenContact: () => void;
}

export const IntroHero: React.FC<IntroHeroProps> = ({
  onStartExploring,
  onOpenDisclaimer,
  onOpenContact,
}) => {
  return (
    <section
      id="top"
      className="pt-10 pb-12 md:pt-14 md:pb-14 border-b border-[#E4DDD0]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B655D] mb-3">
            <span className="font-mono uppercase tracking-wider text-[#9A3412] font-medium">
              Independent Music Research
            </span>
            <span aria-hidden="true">·</span>
            <span>Filmography &amp; Provenance Archive</span>
          </div>

          <h1
            className="font-serif text-[#1C1917] font-semibold tracking-tight leading-[1.08] mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
              textWrap: 'balance',
            }}
          >
            Tracing the Melodies Behind Bollywood Cinema
          </h1>

          <div className="space-y-4 text-[15px] sm:text-base leading-[1.72] text-[#44403C] mb-7">
            <p>
              <strong className="font-semibold text-[#1C1917]">
                Sur &amp; Source (Bollywood Music Origins)
              </strong>{' '}
              is an independent research archive bringing together Bollywood
              music directors, their complete filmographies, and documented
              musical influences in one place—beginning with my favourite,{' '}
              <strong className="font-semibold text-[#1C1917]">
                Nadeem–Shravan
              </strong>{' '}
              and expanding across eras to include{' '}
              <strong className="font-semibold text-[#1C1917]">
                Anu Malik, R.D. Burman, Shankar–Jaikishan, A. R. Rahman
                (Bollywood), Naushad, O.P. Nayyar, Anand–Milind,
                Laxmikant–Pyarelal, S. D. Burman, and Ravi (Bollywood)
              </strong>
              , among other composers.
            </p>

            <p className="text-[14px] sm:text-[15px] text-[#57534E]">
              Every soundtrack entry preserves studio originals alongside
              reported adaptations and close similarities with external
              listening links. All references are shared solely for musical
              discovery, comparative study, and appreciation—never to defame,
              discredit, or undermine the artistry of any composer, singer,
              lyricist, or filmmaker.
            </p>

            <p className="text-[14px] sm:text-[15px] text-[#57534E]">
              If you notice any mistake anywhere in this archive, please{' '}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="font-medium text-[#9A3412] hover:underline underline-offset-4 transition-colors"
              >
                inform me
              </a>
              . Your comments are welcome, and I will get it changed.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onStartExploring}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
            >
              <span>Explore Music Directors</span>
              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <a
              href="/disclaimer"
              onClick={(e) => {
                e.preventDefault();
                onOpenDisclaimer();
              }}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#57534E] hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Read Full Disclaimer</span>
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

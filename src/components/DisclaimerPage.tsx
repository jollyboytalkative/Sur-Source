import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DisclaimerPageProps {
  onNavigateRoute: (path: '/' | '/disclaimer' | '/contact') => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({
  onNavigateRoute,
}) => {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateRoute('/');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#57534E] hover:text-[#9A3412] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Archive</span>
          </a>

          <article className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-6 sm:p-10">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#9A3412] font-medium mb-2">
              Editorial &amp; Legal Notice
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight leading-tight pb-6 mb-6 border-b border-[#E4DDD0]">
              Disclaimer — Bollywood Music Origins
            </h1>

            <div className="space-y-4 text-[15px] leading-[1.75] text-[#44403C]">
              <p>
                Bollywood Music Origins (Sur &amp; Source) is an independent music
                research and information platform created with the sole intention of
                bringing together information about Bollywood music directors, their
                compositions, and possible musical influences, adaptations, and
                similarities in one convenient place.
              </p>

              <p className="font-semibold text-[#1C1917]">
                Our intention is neither to defame, discredit, disrespect, nor
                undermine the reputation, talent, creativity, or achievements of any
                music director, composer, singer, lyricist, or other artist.
              </p>

              <p>
                We recognise and respect the immense contributions made by these
                artists to Indian cinema and music. This platform is simply an effort
                to document and organise publicly available information, allowing music
                enthusiasts to explore musical connections, historical influences, and
                similarities between compositions.
              </p>

              <p>
                Any references to songs showing &ldquo;close similarities,&rdquo;
                &ldquo;inspired,&rdquo; &ldquo;adapted,&rdquo; or melodic parallels
                are presented for informational, research, discussion, and comparative
                purposes only. Such references should not automatically be interpreted
                as allegations or established findings of plagiarism or copyright
                infringement.
              </p>

              <p>
                Information about musical similarities may originate from publicly
                available sources, music databases, articles, interviews, or
                independent comparisons. Wherever possible, relevant sources are
                provided. Some comparisons may be subjective, disputed, or incomplete.
              </p>

              <p className="font-semibold text-[#1C1917]">
                All external audio and video links direct visitors to third-party
                platforms such as YouTube. This website does not host, reproduce,
                distribute, or claim ownership of any copyrighted music or video
                recordings.
              </p>

              <p>
                All copyrights, trademarks, musical compositions, sound recordings,
                images, and other intellectual property remain the property of their
                respective owners.
              </p>

              <p>
                We welcome factual corrections, clarifications, additional references,
                and feedback from artists, composers, copyright holders, researchers,
                and music enthusiasts.
              </p>

              <p>
                Our objective is to encourage musical discovery, informed discussion,
                and appreciation of Bollywood&rsquo;s rich musical heritage.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4DDD0] flex flex-wrap items-center justify-between gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute('/contact');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] hover:underline underline-offset-4"
              >
                <span>Submit a Correction or Copyright Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute('/');
                }}
                className="text-xs font-medium text-[#57534E] hover:text-[#1C1917]"
              >
                Return to Song &amp; Filmography Index
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

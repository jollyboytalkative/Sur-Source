import React from 'react';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../config/contact';

interface ContactPageProps {
  onNavigateRoute: (path: '/' | '/disclaimer' | '/contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateRoute,
}) => {
  const mailtoHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        'Bollywood Music Origins — Correction / Inquiry'
      )}`
    : undefined;

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
              Editorial Review &amp; Attribution
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight leading-tight pb-6 mb-6 border-b border-[#E4DDD0]">
              Contact / Corrections
            </h1>

            <div className="space-y-5 text-[15px] leading-[1.75] text-[#44403C]">
              <p>
                We welcome factual corrections, clarifications, disputed
                comparison notes, missing credits, additional references, and
                copyright or attribution inquiries from artists, composers,
                rights holders, researchers, and listeners.
              </p>

              <p>
                When writing in, please include the{' '}
                <strong className="font-semibold text-[#1C1917]">
                  film title, song title
                </strong>
                , and any{' '}
                <strong className="font-semibold text-[#1C1917]">
                  supporting references or links
                </strong>{' '}
                so your note can be reviewed accurately.
              </p>

              <div className="bg-[#FBF9F5] border border-[#E4DDD0] rounded-lg p-5 sm:p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6B655D] mb-2">
                  Contact Email
                </div>
                {mailtoHref ? (
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-[#9A3412] hover:underline underline-offset-4 break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                ) : (
                  <p className="text-sm text-[#6B655D]">
                    Contact email address is not configured yet.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4DDD0] flex flex-wrap items-center justify-between gap-4">
              <a
                href="/disclaimer"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateRoute('/disclaimer');
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] hover:underline underline-offset-4"
              >
                <span>Read Editorial Disclaimer</span>
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

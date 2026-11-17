import React from 'react';
import { ARCHIVE_FAQS } from '../seo/seoConfig';

export const ArchiveNotes: React.FC = () => {
  return (
    <section id="archive-notes" className="py-12 bg-[#F2EDE4]/50">
      <div className="max-w-[1280px] mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-semibold text-[#1C1917] tracking-tight mb-3">
              Archival Methodology &amp; Classification
            </h2>
            <p className="text-sm leading-relaxed text-[#44403C]">
              Indian &amp; Bollywood film music history sits at the intersection of
              original composition, folk adaptation, and cross-border borrowing.
              Rather than flattening every track under one label, this archive
              separates melodies into three distinct tiers and pairs each entry
              with external links for both the Bollywood version and the
              original source.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-5">
              <div className="text-xs font-semibold text-[#9A3412] mb-2">
                01. Close Similarity
              </div>
              <p className="text-xs leading-relaxed text-[#57534E]">
                Tracks where the primary mukhda, chorus hook, or melodic line
                closely replicates a pre-existing Pakistani, Arabic, Western, or
                world recording without official composer credit.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-5">
              <div className="text-xs font-semibold text-[#1E3A8A] mb-2">
                02. Inspired / Adapted
              </div>
              <p className="text-xs leading-relaxed text-[#57534E]">
                Compositions sharing notable structural phrasing, folk/ghazal
                templates, synth motifs, or rhythmic blueprints documented by
                musicologists and peers.
              </p>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-5">
              <div className="text-xs font-semibold text-[#14532D] mb-2">
                03. Original Composition
              </div>
              <p className="text-xs leading-relaxed text-[#57534E]">
                Signature studio compositions with no documented external
                similarity, preserved alongside adapted tracks so each film’s
                soundtrack remains complete.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E4DDD0]">
          <h3 className="font-serif text-2xl font-semibold text-[#1C1917] tracking-tight mb-4">
            Frequently Asked Questions · Indian &amp; Bollywood Music Research
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ARCHIVE_FAQS.map((faq) => (
              <article
                key={faq.question}
                className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-5"
              >
                <h4 className="text-sm font-semibold text-[#1C1917] mb-1.5">
                  {faq.question}
                </h4>
                <p className="text-xs leading-relaxed text-[#57534E]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

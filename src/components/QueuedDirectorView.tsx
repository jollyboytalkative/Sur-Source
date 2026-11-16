import React from 'react';
import { ArrowLeft, Music } from 'lucide-react';
import { DirectorProfile } from '../types/archive';

interface QueuedDirectorViewProps {
  director: DirectorProfile;
  onReturnToActive: () => void;
}

export const QueuedDirectorView: React.FC<QueuedDirectorViewProps> = ({
  director,
  onReturnToActive,
}) => {
  return (
    <section className="py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-8 md:p-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#6B655D] mb-3">
            <Music className="w-3.5 h-3.5 text-[#9A3412]" aria-hidden="true" />
            <span className="font-mono uppercase tracking-wider">
              Queued Catalog Phase
            </span>
            <span aria-hidden="true">·</span>
            <span>{director.era}</span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#1C1917] mb-3">
            {director.name} Dossier — Coming Next
          </h2>

          <p className="text-sm leading-relaxed text-[#44403C] mb-6">
            {director.summary} Currently, the active curated archives are populated for{' '}
            <strong className="font-semibold text-[#1C1917]">Nadeem–Shravan</strong>{' '}
            and <strong className="font-semibold text-[#1C1917]">Anu Malik</strong>.
            The {director.name} section will be published next with their verified filmography,
            reported song origin comparisons, and external listening links for both versions.
          </p>

          <button
            type="button"
            onClick={onReturnToActive}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Nadeem–Shravan Catalog</span>
          </button>
        </div>
      </div>
    </section>
  );
};

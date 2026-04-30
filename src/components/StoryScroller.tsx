import { useEffect, useRef, useState } from 'react';

import day2_smiling_team from '../Assets/story2025/day2_smiling_team.jpg';
import day2_two_smiling_people from '../Assets/story2025/day2_two_smiling_people.jpg';
import day2_working_room from '../Assets/story2025/day2_working_room.jpg';
import day3_a_team_in_the_auditorium from '../Assets/story2025/day3_a_team_in_the_auditorium.jpg';
import day3_judges_examing from '../Assets/story2025/day3_judges_examing.jpg';
import day3_the_check from '../Assets/story2025/day3_the_check.jpg';
import hackthons_first_day from '../Assets/story2025/hackthons_first_day.jpg';
import preday_leacture from '../Assets/story2025/preday_leacture.jpg';
import preday_tables from '../Assets/story2025/preday_tables.jpg';

const storySlides = [
  {
    img: preday_leacture,
    caption: '⚡ It All Started Here',
    description:
      'Before the hacking began, our pre-day lecture at Carmel Medical Center fired everyone up. Real doctors. Real problems. Real energy in the room.'
  },
  {
    img: preday_tables,
    caption: '🧠 First Sparks',
    description:
      'Mentors pulled up chairs, students leaned in — ideas started flying before the hackathon even officially kicked off.'
  },
  {
    img: hackthons_first_day,
    caption: "🚀 Day 1: We're GO!",
    description:
      'The room packed out, the schedule hit the screen, and dozens of future med-tech innovators officially launched into 3 days of building.'
  },
  {
    img: day2_working_room,
    caption: '💻 Deep in the Zone',
    description:
      'Day 2 and the whole floor turned into a buzzing innovation lab — laptops open, ideas flowing, coffee dangerously close to keyboards.'
  },
  {
    img: day2_two_smiling_people,
    caption: '😂 When the Idea Finally Clicks',
    description:
      "You know that face? That's the face of two people who just cracked a clinical problem no one had solved before. Pure joy."
  },
  {
    img: day2_smiling_team,
    caption: '💪 T2MED Hackers, Assemble',
    description:
      '"T2MED HACKER® — 100% Innovative." The shirts say it all. This crew came to build, and build they did.'
  },
  {
    img: day3_a_team_in_the_auditorium,
    caption: '🎤 Pitch Day Nerves',
    description:
      'Day 3. The auditorium. Five people together — equal parts exhausted and absolutely ready to present something they built in 48 hours.'
  },
  {
    img: day3_judges_examing,
    caption: '🔍 The Judges Are Watching',
    description:
      'A panel of top clinicians, entrepreneurs, and innovators lean in — every word of every pitch is being weighed.'
  },
  {
    img: day3_the_check,
    caption: '🏆 And the Winner Is...',
    description:
      'First place. A giant check. Huge smiles. T2MED 2025 crowned its champions: OvaSync, with a novel approach to support IVF treatment.'
  }
];

const totalSlidesLabel = String(storySlides.length).padStart(2, '0');

export default function StoryScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const updateIndex = () => {
      const nextIndex = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      const boundedIndex = Math.max(0, Math.min(storySlides.length - 1, nextIndex));
      setCurrentIndex(boundedIndex);
    };

    updateIndex();

    track.addEventListener('scroll', updateIndex, { passive: true });
    window.addEventListener('resize', updateIndex);

    return () => {
      track.removeEventListener('scroll', updateIndex);
      window.removeEventListener('resize', updateIndex);
    };
  }, []);

  const goToSlide = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(storySlides.length - 1, index));
    const slide = slideRefs.current[boundedIndex];

    if (!slide) {
      return;
    }

    slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(boundedIndex);
  };

  return (
    <section className="section story-section" id="winners">
      <style>{`
        .story-section {
          padding-top: 5.6rem;
          padding-bottom: 5.6rem;
        }
        .story-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .story-intro {
          max-width: 44rem;
          color: rgba(238,242,247,.62);
          font-size: .9rem;
          line-height: 1.8;
        }
        .story-shell {
          position: relative;
        }
        .story-track {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--navy2);
          -ms-overflow-style: none;
          scrollbar-width: none;
          box-shadow: 0 24px 60px rgba(3,6,20,.24);
        }
        .story-track::-webkit-scrollbar {
          display: none;
        }
        .story-slide {
          min-width: 100%;
          scroll-snap-align: start;
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(320px, 1fr);
          background: linear-gradient(180deg, rgba(15,18,42,.96) 0%, rgba(9,9,26,.98) 100%);
        }
        .story-media {
          position: relative;
          min-height: 460px;
          overflow: hidden;
          background: var(--navy3);
        }
        .story-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(9,9,26,.05) 0%, rgba(9,9,26,.5) 100%);
          pointer-events: none;
        }
        .story-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .45s ease;
        }
        .story-slide:hover .story-media img {
          transform: scale(1.03);
        }
        .story-copy {
          padding: 2.7rem 2.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .story-meta {
          display: flex;
          align-items: center;
          gap: .7rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .story-step {
          font-family: var(--mono);
          font-size: .62rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--amber);
        }
        .story-chip {
          display: inline-flex;
          align-items: center;
          padding: .32rem .75rem;
          border: 1px solid rgba(124,58,237,.28);
          border-radius: 999px;
          background: rgba(124,58,237,.08);
          font-family: var(--mono);
          font-size: .56rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--purple-lt);
        }
        .story-caption {
          font-family: var(--serif);
          font-size: clamp(1.55rem, 3vw, 2.45rem);
          line-height: 1.12;
          letter-spacing: -.01em;
          margin-bottom: 1rem;
        }
        .story-description {
          max-width: 32ch;
          color: rgba(238,242,247,.66);
          font-size: .9rem;
          line-height: 1.82;
        }
        .story-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(9,9,26,.82);
          color: var(--white);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s ease, border-color .2s ease, opacity .2s ease;
          backdrop-filter: blur(10px);
        }
        .story-arrow:hover:not(:disabled) {
          background: rgba(124,58,237,.16);
          border-color: rgba(124,58,237,.5);
        }
        .story-arrow:disabled {
          opacity: .34;
          cursor: not-allowed;
        }
        .story-arrow-left {
          left: 1rem;
        }
        .story-arrow-right {
          right: 1rem;
        }
        .story-arrow svg {
          width: 18px;
          height: 18px;
        }
        .story-dots {
          display: flex;
          justify-content: center;
          gap: .55rem;
          margin-top: 1.2rem;
        }
        .story-dot {
          width: 11px;
          height: 11px;
          border-radius: 999px;
          border: none;
          background: rgba(148,163,184,.28);
          cursor: pointer;
          transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
        }
        .story-dot-active {
          background: var(--amber);
          transform: scale(1.1);
          box-shadow: 0 0 0 6px rgba(245,166,35,.12);
        }
        @media (max-width: 980px) {
          .story-slide {
            grid-template-columns: 1fr;
          }
          .story-media {
            min-height: 320px;
          }
          .story-copy {
            padding: 1.9rem 1.5rem 2rem;
          }
          .story-description {
            max-width: none;
          }
          .story-arrow {
            top: 260px;
          }
        }
        @media (max-width: 640px) {
          .story-section {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          .story-media {
            min-height: 260px;
          }
          .story-arrow {
            width: 40px;
            height: 40px;
            top: 215px;
          }
          .story-arrow-left {
            left: .75rem;
          }
          .story-arrow-right {
            right: .75rem;
          }
        }
      `}</style>

      <div className="section-header story-header">
        <div className="section-code">T2MED 2025 / Story</div>
        <div>
          <h2 className="section-title">Relive T2MED 2025 ✨</h2>
          <p className="story-intro">
            Last year's hackers built the future of medicine in 3 days. Winning idea spotlight: OvaSync presented a novel approach to support IVF treatment. Here's how it went down.
          </p>
        </div>
      </div>

      <div className="story-shell">
        <button
          type="button"
          className="story-arrow story-arrow-left"
          onClick={() => goToSlide(currentIndex - 1)}
          aria-label="Previous story slide"
          disabled={currentIndex === 0}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="story-track" ref={trackRef}>
          {storySlides.map((slide, index) => (
            <article
              key={slide.caption}
              className="story-slide"
              ref={element => {
                slideRefs.current[index] = element;
              }}
            >
              <div className="story-media">
                <img src={slide.img} alt={slide.caption} />
              </div>

              <div className="story-copy">
                <div className="story-meta">
                  <span className="story-step">
                    {String(index + 1).padStart(2, '0')} / {totalSlidesLabel}
                  </span>
                  <span className="story-chip">Chronological Story</span>
                </div>

                <h3 className="story-caption">{slide.caption}</h3>
                <p className="story-description">{slide.description}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="story-arrow story-arrow-right"
          onClick={() => goToSlide(currentIndex + 1)}
          aria-label="Next story slide"
          disabled={currentIndex === storySlides.length - 1}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="story-dots" aria-label="Story slide progress">
        {storySlides.map((slide, index) => (
          <button
            key={slide.caption}
            type="button"
            className={`story-dot ${index === currentIndex ? 'story-dot-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}
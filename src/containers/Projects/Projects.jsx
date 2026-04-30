import { usePageSeo } from '../../hooks/usePageSeo';
import './Projects.css';

// TODO: Activate during hackathon (linked from homepage button).

export const teamProjects = [
  { id: 'team-01', label: 'TEAM 01', title: 'Project Alpha',  description: 'AI-powered early detection system for cardiac arrhythmias using wearable ECG data.',                 image: '', url: '/team-projects/team-01/index.html' },
  { id: 'team-02', label: 'TEAM 02', title: 'CareSync',       description: 'Unified patient handoff platform reducing communication errors between clinical shifts.',              image: '', url: '/team-projects/team-02/index.html' },
  { id: 'team-03', label: 'TEAM 03', title: 'WoundTrack',     description: 'Computer vision tool for automated wound assessment and healing progress monitoring.',                 image: '', url: '/team-projects/team-03/index.html' },
  { id: 'team-04', label: 'TEAM 04', title: 'MedRoute',       description: 'Smart medication routing system that prevents drug-drug interactions at point of care.',               image: '', url: '/team-projects/team-04/index.html' },
  { id: 'team-05', label: 'TEAM 05', title: 'OptiFlow',       description: 'Real-time OR scheduling optimizer that cuts surgical suite idle time by 30%.',                        image: '', url: '/team-projects/team-05/index.html' },
  { id: 'team-06', label: 'TEAM 06', title: 'SeptiSense',     description: 'Predictive model for early sepsis detection in ICU patients using vitals stream data.',                image: '', url: '/team-projects/team-06/index.html' },
  { id: 'team-07', label: 'TEAM 07', title: 'PathLens',       description: 'Digital pathology assistant that flags suspicious tissue regions for faster biopsy review.',           image: '', url: '/team-projects/team-07/index.html' },
  { id: 'team-08', label: 'TEAM 08', title: 'RehabBot',       description: 'Gamified physiotherapy companion guiding post-surgery patients through recovery exercises.',            image: '', url: '/team-projects/team-08/index.html' },
  { id: 'team-09', label: 'TEAM 09', title: 'NutriPlan',      description: 'Personalised hospital meal planning engine integrating patient allergies and lab values.',             image: '', url: '/team-projects/team-09/index.html' },
  { id: 'team-10', label: 'TEAM 10', title: 'EchoScan',       description: 'Automated echocardiogram quality grading to reduce rework in busy cardiology units.',                 image: '', url: '/team-projects/team-10/index.html' },
  { id: 'team-11', label: 'TEAM 11', title: 'PainScale+',     description: 'Multimodal pain assessment tool combining facial expression analysis with self-report.',               image: '', url: '/team-projects/team-11/index.html' },
  { id: 'team-12', label: 'TEAM 12', title: 'FallGuard',      description: 'Bed-exit prediction system using pressure sensors to prevent patient falls overnight.',                image: '', url: '/team-projects/team-12/index.html' },
  { id: 'team-13', label: 'TEAM 13', title: 'RadAssist',      description: 'Triage prioritisation queue for radiology reports powered by clinical urgency scoring.',               image: '', url: '/team-projects/team-13/index.html' },
  { id: 'team-14', label: 'TEAM 14', title: 'GlucoGuard',     description: 'Closed-loop glucose management advisory for diabetic patients during surgical procedures.',            image: '', url: '/team-projects/team-14/index.html' },
  { id: 'team-15', label: 'TEAM 15', title: 'MoodMap',        description: 'Staff burnout early-warning dashboard aggregating shift load and self-report micro-surveys.',          image: '', url: '/team-projects/team-15/index.html' },
  { id: 'team-16', label: 'TEAM 16', title: 'DrugTrace',      description: 'Blockchain-backed medication provenance tracker ensuring supply-chain integrity in hospitals.',        image: '', url: '/team-projects/team-16/index.html' },
];

const PlaceholderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const Projects = () => {
  usePageSeo({
    title: 'Team Projects | T2MED 2026 Hackathon',
    description: 'Browse the 16 team projects built during the T2MED 2026 hackathon sprint.',
    path: '/projects'
  });

  return (
    <div className="projects-page">
      <header className="projects-page-header">
        <div className="projects-wordmark">T2MED 2026</div>
      </header>

      <main className="projects-main">
        <div className="projects-hero">
          <div className="projects-section-code">Team Projects</div>
          <h1 className="projects-title">
            Explore what<br/><em>48 hours built.</em>
          </h1>
          <p className="projects-lead">
            Browse the projects created by each team during the hackathon sprint. Click any card to view the full project page.
          </p>
        </div>

        <div className="projects-grid">
          {teamProjects.map(t => (
            <a
              key={t.id}
              className="project-card"
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.label}: ${t.title}`}
            >
              <div
                className="project-media"
                style={t.image ? { backgroundImage: `url(${t.image})` } : {}}
              >
                {!t.image && (
                  <div className="project-media-placeholder">
                    <PlaceholderIcon />
                  </div>
                )}
                <span className="project-badge">{t.label}</span>
              </div>
              <div className="project-body">
                <div className="project-title">{t.title}</div>
                <p className="project-desc">{t.description}</p>
                <span className="project-card-arrow">View Project →</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;

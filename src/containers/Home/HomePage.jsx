
import { UseMedia } from 'hooks/useMedia';
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { PrizeCard, PrizeHeading } from '../../components/Prizes/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import { Member } from '../../components/Team';
import biztec from '../../Module/Assets/biztec_1.png';
import {
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  TeamInfo
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={s.src} className="" sm={12} lg={4} md={6}>
          <Sponsor srcx={s.src} altText={`Sponsor ${i + 1}`} />
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <div className="prize-row" key={index}>
      {props.map((s) => (
        <div key={s.className} className={`prize-responsive-col ${s.className}`}>
          <PrizeCard
            topLabel={s.topLabel}
            title={s.title}
            subtitle={s.subtitle}
            extra={s.extra}
            footer={s.footer}
            image={s.image}
            className={s.className}
            footerText={s.footerText}
          />
        </div>
      ))}
    </div>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s) => (
        <Col key={s.name} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((panel) => (
        <Col key={panel[0]?.label || index} sm={12} lg={6} md={6}>
          <Accordion panels={panel} />
        </Col>
      ))}
    </Row>
  );
};

const TracksSection = () => {
  const [activeTrackId, setActiveTrackId] = useState('diagnostics');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tracks = [
    {
      id: 'diagnostics',
      title: 'Diagnostics & Early Detection',
      hero: 'From data to detection.',
      teaser: 'Smarter screening and earlier diagnosis.',
      description:
        'Design technologies that identify disease earlier and more accurately — from AI-powered screening to home-based monitoring solutions.',
      bullets: [
        'Early signal detection',
        'Non-invasive screening',
        'Computer vision & medical imaging',
        'Accessible diagnostics beyond hospitals'
      ]
    },
    {
      id: 'surgical',
      title: 'Surgical Innovation',
      hero: 'Precision under pressure.',
      teaser: 'Safer, smarter operating rooms.',
      description:
        'Reimagine the operating room with smarter tools, real-time guidance, and technologies that reduce complications and enhance surgical performance.',
      bullets: [
        'AI-assisted guidance',
        'Smart OR workflow',
        'Robotic & interventional systems',
        'Safety & infection prevention'
      ]
    },
    {
      id: 'emergency',
      title: 'Emergency Medicine',
      hero: 'Innovation in the first critical minutes.',
      teaser: 'Real-time care from field to trauma room.',
      description:
        'Develop solutions for emergency care — from the field to the ambulance to the trauma room — built to perform under pressure and uncertainty.',
      bullets: [
        'Portable diagnostics',
        'Smart triage systems',
        'Ambulance-to-hospital data flow',
        'Wearable monitoring'
      ]
    },
    {
      id: 'management',
      title: 'Healthcare Management & Logistics',
      hero: 'Fix the bottlenecks. Free the clinicians.',
      teaser: 'Operational innovation that improves flow.',
      description:
        'Engineer smarter healthcare systems by optimizing scheduling, logistics, data flow, and operational decision-making.',
      bullets: [
        'Dynamic prioritization',
        'Patient flow optimization',
        'Documentation automation',
        'Resource utilization'
      ]
    }
  ];

  const activeTrack = tracks.find((t) => t.id === activeTrackId);

  const handleTrackSelect = (trackId) => {
    if (trackId !== activeTrackId) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTrackId(trackId);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section className="tracks-mock-wrapper" id="tracks">
      <h1>Tracks</h1>

      <div className="tracks-intro">
        <p className="tracks-intro-title">Choose Your Track</p>
        <p className="tracks-intro-text">
          This year we are introducing Tracks to focus the most impactful
          healthcare challenges into four areas. Each team selects one track and
          is judged within it first, then the top teams from every track advance
          to the Grand Finale where overall winners are chosen.
        </p>
      </div>

      <div className="tracks-layout">
        {/* Left Panel: Selectable Track List */}
        <div className="tracks-list">
          {tracks.map((track) => {
            const isActive = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                className={`track-compact-card ${isActive ? 'active' : ''}`}
                onClick={() => handleTrackSelect(track.id)}
                aria-pressed={isActive}
                aria-controls="track-details-panel"
              >
                <h3 className="track-compact-title">{track.title}</h3>
                <p className="track-compact-hero">{track.hero}</p>
              </button>
            );
          })}
        </div>

        {/* Right Panel: Track Details */}
        <div
          id="track-details-panel"
          className={`track-details-panel ${isTransitioning ? 'transitioning' : ''}`}
          role="region"
          aria-live="polite"
        >
          {activeTrack && (
            <>
              <h2 className="track-details-title">{activeTrack.title}</h2>
              <p className="track-details-hero">{activeTrack.hero}</p>
              <p className="track-details-description">
                {activeTrack.description}
              </p>
              <div className="track-details-focus">
                <h4>Focus Areas</h4>
                <ul>
                  {activeTrack.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* 2025 WINNERS SECTION (TEMP DISABLED) - Re-enable after T2MED 2026 ends */}
        {/* <CongratsSection /> */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        <TracksSection />

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}

          <div className="biztec-wrapper">
            <img src={biztec} alt="Biztec Logo" className="biztec-logo" />
            <div className="biztec-text">
              <h3 className="biztec-title">Biztec Partnership</h3>
              <p className="biztec-description">
                Honored to partner with BizTec again! As tradition holds, the
                top three teams will earn direct entry to BizTec and financial
                support to bring their projects to life.
              </p>
            </div>
          </div>
        </Row>

        {/* ********Prizes ending here ***** */}

        {/* <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row> */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map((group, index) => (
            <div key={index} className="SponsorGroup">
              {SponsorGroup(group)}
            </div>
          ))}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Judges here **** */}

        <h1 id="judges">Our Judges</h1>
        <p className="judges-info-text">
          <span className="highlight">Tap</span> or{' '}
          <span className="highlight">Hover</span> to learn more about the
          judges!
        </p>

        {JudgesInfo.map(TeamMembers)}

        <h1 id="mentors">Our Mentors</h1>
        {/* {FOOTER.JOIN_TEAM.required && (
          <div className="mentor-section">
            <JoinTeam
              placeholder="Contact Us"
              formLink={SOCIALS.email}
              content="Interested in being a mentor?"
            />
          </div>
        )} */}

        {/* ********Team here ***** */}
        {<br></br>}
        {<br></br>}

        <h1 id="team">Our Team</h1>
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}

        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}

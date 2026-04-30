import React from 'react';
import { MENTOR_TRACK_META, MENTOR_TRACKS } from '../../Module/General';
import { Btn } from '../Landing/index.jsx';
import './style.css';

interface IJoinTeam {
  placeholder: string;
  formLink: string;
  content: string;
}

const JoinTeam: React.FC<IJoinTeam> = ({placeholder, formLink, content}) => {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Send an email" link={formLink} />
      </a>
    </div>
  );
};

const Member = ({ info }: { info: any }) => {
  const { role, name, img, linkedin, bio, subtitle, mentorTracks } = info;
  const hasAllTracks = Array.isArray(mentorTracks) && mentorTracks.includes(MENTOR_TRACKS.ALL_TRACKS);
  const trackIcons = hasAllTracks
    ? [MENTOR_TRACKS.ALL_TRACKS]
    : Array.isArray(mentorTracks)
      ? mentorTracks.slice(0, 3)
      : [];

  return (
    <div className="member">
      <div className="member-img-wrapper">
        <img
          src={img}
          className={`member-img member-${name.toLowerCase().replace(/[^a-z0-9]+/g, '')}`}
          alt={name}
        />
      </div>

      <h3>{name}</h3>
      <p className="role">{role}</p>
      
      {subtitle && (
        <p className="member-subtitle">{subtitle}</p>
      )}

      {trackIcons.length > 0 && (
        <div className="mentor-track-icons" aria-label="Mentor track relevance">
          {trackIcons.map((trackKey: string) => {
            const trackMeta = MENTOR_TRACK_META[trackKey as keyof typeof MENTOR_TRACK_META];
            if (!trackMeta) {
              return null;
            }

            return (
              <span
                key={`${name}-${trackKey}`}
                className="mentor-track-icon"
                title={trackMeta.label}
                aria-label={trackMeta.label}
              >
                <i className={trackMeta.iconClass} aria-hidden="true"></i>
              </span>
            );
          })}
        </div>
      )}

      {bio && (
        <div className="bio-box">
          <p className="bio">{bio}</p>
        </div>
      )}

      <div className="social-links">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        )}
      </div>
    </div>
  );
};



export { JoinTeam, Member };


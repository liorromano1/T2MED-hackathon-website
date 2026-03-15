import { TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h1>{TOP_SECTION.TITLE}</h1>
      <MytypedComponent />
      {/* <Countdown targetDate="2025-05-14T00:00:00" /> */}
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <div className="hero-cta-wrapper">
        <p className="hero-description"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
        <div className="hero-register">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUXH1IZGwiqGO4W2LiR1c2Ch6i-gjGyfDT-2UmTTnIeHjyfA/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Btn class="sponsor_btn" type="Register Now" overlay="Join T2MED 2026" />
          </a>
        </div>
      </div>
      {/* <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div> */}
      {/* <div className="buttom-group">
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn class="sponsor_btn" type="Register" overlay="Join T2MED 2026" />
        </a>

        {/* <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="Join T2MED 2026"
          />
        </a> */}
      {/* </div> */}
    </div>
  );
};

export { Btn, Myinfo };


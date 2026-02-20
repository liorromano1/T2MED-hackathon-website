import airplainImg from '../../Module/Assets/prizesi/2026prizes/Airplain.png';
import espressoImg from '../../Module/Assets/prizesi/2026prizes/Espresso_Machine.png';
import garminImg from '../../Module/Assets/prizesi/2026prizes/Garmin_VivoActive5.png';
import './style.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function PrizeCard(props) {
  const { 
    topLabel, 
    title, 
    subtitle, 
    extra, 
    footer, 
    image, 
    className = '',
    footerText = '' 
  } = props;
  const isFlightPrize = className.includes('prize-flight');

  return (
    <div className={`prize-card-container ${className}`}>
      {topLabel && <div className="prize-label-above">{topLabel}</div>}
      <div className={`prize-card-wrapper ${className}`}>
        <div className="prize-card-background">
          <div className="prize-card-content">
            <h2 className="prize-card-title prize-title">{title}</h2>
            {subtitle && <p className="prize-card-subtitle">{subtitle}</p>}
            {extra && !isFlightPrize && <p className="prize-card-extra">{extra}</p>}
          </div>
          {image && (
            <div className="prize-card-image-container">
              <img src={image} alt={title} className="prize-card-image" />
            </div>
          )}
          {isFlightPrize && (extra || footer) && (
            <div className="prize-bonus">
              {extra && <div className="prize-bonus__amount">{extra}</div>}
              {footer && <div className="prize-bonus__text">{footer}</div>}
            </div>
          )}
        </div>
      </div>
      {footerText && <div className="prize-label-below">{footerText}</div>}
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className={`PrizeCard ${props.className || ""}`}>
      <h2 className="prize-title">{props.title}</h2>
      <div className="prize-bottom-align">
        <img src={props.image} alt="Prize" className="prize-image" />
      </div>
    </div>
  );
}

export { airplainImg, espressoImg, FirstPrize, garminImg, PrizeCard, PrizeHeading };


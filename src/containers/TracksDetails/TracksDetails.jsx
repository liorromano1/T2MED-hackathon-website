import { usePageSeo } from '../../hooks/usePageSeo';
import pattern from '../Home/assets/pattern4.png';
import './TracksDetails.css';

const TracksDetails = () => {
  usePageSeo({
    title: 'T2MED Track Guide | Medical Innovation Hackathon Tracks',
    description:
      'Explore the T2MED 2026 track guide, competition format, and the four innovation tracks shaping the future of healthcare.',
    path: '/tracks-details'
  });

  return (
    <div className="tracks-details-page" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="tracks-details-container">
        <header className="tracks-details-header">
          <h1>T2MED 2026 Track Guide</h1>
          <p className="subtitle">Explore This Year’s Track Structure, House Format, and Path to the Final Stage</p>
        </header>

        <section className="intro-section">
          <p className="intro-text">
            We are thrilled to announce the opening of registration for the <strong>T2MED 2026</strong> medical 
            innovation hackathon. This event represents the forefront of entrepreneurial-technological activity 
            on campus, bringing together engineering, science, and medicine to tackle core challenges of the 
            modern healthcare system.
          </p>
          <p className="intro-text">
            <strong>This year</strong>, the hackathon's activities will be centered around <strong>four professional 
            "Houses"</strong>, serving as dedicated development arenas guided by senior industry mentors, leading 
            clinicians, and academic researchers.
          </p>
        </section>

        <section className="format-section">
          <h2>Competition Format</h2>
          
          <div className="format-block">
            <h3>🏠 The Houses Stage</h3>
            <p>
              In each house, <strong>5 multidisciplinary student teams</strong> from all faculties will operate, 
              closely accompanied by a select team of industry mentors, senior clinicians and academic experts.
            </p>
            <p>
              Each team will present their solution to the <strong>judging panel of their respective house</strong>. 
              The judging panels will consist of leading content experts from academia and industry who deeply 
              understand the clinical and technological challenges of that specific track.
            </p>
            <p>
              Out of the five participating teams in each house, <strong>the top two teams will advance</strong> to 
              the Grand Finale.
            </p>
          </div>

          <div className="format-block">
            <h3>🏆 The Final Stage</h3>
            <p>
              The <strong>eight winning teams</strong>—two from each house—will advance to the final stretch and 
              take the main stage at the festive final event. There, they will pitch their ideas to a judging panel 
              composed of senior industry executives, hospital directors, and leading investors to determine the 
              overall winners.
            </p>
          </div>
        </section>

        <section className="tracks-section">
          <h2>The Four Professional Houses</h2>

          <div className="track-card">
            <div className="track-header">
              <div className="track-title-row">
                <span className="track-number">01</span>
                <h3>Screen & Detect</h3>
              </div>
              <p className="track-tagline">Diagnostics and Early Detection</p>
            </div>
            <div className="track-content">
              <h4>The Challenge</h4>
              <p>
                The critical window of opportunity to save lives often closes due to logistical barriers and 
                bottlenecks in diagnostic systems. Despite technological advancements, many patients are forced 
                to wait extended periods for complex imaging tests, invasive biopsies or lab results.
              </p>
              <p>
                Most advanced medical equipment is expensive, stationary, and concentrated in major medical centers 
                in large cities. This reality creates a severe accessibility gap for residents of the geographic 
                periphery, leading to critical delays in diagnosis and treatment.
              </p>
              <p>
                Clinical workloads can sometimes lead to human error and the missing of crucial clinical details 
                in real-time. These challenges are compounded in the field of psychiatry, where early detection 
                presents a unique hurdle due to the lack of objective, rapid biomarkers.
              </p>

              <h4>Who's in This House?</h4>
              <p>
                Clinicians from relevant fields including <strong>radiologists, internists, psychiatrists, mental 
                health professionals, pathologists and clinical diagnosis experts</strong>. Alongside them will be 
                <strong>high-tech companies and startups</strong> specializing in smart sensors, dedicated testing, 
                and medical data processing. The research framework will be provided by leading researchers from the 
                <strong>faculties of Biomedical Engineering, Data Science, and Computer Science</strong>.
              </p>
            </div>
          </div>

          <div className="track-card">
            <div className="track-header">
              <div className="track-title-row">
                <span className="track-number">02</span>
                <h3>The Future O.R.</h3>
              </div>
              <p className="track-tagline">Designing the Future Operating Room</p>
            </div>
            <div className="track-content">
              <h4>The Challenge</h4>
              <p>
                The patient's surgical journey—before, during, and after surgery—is accompanied by critical 
                challenges that directly affect treatment success. Prior to surgery, patients face long wait times, 
                while the medical information transferred to the surgical team is decentralized and sometimes 
                incomplete.
              </p>
              <p>
                Inside the operating room, teams operate under heavy workloads and high-pressure conditions that 
                impact the quality of care. Throughout the surgery—especially in complex invasive procedures—patients 
                are exposed to risks of infections and intraoperative complications.
              </p>
              <p>
                The challenge doesn't end after discharge: the recovery phase often proceeds without continuous 
                clinical monitoring, which can lead to problematic recoveries and high readmission rates.
              </p>

              <h4>Who's in This House?</h4>
              <p>
                <strong>Surgeons, anesthesiologists, and nursing staff</strong> from surgical and recovery departments. 
                Alongside them will be <strong>high-tech companies and startups</strong> specializing in 3D printing, 
                advanced medical device development, monitoring systems, and remote recovery management tools. The 
                research framework will be provided by leading researchers from the <strong>faculties of Biomedical 
                Engineering, Mechanical Engineering and Computer Science</strong>.
              </p>
            </div>
          </div>

          <div className="track-card">
            <div className="track-header">
              <div className="track-title-row">
                <span className="track-number">03</span>
                <h3>Extreme Clinical Care</h3>
              </div>
              <p className="track-tagline">F2R: Field to Rehab | From the Point of Injury to Full Recovery</p>
            </div>
            <div className="track-content">
              <h4>The Challenge</h4>
              <p>
                Despite its critical importance in saving lives, field and emergency medicine suffers from 
                underinvestment compared to other Health Tech sectors. Delivering medical care outside hospital 
                walls is a complex mission in any scenario—from treating a myocardial infarction in a patient's 
                living room to the clinical management of disaster zones and mass casualty events.
              </p>
              <p>
                The current treatment paradigm is shifting: we now understand that the medical journey does not 
                end at the ER doors. The life-saving interventions performed during the <strong>"golden hour"</strong> in 
                the field serve as the first and most crucial link in the patient's rehabilitation chain.
              </p>
              <p>
                Evacuation time to the hospital is a decisive factor, there is an inherent difficulty in identifying 
                and tracking patients in real time, and vital medical data regarding the mechanism of injury tends 
                to get lost along the evacuation chain—a disconnect that directly compromises the ability to tailor 
                an effective future rehabilitation plan.
              </p>
              <p>
                Medical teams are often forced to make critical decisions under extreme conditions, facing a lack of 
                resources and specialists, an absence of continuous communication, and sometimes operating in 
                life-threatening environments.
              </p>

              <h4>Who's in This House?</h4>
              <p>
                To bridge the gap between the operational frontline and the rehabilitation finish line, this track 
                will unite representatives from the <strong>Medical Corps, Magen David Adom, and search and rescue 
                organizations</strong>, alongside doctors and experts from <strong>Intensive Care Units, Emergency 
                Departments, and Rehabilitation centers</strong>. They will collaborate with <strong>high-tech companies, 
                defense industries, and developers of field-adapted medical devices</strong>. The comprehensive research 
                and clinical framework will be supported by leading researchers from across <strong>all Technion 
                faculties</strong>.
              </p>
            </div>
          </div>

          <div className="track-card">
            <div className="track-header">
              <div className="track-title-row">
                <span className="track-number">04</span>
                <h3>Health Operations & System Management</h3>
              </div>
              <p className="track-tagline">Optimizing Healthcare Flow & Resources</p>
            </div>
            <div className="track-content">
              <h4>The Challenge</h4>
              <p>
                The healthcare system faces complex operational and logistical challenges that directly affect the 
                availability and quality of care. Medical teams operate under heavy workloads and bureaucratic 
                burdens that force them to dedicate precious time to documentation and administrative tasks.
              </p>
              <p>
                Simultaneously, there is a fundamental difficulty in efficiently managing critical resources in 
                real-time: from regulating emergency room loads and managing hospital bed capacities, to optimizing 
                surgical procedure queues and the complex logistical management of equipment warehouses and 
                infrastructure.
              </p>
              <p>
                The lack of synchronization in information transfer between community healthcare clinics and hospitals 
                creates a disconnect in the continuum of care, unnecessary duplication of tests, and the loss of vital 
                medical information.
              </p>

              <h4>Who's in This House?</h4>
              <p>
                Key clinical and administrative figures: <strong>hospital directors, medical and nursing staff</strong> from 
                various clinical fields and <strong>medical operations and logistics managers</strong>. Alongside them will 
                be <strong>high-tech companies and startups</strong> specializing in information systems, data processing 
                and systemic optimization. The research framework will be provided by leading researchers from the 
                <strong>faculties of Industrial Engineering and Management, Data Science, and Computer Science</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <h2>Join the Innovation</h2>
          <p>
            Each house offers a unique opportunity to work alongside leading experts and make a real impact on 
            healthcare challenges. Choose your track, form your team, and help shape the future of medical technology.
          </p>
        </section>

        <div className="closing-divider" aria-hidden="true">
          <span className="closing-divider-line" />
          <span className="closing-divider-icon">⚕</span>
          <span className="closing-divider-line" />
        </div>
      </div>
    </div>
  );
};

export default TracksDetails;

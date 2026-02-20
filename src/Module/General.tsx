import hackathonLogo from './Assets/hackathonLogo_circle.jpeg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';

import bneyzion100 from './Assets/sponsorsLogos/bneyzion100.png';
import carmel from './Assets/sponsorsLogos/carmel-modified.png';
import haemek from './Assets/sponsorsLogos/haemek.jpg';
import hhi from './Assets/sponsorsLogos/hhi.png';
import hililyafe from './Assets/sponsorsLogos/hilel_yafe-modified.png';
import rambam from './Assets/sponsorsLogos/Rambam.jpg';
import rappaport from './Assets/sponsorsLogos/rappaport.png';
import rticc from './Assets/sponsorsLogos/rticc-logo.png';

import ami from './Assets/judgei/ami.jpg';
import avi from './Assets/judgei/avi.jpg';
// import benny from './Assets/judgei/benny.jpg';
import Alona from './Assets/judgei/Alona_Matviychuk.jpg';
import yaakov from './Assets/judgei/yaakov.jpg';
import yaron from './Assets/judgei/yaron_shefer.jpg';
import yona from './Assets/judgei/yona.png';
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import adi from './Assets/teami/adi.jpeg';
import Ella from './Assets/teami/Ella.jpeg';
import LiorRomano from './Assets/teami/Lior.jpg';
import Mahmud from './Assets/teami/Mahmud_image.jpeg';
import shahaf from './Assets/teami/Shahaf_image.jpeg';


// Prize Assets - New format
import airplainImg from './Assets/prizesi/2026prizes/Airplain.png';
import espressoImg from './Assets/prizesi/2026prizes/Espresso_Machine.png';
import garminImg from './Assets/prizesi/2026prizes/Garmin_VivoActive5.png';


const TOP_SECTION = {
  TITLE: 'T2MED 2026',
  Typed_effect: [
    'We are back for 2026! ',
    'Get ready to innovate and create!',
    'Registration will be open soon!' //  Registration is now open!
  ],
  SHORT_DESCRIPTION:
    'T2MED 2026 is here! Applications are on there way. Join us to solve real-world clinical challenges and innovate with industry leaders. Secure your spot today!',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  MENTORS_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: '' // Hide registration
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/t2med_',
  linkedin: 'https://www.linkedin.com/company/t2med/',
  facebook: 'https://www.facebook.com/t2med3ds/',
  email: 'mailto:t2medtechnion@gmail.com',
  mail: 't2medtechnion@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is T2MED?',
  LONG_DESCRIPTION:
    'T2MED is a unique 3-day hackathon happening on 6-8 May 2026 at the Technion Faculty of Medicine. Unlike other hackathons, T2MED is deeply rooted in clinical challenges, bringing together students from all faculties to collaborate with doctors, medical researchers, and healthcare professionals from top hospitals and clinics. Work alongside real clinicians, tackle pressing medical problems, and develop innovative solutions with direct guidance from experts. Gain hands-on experience, expand your network in both medicine and technology, and compete for incredible prizes!',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: ''
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.gle/iCerARQavxdMeMkp8'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 5,
  year: 2026
};

const eventMetadata = {
  title: 'Pre-Hackathon Day',
  date: 'April 29, 2026',
  time: '16:30 – 20:30',
  location: 'Rambam Health Care Campus'
};

const schedule = [
  {
    day: '29-4-2026',
    events: [
      {
        title: 'Reception & Networking',
        timings: '16:30 – 17:00',
        link: ''
      },
      {
        title: 'Opening Remarks',
        timings: '17:00 – 17:15',
        link: ''
      },
      {
        title: 'Keynote Greeting – Dr. Lior Lev Tov',
        timings: '17:15 – 17:30',
        link: ''
      },
      {
        title: 'Guest Lecture – Entrepreneurship in the Med-Tech World',
        timings: '17:30 – 18:30',
        link: ''
      },
      {
        title: "Winner's Showcase – Past T2MED 1st Place Winners",
        timings: '18:30 – 18:35',
        link: ''
      },
      {
        title: 'Break & Transition',
        timings: '18:35 – 19:00',
        link: ''
      },
      {
        title: 'Field Exposure – Introduction to Each Field with Dedicated Mentors',
        timings: '19:00 – 19:30',
        link: ''
      },
      {
        title: 'Brainstorming Session – Group Division and Initial Ideation Within Tracks',
        timings: '19:30 – 20:15',
        link: ''
      },
      {
        title: 'Q&A & Closing – Hackathon Timeline and Summary',
        timings: '20:15 – 20:30',
        link: ''
      }
    ]
  },
  {
    day: '6-5-2026',
    events: [
      {
        title: 'Gathering',
        timings: '16:30 – 17:30',
        link: ''
      },
      {
        title: 'Opening Ceremony',
        timings: '17:30 – 18:15',
        link: ''
      },
      {
        title: 'Begin Working!',
        timings: '18:15',
        link: ''
      },
      {
        title: 'Brainstorming and Mentoring Block',
        timings: '18:30 – 20:30',
        link: ''
      },
      {
        title: 'Dinner',
        timings: '19:30',
        link: ''
      }
    ]
  },
  {
    day: '7-5-2026',
    events: [
      {
        title: 'Start Work + Breakfast',
        timings: '8:00 – 9:00',
        link: ''
      },
      {
        title: 'Morning Mentoring Session',
        timings: '9:00 – 11:30',
        link: ''
      },
      {
        title:
          'Lecture: "Medical Ethics and AI" – Salvatore Campisi-Pinto (PhD)',
        timings: '11:00 – 12:15',
        link: ''
      },
      {
        title: 'Lunch',
        timings: '13:30',
        link: ''
      },
      {
        title: 'Noon Mentoring Session',
        timings: '14:30 – 17:00',
        link: ''
      },
      {
        title: 'Yoga Break at "Pure Studio" Bat-Galim (limited spots)',
        timings: '15:30 – 17:00',
        link: ''
      },
      {
        title: 'Dinner',
        timings: '18:00',
        link: ''
      },
      {
        title: 'Evening Mentoring Session',
        timings: '18:00 – 20:00',
        link: ''
      },
      {
        title: '"How to Pitch" Workshop – Yael Katzman (Quatro)',
        timings: '19:00 – 20:30',
        link: ''
      },
      {
        title: 'Pitch Practice',
        timings: '20:30 – 22:00',
        link: ''
      }
    ]
  },
  {
    day: '8-5-2026',
    events: [
      {
        title: 'Final Work',
        timings: '8:00 – 10:15',
        link: ''
      },
      {
        title: 'Breakfast',
        timings: '9:00',
        link: ''
      },
      {
        title: 'Semi-finals',
        timings: '10:15 – 11:15',
        link: ''
      },
      {
        title: 'Finals',
        timings: '11:30 – 12:30',
        link: ''
      },
      {
        title: 'Judges’ Decisions & Lunch',
        timings: '12:30 – 13:30',
        link: ''
      },
      {
        title: 'Announcing the Winners & Final Ceremony',
        timings: '13:30 – 14:00',
        link: ''
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */
const Prizeinfo = [
  [
    {
      topLabel: '1st Place',
      title: 'FLIGHT TICKETS',
      subtitle: 'Up to 1,000$',
      extra: '+3,000₪',
      footer: 'Per team for project promotion',
      image: airplainImg,
      className: 'prize-flight',
      footerText: 'One per participant'
    },
    {
      topLabel: '2nd Place',
      title: 'GARMIN WATCH',
      subtitle: 'VivoActive5',
      footer: 'One per participant',
      image: garminImg,
      className: 'prize-watch',
      footerText: 'One per participant'
    },
    {
      topLabel: '3rd Place',
      title: 'NESPRESSO MACHINE',
      subtitle: 'Delonghi Essenza',
      footer: 'One per participant',
      image: espressoImg,
      className: 'prize-espresso',
      footerText: 'One per participant'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Lior Romano',
      role: 'Biomedical Engineering Student | R&D at Philips, Clinical Evidence',
      linkedin: 'https://www.linkedin.com/in/lior-romano-607a06264/',
      img: LiorRomano
    },
    {
      name: 'Ella Furman',
      role: 'Biotechnology and Food Engineering | Former Marketing Manager at Port.io',
      linkedin: 'https://www.linkedin.com/in/ella-furman-013094213/',
      img: Ella
    },
    {
      name: 'Mahmoud Ikteelat',
      role: 'Medical Student',
      linkedin: 'https://www.linkedin.com/in/mahmoud-ikteelat-b09263195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      img: Mahmud
    }
  ],
  [
    //Array 2
    {
      name: 'Adi Yankovich',
      role: 'Medical Student',
      linkedin: 'https://www.linkedin.com/in/adi-yankovich-5b1019357?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      img: adi
    },
    {
      name: 'Shahaf Lalo',
      role: 'Medical Student | Former Special Forces Combat Paramedic',
      linkedin: 'https://www.linkedin.com/in/shahaf-lalo?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      img: shahaf
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      name: 'Prof. Ami Aronheim',
      role: 'Dean, Ruth & Bruce Rappaport Faculty of Medicine, Technion',
      bio: 'Prof. Ami Aronheim is a leading molecular genetics researcher specializing in protein-protein interactions and signal transduction. With a Ph.D. in Biochemistry from the Weizmann Institute and postdoctoral training at UC San Diego, he established his laboratory in the Faculty of Medicine at the Technion in 1996, has published over 70 articles, and holds five patents. His work explores cancer-cardiac interactions, shedding light on disease progression. A longtime faculty member at the Technion, he previously served as Senior Vice Dean and, since 2023, has been the Dean of the Faculty of Medicine.',
      img: ami
    },
    {
      name: 'Dr. Avi Goldberg',
      role: 'CEO, Carmel Medical Center',
      bio: 'Dr. Avi Goldberg is a senior healthcare executive with extensive experience in hospital leadership, and health system management. He serves as CEO of Carmel medical center Since 2015, following his term as CEO of Yoseftal Hospital in Eilat. With an MPA from Harvard and an MHA from Ben-Gurion University, he specializes in strategic healthcare management and crisis response. He also lectures on healthcare management at the Technion and serves on Israel’s National Health Council.',
      img: avi
    },
    {
      name: 'Dr. Alona Matviychuk',
      role: 'Deputy Director of Emek Medical Center',
      bio: 'Dr. Alona Matviychuk is a senior healthcare executive and medical leader, currently serving as Deputy Director of Emek Medical Center. She is an internal medicine specialist with extensive experience in hospital management, clinical operations, and healthcare system leadership. Dr.Matviychuk holds an MHA in Health Systems Management and, in her current role, promotes organization-wide quality processes, as well as strategic initiatives in patient care quality, operational efficiency, and organizational development within large medical centers. ',
      img: Alona
    }
  ],
  [
    //Array 2
    {
      name: 'Yaron Sheffer',
      role: 'Strategic & Innovation Director, Emek Medical Center',
      bio: 'A visionary leader with over 18 years of experience in healthcare innovation, strategic planning, and operational management. As Director of Strategy & Innovation at Emek Medical Center, he drives international partnerships, entrepreneurship, and hospital growth initiatives. Previously, he managed healthcare operations for Maccabi, overseeing large-scale medical teams and multimillion-dollar budgets. Passionate about digital health, he mentors startups and leads executive training programs. With a background in military medical training and an MBA in Nonprofit Management, he blends leadership, strategy, and hands-on execution to transform healthcare systems',
      img: yaron
    },
    {
      name: 'Yaakov Diminsky',
      role: 'CEO at Road2',
      bio: 'Yaakov Diminsky holds an MSc in Biomedical Engineering and an MBA from the Technion. He specializes in developing business and technological strategies for early-stage startups. Yaakov has a background in leading R&D for technologies that combine bio-sensing with artificial intelligence. He also lectures on business and technological development in the deep-tech field as part of startup acceleration programs.',
      img: yaakov
    },
    {
      name: 'Dr. Yona Vaisbuch',
      role: 'Ear & Skull Base Surgeon | Deputy Director, ENT & Surgical Division, Rambam | Head of Transformation | President, Biodesign Israel',
      bio: 'Dr. Yona Vaisbuch - Biodesign Israel founder and president. Dr. Vaisbuch is a graduate of the Sackler Faculty of Medicine at Tel Aviv University, Dr Vaisbuch specialized in otorhinolaryngology (ear, nose and throat medicine) at the Rabin Medical Center and underwent advanced training for ear and skull base surgery at Stanford University in California. He currently serves as a guest professor at Stanford and a specialist physician at Rambam Medical Center. He is the founder and former chairman of Mirsham, the Medical Interns’ Organization and a member of the Taub Center’s Health Committee. In addition, Dr. Vaisbuch serves as a medical advisor for medical startups and is a founding partner in a few medical ventures.',
      img: yona
    }
  ],
  // [
  //   //Array 3
  //   {
  //     name: 'Nissan Elimelech',
  //     role: "Medtech serial entrepreneur, Augmedics' Founder & ex-CEO",
  //     bio: 'Nissan is a serial entrepreneur with two decades’ experience in various medical device markets and the inventor of 15 patents. He founded Augmedics, a MedTech company which develops and commercializes the xvision™ – The first Augmented-Reality Guidance System for spine surgery. Nissan served the company as its CEO for more than 7 years, raised $63m from top-tier US VCs, and led it from inception to a multi-million-dollar revenue organization with a full-scale US nationwide commercial team. Prior to Augmedics, he worked in Medtronic at the spine surgery unit, and in Neopharm at the general surgery unit. In addition, he co-founded and was the inventor of another medical device start-up, Medizn, which developed a smart surgical hernia mesh. Nissan is a Biomedical engineer and MBA graduate.',
  //     img: nissan
  //   },
  //   {
  //     name: 'Ronya Rubinstein',
  //     role: 'Entrepreneur, Endospot Founder & CEO',
  //     bio: 'Ronya Rubinstein is an entrepreneur with a passion for navigating the intersections of science, business, regulations, ethics, patents, legal,  reimbursement and people. Formerly, director of the R&D unit at Rambam hospital, Ronya has vast expertise in clinical trials, technology transfer and digital health, held various board positions including at Mego-Afkek and MindUp incubator. Ronya also serves as the head of the health and gender committee at the National Committee for advancing Women in Science.',
  //     img: ronya
  //   },
  //   {
  //     name: 'Prof. Eliezer Shalev',
  //     role: 'President, Tel-Hai Academic College | Expert in Obstetrics & Gynecology',
  //     bio: 'Prof. Eliezer Shalev is a groundbreaking researcher and leader in obstetrics, gynecology, and fetal medicine, formerly heading the Ultrasound Unit at Sheba Medical Center (1988) And the Women & Maternity Division at HaEmek Medical Center (1989-2016). He served as Dean of the Technion Faculty of Medicine (2011–2016) and later Executive Pro-vice chancellor & Vice-Chancellor at Technion’s Guangdong campus in China. Since 2022, he has been President of Tel-Hai Academic College, leading its transition into the University of the Galilee. A recipient of the 2017 Lifetime Achievement Award in Medicine, he continues to pioneer research in childbirth and fertility. He is also the founder of the T2MED Hackathon, driving medical innovation.',
  //     img: eliezer
  //   },
  // ],
  // [
  //   //Array 4

  //   {
  //     name: 'Hadas Shachaf',
  //     role: 'Director of Pharmaceutical Services, Bnai Zion Medical Center',
  //     bio: 'Hadas Shachaf is the Director of Pharmacy Services at Bnei Zion Medical Center in Haifa. She focuses on improving medication safety and operational efficiency through pharmacy automation and cross-sector collaboration. In recent years, she has helped implement a centralized Unit Dose system and supported national and academic research on drug shortages and inventory management. Her work aims to combine innovation with practical solutions for public hospital settings.',
  //     img: hadas
  //   }
  // ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: carmel}, {src: haemek}, {src: hililyafe}], //Array 1
  [{src: rambam}, {src: rappaport}, {src: rticc}], //Array 2
  [{src: hhi}, {src: bneyzion100}], //Array 3
  [] //Array 3
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a collaborative event where participants solve challenges and create innovative solutions over a limited period of time.'
      },
      {
        label: 'What makes this hackathon special?',
        content:
          'T2MED is the only hackathon where cutting-edge medical innovation meets hands-on clinical expertise. Unlike other hackathons, we bring together the brightest minds from the faculty of medicine to collaborate with other Technion faculties. You’ll work directly with top physicians, clinical researchers, and hospital innovators from leading medical centers. Our expert mentors aren’t just tech specialists—they are practicing doctors, surgeons, and medtech pioneers who face real-world challenges every day. Plus, we have exclusive access to hospitals and specialized medtech professionals who will guide teams in developing solutions that can truly impact patient care. This is your chance to collaborate with the best in medicine, tech, and entrepreneurship, and turn your ideas into real, clinically viable solutions!'
      },
      {
        label: 'Who can participate?',
        content:
          'Students from all faculties at the Technion, including technology, sciences, medicine, and business.'
      },
      {
        label: 'Do I need a team to register?',
        content:
          'No, you can register individually and form a team at the orientation meeting on 29 April 2026.'
      },
      {
        label: 'What will we do during the hackathon?',
        content:
          'During the hackathon, you will collaborate with a diverse team to tackle real-world medical challenges, develop innovative solutions, and create prototypes. You’ll receive mentorship from industry experts, gain hands-on experience with cutting-edge technologies, and pitch your ideas to a panel of judges.'
      }
    ],
    [
      {
        label: 'How many people can be in a team?',
        content:
          'Teams should have 4-5 members, including at least one medical student.'
      },
      {
        label: 'What if I don’t have a project idea?',
        content:
          'No worries! You can join a team and brainstorm ideas together during the hackathon.'
      },
      {
        label: 'Are there prizes?',
        content:
          'Yes! Winning teams will receive amazing prizes worth thousands of shekels, and participants have the opportunity to pitch their ideas to experts.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! All participants will receive exclusive T2MED swag.'
      },
      {
        label: 'I have more questions?',
        content: 'Reach us directly, we would be happy to help you.',
        link: {
          text: 'Send us an email',
          url: 'mailto:t2medtechnion@gmail.com'
        }
      }
    ]
  ]
];

export {
  calenderStartingDate,
  eventMetadata,
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  MIDDLE_SECTION,
  Prizeinfo,
  schedule,
  SOCIALS,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
};


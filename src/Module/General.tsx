import hackathonLogo from './Assets/hackathonLogo_2026.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';

import biztechWhiteLogo from './Assets/sponsorsLogos/biztech-white-logo.png';
import bneyzion100 from './Assets/sponsorsLogos/bneyzion100.png';
import carmel from './Assets/sponsorsLogos/carmel-modified.png';
import haemek from './Assets/sponsorsLogos/haemek.jpg';
import hhi from './Assets/sponsorsLogos/hhi.png';
import hicenter from './Assets/sponsorsLogos/hicenter_logo.png';
import hililyafe from './Assets/sponsorsLogos/hilel_yafe-modified.png';
import innovationAuthority from './Assets/sponsorsLogos/innovation-authority.png';
import rambam from './Assets/sponsorsLogos/Rambam.jpg';
import rappaport from './Assets/sponsorsLogos/rappaport.png';
import rticc from './Assets/sponsorsLogos/rticc-logo.png';

import ami from './Assets/judgei/ami.jpg';
import avi from './Assets/judgei/avi.jpg';
// import benny from './Assets/judgei/benny.jpg';
import abrahamPeled from './Assets/judgei/abraham_peled.jpeg';
import adirSommer from './Assets/judgei/adir-sommer.jpeg';
import Alona from './Assets/judgei/Alona_Matviychuk.jpg';
import avitalStahl from './Assets/judgei/avital_stahl.jpeg';
import barRinott from './Assets/judgei/bar_rinott.jpeg';
import drMoranBrouk from './Assets/judgei/dr_moran_brouk.jpg';
import efratElifazCity from './Assets/judgei/efrat_elifaz_city.jpg';
import eliYered from './Assets/judgei/eli_yered.jpeg';
import eliezer from './Assets/judgei/eliezer.png';
import gilBolutin from './Assets/judgei/gil_bolutin.jpg';
import giladNewman from './Assets/judgei/gilad_newman.jpg';
import inbalMichailovici from './Assets/judgei/inbal_michailovici.jpeg';
import inbalZafirLavie from './Assets/judgei/inbal_zafir_lavie.jpeg';
import lironHadar from './Assets/judgei/liron_hadar.jpeg';
import yaakov from './Assets/judgei/yaakov.jpg';
import yaron from './Assets/judgei/yaron_shefer.jpg';
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import adi from './Assets/teami/adi.jpeg';
import adyJakubovitz from './Assets/teami/ady_jakubovitz.jpeg';
import amirBilder from './Assets/teami/amir_bilder.jpeg';
import andreiKrasovaky from './Assets/teami/andrei_krasovaky.jpeg';
import avishySidlesky from './Assets/teami/avishy_sidlesky.jpeg';
import ayeletGoldfarb from './Assets/teami/ayelet_goldfarb_frank.jpeg';
import dannyKoifman from './Assets/teami/danny_koifman.jpeg';
import drLior from './Assets/teami/dr-lior.jpeg';
import Ella from './Assets/teami/Ella.jpeg';
import gilKerbs from './Assets/teami/gil_kerbs.jpeg';
import LiorRomano from './Assets/teami/Lior.jpg';
import Mahmud from './Assets/teami/Mahmud_image.jpeg';
import nidalZeineh from './Assets/teami/nidal_zeineh.jpeg';
import ravitEdelman from './Assets/teami/ravit_edelman.jpeg';
import shahaf from './Assets/teami/Shahaf_image.jpeg';
import ShaiLee from './Assets/teami/ShaiLee.jpeg';
import stephanie from './Assets/teami/stephanie.jpeg';
import tamaraWiesen from './Assets/teami/tamara_wiesen.jpeg';


// Prize Assets - New format
import airplainImg from './Assets/prizesi/2026prizes/Airplain.png';
import espressoImg from './Assets/prizesi/2026prizes/Espresso_Machine.png';
import garminImg from './Assets/prizesi/2026prizes/Garmin_VivoActive5.png';


const TOP_SECTION = {
  TITLE: 'T2MED 2026',
  Typed_effect: [
    'Registration is now closed.',
    'Join the 2026 Medical Innovation Hackathon!',
    'Build. Innovate. Impact.'
  ],
  SHORT_DESCRIPTION:
    'T2MED 2026 registration is now closed. Stay tuned for updates about the next edition and future hackathons.',
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

const sponsorLinks = {
  bneyzion100:
    'https://www.gov.il/he/departments/b-zion-health-center/govil-landing-page',
  biztech: '#',
  carmel: 'https://hospitals.clalit.co.il/carmel/en/Pages/default.aspx',
  haemek: 'https://hospitals.clalit.co.il/emek/en/Pages/default.aspx',
  hhi: 'https://thhi.net.technion.ac.il/',
  hicenter: '#',
  hililyafe: 'https://hymc.org.il/eng/',
  innovationAuthority: 'https://innovationisrael.org.il/',
  rambam: 'https://www.rambam.org.il/en/',
  rappaport: 'https://md.technion.ac.il/',
  rticc: 'https://rticc.net.technion.ac.il/'
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
  date: 'April 27, 2026',
  time: '16:30 – 20:30',
  location: 'Rambam Health Care Campus'
};

const schedule = [
  {
    day: '27-4-2026',
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
    //Array 0 - Senior Lead with team
    {
      name: 'Stephanie Shneor',
      role: 'Head of Marketing and Public Relations | Faculty of Medicine',
      linkedin: '',
      img: stephanie
    },
    {
      name: 'Dr. Lior Lev Tov',
      role: 'Head of the T2MED Medical Entrepreneurship Hackathon',
      subtitle: 'Senior Neurosurgeon, Rambam Health Care Campus | Technion Faculty of Medicine',
      linkedin: '',
      img: drLior
    },
    {
      name: 'Shai-Lee Cohen',
      role: 'Events and Media Coordinator | Faculty of Medicine',
      linkedin: '',
      img: ShaiLee
    }
  ],
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

const MENTOR_TRACKS = {
  DIAGNOSTICS: 'DIAGNOSTICS',
  OPERATING_ROOMS: 'OPERATING_ROOMS',
  EXTREME_MEDICINE: 'EXTREME_MEDICINE',
  HEALTH_OPERATIONS: 'HEALTH_OPERATIONS',
  ALL_TRACKS: 'ALL_TRACKS'
};

const MENTOR_TRACK_META = {
  [MENTOR_TRACKS.DIAGNOSTICS]: {
    label: 'Diagnostics',
    iconClass: 'fas fa-brain'
  },
  [MENTOR_TRACKS.OPERATING_ROOMS]: {
    label: 'Operating Rooms',
    iconClass: 'fas fa-user-md'
  },
  [MENTOR_TRACKS.EXTREME_MEDICINE]: {
    label: 'Extreme Medicine',
    iconClass: 'fas fa-briefcase-medical'
  },
  [MENTOR_TRACKS.HEALTH_OPERATIONS]: {
    label: 'Health Operations & System Management',
    iconClass: 'fas fa-project-diagram'
  },
  [MENTOR_TRACKS.ALL_TRACKS]: {
    label: 'All Tracks',
    iconClass: 'fas fa-globe'
  }
};

const MentorsInfo = [
  [
    //Array 1
    {
      name: 'Prof. Gil Bolotin',
      role: 'Head of the Department of Cardiac Surgery',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Prof. Gil Bolotin is a clinical professor and leading cardiac and thoracic surgeon, currently serving as Head of the Department of Cardiac Surgery at Rambam Health Care Campus. He graduated from the Faculty of Medicine at the Hebrew University of Jerusalem and holds a PhD from Maastricht University in the Netherlands, where his research focused on surgical treatments for heart failure. Prof. Bolotin completed his residency in cardiac and thoracic surgery at Carmel Medical Center in Haifa and advanced fellowships in minimally invasive valve repair and replacement in North Carolina, USA. He further specialized in heart failure surgery, heart transplantation, ventricular assist devices at the University of Chicago, and surgical treatment of atrial fibrillation at Maastricht University.',
      linkedin: 'https://www.linkedin.com/in/gil-bolotin-02ba971ab/',
      img: gilBolutin
    },
    {
      name: 'Dr. Adir Sommer',
      role: 'Ophthalmology Resident, Rambam Health Care Campus',
      mentorTracks: [MENTOR_TRACKS.DIAGNOSTICS, MENTOR_TRACKS.HEALTH_OPERATIONS],
      bio:
        'dr.Adir Sommer is an ophthalmology resident at Rambam Health Care Campus with a background in healthcare innovation, product management, and medical research. He focuses on integrating AI and machine learning into healthcare services. Adir previously served as a product manager at Clalit Innovation, working on AI-driven healthcare solutions, and has advised medical device and digital health startups as well as a VC fund on R&D, product-market fit, funding, regulation, and go-to-market strategies. He was named to Forbes\' 30 Under 30 for his impact on medical innovation.',  
      linkedin: 'https://www.linkedin.com/in/adir-sommer/',
      img: adirSommer
    },
    {
      name: 'Dr. Abraham Peled',
      role: 'Psychiatrist | Emeritus Clinical Faculty, Technion Faculty of Medicine',
      mentorTracks: [MENTOR_TRACKS.DIAGNOSTICS],
      bio:
        'Dr. Abraham Peled is a psychiatrist with many years of clinical experience, having chaired various departments from open ward rehabilitation to top-security severely psychotic confined patients\' wards. He held an Emeritus clinical position in the Medical Faculty of the Technion (Israel Institute of Technology) and was a fellow post-doc at UCDMC California in his early career. Uniquely, Dr. Peled was self-trained in the sciences of Computational Neuroscience and Complex Systems Physics, searching relentlessly to unite them with phenomenological psychiatry. Dr. Peled believes that unifying psychiatry with Computational Neuroscience and Complex Systems Physics will revolutionize the field of mental disorders and ensure effective cures to those suffering.',
      img: abrahamPeled
    },
    {
      name: 'Dr. Bar Rinott',
      role: 'Diagnostic & Interventional Radiologist, Rambam Health Care Campus',
      mentorTracks: [MENTOR_TRACKS.DIAGNOSTICS, MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Dr. Bar Rinott is a diagnostic and interventional radiologist at Rambam Health Care Campus, AI researcher, and consultant to medical technology companies.',
      linkedin: 'https://www.linkedin.com/in/bar-rinott/',
      img: barRinott
    },
    {
      name: 'Gilad Newman',
      role: 'CEO of Dale Carnegie Israel',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Gilad Newman is the CEO of Dale Carnegie Israel, with deep expertise in leadership development, communication, and team performance.',
      img: giladNewman
    },
    {
      name: 'Avital Stahl',
      role: 'Pitch Advisor',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Avital Stahl is a pitch advisor helping teams sharpen their storytelling, structure clear narratives, and deliver stronger investor-ready presentations.',
      img: avitalStahl
    },
    {
      name: 'Eli Yered',
      role: 'CFO',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Partner and CFO at Sanara Capital. Eli Yered mentors founders on entrepreneurial execution and operating-room innovation pathways.',
      linkedin: 'https://www.linkedin.com/in/eli-yered-ba498a1?originalSubdomain=il',
      img: eliYered
    },
    {
      name: 'Avishay Sidlesky',
      role: 'Founder & CEO at VTM Technologies',
      mentorTracks: [MENTOR_TRACKS.DIAGNOSTICS],
      bio:
        'Avishay Sidlesky is the Founder and CEO of VTM Technologies, bringing entrepreneurial and industry expertise to the diagnostics track.',
      img: avishySidlesky
    },
    {
      name: 'Gil Kerbs',
      role: 'Chief Investment Officer, Teuza VC Fund',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS, MENTOR_TRACKS.HEALTH_OPERATIONS],
      bio:
        'Gil Kerbs is the Chief Investment Officer at Teuza VC Fund, mentoring teams on entrepreneurial strategy, commercialization, and operating-room innovation.',
      img: gilKerbs
    },
    {
      name: 'Dr. Nidal Zeineh',
      role: 'Specialist in Oral and Maxillofacial Surgery',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Dr. Nidal Zeineh is a specialist in Oral and Maxillofacial Surgery, bringing deep clinical surgical expertise to the Operating Rooms track.',
      img: nidalZeineh
    },
    {
      name: 'Dr. Andrei Krasovaky',
      role: 'Specialist in Oral and Maxillofacial Surgery',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Dr. Andrei Krasovaky is a specialist in Oral and Maxillofacial Surgery, contributing clinical expertise in surgical procedures to the Operating Rooms track.',
      img: andreiKrasovaky
    },
    {
      name: 'Dr. Amir Bilder',
      role: 'Resident in Oral and Maxillofacial Surgery',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Dr. Amir Bilder is a resident in Oral and Maxillofacial Surgery, bringing hands-on surgical training and clinical expertise to the Operating Rooms track.',
      img: amirBilder
    },
    {
      name: 'Tamara Wiesen',
      role: 'Head of Design, Dario Health',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Tamara Wiesen is Head of Design at Dario Health, a UX and research manager with specialties in digital health and innovation strategy. She mentors teams across all tracks on design thinking and user-centered innovation.',
      img: tamaraWiesen
    },
    {
      name: 'Ravit Edelman',
      role: 'Nursing Director of Women\'s Health, Obstetrics & Operating Rooms',
      mentorTracks: [MENTOR_TRACKS.OPERATING_ROOMS],
      bio:
        'Ravit Edelman is Nursing Director of Women\'s Health, Obstetrics, and Operating Rooms at Rambam Health Care Campus, bringing clinical leadership and nursing expertise to surgical innovation.',
      img: ravitEdelman
    },
    {
      name: 'Danny Koifman',
      role: 'Med Tech Innovation Leader',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Danny Koifman is a medical technology innovation leader bringing entrepreneurial and strategic expertise to mentor teams across all tracks on building scalable health tech solutions.',
      img: dannyKoifman
    },
    {
      name: 'Ayelet Goldfarb Frank',
      role: 'Higher Education Partnership Manager EMEA/APAC, Base44',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Ayelet Goldfarb Frank is a Higher Education Partnership Manager at Base44, mentoring entrepreneurs on scaling healthcare ventures and building partnerships across the EMEA and APAC regions.',
      img: ayeletGoldfarb
    },
    {
      name: 'Ady Jakubovitz',
      role: 'Co-founder, CEO',
      mentorTracks: [MENTOR_TRACKS.ALL_TRACKS],
      bio:
        'Ady Jakubovitz is a co-founder and CEO bringing deep entrepreneurial experience and strategic leadership to mentor teams on building and scaling innovative health tech ventures.',
      img: adyJakubovitz
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      name: 'Prof. Ami Aronheim',
      role: 'Dean, Ruth & Bruce Rappaport Faculty of Medicine, Technion',
      bio:
        'Prof. Ami Aronheim is a leading molecular genetics researcher specializing in protein-protein interactions and signal transduction. With a Ph.D. in Biochemistry from the Weizmann Institute and postdoctoral training at UC San Diego, he established his laboratory in the Faculty of Medicine at the Technion in 1996, has published over 70 articles, and holds five patents. His work explores cancer-cardiac interactions, shedding light on disease progression. A longtime faculty member at the Technion, he previously served as Senior Vice Dean and, since 2023, has been the Dean of the Faculty of Medicine.',
      linkedin: 'https://www.linkedin.com/in/%D7%A2%D7%9E%D7%99-%D7%90%D7%94%D7%A8%D7%95%D7%A0%D7%94%D7%99%D7%99%D7%9D-117357399/',
      img: ami
    },
    {
      name: 'Prof. Avi Goldberg',
      role: 'CEO, Carmel Medical Center',
      bio:
        'Prof. Avi Goldberg is a senior healthcare executive with extensive experience in hospital leadership, and health system management. He serves as CEO of Carmel medical center since 2015, following his term as CEO of Yoseftal Hospital in Eilat. With an MPA from Harvard and an MHA from Ben-Gurion University, he specializes in strategic healthcare management and crisis response. He also lectures on healthcare management at the Technion and serves on Israel\'s National Health Council.',
      img: avi
    },
    {
      name: 'Dr. Alona Matviychuk',
      role: 'Deputy Director of Emek Medical Center',
      bio:
        'Dr. Alona Matviychuk is a senior healthcare executive and medical leader, currently serving as Deputy Director of Emek Medical Center. She is an internal medicine specialist with extensive experience in hospital management, clinical operations, and healthcare system leadership. Dr. Matviychuk holds an MHA in Health Systems Management and, in her current role, promotes organization-wide quality processes, as well as strategic initiatives in patient care quality, operational efficiency, and organizational development within large medical centers.',
      img: Alona
    },
    {
      name: 'Dr. Efrat Elifaz-City',
      role: 'Deputy Director, Hillel Yaffe Medical Center',
      bio:
        'Dr. Efrat Elifaz-City is Deputy Director of Hillel Yaffe Medical Center. Her academic foundation includes an M.D. from the Technion and an MHA in Healthcare Management from the University of Haifa. A board-certified psychiatrist since 2007 and Health Administration since 2025, she brings extensive experience in healthcare leadership and system management, having previously directed the Psychiatric Ward and Ambulatory services at Hillel Yaffe and the Ambulatory Department at Mazor Mental Health Center. In her current role, she oversees allied health professions, Ambulatory Services, Quality of Care, and Risk Management. Dr. Elifaz-City is also actively involved in medical education, leading teaching initiatives and lecturing at the Technion, appointed as academic representative at Hillel Yaffe and head of the Teaching authority at the medical center. She also serves as Chair of the Haifa and Northern Branch of the Israel Psychiatric Association.',
      img: efratElifazCity
    }
  ],
  [
    //Array 2
    {
      name: 'Yaron Sheffer',
      role: 'Strategic & Innovation Director, Emek Medical Center',
      bio:
        'A visionary leader with over 18 years of experience in healthcare innovation, strategic planning, and operational management. As Director of Strategy & Innovation at Emek Medical Center, he drives international partnerships, entrepreneurship, and hospital growth initiatives. Previously, he managed healthcare operations for Maccabi, overseeing large-scale medical teams and multimillion-dollar budgets. Passionate about digital health, he mentors startups and leads executive training programs. With a background in military medical training and an MBA in Nonprofit Management, he blends leadership, strategy, and hands-on execution to transform healthcare systems.',
      img: yaron
    },
    {
      name: 'Yaakov Diminsky',
      role: 'CEO at Road2',
      bio:
        'Yaakov Diminsky holds an MSc in Biomedical Engineering and an MBA from the Technion. He specializes in developing business and technological strategies for early-stage startups. Yaakov has a background in leading R&D for technologies that combine bio-sensing with artificial intelligence. He also lectures on business and technological development in the deep-tech field as part of startup acceleration programs.',
      linkedin: 'https://www.linkedin.com/in/yaakov-diminsky-40901087/',
      img: yaakov
    },
    {
      name: 'Prof. Eliezer Shalev',
      role: 'President, Tel-Hai University Kiryat Shmona | Expert in Obstetrics & Gynecology',
      bio:
        'Prof. Eliezer Shalev is a pioneering researcher and leader in obstetrics, gynecology, and fetal medicine. He previously headed the Ultrasound Unit at Sheba Medical Center (1988) and led the Women & Maternity Division at HaEmek Medical Center (1989–2016). He served as Dean of the Technion Faculty of Medicine (2011–2016) and later as Executive Pro-Vice-Chancellor and Vice-Chancellor at Technion\'s Guangdong campus in China. Since 2022, he has been President of Tel-Hai University Kiryat Shmona in the Galilee, leading its academic expansion. A recipient of the 2017 Lifetime Achievement Award in Medicine, he continues to pioneer research in childbirth and fertility. He is also the founder of the T2MED Hackathon, driving medical innovation.',
      linkedin: 'https://www.linkedin.com/in/eliezer-shalev-90789226/',
      img: eliezer
    },
    {
      name: 'Inbal Zafir-Lavie',
      role: 'VP Translational Medicine',
      bio:
        'Inbal Zafir-Lavie serves as VP Translational Medicine at Avalo Therapeutics and brings deep translational expertise to the Screen & Detect track.',
      img: inbalZafirLavie
    },
    {
      name: 'Inbal Michailovici',
      role: 'Head of HealthTech, Israel Innovation Authority',
      bio:
        'Inbal Michailovici leads HealthTech at the Israel Innovation Authority and supports the growth of impactful health technology initiatives.',
      linkedin: 'https://www.linkedin.com/in/inbal-michailovici-32925432/',
      img: inbalMichailovici
    },
    {
      name: 'Dr. Moran Brouk',
      role: 'Founder, Biotech Innovation and Strategy',
      bio:
        'Dr. Moran Brouk is a founder and strategic leader in biotech innovation, bringing deep expertise in diagnostics and biomedical innovation to guide teams in the Screen & Detect track.',
      img: drMoranBrouk
    },
    {
      name: 'Liron Hadar',
      role: 'VP Clinical and Regulatory Affairs, Nanomedic',
      bio:
        'Liron Hadar is VP of Clinical and Regulatory Affairs at Nanomedic, bringing expertise in medical device regulation and clinical strategy to the Operating Rooms track.',
      img: lironHadar
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [
    {id: 'carmel', name: 'Carmel Medical Center', src: carmel, href: sponsorLinks.carmel},
    {id: 'haemek', name: 'HaEmek Medical Center', src: haemek, href: sponsorLinks.haemek},
    {id: 'hililyafe', name: 'Hillel Yaffe Medical Center', src: hililyafe, href: sponsorLinks.hililyafe}
  ], //Array 1
  [
    {id: 'rambam', name: 'Rambam Health Care Campus', src: rambam, href: sponsorLinks.rambam},
    {id: 'rappaport', name: 'Technion Faculty of Medicine', src: rappaport, href: sponsorLinks.rappaport},
    {id: 'rticc', name: 'Ruth and Bruce Rappaport Cancer Research Center', src: rticc, href: sponsorLinks.rticc}
  ], //Array 2
  [
    {id: 'hhi', name: 'Human Health Initiative', src: hhi, href: sponsorLinks.hhi},
    {id: 'bneyzion100', name: 'Bnei Zion Medical Center', src: bneyzion100, href: sponsorLinks.bneyzion100},
    {id: 'innovationAuthority', name: 'Israel Innovation Authority', src: innovationAuthority, href: sponsorLinks.innovationAuthority}
  ], //Array 3
  [
    {id: 'biztech', name: 'BizTech', src: biztechWhiteLogo, href: sponsorLinks.biztech},
    {id: 'hicenter', name: 'HiCenter', src: hicenter, href: sponsorLinks.hicenter}
  ] //Array 4
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
          'No, you can register individually and form a team at the orientation meeting on 27 April 2026.'
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
          'No worries! Come to the Pre-Hackathon Day on April 27th — you\'ll meet other participants, hear about the challenge tracks, and find a team that already has an idea you can join and develop together.'
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
  eventMetadata, FOOTER, frequentlyAskedQuestions, JudgesInfo, MENTOR_TRACK_META, MENTOR_TRACKS, MentorsInfo, MIDDLE_SECTION, Prizeinfo, schedule, SOCIALS, sponsorLinks, sponsorLogos, TeamInfo, TOP_SECTION
};


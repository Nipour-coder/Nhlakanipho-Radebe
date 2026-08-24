import type {
  Profile,
  Skill,
  Project,
  ProjectTag,
  Experience,
  Education,
  Certification,
  Reference,
} from "./types";

export const profile: Profile = {
  fullName: "Nhlakanipho Radebe",
  headline: "Nhlakanipho Radebe",
  subtitle: "Computer Systems Engineering Student & Embedded Systems Developer",
  tagline:
    "Final year student eager to apply technical skills in IoT, networking, and systems integration.",
  email: "nhlakaniphoradebe14@gmail.com",
  phone: "27733310401",
  phoneDisplay: "073 331 0401",
  whatsapp: "https://wa.me/27733310401",
  github: "https://github.com/Nipour-coder",
  linkedin: "https://za.linkedin.com/in/nhlakanipho-radebe-b531a339b",
  address: "07 Aubrey Matlala Road, Block L, Soshanguve, 0152",
  objective:
    "Final year Computer Systems Engineering student seeking an internship opportunity to apply technical knowledge, problem-solving abilities, and analytical skills in a practical environment. Eager to contribute to innovative ICT projects while gaining hands-on industry experience and delivering measurable value to the organization.",
  cvDownloadPath: "/api/cv",
};

export const socialLinks = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "WhatsApp", href: profile.whatsapp, external: true },
];

export const skills: Skill[] = [
  // Programming
  { name: "C++", category: "Programming" },
  { name: "Arduino C", category: "Programming" },
  { name: "HTML", category: "Programming" },

  // Embedded & Hardware
  { name: "ESP32", category: "Embedded & Hardware" },
  { name: "Microcontrollers", category: "Embedded & Hardware" },
  { name: "Sensors", category: "Embedded & Hardware" },
  { name: "Relays", category: "Embedded & Hardware" },
  { name: "Switches", category: "Embedded & Hardware" },
  { name: "ADC", category: "Embedded & Hardware" },
  { name: "7-Segment Displays", category: "Embedded & Hardware" },
  { name: "Basic Troubleshooting", category: "Embedded & Hardware" },

  // Networking
  { name: "LAN / WAN", category: "Networking" },
  { name: "TCP / IP", category: "Networking" },
  { name: "Network Troubleshooting", category: "Networking" },
  { name: "Cisco Basics", category: "Networking" },

  // Systems & Support
  { name: "Hardware & Software Support", category: "Systems & Support" },
  { name: "Database Management", category: "Systems & Support" },
  { name: "Microsoft Office 365", category: "Systems & Support" },
  { name: "Outlook", category: "Systems & Support" },
  { name: "Teams", category: "Systems & Support" },

  // Cybersecurity
  { name: "Introduction to Cybersecurity", category: "Cybersecurity" },
];

export const softSkills: string[] = [
  "Problem-solving",
  "Communication",
  "Team Collaboration",
  "Customer Support",
];

export const skillCategories: {
  key: Skill["category"];
  title: string;
  blurb: string;
  iconName: "Cpu" | "Network" | "Code2" | "Wrench" | "Shield" | "Users";
}[] = [
  {
    key: "Programming",
    title: "Software & Programming",
    blurb: "Languages used for systems and web work.",
    iconName: "Code2",
  },
  {
    key: "Embedded & Hardware",
    title: "Embedded Systems & Hardware",
    blurb: "Microcontrollers, sensors and circuits.",
    iconName: "Cpu",
  },
  {
    key: "Networking",
    title: "Networking",
    blurb: "LAN/WAN fundamentals and Cisco basics.",
    iconName: "Network",
  },
  {
    key: "Systems & Support",
    title: "Systems & Support",
    blurb: "IT support, Office 365 and databases.",
    iconName: "Wrench",
  },
  {
    key: "Cybersecurity",
    title: "Cybersecurity",
    blurb: "Cisco introduction to cybersecurity.",
    iconName: "Shield",
  },
];

export const projects: Project[] = [
  {
    id: "smart-home-esp32",
    title: "Smart Home Automation System — ESP32",
    description:
      "Developed an ESP32-based system to control household appliances using relays.",
    details:
      "Implemented control of lights and electrical plugs; worked with sensors, switches, microcontrollers, and basic troubleshooting.",
    tech: ["ESP32", "Relays", "Sensors", "Switches"],
    tags: ["Hardware", "Software"],
    github: profile.github,
    highlight: "Energy efficiency",
  },
  {
    id: "esp32-led-control",
    title: "ESP32 LED Control & Monitoring System",
    description:
      "Developed an ESP32-based system to control household appliances using relays for improved energy efficiency.",
    details:
      "Integrated sensors and switches; performed troubleshooting for reliable hardware and software operation.",
    tech: ["ESP32", "LEDs", "Sensors", "Switches"],
    tags: ["Hardware", "Software"],
    github: profile.github,
    highlight: "Reliable operation",
  },
  {
    id: "car-sales-cpp",
    title: "Car Sales Management System — C++",
    description: "Developed a C++ application for managing vehicle sales data.",
    details:
      "Utilized Object-Oriented Programming (OOP), CSV files, and StringGrid for data management.",
    tech: ["C++", "OOP", "CSV", "StringGrid"],
    tags: ["Software"],
    github: profile.github,
    highlight: "OOP design",
  },
  {
    id: "temp-monitoring",
    title: "Microcontroller Temperature Monitoring System",
    description:
      "Built a real-time monitoring system using LM35 sensors, ADC, and 7-segment displays.",
    details:
      "Programmed microcontroller to collect, process, and display accurate temperature data.",
    tech: ["LM35", "ADC", "7-Segment Display", "Microcontroller"],
    tags: ["Hardware", "Software"],
    github: profile.github,
    highlight: "Real-time data",
  },
];

// Compact hardware/software tag list for the project grid header.
export const projectTags: ProjectTag[] = [
  { type: "Hardware", label: "ESP32" },
  { type: "Hardware", label: "Microcontrollers" },
  { type: "Hardware", label: "LM35 Sensors" },
  { type: "Hardware", label: "7-Segment Displays" },
  { type: "Hardware", label: "Relays & Switches" },
  { type: "Hardware", label: "ADC" },
  { type: "Software", label: "C++" },
  { type: "Software", label: "Arduino C" },
  { type: "Software", label: "HTML" },
  { type: "Software", label: "OOP" },
];

// Unified timeline that the Experience section renders.
export const experiences: Experience[] = [
  {
    id: "work-internet-cafe",
    type: "work",
    role: "Internet Café Assistant",
    company: "One Stop-Internet Café",
    period: "February 2026 – July 2026",
    description:
      "Front-line technical support for hardware, software, printers, and network issues.",
    achievements: [
      "Provided technical support for hardware, software, printers, and network issues to 20+ customers daily.",
      "Installed software, performed system updates, and maintained computer systems to ensure 99% uptime.",
      "Assisted users with Microsoft Office, email setup, and online applications including government services.",
    ],
  },
  {
    id: "edu-tut",
    type: "education",
    role: "Tshwane University of Technology",
    company: "Tshwane University of Technology",
    qualification:
      "Final Year Student — Computer Systems Engineering (2021 – Present)",
    period: "2021 – Present",
    description:
      "Currently completing a degree in Computer Systems Engineering with focus on embedded systems, networking, and software development.",
  },
  {
    id: "edu-kwabhanya",
    type: "education",
    role: "Kwabhanya Secondary School",
    company: "Kwabhanya Secondary School",
    qualification: "Matric (Grade 12, 2020)",
    period: "2020",
    description:
      "Completed senior secondary education with a strong foundation in mathematics and sciences.",
  },
];

export const education: Education[] = [
  {
    id: "tut",
    institution: "Tshwane University of Technology",
    qualification:
      "Final Year Student in Computer Systems Engineering (2021 – Present)",
    period: "2021 – Present",
    description:
      "Studying Computer Systems Engineering with focus on embedded systems, networking, and systems integration.",
  },
  {
    id: "kwabhanya",
    institution: "Kwabhanya Secondary School",
    qualification: "Matric (Grade 12, 2020)",
    period: "2020",
  },
];

export const certifications: Certification[] = [
  {
    id: "hp-life",
    name: "Professional Networking for Career Growth",
    issuer: "HP LIFE",
  },
  {
    id: "cisco-cyber",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    id: "ms-outlook",
    name: "Microsoft Outlook Certification",
    issuer: "Microsoft",
  },
  {
    id: "ms-teams",
    name: "Microsoft Teams Certification",
    issuer: "Microsoft",
  },
];

export const references: Reference[] = [
  {
    id: "ref-mazibuko",
    name: "Sfiso Innocent Mazibuko",
    company: "INNO & SEP Trading Enterprise",
    phone: "0725062632",
  },
  {
    id: "ref-zulu",
    name: "Sinothile Zulu",
    company: "Independent",
    phone: "0656172283",
  },
];

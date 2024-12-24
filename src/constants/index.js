import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
   
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AI ML Enthusiast",
    icon: backend,
  },
  {
    title: "IoT Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Intern",
    company_name: "Edunet Foundation (AICTE & IBM)",
    tech_stack: [ "Python", "TensorFlow", "Flask", "Numpy", ],
    icon: tesla,
    iconBg: "#000",
    date: "June 2023",
    
    points: [
        "Gained expertise in data cleaning, preprocessing, and visualization.",
        "Analyzed and visualized Indian startup funding trends." ],
         
},
{
  title: "Operations Team Member",
  company_name: "EBSB, VESIT",
  date: "July 2023 - Present",
  icon: shopify,
  points: [
      "Coordinated with members to organize events attended by 150+ students on topics like 'Effective Technology Intervention for School Education.'"
  ],
},
{
  title: "Junior Event Organizer",
  company_name: "PRAXIS Robotics Team, VESIT",
  date: "March 2024",
  icon: meta,
  points: [
      "Organized a dynamic space-themed event featuring innovative competition elements such as tokens, leaderboards, and resource-efficient Track0mania tracks."
  ],
},
{
  title: "Sports Incharge",
  company_name: "VESIT",
  icon: starbucks,
  date: "November 2022 - June 2023",
  points: [
      "Successfully managed 45+ students and led the team to secure 2nd place in the Annual Sports Championship."
  ],
}


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "F.R.A.S",
    description:
      "Face Recognition Based Attendance System (F.R.A.S) is a real-time application designed to streamline attendance tracking using advanced deep learning techniques. The system integrates face detection, embedding generation, and database storage to ensure efficient and secure identification. Built with React, Firebase, TensorFlow, Flask, and Python, it delivers a seamless experience, automating attendance processes with high accuracy and reducing manual intervention.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vineet-w",
  },
  {
    name: "Agri.ai",
    description:
      "The Agri.ai mobile app is designed to empower farmers with AI-driven insights and tools for better crop management. It provides accurate yield predictions, real-time weather updates, soil health monitoring, pest and disease detection, and smart irrigation advice. With features like market price trends, resource management, and offline functionality, Agri.AI helps farmers optimize their productivity, reduce costs, and improve sustainability, all through an intuitive and easy-to-use platform.",
    tags: [
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vineet-w",
  },
  {
    name: "InTime",
    description:
      "A mobile app and cloud platform that helps users in emergencies. The system uses an ESP32 device to send SOS signals, location, and real-time updates to emergency contacts, the police, and ambulances. It integrates GPS tracking and AI assistance for faster and more effective help.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ESP32",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vineet-w",
  },
];

export { services, technologies, experiences, testimonials, projects };

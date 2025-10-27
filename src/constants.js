// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import shadcn from "./assets/tech_logo/shadcn.png"
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import Giftechies from './assets/company_logo/Giftechies-Logo.svg';
import sheryians from './assets/company_logo/sheryians-logo.png';


// Education Section Logo's
import bbsbec from './assets/education_logo/bbsbec.png';
import pseb from './assets/education_logo/pseb.png';

// Project Section Logo's
import css from './assets/work_logo/css.png';
import life from './assets/work_logo/life.png';
import gitFinder from './assets/work_logo/gitFinder.png';
import productive from './assets/work_logo/productive-dashboard.png';
import mood from './assets/work_logo/mood.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'ShadCn', logo: shadcn },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    
    ],
  },
];

  export const experiences = [
 
    {
      id: 1,
      img: Giftechies,
      role: "FullStack Developer",
      company: "Giftechies",
      date: "May 2025 - Present",
      desc: "Worked as a Full stack Developer, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, tailwind,shadcn and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Javascript",
        "Next.js",
        "Node.js",
        "Express.js",
        "Mongoose",
      ],
    },
    
    {
      id: 2,
      img: sheryians,
      role: "Trainee MERN Stack",
      company: "Sheryians Coding School",
      date: "April 2025 - October 2025",
      desc: "Successfully completed an intensive MERN Stack Trainee program, building a robust full-stack foundation. Gained proficiency in ReactJS, Redux, Node.js, Express.js, and MongoDB/Mongoose, alongside modern styling (Tailwind CSS). Applied these skills to develop complex projects, including an AI Chatbot, an Moody player, and a productive dashboard, mastering project structuring and efficient full-stack logic separation.",
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Tailwind CSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "Node.js",
        "Express.js",
        "Mongoose",
      ],
    },
  ];
  
  export const education = [
 
    {
      id: 1,
      img: bbsbec,
      school: "BABA BANDA SINGH BAHADUR ENGINEERING COLLEGE - FATEHGARH SAHIB",
      date: "Sept 2020 - Aug 2024",
      grade: "7.79 CGP",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from BBSBEC Fatehgarh Sahib , Sirhind. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology in Computer Science - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: pseb,
      school: "Govt. Sen. Sec. School Jandiali",
      date: "Apr 2018 - March 2019",
      grade: "71.77%",
      desc: "I completed my class 12 education from Govt. Sen. Sec. School Jandiali, under the PSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "PSEB(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: pseb,
      school: "Govt. Sen. Sec. School Jandiali",
      date: "Apr 2016 - March 2017",
      grade: "80%",
      desc: "I completed my class 10 education from Govt. Sen. Sec. School Jandiali, Punjab under the PSEB board, where I studied Science with Computer.",
      degree: "PSEB(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CSS Construction- UK Based Company",
      description:
        "CSS Construction is a UK-based full-stack platform for construction services, including skip hire, RORO skips, concrete supply, and tipper and grab hire. Built with Next.js, Tailwind CSS, Shadcn UI, and Swiper.js, it delivers a responsive, interactive frontend and a secure backend with Node.js, Express, and MongoDB. Utilizing SSR for SEO and modular components for consistent design, the project demonstrates maintainable architecture, performance optimization, and a seamless user experience, marking my first full-stack deployment-ready project.",
      image: css,
     tags: [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Shadcn UI",
  "Swiper.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Full Stack",
  "Server-Side Rendering (SSR)",
  "API Development",
  "Web Architecture",
  "Vercel Deployment"
],

      github: "https://github.com/Giftechies/css-construction",
      webapp: "https://csserv.uk/",
    },
    {
      id: 1,
      title: "LifeCycle Financial",
      description:
        "Lifecycle Financial is a modern, responsive static website built with Next.js to showcase financial services including insurance, mortgage solutions, and retirement planning. Designed for a UK-based financial consultancy, it emphasizes trust and clarity through clean UI, fast load times, and SEO-friendly architecture. The site delivers a professional digital presence optimized for performance, accessibility, and client engagement.",
      image: life,
      tags: ["Next.js", "React", "Tailwind CSS", "Static Site Generation (SSG)", "Financial Services", "Insurance", "Mortgage", "SEO Optimization", "Responsive Design", "UI/UX"],
      github: "https://github.com/Giftechies/lifecycle-insurance",
      webapp: "https://lifecycle-insurance.vercel.app/",
    },
    {
      id: 2,
      title: "Github User Finder",
      description:
        "Git User Finder is a lightweight web application that allows users to search for GitHub profiles and view basic user information. This project was built primarily to practice fetching data from APIs, understanding what an API is, and performing DOM manipulation using vanilla JavaScript. Users can input a GitHub username, and the app dynamically fetches the user’s profile data, repositories, and avatar, then appends the results to the HTML in real-time. This project emphasizes JavaScript fundamentals, asynchronous data handling, and manipulating the DOM to create an interactive user experience. It was an essential learning step for understanding API integration, working with JSON, and updating the web page content dynamically without reloading.",
      image: gitFinder,
      tags: [, "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/404manveer/async_project_user_finder",
      webapp: "https://async-project-user-finder.vercel.app/",
    },
    {
      id: 4,
      title: "Productive Dashboard",
      description:
        "Productive Dashboard – Personal Productivity Web App.A web app enhancing productivity with a to-do list, daily planner, motivational quotes, Pomodoro timer, and live weather and time. Built with modern frontend technologies, it demonstrates API integration, DOM manipulation, state management, and responsive, interactive design.",
      image: productive,
      tags: ["HTML", "CSS","SCSS", "JavaScript", "API"],
      github: "https://github.com/404manveer/Productivity_dashboard",
      webapp: "https://productive-dashboard34-g75b.vercel.app/",
    },
    {
      id: 5,
      title: "Movie Recommendation App",
      description:
        "Moody Player is a React web app that detects facial expressions using face-api.js and suggests songs accordingly. Built with Vite and Tailwind CSS, it demonstrates real-time emotion recognition, API integration, and dynamic, interactive UI updates.",
      image: mood,
   tags: ["React JS", "Face Detection", "API", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/404manveer/Moody-player-frontend",
      webapp: "https://moody-player-frontend-six.vercel.app/",
    },
   

  ];  
import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Mark Gui',
  title: "Hi all, This is Mark Gui",
  description:
    "I'm passionate Full Stack developer having an experience of web applications with FastAPI, React frameworks and Web3 development on Polkadot, Ethereum and some AI chatbots.",
  resumeLink:
    'https://drive.google.com/file/d/1BJ91BJl20-1NWeKdied_tBHigfbyx-wn/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'mkbeefcake',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://mkbeefcake.github.io/',
  linkedin: 'https://www.linkedin.com/in/mark-gui-6b38a7110',
  github: 'https://github.com/mkbeefcake',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive frontend in React/Next frameworks'
        ),
        emoji('⚡ Building RESTful APIs in FastAPI Framework'),
        emoji('⚡ Integrating AI models such as OpenAI, Langchain and etc'),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'FastAPI',
          iconifyTag: 'skill-icons:fastapi',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Google',
          iconifyTag: 'devicon:googlecloud',
        },
        {
          skillName: 'Firebase',
          iconifyTag: 'logos:firebase',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
        emoji(
          '⚡ Building Joystream DAO project by using Web3'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Shenyang University Of Technology',
    subHeader: 'Bachelor of Computer Science',
    duration: 'April 2009 - June 2013',
    desc: 'Participated in the research of OS concepts.',
    grade: 'Grade A',
    descBullets: [
      'Analyze Memory management system in Linux OS',
      'Research of AES accelerate board on internal memory slot'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Backend Developer',
    company: 'LLM Solution',
    companyLogo: '/img/icons/common/LLMSolution.jpg',
    date: 'May 2023 – Present',
    desc: 'Worked as a backend developer, designing backend architectures, provider plugin systems, integrated 3rd party provider services, and various AI models. Integrated Pinecone, OpenAI, and Langchain on the FastAPI based backend platform',
  },
  {
    role: 'Full Stack Developer',
    company: 'Rumba.ai',
    companyLogo: '/img/icons/common/rumba_logo.png',
    date: 'Feb 2023 – May 2023',
    desc: "Worked as a full stack developer. Rumba.ai automates & optimize end-user's brand social media content by using various AI models. Here integrated OpenAI text generation from prompt, HuggingFace image generation features",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'A Founding member of Joystream Community',
    company: 'Joystream',
    companyLogo: '/img/icons/common/joystream.png',
    date: 'Jun 2022 - Present',
    desc: 'A Founding member of Joystream community. involved as Web3 and React frontend developer on their DAO website. worked on React frontend and GraphQL queries and Hydra indexer between PostgreSQL and Polkadot parachain',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelancing',
    companyLogo: '/img/icons/common/freelancing.png',
    date: 'Jun 2018 ~ Aug 2022',
    desc: 'Worked as Freelancer in some years. High skills and experience in React, Node, Python, C++, Laravel frameworks for various projects.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Joystream',
    desc: 'Pioneer DAO website with React & Web3',
    github: 'https://github.com/mkbeefcake/pioneer',
    link: 'https://pioneerapp.xyz/',
  },
  {
    name: 'Rumba.ai',
    desc: 'OpenAI integrated Social Media Content Generation system',
    link: 'https://rumba.ai',
  },
  {
    name: 'Thoughtware',
    desc: 'Human-readable specialized idea system',
    github: "https://github.com/mkbeefcake/thoughtware",
    link: 'https://play.google.com/store/apps/details?id=com.thoughtware.mvp',
  },
  {
    name: 'LLM Solution / AI Bot',
    desc: 'AI based chat automation bot system',
    link: "https://frontend-yix5m2x4pq-uc.a.run.app/"
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Nate / Rumba.ai',
    feedback:
      'You have been very helpful to us early on. You are an amazing dev and I wish you nothing but the best',
  },
  {
    name: 'Dr. Dan / Thoughtware',
    feedback:
      'I really appreciate what you \'v done so far, I want to work with you',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mark Gui',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Mark Gui',
  image: '',
  url: 'https://developer-portfolio-mkbeefcake.vercel.app',
  keywords: [
    'Hanzla',
    'Mark Gui',
    '@mkbeefcake',
    'mkbeefcake',
    'Portfolio',
    'Hanzla Portfolio ',
    'Mark Gui Portfolio',
  ],
};

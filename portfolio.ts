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
  name: 'Mark',
  title: "Hi all, This is Mark (孙岩峰)",
  description:
    "Boasting proficiency in FastAPI, React, and Polkadot's Web3 developments, I blend cutting-edge front-end and back-end technologies to create exceptional digital experiences. My skills further extend to creating intuitive AI chatbots, bringing intelligent interactivity to the user experience.",
  resumeLink:
    'https://drive.google.com/file/d/1n4YasP6CwaYNp8a2UO_9WlEXtzdiy_b3/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'mkbeefcake',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://mkbeefcake.github.io/',
  linkedin: 'https://www.linkedin.com/in/yanfeng-gui-6b38a7110',
  github: 'https://github.com/mkbeefcake',
  mail: 'mailto:mkblockchaindev@outlook.com'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'As a senior software developer, I conceive, design, and implement innovative software solutions that drive impactful outcomes.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Skilled in crafting user-friendly and responsive front-end experiences with React/Next.js frameworks'
        ),
        emoji('⚡ Composing robust RESTful endpoints with the speed and precision of FastAPI frameworks'),
        emoji('⚡ Weaving the incredible power of AI models like OpenAI and Langchain into an intelligent tapestry of code'),
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
    Stack: 'React/Next', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'FastAPI',
    progressPercentage: '100',
  },
  {
    Stack: 'Web3',
    progressPercentage: '90',
  },
  {
    Stack: 'AI technologies',
    progressPercentage: '90',
  },
  {
    Stack: 'C/C++/Python',
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
    role: 'Full Stack AI Developer',
    company: 'LLM Solution',
    companyLogo: '/img/icons/common/LLMSolution.jpg',
    date: 'May 2023 – July 2023',
    desc: 'Designing AI bot system architectures, provider plugins, integrating 3rd party services and various AI models. Specialized in Pinecones, OpenAI and Langchain with the FastAPI frameworks',
  },
  {
    role: 'A Founding member of Joystream Community',
    company: 'Joystream',
    companyLogo: '/img/icons/common/joystream.png',
    date: 'Jun 2022 - Present',
    desc: 'A Founding member of Joystream community. involved as Web3 and React frontend developer on their DAO website. worked on React frontend and GraphQL queries and Hydra indexer between PostgreSQL and Polkadot parachain',
  },
  {
    role: 'Full stack developer',
    company: 'GFEX',
    companyLogo: '/img/icons/common/LOGO_GFEX.png',
    date: 'Feb 2022 – Nov 2022',
    desc: "Full stack development for Gas condensate ratio calculation platform.",
  },
  {
    role: 'Low-Level Software Developer',
    company: 'Cyneward',
    companyLogo: '/img/icons/common/freelancing.png',
    date: 'Feb 2020 – Apr 2021',
    desc: "As Windows Low-Level software developer, designed windows file system filter driver for monitoring activities, Hooking mechanism on application-level",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const challenges: ProjectType[] = [
  {
    name: 'ImmersiveStudio',
    desc: 'The challenge by using three.js to implement 3d Scene',
    github: 'https://github.com/mkbeefcake/immersiveStudio-challenge',
  },
  {
    name: 'Popcorn',
    desc: 'The challenge to integrate Yearn contract and doing operations with it.',
    github: 'https://github.com/mkbeefcake/popcorn-challenge',
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
    name: 'Gfex',
    desc: 'Gas condensate association system',
    github: "https://github.com/mkbeefcake/Gfex",
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
  {
    name: 'Sergiu / Cyneward',
    feedback:
      'Fantastic work! It truly feels like you\'ve woven magic with your code.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Mark (孙岩峰)',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Mark (孙岩峰)',
  image: '',
  url: 'https://mkbeefcake.github.io',
  keywords: [
    'Mark (孙岩峰)',
    '@mkbeefcake',
    'mkbeefcake',
    'Portfolio',
    'Mark (孙岩峰) Portfolio',
  ],
};

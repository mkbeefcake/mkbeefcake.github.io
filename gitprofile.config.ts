// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mkbeefcake', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/mkbeefcake/mkbeefcake.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/mkbeefcake/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Public Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 1, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['mkbeefcake/my-project1', 'mkbeefcake/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Joystream/pioneer', 'Joystream/joystream', 'mkbeefcake/llm_frontend', 'mkbeefcake/llm_backend', 'mkbeefcake/Gfex', 'sapien-systems/ThoughtWare'], // List of repository names to display. example: ['mkbeefcake/my-project1', 'mkbeefcake/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Joystream DAO Website',
          skillset: 'React, Web3, Polkadot, GraphQL, PostgreSQL',
          description:
            'Joystream is an open-source platform built on blockchain. It supports multiple video streaming apps at once. Videos uploaded on any Joystream app can be seen by users of other apps, helping creators grow their audience.',
          imageUrl:
            'pioneer.png',
          link: 'https://pioneerapp.xyz',
        },
        {
          title: 'OpenAI Based Mail Automation System (MVP)',
          skillset: 'React/NextJS, FastAPI, OpenAI, Pinecone, Supabase, GCP',
          description:
            "An OpenAI-based auto mail response system that analyzes end-users' requests, detects their personalities, and suggests tailored products.",
          imageUrl:
            'chatautomation.png',
          link: 'https://frontend-yix5m2x4pq-uc.a.run.app/',
        },
        {
          title: 'Finetune Llama-2-7B model for extracting sensitive information',
          skillset: 'Google Colab, Python, Llama2, NumPy, LLM',
          description:
            "Fine tuned Llama-2-7b model for extrating sensitive information from scrapped webpage such as contact, address, phone, photo and etc",
          imageUrl:
            'llama-2-7b-finetune.png',
          link: 'https://colab.research.google.com/drive/1UjqIQFti1jyD7_wqTi8_dPSBgG9Xf3Kn?usp=sharing',
        },
        {
          title: 'ReactNative Poker Mobile App (Private)',
          skillset: 'React Native, Laravel, Android, iOS',
          description:
            "A simple poker app that offers a user-friendly interface for playing virtual-money poker game securely and conveniently on mobile devices.",
          imageUrl:
            'pokerapp.png',
          link: 'https://github.com/mkbeefcake/baupoker',
        },
        {
          title: 'ReactNative Real Estate Mobile App (Private)',
          skillset: 'React Native, Laravel, Android, iOS',
          description:
            "A simple Real Estate Mobile application",
          imageUrl:
            'availaview.png',
          link: 'https://github.com/mkbeefcake/baurealestate',
        },
        // {
        //   title: 'DataUnion Portal Website',
        //   skillset: 'React, Web3, Ethereum, MUI',
        //   description:
        //     'DataUnion Foundation is a cooperative protocol built on top of Ocean Protocol — an open-source, layer 2 protocol, built on Ethereum, that aims to allow businesses and individuals to exchange and monetize data and data-based services.',
        //   imageUrl:
        //     'dataunion.png',
        //   link: 'https://dataunion.app',
        // },
        {
          title: 'FastPlan Website & App',
          skillset: 'Vue, Electron, Chart, Fortran',
          description:
            'FastPlan is a sophisticated program designed for precise Gas and Gas condensate calculations, utilizing a robust Fortran core engine for enhanced computational efficiency.',
          imageUrl:
            'fastplan.jpg',
          link: 'https://github.com/mkbeefcake/Gfex',
        },
        {
          title: 'Jitsi Meet Customized',
          skillset: 'React, Electron',
          description:
            "Customized Jitsi Meet to meet the specific UI update needs of a university in Luxemberg, enhancing it to better support remote courses.",
          imageUrl:
            'jitsi-meet.png',
          link: 'https://github.com/mkbeefcake/jitsi-meet-customized',
        },
        {
          title: 'BlackMagic Camera BLE Control Dashboard',
          skillset: 'BLE, C#, C++, Blackmagic SDK, WinForm, Visual Studio',
          description:
            "BlackMagic Camera Control System via BLE stack on Windows platform",
          imageUrl:
            'blackmagicblecontrol.png',
          link: 'https://github.com/mkbeefcake/bluemagicsdk',
        },
      ],
    },
  },
  seo: {
    title: 'mkbeefcake - Github Page',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1ON_GmgLom1kA4kyB_KKxxd_Y02mjw4pzp_q1s70DfW8/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Typescript',
    'Python',
    'C/C++',
    'PHP',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'Django',
    'FastAPI',
    'Laravel',
    'TailwindCSS',
    'OpenAI',
    'Git',
  ],
  experiences: [
    // {
    //   company: 'EZAI.io',
    //   position: 'AI LLM Consultant',
    //   from: 'May 2024',
    //   to: 'July 2024',
    //   companyLink: 'https://ezai.io',
    // },
    {
      company: 'Basis Consultants Limited, UK',
      position: 'Part Time - Full Stack Developer',
      from: 'May 2023',
      to: 'Now',
      companyLink: 'https://find-and-update.company-information.service.gov.uk/company/14443713',
    },
    {
      company: 'Joystream Community',
      position: 'React & Web3 Developer',
      from: 'June 2022',
      to: 'December 2023',
      companyLink: 'https://pioneerapp.xyz',
    },
    {
      company: 'Freelancer',
      position: 'Full Stack & Software Developer',
      from: 'January 2018',
      to: 'June 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Yanbian University of Science and Technology',
      degree: 'BSC of IT',
      from: '2009',
      to: '2013',
    },
  ],
  publications: [
    {
      title: 'Joystream DAO Community Team',
      conferenceName: '',
      journalName: 'klaudiusz.eth',
      authors: 'Community Team Lead',
      link: '',
      description:
        "Thank you for all your work on Pioneer improvements, highlighting the successful resolution of numerous UI issues and the improved GraphQL integration, especially noticeable on the Forum, Election categories",
    },
    {
      title: 'FastPlan Gas & Gas Condensate',
      conferenceName: '',
      journalName: 'Fawzi Guehria',
      authors: 'Owner',
      link: '',
      description:
        'Thanks to your hard work and dedication, the FastPlan gas & gas condensate system has exceeded my expectations. The timely release on web and desktop platforms, along with its comprehensive charts and calculation features, showcase your exceptional skills and commitment to delivering high-quality solutions.',
    },
    {
      title: 'OpenAI Based Mail Automation System',
      conferenceName: '',
      journalName: 'Mattieu Moullec Perso',
      authors: 'Starter',
      link: '',
      description:
        'The design system architecture, components implementation, and deployment on GCP exceeded our expectations and have significantly improved our efficiency',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mkbeefcake', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;

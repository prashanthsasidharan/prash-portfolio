import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-dp.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    img: 'skills/html.png',
    url: '',
    title: 'html',
  },
  {
    id: nanoid(),
    img: 'skills/css.png',
    url: '',
    title: 'css',
  },
  {
    id: nanoid(),
    img: 'skills/javascript.png',
    url: '',
    title: 'javascript',
  },
  {
    id: nanoid(),
    img: 'skills/typescript1.png',
    url: '',
    title: 'typescript',
  },
  {
    id: nanoid(),
    img: 'skills/node-js.png',
    url: '',
    title: 'node-js',
  },
  {
    id: nanoid(),
    img: 'skills/ember.png',
    url: '',
    title: 'ember',
  },
  {
    id: nanoid(),
    img: 'skills/react.png',
    url: '',
    title: 'react',
  },
  {
    id: nanoid(),
    img: 'skills/bootstrap.png',
    url: '',
    title: 'bootstrap',
  },
  {
    id: nanoid(),
    img: 'skills/gitlab.png',
    url: '',
    title: 'gitlab',
  },
  {
    id: nanoid(),
    img: 'skills/github.png',
    url: '',
    title: 'github',
  },
  {
    id: nanoid(),
    img: 'skills/webpack.png',
    url: '',
    title: 'webpack',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

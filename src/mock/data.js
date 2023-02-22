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
    img: 'projects/form-filler.jpg',
    title: 'Form Filler',
    info: 'When you give your product to testers or other teams in your organisation, we also need to provide all the sandboxed credentials and they need to fill in all the details which makes the process repetitive and boring. This is where our filler comes to rescue. Once configuring filler with the form credentials, with just a button click the form can be autofilled.',
    info2: '',
    url: 'https://form-filler-backend.onrender.com/',
    repo: 'https://github.com/prashanthsasidharan/form-filler', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/ecommerce-app.jpg',
    title: 'E-commerce app with stripe integration',
    info: 'E-commerce app with the facility to make real-time payments via stripe integration',
    info2: '',
    url: 'https://ecommerce-stripe-app.onrender.com/',
    repo: 'https://github.com/prashanthsasidharan/ecommerce-app-with-stripe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/select-web.jpg',
    title: 'Single and Multi Select Web Component',
    info: 'Compatible select web component which works with any framework or no framework. This component is created using stencilJs',
    info2: '',
    url: ' https://select-component.netlify.app/',
    repo: 'https://github.com/prashanthsasidharan/select-web-component', // if no repo, the button will not show up
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

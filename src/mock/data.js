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

// BLOGS DATA

export const blogsData = [
  {
    id: nanoid(),
    img: 'blogs/execution-context.jpg',
    title: 'How Does JS code run - Execution context and Call stack',
    info: 'Learn how execution context works and how the order of execution context is maintained by call stack.',
    pills: ['Call stack', 'Execution Context', 'Browser'],
    url: 'https://dev.to/prashan81992916/how-does-js-code-run-execution-context-and-call-stack-3a7',
    date: '11 May 2021',
  },
  {
    id: nanoid(),
    img: 'blogs/js-logo.jpg',
    title: 'Know about let, var and const in JS',
    info: 'Sometimes understanding let, var, const and their scopes can be confusing. Know how they exactly work by clicking the above link',
    pills: ['Snippet', 'Scope'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6902831857168203776/',
    date: '2 Feb 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/computed-prop.jpg',
    title: 'Computed property names',
    info: 'Computed property names was introduced in ES5, which allows to provide expressions inside the brackets. So throught this we can dynamically set or get a prop after computing expression inside the bracket',
    pills: ['Snippet', 'Computed Props'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6902831857168203776/',
    date: '2 Feb 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/mixins.jpg',
    title: 'Mixins Pattern',
    info: 'Mixin is an object which can used to add additional functionality to an object or class',
    pills: ['Mixins', 'Javascript', 'Design Patterns'],
    url: 'https://www.linkedin.com/posts/prashanth-sasidharan-7a32301a8_mixin-js-javascript-activity-6905861264082386944-6ZQh/?utm_source=share&utm_medium=member_desktop',
    date: '24 Mar 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/proxy.jpg',
    title: 'Proxy pattern',
    info: 'Proxy intercepts and controls interactions to target objects.',
    pills: ['Proxy', 'Javascript', 'Design Patterns'],
    url: 'https://www.linkedin.com/posts/prashanth-sasidharan-7a32301a8_proxy-js-javascript-activity-6902270038393409536-foXy/?utm_source=share&utm_medium=member_desktop',
    date: '29 Mar 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/modules.jpg',
    title: 'Modules in Js',
    info: 'Learn about code splitting, dynamic imports how modules patterns works in JS',
    pills: ['Dynamic Imports', 'Javascript', 'Design Patterns'],
    url: 'https://www.linkedin.com/posts/prashanth-sasidharan-7a32301a8_modules-js-javascript-activity-6904408738531295232-cxmR/?utm_source=share&utm_medium=member_desktop',
    date: '15 Apr 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/singleton.jpg',
    title: 'Singelton Pattern',
    info: 'Class that is instantiated only once during the runtime of the application in the global scope',
    pills: ['Singelton', 'Javascript', 'Design Patterns'],
    url: 'https://www.linkedin.com/posts/prashanth-sasidharan-7a32301a8_singleton-js-javascript-activity-6901963539494371328-ZfcT/?utm_source=share&utm_medium=member_desktop',
    date: '23 Apr 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/memoize.jpg',
    title: 'Memoization method',
    info: 'This is an experimentation post on memoizing function and invokes the function only if anyone of the dependency property values changes',
    pills: ['Memo', 'Javascript', 'Design Patterns'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6896812653507952640/?utm_source=share&utm_medium=member_desktop',
    date: '30 Apr 2022',
  },
  {
    id: nanoid(),
    img: 'blogs/drum.jpg',
    title: 'Virtual Drum Kit using Javascript',
    info: 'Learn to create simple virtual drum using vanilla js and learn about transitions and data attributes',
    pills: ['Fun Project', 'Web Apis'],
    url: 'https://dev.to/prashan81992916/build-a-virtual-drum-kit-using-javascript-203k',
    date: '18 Jul 2021',
  },
  {
    id: nanoid(),
    img: 'blogs/default-prop.jpg',
    title: 'Dont assign props as the default value for useState',
    info: 'Know how to correctly assign props from the parent component as a default value in the childs useState hook',
    pills: ['React', 'bug'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7026952728945848320/',
    date: '30 Apr 2022',
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
  isEnabled: false,
};

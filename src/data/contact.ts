import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/michael-suarez-vasquez',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://github.com/stocktiger',
  //   label: 'Github',
  //   icon: faGithub,
  // },
  // {
  //   link: 'https://x.com/dangelosaurus',
  //   label: 'X',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:michael.suarez.vasquez@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

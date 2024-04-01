import telefonica from "../assets/img/telefonica-logo.jpg";
import cajasocial from "../assets/img/caja-social-logo.jpg";
import datapoint from "../assets/img/datapoint-logo.jpg";
import weblink from "../assets/img/web-link-logo.jpg";
import rasysbox from "../editable-stuff/rasysbox-ai.jpg";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Raul",
  middleName: "",
  lastName: "Bolivar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/raulrobinson",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rasysbox/",
    },
    {
      image: "fa-telegram",
      url: "https://t.me/rasysbox",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: rasysbox,
  imageSize: 375,
  message:
      "My name is Raul Bolivar. I’m a I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1rmgH0HIlX15r1Sh9fzCqQfTVQ3Ztd79s/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects & Code",
  gitHubUsername: "raulrobinson",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
      "Mensaje",
  images: [
    {
      img: telefonica,
      label: "Telefonica | Movistar",
      paragraph: "Especialista Desarrollador Senior Full-stack."
    },
    {
      img: weblink,
      label: "Web Link S.A.S.",
      paragraph: "CFO & Gerente de Proyectos."
    },
    {
      img: datapoint,
      label: "Datapoint de Colombia S.A.S.",
      paragraph: "Ingeniero de Soporte Tecnico."
    },
    {
      img: cajasocial,
      label: "Banco Caja Social | Fundacion Grupo Social",
      paragraph: "Tecnico Electronico & Sistemas."
    },
  ],
  imageSize: {
    width:"615",
    height:"615"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 100},
    { name: "Nodejs", value: 95 },
    { name: "Python", value: 95 },
    { name: "Nextjs", value: 65 },
    { name: "SQL", value: 95 },
    { name: "ASP.NET Core", value: 100},
    { name: "Spring Boot & Spring", value: 100},
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 98 },
    { name: "C#", value: 80 },
    { name: "Angular", value: 65 },
    { name: "Linux", value: 75 },
    { name: "Windows", value: 98 },
    { name: "Raspberry", value: 100 },
    { name: "Scripting", value: 85 },
    { name: "TypeScript", value: 90 },
    { name: "Electronic", value: 100 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
      "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "rasysbox@hotmail.com",
};

// EXPERIENCES JOBS
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Specialist Developer Senior of Software ',
      companylogo: telefonica,
      date: 'July 2022 – March 2024',
    },
    {
      role: 'CFO & Project Manager',
      companylogo: weblink,
      date: 'February 2014 – Febraury 2022',
    },
    {
      role: 'Technical Support',
      companylogo: datapoint,
      date: 'January 2006 – Febraury 14',
    },
    {
      role: 'Technical Support Assistant',
      companylogo: cajasocial,
      date: 'February 1996 – December 2005',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, about, experiences, leadership, mainBody, repos, skills, getInTouch };

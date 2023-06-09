import htmlIcon from "./icons/html-5-svgrepo-com.svg";
import cssIcon from "./icons/css-3-svgrepo-com.svg";
import javascriptIcon from "./icons/javascript-svgrepo-com.svg";
import gitIcon from "./icons/git-svgrepo-com.svg";
import sassIcon from "./icons/sass-svgrepo-com.svg";
import bootstrapIcon from "./icons/bootstrap-4-logo-svgrepo-com.svg";
import typescriptIcon from "./icons/typescript-svgrepo-com.svg";
import reactIcon from "./icons/react-svgrepo-com.svg";
import vueIcon from "./icons/vue-svgrepo-com.svg";
import firebaseIcon from "./icons/firebase-svgrepo-com.svg";
import styledComponentsIcon from "./icons/styled-components-1.svg";


type ProjectTypes = {
  name: string;
  imageDesktop: string;
  imageMobile: string;
  usedInProject: string[];
  projectUrl: string;
  id: string;
};


type TechnologiesTypes = {
    icon: string,
    name: string
}

export const technologiesIcons: TechnologiesTypes[] = [
  {
    icon: htmlIcon,
    name: "HTML",
  },
  {
    icon: cssIcon,
    name: "CSS",
  },
  {
    icon: javascriptIcon,
    name: "Javascript",
  },
  {
    icon: gitIcon,
    name: "Git",
  },
  {
    icon: sassIcon,
    name: "Sass/Scss",
  },
  {
    icon: bootstrapIcon,
    name: "Bootstrap",
  },
  {
    icon: typescriptIcon,
    name: "Typescript",
  },
  {
    icon: reactIcon,
    name: "React",
  },
  {
    icon: vueIcon,
    name: "Vue",
  },
  {
    icon: firebaseIcon,
    name: "Firebase",
  },
  {
    icon: styledComponentsIcon,
    name: "Styled Components",
  },
];

export const projectData: ProjectTypes[] = [
  {
    name: "Cookbook",
    imageDesktop: "https://i.imgur.com/kK4VWIw.png",
    imageMobile: "https://i.imgur.com/O1GM1eI.png",
    usedInProject: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      reactIcon,
      firebaseIcon,
      bootstrapIcon,
    ],
    projectUrl: "https://cookbook-client-nine.vercel.app/",
    id: "1",
  },
  {
    name: "Quiz",
    imageDesktop: "https://i.imgur.com/dz3M3zn.png",
    imageMobile: "https://i.imgur.com/yJic1Ah.png",
    usedInProject: [htmlIcon, cssIcon, javascriptIcon, vueIcon],
    projectUrl: "https://spontaneous-heliotrope-b7f4af.netlify.app/",
    id: "2",
  },
  {
    name: "Simple Eshop",
    imageDesktop: "https://i.imgur.com/EH0mGho.png",
    imageMobile: "https://i.imgur.com/wRKBAMU.png",
    usedInProject: [htmlIcon, cssIcon, javascriptIcon],
    projectUrl: "https://viktorrasev-simple-eshop.netlify.app/",
    id: "3",
  },
  {
    name: "Todo List",
    imageDesktop: "https://i.imgur.com/PJoPycg.png",
    imageMobile: "https://i.imgur.com/Nk0BP34.png",
    usedInProject: [htmlIcon, cssIcon, javascriptIcon],
    projectUrl: "https://viktorrasev-todolist.netlify.app/",
    id: "4",
  },
];

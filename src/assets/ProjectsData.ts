import bootstrapIcon from "./icons/bootstrap-4-logo-svgrepo-com.svg"
import cssIcon from "./icons/css-3-svgrepo-com.svg"
import firebaseIcon from "./icons/firebase-svgrepo-com.svg"
// import gitIcon from "./icons/git-svgrepo-com.svg"
// import githubIcon from "./icons/github-svgrepo-com.svg"
// import emailtIcon from "./icons/google-gmail-svgrepo-com.svg"
import htmltIcon from "./icons/html-5-svgrepo-com.svg"
import javascriptIcon from "./icons/javascript-svgrepo-com.svg"
// import linkedinIcon from "./icons/linkedin-svgrepo-com.svg"
import reactIcon from "./icons/react-svgrepo-com.svg"
// import sassIcon from "./icons/sass-svgrepo-com.svg"
// import smartphoneIcon from "./icons/smartphone-svgrepo-com.svg"
// import typescriptIcon from "./icons/typescript-svgrepo-com.svg"
import vueIcon from "./icons/vue-svgrepo-com.svg"






type ProjectTypes = {
    name: string,
    imageDesktop: string,
    imageMobile: string,
    usedInProject: string[],
    projectUrl: string,
    id: string,
}

export const projectData: ProjectTypes[]= [
    {
        name: "Cookbook",
        imageDesktop: "https://i.imgur.com/kK4VWIw.png",
        imageMobile: "https://i.imgur.com/O1GM1eI.png",
        usedInProject:[htmltIcon, cssIcon, javascriptIcon, reactIcon, firebaseIcon, bootstrapIcon],
        projectUrl: "https://cookbook-client-nine.vercel.app/",
        id: "1",
    }, {
        name: "Quiz",
        imageDesktop: "https://i.imgur.com/dz3M3zn.png",
        imageMobile: "https://i.imgur.com/yJic1Ah.png",
        usedInProject: [htmltIcon, cssIcon, javascriptIcon, vueIcon],
        projectUrl: "https://spontaneous-heliotrope-b7f4af.netlify.app/",
        id: "2",
    }, {
        name: "Simple Eshop",
        imageDesktop: "https://i.imgur.com/EH0mGho.png",
        imageMobile: "https://i.imgur.com/wRKBAMU.png",
        usedInProject: [htmltIcon, cssIcon, javascriptIcon],
        projectUrl: "https://viktorrasev-simple-eshop.netlify.app/",
        id: "3",
    }, {
        name: "Todo List",
        imageDesktop: "https://i.imgur.com/PJoPycg.png",
        imageMobile: "https://i.imgur.com/Nk0BP34.png",
        usedInProject: [htmltIcon, cssIcon, javascriptIcon],
        projectUrl: "https://viktorrasev-todolist.netlify.app/",
        id: "4",
    },
]

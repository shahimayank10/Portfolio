import React, { createContext, useState } from "react";

export const ProfileData = createContext();

const Context = (props) => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "ReactJs",
      image: "reactjs.svg",
      link: "https://reactjs.org/",
    },
    {
      id: 2,
      name: "JavaScript",
      image: "javascript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 3,
      name: "HTML",
      image: "html.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 4,
      name: "CSS",
      image: "css.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 5,
      name: "C++",
      image: "cpp.svg",
      link: "https://www.geeksforgeeks.org/c-plus-plus/",
    },
    { id: 6, name: "MySql", image: "sql.svg", link: "https://www.mysql.com/" },
    {
      id: 7,
      name: "Bootstrap",
      image: "bootstrap.svg",
      link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
    },
    {
      id: 8,
      name: "Tailwind",
      image: "tailwind.svg",
      link: "https://tailwindcss.com/",
    },
  ]);

  const ProjectDetails = [
    {
      title: "To-Do List Web App",
      tech: "HTML, Tailwind CSS, JavaScript",
      description:
        "Built a responsive and interactive to-do list application to manage daily tasks efficiently. Used Tailwind CSS for clean, utility-first styling and responsive design. Implemented dynamic task addition, deletion, and completion functionality using JavaScript. Ensured a user-friendly layout with smooth UI interactions.",
      link: "",
    },
    {
      title: "AI-Powered Image Enhancer",
      tech: "React.js, JavaScript, PicWish API",
      description:
        "Developed a web application that utilizes artificial intelligence to enhance image quality, upscale resolution, and improve image details in real-time. Integrated PicWish, which offers free APIs for seamless and high-quality image enhancement. Implemented a smooth before-and-after comparison interface to showcase AI-based transformations. Focused on clean UI/UX for an intuitive and responsive user experience.",
      link: "https://shahimayank10.github.io/Image-Enhancer/",
    },
    {
      title: "E-commerce (frontend)",
      tech: "React.js, JavaScript",
      description: "Proposed an e-commerce website using React.js. Implemented routing for seamless navigation across pages. Created functionality to filter products based on their categories. Enabled adding, editing, and removing showcased products. Utilized localStorage for data management in the absence of a backend. Enhanced React skills with a focus on state management and component reusability",
      link: "#",
    },
    {
      title: "News Website",
      tech: "HTML, Tailwind CSS, JavaScript",
      description: "Authored a dynamic news website using HTML, CSS, and JavaScript. Integrated a news API to fetch and display real-time news. Added a search feature to filter news by categories, enhancing user experience. Designed a responsive and intuitive interface for seamless navigation. Demonstrated skills in API handling, DOM manipulation, and responsive web design.",
      link: "",
    },
  ];

  const defaultMode = localStorage.getItem("mode") 
  ? JSON.parse(localStorage.getItem("mode"))
  : true;

const [mode, setMode] = useState(defaultMode);

const toggleMode = () => {
  const newMode = !mode;
  setMode(newMode);
  localStorage.setItem("mode", JSON.stringify(newMode));
};

  return (
    <div>
      <ProfileData.Provider value={{toggleMode, skills, ProjectDetails, mode, setMode }}>
        {props.children}
      </ProfileData.Provider>
    </div>
  );
};

export default Context;

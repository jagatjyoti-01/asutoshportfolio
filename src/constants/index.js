import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project22.jpeg";
import project3 from "../assets/projects/project4.jpg";
import project4 from "../assets/projects/project3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React ,Next.js, as well as back-end technologies like Node.js, express,mongoDb. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicateddd and  versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - june",
    role: "MERN STACK Developer",
    company: "IIT Hydrabad.",
    description: ` Led the development of an IoT-based web application using React.js for a project sponsored by Maruti Suzuki Japan and the Telangana State Fisheries Department. The application read real-time data from Google Sheets, stored it in a database, and dynamically plotted graphs and constructed tables to visualize the data. Implemented a secure login page and user/admin authentication system to manage access and permissions. Collaborated with stakeholders to define project requirements and timelines, ensuring the delivery of a robust and efficient solution.

.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "2024-july-present",
    role: "Full STACK Developer",
    company: "RISE INNOVATION",
    description: `As a Full Stack Developer at Rise Innovation, I am currently contributing to the development of multiple projects, including G2i, a dynamic learning platform aimed at enhancing the learning experience for users, and Daily Life, a platform designed to streamline job search processes for laborers and workers. These projects, along with several other websites I work on, focus on improving accessibility, functionality, and user experience, empowering individuals to find work opportunities more efficiently`,
    technologies: ["React", "typescript", "MUI", "Next.js","Node.js",'express.js'],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Waste Management",
    image: project1,
    description:"Developed a comprehensive e-commerce platform that empowers users to buy and sell products, including e-waste, at their convenience. The platform features an intuitive user interface for product listing, secure user authentication, and robust backend systems to manage transactions. By facilitating the responsible disposal and recycling of electronic waste, this project contributes to environmental sustainability and helps keep communities clean.",
    technologies: [ "CSS", "React", "Node.js","express.js", "MongoDB","ML"],
  },
  {
    title: "Real-Time Fisheries Monitoring System",
    image: project2,
    description:
      "The application read real-time data from Google Sheets, stored it in a database, and dynamically plotted graphs and constructed tables to visualize the data. Implemented a secure login page and user/admin authentication system to manage access and permissions. Collaborated with stakeholders to define project requirements and timelines, ensuring the delivery of a robust and efficient solution.",
    technologies: ["React", "Node.js", "Ml", "MongoDB","python"],
  },
  {
    title: "NewsMonkey:Your Daily Diges",
    image: project3,
    description:"Developed NewsMonkey, an innovative news aggregation platform that provides users with the latest news articles in a concise, 60-word summary format. Users can click on a Show More button to read the full details of each news story, complete with photos. The platform also allows users to filter news by specific categories, ensuring they stay informed about topics that interest them most.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "TextUtil-TextManage",
    image: project4,
    description:"Developed a versatile text manipulation tool that provides users with a suite of features to efficiently process and transform text. Users can enter a sentence or block of text and apply various operations such as converting to lowercase or uppercase, copying text, clearing text, and removing extra spaces. Additionally, the tool includes a light and dark mode feature to enhance user experience and accessibility",
    technologies: ["HTML", "CSS", "React", "javaScript"],
  },
];

export const CONTACT = {
  address: "10 patia ,ChandraSekharPur , Bhubaneswara ,751016 ",
  phoneNo: "+91 6372304687 ",
  email: "jagatjyotidash3@gmail.com",
   resume: "../assets/jagatjyotiResume.pdf"
};

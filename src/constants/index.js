import bike from "../assets/bike.jpg"
import sharp from "../assets/sharp.jpg"
import lds from "../assets/lds.jpg"

export const HERO_CONTENT = `i specialized in web developing and the stack i use is MERN STACK(MongoDB, Express.js, React js, Node.js). I more confident in my front-end skills but i am skillful in back-end technologies.`;

export const ABOUT_TEXT = `I am a 4th year student of BSIT in STI GLOBAL CITY, i aspire to be a front-end dev but full stack someday i am proficient in javascript and html css but i can also do back-end.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Latter-day saints social media website",
    image: lds,
    description:
      "A social media platform that we created for the Latter day saints",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://ldsmedia.netlify.app/"
  },
  {
    title: "SharpCuts",
    image: sharp,
    description:
      "A website that is reservation of haircuts",
    technologies: ["HTML", "CSS", "C# ASP.NET", "SQL"],
  },
  {
    title: "RFID Bike lock system",
    image: bike,
    description:
      "A website for parking bike system with rfid",
    technologies: ["HTML", "CSS", "ASP.NET", "SQL"],
  },
];

export const CONTACT = {
  address: "Makati city",
  phoneNo: "+63 9662375991 ",
  email: "Jhestineluxwell@gmail.com",
};
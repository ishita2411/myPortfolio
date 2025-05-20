import { title } from "process";

export const experiences = [
  {
    title: "Software Engineer",
    company: "Hewlett Packard Enterprise",
    location: "Houston, Texas, USA",
    startDate: "May 2023",
    endDate: "Present",
    skills:
      "Python, Flask, ReactJS, MongoDB, Bash Scripting, Git, Docker, Jenkins, Next.js, Typescript, Django, PostgreSQL",
    description: [
      "Developing a full stack application to increase team efficiency in conducting CSG qualifications by atleast 70%.",
      "Designed multiple API endpoints to access servers, collect data, remotely install OS on servers and update servers with latest SPPs",
      "Developed a CI/CD pipeline using Jenkins to automate the deployment of the application and its dependencies.",
      "Worked on setting up a PXE server to host various OSs and automate the installation process.",
      "Worked on deploying the application on a DX360 Gen11 server on the HPE network.",
      "Implemented a cron job to refresh the database every night which will update as and when new servers are added.",
    ],
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant",
    location: "Hyderabad, India",
    startDate: "Jul 2021",
    endDate: "Aug 2022",
    skills:
      "Python, Convolutional Neural Networks, Flask, Database, Natural Language processing, Pandas, Numpy",
    description: [
      "Developed a “Missing Person Detection” web application using Python, Flask, Convolution Neural Networks aiming to identify any missing person through a live video feed or by uploading an individual’s picture.",
      "Worked with a team to design a “Sarcasm Detection” Sequential model using python language and Natural Language Processing. Computed accuracy for the sarcasm detection model was over 85%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Cantilever Labs ",
    location: "Hyderabad, India",
    startDate: "Oct 2020",
    endDate: "Dec 2020",
    skills: "Java, Servlets, HTML, PHP , MySQL, Matlab, OpenCV",
    desscription: [
      "Spearheaded the development of a “Bus Ticket Booking System” using Java, Java Servlets, JavaScript, HTML, PHP and SQL. The project includes 2 modules- Administrator and User module. Admin can add, delete, update and view bus details. Users can book, cancel reservations and view all the bus details.",
      "Contributed to the development of a “Drowsiness Alert System” using OpenCV , Fuzzy Logic to detect and track the movement of a person in a video using OpenCV and Matlab. If the eye remains closed for more than 2-3 seconds then the person would be detected as drowsy and a loud sound alert is sent.",
    ],
  },
];

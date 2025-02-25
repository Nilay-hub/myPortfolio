


import {
  mobile,
  backend,
  creator,
  web,
  c, java, python, r, javascript, sql, php, html, css, react, node, typescript, mysql, mongodb, flask, tens, pytorch, aspnet, angular, threejs, git, excel, tableau, vscode, jupyter, eclipse, colab,

tailwind,

  
  
  del,
  gsuu,
  techo,
  air,
  movie,
  
  home,
  chase,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Engineer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = {
  "Programming Languages": [
    { name: "C", icon: c },
    { name: "Java", icon: java },
    { name: "Python", icon: python },
    { name: "R", icon: r},
    { name: "JavaScript", icon: javascript },
    { name: "SQL", icon: sql },
    { name: "PHP", icon: php }
  ],
  "Web Technologies": [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "React", icon: react },
    { name: "Node.js", icon: node },
    { name: "TypeScript", icon: typescript },
    { name: "TailWind", icon: tailwind}
  ],
  "Databases": [
    { name: "MySQL", icon: mysql },
    { name: "MongoDB", icon: mongodb }
  ],
  "Tools & Frameworks": [
    { name: "Flask", icon: flask },
    { name: "TensorFlow", icon: tens },
    { name: "PyTorch", icon: pytorch },
    { name: "ASP.NET", icon: aspnet },
    { name: "Angular", icon: angular },
    { name: "Three.js", icon: threejs },
    { name: "GitHub", icon: git },
    { name: "Microsoft Excel", icon: excel },
    { name: "Tableau", icon: tableau },
    { name: "VSCode", icon: vscode },
    { name: "Jupyter Notebook", icon: jupyter },
    { name: "Eclipse", icon: eclipse },
    { name: "Google Colab", icon: colab }
  ]
};

// src/constants/index.js

 const education = [
  {
    college_name: "Georgia State University",
    degree: "Master of Science in Computer Science",
    date: "Aug 2023 - Present",
    gpa: "4.0/4.0",
    description: "Full fee waiver along with GRA.",
  },
  {
    college_name: "Gujarat Technological University",
    degree: "Bachelor of Technology in Computer Science",
    date: "June 2019 - May 2023",
    gpa: "3.9/4",
    description: "Full Scholarship.",
  },
  // Add more education entries here
];



const experiences = [
  {
    title: "Software Engineer - Graduate Research Assistant",
    company_name: "Georgia State University",
    icon: gsuu,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Successfully developed scalable and efficient RESTful APIs to manage dynamic data requests for a front-end JavaScript application, resulting in robust handling of over 50,000 concurrent users and ensuring a seamless user experience.",
      " Led multiple user testing sessions to collect feedback, refining the app's user interface, and successfully reducing post-launch bug reports by 41%, thereby enhancing user satisfaction and app reliability. ", " Collaborated with a developer to implement RESTful APIs using Node.js, optimizing performance and significantly boosting reporting speed by 24%, thereby improving the efficiency of the analytics team.",
      " Designed and developed an MVP for a store delivery management platform with React and JavaScript, enabling over 200 business customers to manage and monitor their deliveries efficiently.",
      " Conducted meticulous code reviews and comprehensive testing for three new features on a donor-facing web app, enhancing functionality and reliability, which led to a 12% increase in contributions."
      
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Nutracap USA",
    icon: del,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      


    "Spearheaded end-to-end development of Intela, a tax-based internal application, contributing to three new version releases and improving tax processing efficiency by 30%. "," Enhanced software quality by writing comprehensive integration tests, boosting code coverage by 70-80% across frontend (Angular) and backend (.NET) systems.",
      
     " Increased application efficiency by 20% through strategic performance enhancements and code refactoring initiatives."," Expanded application reach to 10+ languages using the Angular framework, improving user accessibility and engagement."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Tatvasoft",
    icon: techo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      


      "Integrated third-party APIs using Python, enhancing app functionality and increasing user satisfaction by 24%. Improved database performance by optimizing MySQL queries, resulting in an 11% boost in query response times.",
      " Streamlined the CI/CD pipeline, reducing build times by 27% and improving deployment efficiency. Contributed to the e-commerce team by designing algorithms to match users to products, boosting sales by 16%.",
      " Participated in code reviews and collaborated with senior engineers, enhancing code quality by 18% and reducing merge conflicts by 13% using Git."
    ],
  },
  
];



const projects = [
 
  {
    name: "Spam SMS Classification (NLP & ML)",
    description:
    "Developed an intelligent SMS filtering system using machine learning and NLP techniques to classify messages as spam or ham. Implemented data preprocessing, feature engineering, and model evaluation using algorithms like Random Forest and Naive Bayes. Designed a scalable solution with automated detection, enhancing user experience by reducing unwanted messages and improving communication security.",    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Text Classificatin",
        color: "pink-text-gradient",
      },
      {
        name: "Automation",
        color: "yellow-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/Nilay-hub/Tackling-Unwanted-texts",
  },
  {
    name: "Stock Price prediction",
    description:
    "This project explores stock price prediction using time series analysis, focusing on Apple Inc. It employs advanced forecasting techniques, including LSTM, ARIMA, SARIMA, and Fuzzy Time Series models, to analyze historical stock data and predict future trends. Through rigorous evaluation, SARIMA emerged as the most effective model for capturing seasonal patterns, offering valuable insights for investors and traders.",      tags: [
      {
        name: "LSTM",
        color: "blue-text-gradient",
      },
      {
        name: "ARIMA",
        color: "green-text-gradient",
      },
      {
        name: "SARIMA",
        color: "yellow-text-gradient",
      },
      {
        name: "TIME SERIES ANALYSIS",
        color: "pink-text-gradient",
      },
      {
        name: "Fuzzy Logic",
        color: "blue-text-gradient",
      },
    ],
    image: chase,
    source_code_link: "https://github.com/Nilay-hub/Stock-Price-Prediction",
  },
  {
    name: "COVID-19 Outbreak Dynamics in Public Transit Systems",
    description:
"This project models the spread of COVID-19 within public transportation networks using an Agent-Based Model (ABM). Focusing on the MARTA bus system in Atlanta, it simulates passenger interactions, infection probabilities, and the impact of factors like vaccination status and mask usage. The study aims to enhance understanding of virus transmission in transit environments, aiding in the development of mitigation strategies for future outbreaks.",        tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Agent-Based Model (ABM)",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Nilay-hub/Modeling-COVID-19-Outbreak-Dynamics-in-Public-Transit-Systems",
  },
];

export { services, technologies,education, experiences, projects };

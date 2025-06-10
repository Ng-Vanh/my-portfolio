/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ng-Vanh",
  title: "Hi all, I'm NgVanh",
  subTitle: emoji(
  "An enthusiastic AI Engineer 🤖 skilled in building smart applications using Python, TensorFlow, PyTorch, and NLP techniques, with a strong focus on solving real-world problems with AI."
),

  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ng-Vanh",
  linkedin: "https://www.linkedin.com/in/ngvanh22/",
  gmail: "vanh220604@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/vanh.22.34",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/26224803/ng-vanh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE AI ENGINEER EXPLORING THE FUTURE OF MULTIMODAL INTELLIGENCE",

  skills: [
    emoji("🤖 Build intelligent systems with NLP, Computer Vision, and Multimodal AI techniques"),
    emoji("🧠 Fine-tune and deploy deep learning models using PyTorch, TensorFlow, and Hugging Face"),
    emoji("🌐 Integrate AI solutions into real-world applications using APIs and scalable cloud services (AWS, GCP, Azure)"),
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills:[
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python",
  },
  {
    skillName: "NLP",
    fontAwesomeClassname: "fas fa-language", // biểu tượng ngôn ngữ
  },
  {
    skillName: "PyTorch",
    fontAwesomeClassname: "fas fa-brain", // tượng trưng cho AI
  },
  {
    skillName: "LLM",
    fontAwesomeClassname: "fas fa-robot", // biểu tượng mô hình ngôn ngữ lớn
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java",
  },
  {
    skillName: "C++",
    fontAwesomeClassname: "fas fa-code",
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5",
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js",
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react",
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fas fa-mobile-alt", // biểu tượng app mobile
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker",
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt",
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Engineering and Technology",
      logo: require("./assets/images/uet.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2022 - May 2026",
      desc: "Participated in a faculty-level scientific research project on applying the T5 model and Retrieval-Augmented Generation (RAG) in natural language processing tasks.",
      descBullets: [
        "Explored and applied the T5 model for NLP tasks such as parsing and text generation",
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline for improving factual consistency in text generation",
        "Designed a training and evaluation pipeline using Vietnamese-language datasets"
      ]
    },


    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Natural Language Processing (NLP)",
      progressPercentage: "90%"
    },
    {
      Stack: "Python Backend (FastAPI / Flask)",
      progressPercentage: "75%"
    },
    {
      Stack: "Retrieval-Augmented Generation (RAG)",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend (React / Flutter)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Engineer Intern",
      company: "Aimesoft JSC",
      companylogo: require("./assets/images/aimelogo.jpg"), // Replace with actual logo if available
      date: "March 2025 – Present",
      desc: "Contributed to real-world multimodal AI applications in the Aimenicorn platform, involving NLP, data pre-processing and LLM evaluation.",
      descBullets: [
        "Optimized NLP pipelines for Vietnamese document classification and summarization",
        "Assisted in building evaluation tools for generative AI output quality"
      ]
    },
    {
      role: "AI Research Intern",
      company: "Department of Software Engineering, VNU-UET",
      companylogo: require("./assets/images/fit-logo.jpg"),
      date: "June 2024 – Present",
      desc: "Worked on research projects in Natural Language Processing, focusing on sequence-to-sequence models and retrieval-augmented generation (RAG) techniques.",
      descBullets: [
        "Implemented fine-tuning pipelines for T5 on Vietnamese NLP tasks",
        "Developed RAG-based applications for knowledge-based QA systems"
      ]
    },
    
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Project",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gpt4gui.webp"),
      projectName: "Gpt4GUI",
      projectDesc: "Application that generates test script for end2end testing app GUI using codeT5",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://drive.google.com/file/d/1pVgFB4fJaSR3GPkMefzQMnL33u3W4RpL/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/learnEApp.png"),
      projectName: "Learning English App",
      projectDesc: "A desktop app that helps users improve their English skills through vocabulary quizzes, grammar games, and speaking practice.",
      footerLink: [
        {
          name: "Visit Demo",
          url: "https://www.youtube.com/watch?v=9hguF34KLhg"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/qairline.png"),
      projectName: "QAirline",
      projectDesc: "A modern flight booking application that allows users to search, compare, and book domestic and international flights with ease",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qairline.vercel.app/"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Music 🎙️"),
  subtitle: "I LOVE TO LISTEN SOME CHILL MUSIC WHILE CODING",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84 904 298 243",
  email_address: "vanh220604@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

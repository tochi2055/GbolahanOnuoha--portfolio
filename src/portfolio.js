

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
  username: "Tochukwu Onuoha",
  title: "Tochukwu Onuoha",
  subTitle: emoji(
    "A passionate Software Developer | Devops Enginer | AI Enthusiast."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1i2zOUfFx5PqO9nW97rYjLtGbqRXccBoSn9-aUHmX338/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/victortterry",
  linkedin: "https://www.linkedin.com/in/tochukwu-gbolahan-onuoha-51a883368/",
  gmail: "victorterry25@gmail.com",
  gitlab: "https://gitlab.com/victorterry",
  medium: "https://medium.com/@victorterry25",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // 💻 Frontend
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },

    // ☁️ DevOps
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "YAML",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-sync"
    },
    {
      skillName: "Monitoring",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    }
  ],
  display: true


  // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Memorial University, Newfoundland and Labrador",
      logo: require("./assets/images/harvardLogo.png"), 
      subHeader: "Bachelor of Science in Computer Science",
      desc: "Participated in the research of Application of Machine Learing in the Detection of Diabetes and published a paper.",
      descBullets: [

      ]
    },


  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "REKEVIDA",
      companylogo: require("COMM.PNG"),
      date: "June 2018 – May 2020",
      desc: "Dsigned and deployed end-to-end machine learning pipelines for predictive analytics.",


    },
    {
      role: "DevOps Engineer",
      company: "TechNova Solutions",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "April  2020  –  September 2023",
      desc: "Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions for automated deployments."

    },
    {
      role: "Software Engineer Intern",
      company: "Harrow MS",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2024 -  Sep 2024",
      desc: "Implemented MLOps workflows using Kubernetes, Docker, and CI/CD pipelines for seamless deployment.",
    }
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/victortterry"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/victortterry"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  subtitle:
    " Certifications!",

  achievementsCards: [
    {
      title: "Finops",
      subtitle:
        " Finops  Certified Practitioner ",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },

      ]
    },
    {
      title: "  ZURI  ",
      subtitle:
        "   Full Stack Web Developer           ",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1TRUhZs1mv6pGb1CIlsnujruUzFsCnAva/view?usp=sharing"
        }
      ]
    },

    {
      title: "Udacity Nanodegree           ",
      subtitle: "Cloud DevOps Engineer",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1dzi2QiPk-lCVx3HbxaZIi9U31hTihB0F/view?usp=sharing" },

      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/posts/victor-nyikwagh-83155a16b_frontenddevelopment-uxdesign-webdev-activity-7330224881948684289--Lxh?utm_source=share&utm_medium=member_desktop&rcm=ACoAACh7iSUBZ9OqIAtsZwbKeJMOHb5oRRELHBY",
      title: "Why Frontend Developers Should Think Like UX Designers - Tochukwu Onuoha",
      description:
        "Because clean code means nothing if your user is confused."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ]
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};
const contactInfo = {
  title: "Contact Me ☎️ ",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(790) 697-7187.",
  email_address: "tgonuoha@mun.ca.",
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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

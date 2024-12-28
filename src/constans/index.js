export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    id: "obj",
    title: "Mobile  Application Detection Green Bean Using Android",
    desc: "Coffee is one of the fruits that is commonly used to be drunk and very popular. Before it becomes a drink, coffee is processed first from the bean. The looks of coffee bean is very important for the quality for itself. Also, the quality of the beans has an important role to determine the price. Many ways to decide the quality of the coffee beans, one of them is with standardization from SNI 01-2907-2008. The process of determining the bean's quality is worked by the processor who will do the steps that are already written in SNI. ",
    subdesc:
      "Application to determine the quality of the coffee bean mobile based using Android. Inside this application will be loaded a machine learning model with a base of object detection. For the machine learning implementation writer use a TensorFlow library and Convolutional Neural Network (CNN) for the model architecture, and then this application worked on the Flutter framework with dart-based programming language",
    logo: "/assets/project-logo1.png",
    image: "/assets/projects/project akhir hanif.webp",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/flutter-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "Tensorflow",
        path: "assets/tensorflow-svgrepo-com.svg",
      },
    ],
  },
  {
    id: "krb",
    title: "Website Application Sell and Buy ‘Hewan Kurban’",
    desc: "Qurbanī, Qurban or uḍḥiyyah, as mentioned in Muslim tradition, is the ritual animal sacrifice of a livestock animal during Bayram/Eid al-Adha. In Islamic law, udhiyyah would refer to the sacrifice of a specific animal offered by a specific person on specific days to seek God’s benevolence and reward. “Qurban” comes from the Arabic “Qurba” which means “to approach.”  Because the pandemic situation, I’m creating an website app in case people is still afraid to transcation face to face and facilitate administrative processes for sellers and buyers transact.",
    subdesc:
      " This application written with PHP and MySQL database with CodeIgniter framework. This app have 2 role, which is buyer and seller, the app consist of 6 major features. Such as sign up, sign in,  edit user profile, dashboard for seller, export file data transaction, and buy qurban.",
    logo: "/assets/project-logo2.png",
    image: "/assets/projects/kurban.webp",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/php-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "MySQL",
        path: "assets/mysql-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "CodeIgniter",
        path: "/assets/codeigniter-svgrepo-com.svg",
      },
    ],
  },
  {
    id: "rpg",
    title: "RPG game ‘MUSA’",
    desc: " Moses or Musa is one of the prophet in Islam, is an important prophet and messenger of God and is the most frequently mentioned individual in the Quran, with his name being mentioned 136 times and his life being narrated and recounted more than that of any other prophet. To remember of his story, writer creating RPG game which is called ‘MUSA’",
    subdesc:
      "This game is build with RPG Maker and the player design is made from template.",
    logo: "/assets/project-logo3.png",
    src: "https://www.youtube.com/watch?v=L2TNKq0BCRA",
    image: "/assets/projects/musa.webp",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "RPG Maker",
        path: "/assets/RPG_Maker_MV_Logo.webp",
      },
    ],
  },
  {
    id: "pungut",
    title: "Pungut - Throw your trash to the place it beelongs",
    desc: " This game teaches people to dispose of trash in its place. This game begins with a person in an area where he has to pick up rubbish according to a predetermined time duration.",
    subdesc:
      " This game is build with Unity and the object design is being made by Blender. Logic of this game is using C#. This game teaches people to dispose of trash in its place. This game begins with a person in an area where he has to pick up rubbish according to a predetermined time duration.",
    logo: "/assets/project-logo4.png",
    image: "/assets/projects/pungut.webp",
    src: "https://www.youtube.com/watch?v=psNdh_2ssWg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/assets/unity-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "Blender",
        path: "assets/blender-svgrepo-com.svg",
      },
    ],
  },
  {
    id: "img",
    title: "Image Classification of Fruits",
    desc: " This project is to classificate an object, where the object is banana, apple, orange, or mixed. Classification is being made using SVM and CNN. This project I made when i was in 3rd grade in college.",
    subdesc:
      " This image classification is written in google colab and google colab have base programming language is python, the dataset contain of 4  class, which is apple, banana, orange, and mixed. The method of this image classification will using Convolutional Neural Network and SVM.",
    logo: "/assets/project-logo5.png",
    image: "/assets/projects/image classification.webp",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python-svgrepo-com.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Esco",
    pos: "Web Developer Specialist",
    background: "esco",
    duration: "2023 - Present",
    title:
      "During my time working at Esco, I've been managing and creating some of the projects, I'm continuing CMS development of Esco main website using Laravel and MySQL, also maintain website like Esco Aster, Esco Medical, Escolifesciences China,and Esco Healthcare using various frameworks, such as CodeIgniter, Laravel, and ThinkPhp. My current project is ERPNext, based on React TS.",
    icon: "/assets/esco-logo-white-vector.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "LX International",
    pos: "Programming Mentor",
    background: "lx",
    duration: "2023",
    title:
      "In this work, I teach high school students to learn web development, by teach them Python, Flask, Github, MongoDB, Glitch",
    icon: "/assets/learning-x-logo.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "GITS.ID",
    pos: "Software Engineer Intern",
    background: "gits",
    duration: "2022",
    title:
      "This internship is changing my perspective of web development, because i dive in into real-case website development, I'm handling feature named Project Cost in Gits Project Profitability System where my role is as a back-end using AdonisJS and PostgreSQL",
    icon: "/assets/gits-logo.svg",
    animation: "salute",
  },
];

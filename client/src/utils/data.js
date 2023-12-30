import {
    WhatsApp,
    Twitter,
    Instagram,
    Spotify,
    Linkedin,
    Youtube,
    Google,
    Facebook,
    UserProfile
  } from "../assets";
  export const jobTypes = ["Full-Time", "Part-Time","Internship"];
  
  export const experience = [
    { title: "Fresher/Student", value: "0-1" },
    { title: "1 -2 Year", value: "1-2" },
    { title: "2 -6 Year", value: "2-6" },
    { title: "Over 6 Years", value: "6" },
  ];
  
  export const popularSearch = [
    "Software Engineer",
    "Developer",
    "Full-Stack Developer",
    "Data Scientist",
    "Remote",
    "Full-Time",
  ];
  
  export const jobs = [
    {
      id: "1",
      company: {
        name: "Twitter",
        location: "Bengalure",
        email: "support@twitter.com",
        contact: "contact@twitter",
        about:
          "Twitter is a microblogging platform that allows users to express themselves in concise messages known as tweets. With a character limit of 280 characters per tweet, brevity is key, making every word count. Users can share their thoughts, opinions, and updates, engaging with a global audience instantly.",
        profileUrl: Twitter,
      },
      jobTitle: "Inter,Software Engineering",
      location: "Mumbai",
      jobType: "Internship",
      salary: "120000",
      detail: [
        {
          desc: "Embark on an enriching journey as a Software Engineering Intern at Twitter, where innovation meets opportunity. You'll be an integral part of our engineering team, contributing to the development of impactful software solutions that shape the Twitter experience for millions. As an intern, you'll gain hands-on experience in coding, collaborate closely with diverse teams, and immerse yourself in a dynamic work environment.",
  
          requirement:
            "Enrolled in a Computer Science or related technical degree program, you'll bring a strong foundation in programming languages like Java, Python, or C++. We value problem-solving skills, effective communication, and a collaborative mindset. If you're passionate about technology, eager to learn, and ready to contribute to the evolution of social media, this internship is your gateway to a rewarding experience at Twitter. Join us in defining the future of social connectivity!",
        },
      ],
      applicants: ["1", "2"],
      vacancies: "Few",
      createdAt: new Date(),
    },
    {
      id: "2",
      company: {
        name: "Google",
        location: "Califonia",
        email: "support@google.com",
        contact: "support@google",
        about:
          "Explore the digital realm with Google, a pioneering force that emerged in 1998 with the mission to organize the world's information and make it universally accessible. Founded by Larry Page and Sergey Brin, Google has evolved into a tech powerhouse, offering indispensable services such as its renowned search engine, Gmail for seamless communication, Google Maps for navigation, YouTube for diverse content, and Google Drive for efficient file management. Beyond these services, Google continues to lead in innovation, delving into artificial intelligence and groundbreaking projects that redefine the technological landscape. As we journey through the digital age, Google remains a steadfast companion, shaping how we interact with information and navigate the boundless possibilities of the online world.",
        profileUrl: Google,
      },
      jobTitle: "Data Analyst",
      location: "Pune",
      jobType: "Full-Time",
      salary: "140k",
      detail: [
        {
          desc: "Embark on an exciting career journey as a Data Analyst at Google, where you'll play a pivotal role in unlocking insights and driving data-driven decision-making. As a key member of our dynamic team, you will be responsible for analyzing vast datasets, deriving actionable conclusions, and presenting findings that contribute to strategic business initiatives. Your expertise in statistical analysis, data visualization, and proficiency in tools like Python or R will be crucial in turning raw data into valuable insights. Join us in shaping the future of technology by harnessing the power of data at Google.",
  
          requirement:
            "We are seeking a highly motivated and analytical individual to join our team as a Data Analyst at Google. The ideal candidate will possess a bachelor's or advanced degree in a quantitative field such as Statistics, Mathematics, Computer Science, or a related discipline. You should bring a strong foundation in statistical analysis, data manipulation, and proficiency in programming languages like Python or R. Prior experience in data analysis and a keen eye for detail are essential. Excellent communication skills and the ability to collaborate across teams will be key in translating complex findings into actionable recommendations. If you are passionate about turning data into insights and thrive in a collaborative, innovative environment, we invite you to contribute to the success of Google as a Data Analyst.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "3",
      company: {
        name: "LinkedIn",
        location: "US",
        email: "support@likedin.com",
        contact: "support@likedin",
        about:
          "Explore the professional networking prowess of LinkedIn in this dedicated section of our website. Discover the power of connecting with industry leaders, colleagues, and potential clients on this dynamic platform. Uncover insights into effective personal branding, professional development, and the latest trends in your field. Whether you're a seasoned professional or just starting your career journey, our LinkedIn section is designed to provide valuable resources, tips, and strategies to help you leverage the full potential of this influential platform.",
        profileUrl: Linkedin,
      },
      jobTitle: "Social Media Manager",
      location: "India, Mumbai",
      jobType: "Full-Time",
      salary: "150K",
      detail: [
        {
          desc: "As a Social Media Manager at Likedin, you will be at the forefront of our digital presence, driving strategic social media initiatives to enhance brand visibility and engagement. You will be responsible for creating, curating, and managing all published content across various social media channels, ensuring alignment with our brand voice and business objectives. Collaborating with cross-functional teams, you will develop and execute innovative social media campaigns, analyze performance metrics, and stay abreast of industry trends. Join us in shaping an impactful online presence and fostering meaningful connections with our audience through compelling and shareable content",
  
          requirement:
            "We are seeking a dynamic Social Media Manager with a proven track record of success in developing and implementing effective social media strategies. The ideal candidate will possess a deep understanding of various social media platforms, trends, and emerging technologies. Strong creative and analytical skills are essential, along with excellent communication and collaboration abilities. A bachelor's degree in Marketing, Communications, or a related field, coupled with [X years] of experience in social media management, is required. Proficiency in social media management tools and a knack for staying ahead in the ever-evolving digital landscape are crucial. If you are a strategic thinker with a passion for driving online engagement, we invite you to bring your expertise to our dynamic team.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "4",
      company: {
        name: "Spotify",
        location: "Sweden",
        email: "support@spotify.com",
        contact: "support@spotify",
        about:
          "Spotify, a trailblazer in the digital music realm, provides users with an extensive library of songs, playlists, and podcasts from across the globe. With its user-friendly interface and personalized recommendations, Spotify caters to diverse musical tastes, ensuring that every listener can discover, enjoy, and share their favorite tunes effortlessly. As we explore the features and innovations brought forth by Spotify, we invite visitors to join us in celebrating the harmonious journey this platform offers to music enthusiasts worldwide.",
        profileUrl: Spotify,
      },
      jobTitle: "Intern,Frontend",
      location: "Remote",
      jobType: "Internship",
      salary: "70K",
      detail: [
        {
          desc: "Embark on an exciting journey with our Frontend Internship at Spotify, where creativity meets cutting-edge technology. As an intern, you will collaborate with our talented team of frontend developers to enhance and optimize the user interface of our globally renowned music streaming platform. Dive into the dynamic world of web development, contribute to innovative design solutions, and play a pivotal role in shaping the digital experience for millions of Spotify users. This internship is a unique opportunity to work on real projects, learn from industry experts, and be part of a company that values both innovation and a passion for music.",
  
          requirement:
            "We are seeking highly motivated individuals with a strong passion for frontend development. Ideal candidates should be pursuing a degree in Computer Science, Web Development, or a related field. Proficiency in HTML, CSS, and JavaScript is essential, along with a solid understanding of responsive design principles. Demonstrated experience with modern frontend frameworks such as React or Angular is a plus. The ability to collaborate effectively in a team environment, strong communication skills, and an eagerness to learn and adapt to new technologies are key attributes we value. If you're ready to bring your creativity to the forefront of the music streaming industry, apply now to join our dynamic team at Spotify.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "5",
      company: {
        name: "Facebook",
        location: "US",
        email: "support@facebook.com",
        contact: "support@facebook",
        about:
          "we explore the dynamic and ever-evolving landscape of this social media giant. As a platform connecting billions of people worldwide, Facebook has become an integral part of modern communication, fostering connections, sharing experiences, and shaping online communities. From its inception in 2004 to the present day, we delve into the platform's journey, highlighting key features, innovations, and the impact it has had on shaping the way we connect and engage with one another. Whether it's the evolution of its user interface, the introduction of new features, or the role it plays in digital marketing, our exploration of Facebook aims to provide insights into its multifaceted role in our interconnected digital world.",
        profileUrl: Facebook,
      },
      jobTitle: "Fullstack Web developer",
      location: "Hyderabad",
      jobType: "Full-Time",
      salary: "240K",
      detail: [
        {
          desc: "As a Full Stack Web Developer at Facebook, you will be an integral part of our dynamic and innovative engineering team, contributing to the design, development, and maintenance of cutting-edge web applications. Your responsibilities will span both the front-end and back-end development, ensuring seamless user experiences and robust functionality across our platforms. You will collaborate with cross-functional teams, participate in code reviews, and leverage your expertise in web technologies to drive innovation and elevate the overall user experience for millions of Facebook users globally.",
  
          requirement:
            "We are seeking a highly skilled and motivated Full Stack Web Developer with a proven track record in web application development. Ideal candidates will possess proficiency in a variety of programming languages, such as JavaScript, Python, or PHP, and have hands-on experience with modern web frameworks. A deep understanding of front-end technologies, including HTML, CSS, and JavaScript frameworks (e.g., React, Angular, or Vue.js), coupled with expertise in back-end technologies like Node.js or Django, is essential. Strong problem-solving skills, attention to detail, and the ability to adapt to evolving technologies are key. Successful candidates will also demonstrate effective communication skills, the ability to work collaboratively in a fast-paced environment, and a passion for creating exceptional user experiences.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    
    {
      id: "6",
      company: {
        name: "Instagram Corporation",
        location: "USA",
        email: "support@instagram.com",
        contact: "support@instagram",
        about:
          "Instagram is a place where we delve into the heart of visual storytelling and social connection. Discover the latest trends, features, and tips to enhance your Instagram experience. From captivating images to engaging captions, we unravel the art of creating compelling content that resonates with your audience. Whether you're an aspiring influencer, a business owner, or simply looking to share your life's moments, our Instagram section provides insights and inspiration to elevate your online presence. Join us as we navigate the dynamic landscape of this popular platform, unlocking the potential to connect, inspire, and express yourself through captivating visuals and meaningful interactions.",
        profileUrl: Instagram,
      },
      jobTitle: "Intern,Product Manager",
      location: "Remote",
      jobType: "Internship",
      salary: "90K",
      detail: [
        {
          desc: "As a vital member of our team, you'll be at the forefront of innovation, collaborating with cross-functional teams to bring cutting-edge products to life. Dive into the entire product lifecycle, from ideation to execution, and gain hands-on experience in market research, user feedback analysis, and feature development. Unleash your creativity and problem-solving skills as you contribute to shaping the future of our products. Join us in creating impactful solutions that resonate with users worldwide",
  
          requirement:
            "Are you ready to make an impact? We're seeking passionate individuals eager to learn and contribute to our dynamic team. Ideal candidates are pursuing a degree in Business, Marketing, or a related field, with a keen interest in product development and strategy. Strong communication skills, a knack for problem-solving, and the ability to thrive in a collaborative environment are key. Familiarity with agile methodologies and project management tools is a plus. If you're ready to dive into the world of product management and leave your mark on innovative solutions, apply now!",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const companies = [
    {
      _id: 1,
      name: "Twitter",
      location: "India,Bengaluru",
      email: "support@twitter.com",
      contact: "support@twitter",
      about:
      "Twitter is a microblogging platform that allows users to express themselves in concise messages known as tweets. With a character limit of 280 characters per tweet, brevity is key, making every word count. Users can share their thoughts, opinions, and updates, engaging with a global audience instantly.",
      profileUrl: Twitter,
      jobPosts: ["1", "2","3"],
    },
    {
      _id: 2,
      name: "Google",
      location: "India,Pune",
      email: "support@google.com",
      contact: "support@google",
      about:
      "Explore the digital realm with Google, a pioneering force that emerged in 1998 with the mission to organize the world's information and make it universally accessible. Founded by Larry Page and Sergey Brin, Google has evolved into a tech powerhouse, offering indispensable services such as its renowned search engine, Gmail for seamless communication, Google Maps for navigation, YouTube for diverse content, and Google Drive for efficient file management. Beyond these services, Google continues to lead in innovation, delving into artificial intelligence and groundbreaking projects that redefine the technological landscape. As we journey through the digital age, Google remains a steadfast companion, shaping how we interact with information and navigate the boundless possibilities of the online world.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
    },
    {
      _id: 3,
      name: "LinkedIn",
      location: "India,Mumbai",
      email: "support@linkedin.com",
      contact: "support@linkedin",
      about:
      "Explore the professional networking prowess of LinkedIn in this dedicated section of our website. Discover the power of connecting with industry leaders, colleagues, and potential clients on this dynamic platform. Uncover insights into effective personal branding, professional development, and the latest trends in your field. Whether you're a seasoned professional or just starting your career journey, our LinkedIn section is designed to provide valuable resources, tips, and strategies to help you leverage the full potential of this influential platform.",
      profileUrl: Linkedin,
      jobPosts: ["1", "2"],
    },
    {
      _id: 4,
      name: "Spotify Corporation",
      location: "India,Noida",
      email: "support@spotify.com",
      contact: "support@spotify",
      about:
        "Spotify, a trailblazer in the digital music realm, provides users with an extensive library of songs, playlists, and podcasts from across the globe. With its user-friendly interface and personalized recommendations, Spotify caters to diverse musical tastes, ensuring that every listener can discover, enjoy, and share their favorite tunes effortlessly. As we explore the features and innovations brought forth by Spotify, we invite visitors to join us in celebrating the harmonious journey this platform offers to music enthusiasts worldwide.",
      profileUrl: Spotify,
      jobPosts: ["1", "2"],
  
      _id: 5,
      name: "Facebook Corporation",
      location: "India,Mumbai",
      email: "support@facebook.com",
      contact: "support@facebook",
      about:
      "we explore the dynamic and ever-evolving landscape of this social media giant. As a platform connecting billions of people worldwide, Facebook has become an integral part of modern communication, fostering connections, sharing experiences, and shaping online communities. From its inception in 2004 to the present day, we delve into the platform's journey, highlighting key features, innovations, and the impact it has had on shaping the way we connect and engage with one another. Whether it's the evolution of its user interface, the introduction of new features, or the role it plays in digital marketing, our exploration of Facebook aims to provide insights into its multifaceted role in our interconnected digital world.",
      profileUrl: Facebook,
      jobPosts: ["1", "2"],
    },
    
    {
      _id: 6,
      name: "Instagram Corporation",
      location: "India,Delhi",
      email: "support@instagram.com",
      contact: "support@instagram",
      about:
        "Instagram is a place where we delve into the heart of visual storytelling and social connection. Discover the latest trends, features, and tips to enhance your Instagram experience. From captivating images to engaging captions, we unravel the art of creating compelling content that resonates with your audience. Whether you're an aspiring influencer, a business owner, or simply looking to share your life's moments, our Instagram section provides insights and inspiration to elevate your online presence. Join us as we navigate the dynamic landscape of this popular platform, unlocking the potential to connect, inspire, and express yourself through captivating visuals and meaningful interactions.",
      profileUrl: Instagram,
      jobPosts: ["1", "2"],
    },
  ];
  
  export const users = [
    {
      name: "Google Corporation",
      location: "India,Chennai",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
    {
      firstName: "Akshat",
      lastName: "Tiwari",
      email: "code@code.com",
      contact: "contact@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: UserProfile,
      accountType: "seeker",
      cvUrl: "",
      token: "gjhsdgsjgdjh",
    },
  ];
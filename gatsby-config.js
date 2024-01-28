module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://silly-parfait-9f1fbc.netlify.app/`,
    // Your Name
    name: 'Thomas Lee',
    // Main Site Title
    title: `Thomas Lee | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer from Lawrenceville, Georgia.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/0xkianu`,
    // Optional: LinkedIn account URL
    email: `mailto: thomasulee@gmail.com`,
    // Optional: email
    linkedin: `https://www.linkedin.com/in/thomas-lee-43483829/`,
    // Content of the About Me section
    about: `I'm a motivated full-stack engineer with over 15 years working in the field of technology. I have worked as a database administrator, and have a proven ability to work in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.  I am eager to tackle development/design challenges to achieve lasting impacts on user experience.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      // {
      //   name: 'Barter House',
      //   description:
      //     'A project inspired by the Trade-Up Challenge, which takes on the idea of taking a small item and turning it into something much more valuable.  The site allows people to post and trade a single item for another.  This is a group project where took I on the role as the Scrum Master, main back-end developer and minor front-end developer.  Tech Stack: React, Redux, Sequelize, PostgreSQL, TailWindCSS, Express, Axios, FireBase, JavaScript, AWS',
      //   link: 'http://ec2-3-138-123-221.us-east-2.compute.amazonaws.com/',
      //   github: 'https://github.com/Jong-ko/TradeUpFront',
      //   githubBack: 'https://github.com/Jong-ko/TradeUpBack',
      //   demo: 'https://www.youtube.com/watch?v=OX6PLDwJ_JM',
      //   screen1: 'https://thomasulee.netlify.app/images/BarterHouse1.png',
      //   screen2: 'https://thomasulee.netlify.app/images/BarterHouse2.png',
      //   screen3: 'https://thomasulee.netlify.app/images/BarterHouse3.png'
      // },
      // {
      //   name: 'Babble-Log',
      //   description:
      //     'Voice to text, note recording web application.  The application allows the user to record their voice to text, save the texts as notes and organize the notes in folders.  Tech Stack: React, Redux, Sequelize, PostgreSQL, Bootstrap, Express, JavaScript, HTML, CSS, AWS',
      //   link: 'https://www.thomasulee.com:3000',
      //   github: 'https://github.com/0xkianu/babble-log',
      //   githubBack: 'https://github.com/0xkianu/babble-log-server',
      //   screen1: 'https://thomasulee.netlify.app/images/Babble-log1.png',
      //   screen2: 'https://thomasulee.netlify.app/images/Babble-log2.png',
      //   screen3: 'https://thomasulee.netlify.app/images/Babble-log3.png'
      // },
      // {
      //   name: 'React-O-Blog',
      //   description:
      //     'A blogging web application.  Allows users to create and publish blog posts.  Tech Stack: React, Redux, Sequelize, PostgreSQL, Bootstrap, Express, JavaScript, HTML, CSS, AWS',
      //   link: 'http://3.14.132.217:3000/',
      //   github: 'https://github.com/0xkianu/react-o-blog-front',
      //   githubBack: 'https://github.com/0xkianu/react-o-blog-back',
      //   screen1: 'https://thomasulee.netlify.app/images/MY-BLOG1.png',
      //   screen2: 'https://thomasulee.netlify.app/images/MY-BLOG2.png',
      //   screen3: 'https://thomasulee.netlify.app/images/MY-BLOG3.png'
      // },
      // {
      //   name: 'Heads-Up',
      //   description:
      //     'An event planning application for groups to plan and communicate.  Create events, invite other members and have group chats in event rooms.  Tech Stack: EJS, Sequelize, PostgreSQL, Bootstrap, Express, JavaScript, HTML, CSS, Render',
      //   link: 'https://heads-up.onrender.com/calendar/home',
      //   github: 'https://github.com/0xkianu/heads-up',
      //   screen1: 'https://thomasulee.netlify.app/images/Heads-Up1.png',
      //   screen2: 'https://thomasulee.netlify.app/images/Heads-Up2.png',
      //   screen3: 'https://thomasulee.netlify.app/images/Heads-Up3.png'
      // },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'RESUME(PDF)',
        description:'',
        link: 'https://thomasulee.netlify.app/assets/tlee-resume.pdf'
      },
      {
        name: 'Digital Crafts Bootcamp',
        description: 'Student, October 2022 - Present',
        link: '',
      },
      {
        name: 'Ventiv Technology',
        description: 'Senior Database Administrator, January 2015 - Present',
        link: '',
      },
      {
        name: 'Consilium Consulting',
        description: 'Senior Database Administrator, October 2003 - December 2014',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, HTML5, CSS, SQL, PL/SQL, Sequelize',
      },
      {
        name: 'Databases',
        description: 'Oracle, PostreSQL, SQL Server, Couchdb',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Heroku, Render, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

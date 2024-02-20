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
    email: `mailto: tulee@tutanota.com`,
    // Optional: email
    linkedin: `https://www.linkedin.com/in/thomas-lee-43483829/`,
    // Content of the About Me section
    about: `Prospective software engineer with 15+ years of experience in technology as a Database Administrator and Junior Full-Stack Developer. I am a dedicated problem solver and collaborative worker, with experience supporting enterprise-level projects.  Seeking a Back-end or Full-stack developer role where I can apply my knowledge and skill working with modern frameworks and programming languages`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
       {
         name: 'Discord Chat Bot (development) | Junior Data Scientist',
         description:
           'A chat bot which scrapes data from a Discord server, uploads this data into a Chroma DB Vector database and creates a pipeline to apply Retrieval Augmented Generation (RAG) on a Mistrel 7B large language model, enabling the model to answer questions related to the Discord server.',
         link: '',
         github: 'https://github.com/Dutra-Apex/llm-joc',
         githubBack: '',
         demo: '',
         screen1: '',
         screen2: '',
         screen3: ''
       },
       {
        name: 'Support Local (development) | Junior Developer',
        description:
          'An ecosystem where local business owners can promote their businesses or charities, and consumers can search for deals and support non-profit organizations.',
        link: 'https://xd.adobe.com/view/42f14507-e4fc-4890-abe6-e4ae32f1e2fa-17a2/',
        github: '',
        githubBack: '',
        demo: '',
        screen1: '',
        screen2: '',
        screen3: ''
      },
      {
        name: 'Off Road Fun Finder | Junior Developer',
        description:
          'An ios / android mobile and web application that allows users to discover off-road tracks, shops, trainers and events.',
        link: 'https://offroadfunfinder.com',
        github: '',
        githubBack: '',
        demo: '',
        screen1: '',
        screen2: '',
        screen3: ''
      },
      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'RESUME(PDF)',
        description:'',
        link: 'https://thomasulee.netlify.app/assets/tlee-resume.pdf'
      },
      {
        name: 'Riskconnect Inc',
        description: 'Senior Database Administrator, January 2024 - Present',
        link: '',
      },
      {
        name: 'TechJoy Software',
        description: 'Junior Developer, June 2023 - Present',
        link: '',
      },
      {
        name: 'Digital Crafts Bootcamp',
        description: 'Student, October 2022 - April 2023',
        link: '',
      },
      {
        name: 'Ventiv Technology',
        description: 'Senior Database Administrator, January 2015 - December 2023',
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

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://silly-parfait-9f1fbc.netlify.app/`,
    // Your Name
    name: 'Thomas Lee',
    // Main Site Title
    title: `Thomas Lee | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer from Georgia.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/0xkianu`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thomas-lee-43483829/`,
    // Content of the About Me section
    about: `I'm a motivated full-stack engineer with over 15 years working in the field of technology. I have worked as a database administrator, and have a proven ability to work in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.  I am eager to tackle development/design challenges to achieve lasting impacts on user experience.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Barter House',
        description:
          'A fun project inspired by the Trade-Up Challenge, which takes on the idea of taking a small item and turning it into something much more valuable.  The site allows people to post and trade a single item for another.',
        link: 'NA',
        gitfront: 'https://github.com/Jong-ko/TradeUpFront',
        gitback: 'https://github.com/Jong-ko/TradeUpBack',
      },
      {
        name: 'Babble-Log',
        description:
          'Voice to text, note recording web application.  Record your voice to text, save the texts as notes and organize the notes in folders.',
        link: '',
      },
      {
        name: 'React-O-Blog',
        description:
          'A blogging web application.  Allows users to create and publish blog posts.',
        link: '',
      },
      {
        name: 'Heads-Up',
        description:
          'An event planning application for groups to plan and communicate.  Create events, invite other members and have group chats in event rooms.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
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
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
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

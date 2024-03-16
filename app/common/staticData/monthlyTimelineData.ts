import { MonthlyTimelineDataItem } from "@/app/interfaces/pages/publicPage/MonthlyTimelineProps";

const monthlyTimelineData: MonthlyTimelineDataItem[] = [
  {
    month: "February 2024",
    activityLog: [
      {
        kind: "PARTICIPATED",
        topic: "Hackathon",
        thoughts:
          "Whatever I am building with another amazing mind, is going to be a gamechanger. It will be something AI based and will massively help growing software developers. Details to be posted once version 0.1 is ready.",
        category: "FRONTEND",
      },
      {
        kind: "COMFORTABLE",
        topic: "Typescript in the Frontend",
        thoughts:
          " I took the courage to start a project with Typescript and learn as I go with the flow. It is helping so far and I am learning the best practices.",
        category: "FRONTEND",
      },
      {
        kind: "EXPLORING",
        topic: "frontend microservices (micro-frontend)",
        thoughts:
          "Started to get my hands on microservices dividing each activities into microservices. This is really helpful in terms of maintainability and debugging.",
        category: "FRONTEND",
      },
      {
        kind: "EXPLORING",
        topic: "backend authentication and authorization",
        thoughts:
          "Efficienly learned token based authentication and role based authorization along with validating actions with middlewares.",
        category: "BACKEND",
      },
      {
        kind: "EXPLORING",
        topic:
          "efficient pagination, sorting, searching and filtering in the backend",
        thoughts:
          "Again, maintaining this reusabilty comes in handy. Reusability in these codebases are just out of world and working on them is really enjoyable",
        category: "BACKEND",
      },
      {
        kind: "LEARNING",
        topic: "global error handling in the backend",
        thoughts:
          "Global error handling is super fun. I used a common error handler function which receives several custom error handlers like validation errors, server errors, cast errors, api errors, etc. and provides a generic error response that is meaningful to the frontend.",
        category: "BACKEND",
      },
      {
        kind: "LEARNING",
        topic: "backend codebase best practices",
        thoughts:
          "Maintaining a reusable codebase with the absolute best practices for backend development is what I needed to learn earlier",
        category: "FULLSTACK",
      },
      {
        kind: "LEARNING",
        topic: "a proper fullstack application process",
        thoughts:
          "A fullstack developer often has to jump back and forth from frontend to backend or vice versa. A proper requirement analysis with respect to the Figma design enhances an optimized backend development in such a way that while Frontend integrates, there are no missing fields.",
        category: "FULLSTACK",
      },
      {
        kind: "WORKING",
        topic: "Console Application",
        thoughts:
          "Worked on a console banking application using Javascript OOP.",
        category: "OOP",
      },
    ],
  },
  {
    month: "January 2024",
    activityLog: [
      {
        kind: "LEARNING",
        topic: "Redux Toolkit and RTK Query",
        thoughts:
          "Moving out from the tedious process of boilerplates using the old processes is what I needed to learn, but I am still getting used to it as defining everything is quite overwhelming. I am still going to choose MOBX over Redux, until I get more comfortable.",
        category: "FRONTEND",
      },
      {
        kind: "EXPLORING",
        topic: "Tanstack Router",
        thoughts:
          "This is a really good replacement of React Router DOM especially for route-heavy react projects. The process and working with it is much more efficient. Still, I think working with NextJS routing is like no other.",
        category: "FRONTEND",
      },
      {
        kind: "LEARNING",
        topic: "Efficient & Professional Backend Codebase Setup",
        thoughts:
          "Backend Codebase Setup with EsLint, Prettier, Husky, Lint-Staged, Winston and Commits Lint.It is quintessential to use the aforementioned in a professional codebase where several developers would work to avoid the following: Unformatted code being pushed into Github. Erroneous code carelessly pushed into Github, breaking builds and slowing down deployments. Bad naming conventions. Unorganized and unused imports. Bad and vague commit message. Taking care of forgotten 'console.log' statements. Using the packages in the proper way will block the developer from making a successful commit so that they can learn being careful.",
        category: "BACKEND",
      },
      {
        kind: "REVISITING",
        topic: "ExpressJS and Mongoose with Modular Architecture",
        thoughts:
          "Being a frontend focused developer, I gave up a lot of the backend practices and it was good to come back. ",
        category: "BACKEND",
      },
      {
        kind: "EXPLORING",
        topic: "Parallel Routing and Route Intercepting in NextJS",
        thoughts:
          "These are two really powerful concepts which can improve better structuring of component division, and knowing when to navigate to a new, separate route and when to use parallel routing.",
        category: "FRONTEND",
      },
      {
        kind: "WORKING",
        topic:
          "A fullstack project using ExpressJS, Mongoose, React, Redux and TailwindCSS [WIP]",
        thoughts:
          "A simple application to practice the essentials, but trying to integrate new things like complex layouts, dark-light theme, etc.",
        category: "FULLSTACK",
      },
    ],
  },
];

export default monthlyTimelineData;

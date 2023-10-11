export const projectImages = {
    nasaapp: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1697008738/projects/nasaapp_togh8i.png",
    monitorme: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235701/projects/Captura_de_pantalla_2023-09-20_133428_omfvyk.png",
    reunet: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235702/projects/Captura_de_pantalla_2023-09-20_133940_g8tvbz.png",
    auth: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235701/projects/Captura_de_pantalla_2023-09-20_133536_iaevls.png",
    todo: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235701/projects/Captura_de_pantalla_2023-09-20_133758_srzmgi.png",
    twiter: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235701/projects/gsmarena_001_oazh55.jpg",
    sending: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1695235701/projects/How-to-Send-an-Email-in-Python-02_cmhtct.png",
    noteapp: "https://res.cloudinary.com/dcxg13hqx/image/upload/v1697011272/projects/noteapps_dfmwvs.png"
} 


export const projects = [
    {
        name: "Nasa pubblications",
        resume: "App that consumes the NASA API",
        description: "The “Latest NASA Publications” project is a mobile application developed in React Native that provides users with access to the latest and most exciting information from NASA. The app consumes data from NASA's public API and presents information about images, news, events and other resources available at the space agency.",
        image: projectImages.nasaapp,
        tools: ["React", "React Native", "React Navigation", "JavaScript", "CSS"],
        gitlink: "https://github.com/AyoriaChagua/nasa-news-app"
    },
    {
        name: "Monitor me",
        resume:"Application use control system for students of the Tecsup Digital Technology department",
        description: "This application is the most complete that I could have created, its importance is due to the fact that it is my degree project to finish my degree. This project has several approaches using various technologies, from virtualization, to using the resources of the operating system, it also has communication systems to be able to help the students of my educational institution.",
        image: projectImages.monitorme,
        tools: ["JavaScript", "MongoDB", "Express", "AWS", "WPF", "Tailwind"],
        gitlink: "https://github.com/AyoriaChagua/crud-cloudinary"
    },
    {
        name: "Reune T",
        resume:"A student network to work collaboratively promoting good treatment",
        description: "Reúne T seeks to create a web and mobile application with the functionalities of a messaging service, which will serve as a means of communication for students, allowing them to create groups of tasks or activities and in addition Reúne T will be able to remind them when a task or activity is coming, without forgetting one of the strong points of the application, which will be not allowing offensive words and allowing them to be reported, this is because we created Reúne T to be a student social network that can combat cyberbullying.",
        image: projectImages.reunet,
        tools: ["Kotlin", "React", "Spring Boot", "Django", "Tailwind"],
        gitlink: "https://github.com/AlexParco/reunet"
    },
    {
        name: "Auth API",
        resume:"A very robust authentication API that offers a lot of flexibility to implement it",
        description: "This microservice is responsible for handling the user authentication process in the project. And all possible security methods were added, using libraries. Obviously it is backed by the good practices that were used when developing the API, this was used in another personal project that I had.",
        image: projectImages.auth,
        tools: ["JWT", "Node JS", "Jest JS", "MongoDB"],
        gitlink: "https://github.com/AyoriaChagua/auth-api"
    },
    {
        name: "To do agenda",
        resume:"An application where you can save all your tasks in the form of notes, with registration included",
        description: "This is a FullStack Web Application using the PERN Stack (PostgreSQL, Express, React, Nodejs). In this project we will create a website from scratch, creating a REST API with Express, Nodejs, along with PostgreSQL, creating web interfaces with React, until finally deploying it in Railway. In addition to using many modules for authentication and data validations, such as react-hook-form, zod, jsonwebtoken, axios.",
        image: projectImages.todo,
        tools: ["Next JS", "React", "PostGresSQL", "Node JS", "JWT", "Tailwind"],
        gitlink: "https://github.com/AyoriaChagua/CrudBasic-PgSQL-Django"
    },
    {
        name: "Twiter Clon",
        resume:"A simple Twitter replica with some details added",
        description: "With this Twitter clone we seek to explain both interactive and systematic operation. We sought to have the same interaction that we have with the application, which is now called X but it is still the same with a dashboard.",
        image: projectImages.twiter,
        tools: ["Next JS", "React", "TypeScript", "Supabase", "Tailwind"],
        gitlink: "https://github.com/AyoriaChagua/crud-cloudinary"
    },
    {
        name: "Mass email sending",
        resume:"A script to send emails in bulk using analysis technologies",
        description: "This is one of the first complex scripts I had to develop. A company requested to send emails in bulk, the emails were specific and so on, so defining an html as a template and changing the image when necessary seemed like the best option to satisfy that need.",
        image: projectImages.sending,
        tools: ["Python", "Pandas", "Outlook","HTML"],
        gitlink: "https://github.com/AyoriaChagua/diajo"
    },
    {
        name: "Notes app",
        resume:"A notes application, with an authentication system, using ssr.",
        description: "This is one of the first largest projects I could have developed, since multiple concepts were used which were complicated for me at that time. Store procedure, rendering, template engines, data persistence, all these concepts are applied in a system which helps you manage your notes efficiently",
        image: projectImages.noteapp,
        tools: ["NodeJS", "Handlebars", "Bootstrap","JavaScript"],
        gitlink: "https://github.com/AyoriaChagua/notes-page"
    }
]
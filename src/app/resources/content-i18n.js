import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Kennedy',
        lastName:  'Sithole',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("Student"),
        avatar:    '/images/avatar.jpg',
        location:  'Harare/Zumbabwe',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Shona', 'Basic Ndebele']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: true,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        // Links are automatically displayed.
        // Import new icons in /once-ui/icons.ts
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/once-ui-system/nextjs-starter',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/company/once-ui/',
        },
        {
            name: 'X',
            icon: 'x',
            link: '',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:example@gmail.com',
        },
    ]

    const home = {
        label: t("home.Selous"),
        title: t("home.Chegutu", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
        tableOfContent: {
            display: true,
            subItems: true
        },
        avatar: {
            display: true
        },
        calendar: {
            display: true,
            link: 'https://cal.com'
        },
        intro: {
            display: true,
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true, // set to false to hide this section
            title: t("about.work.title"),
            experiences: [
                {
                    company: 'FLY',
                    timeframe: t("about.work.experiences.FLY.timeframe"),
                    role: t("about.work.experiences.FLY.role"),
                    achievements: t("about.work.experiences.FLY.achievements").split(";"),
                    images: [ // optional: leave the array empty if you don't want to display images
                        {
                            src: '/images/projects/project-01/cover-01.jpg',
                            alt: 'Once UI Project',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    company: 'Creativ3',
                    timeframe: t("about.work.experiences.Creativ3.timeframe"),
                    role: t("about.work.experiences.Creativ3.role"),
                    achievements: t("about.work.experiences.Creativ3.achievements").split(";"),
                    images: [ ]
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Studies',
            institutions: [
                {
                    name: 'University of Zimbabwe',
                    description: <>{t(`about.studies.institutions.University of Zimbabwe.description`)}</>,
                },
                {
                    name: 'Build the Future',
                    description: <>{t("about.studies.institutions.Build the Future.description")}</>,
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Figma',
                    description: <>{t("about.technical.skills.Figma.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                }
            ]
        }
    }

    const experience = {
        label: t("experience.label"),
        title: t("experience.title"),
        description: t("experience.description", {name: person.name}),
        work: {
            display: true,
            title: 'Work Experience',
            experiences: [
                {
                    company: 'Home Snappers LLC',
                    timeframe: 'September 2023 - June 2024',
                    role: 'Software Developer',
                    achievements: [
                        <>Actively participated in application development using JavaScript and modern frameworks.</>,
                        <>Developed front-end solutions using Next.js and Ionic for cross-platform mobile applications.</>,
                        <>Implemented back-end data management with Supabase and PostgreSQL database integration.</>,
                    ],
                    images: []
                },
                {
                    company: 'Zimotely LLC/ Homesnappers LLC.',
                    timeframe: 'September 2024 - June 2025',
                    role: 'Part-Time Develope',
                    achievements: [
                        <>Developed full-stack applications using ReactJS, NextJS, Ionic, Node.js, and Express for robust back-end services.</>,
                        <>Integrated databases using Supabase with PostgreSQL and MongoDB for efficient data management and storage.</>,
                        <>Implemented responsive UI components and styling using Tailwind CSS for modern, user-friendly interfaces.</>,
                    ],
                    images: []
                },
                {
                    company: 'Home Snappers LLC',
                    timeframe: 'June 2025 - Present',
                    role: 'Software Engineer I',
                    achievements: [
                        <>Develop and maintain full-stack web applications using ReactJS, NextJS, Node.js, and Express with modern UI components built using Shadcn and Tailwind CSS.</>,
                        <>Database solutions using Supabase with PostgreSQL and MongoDB.</>,
                        <>Collaborate with cross-functional teams using Jira for project management, delivering scalable features, and maintaining code quality through agile development practices.</>,
                    ],
                    images: []
                },
            ]
        },
        technical: {
            display: true, 
            title: 'Technical skills',
            skills: [
                {
                    title: 'Next.js',
                    description: <>Sell Cattle built with Next.js + React + Supabase.</>,
                    link: 'https://ai-direct-cattle-sales-q387090y3-kevykennys-projects.vercel.app',
                    images: [
                        {
                            src: '/images/projects/project-01/cover.jpg',
                            alt: 'Sell Cattle',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/lists.jpg',
                            alt: 'Sell Cattle',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'ReactJS',
                    description: <>Responsive UIs for Sell Cattle and Real‑Time Messages with React.</>,
                    images: []
                },
                {
                    title: 'Supabase, MongoDB, Node.js, Express',
                    description: <>Auth, real‑time, and PostgreSQL for Sell Cattle and Real‑Time Messages.</>,
                    images: []
                },
                {
                    title: 'Ionic',
                    description: <>Cross‑platform Ionic React app (Real‑Time Messages) with Capacitor.</>,
                    link: 'https://real-time-messages-2n81c43pw-kevykennys-projects.vercel.app/login',
                    images: [
                        {
                            src: '/images/projects/project-02/home.jpg',
                            alt: 'Real‑Time Messages',
                            width: 10,
                            height: 16
                        },
                        {
                            src: '/images/projects/project-02/chats.jpg',
                            alt: 'Real‑Time Messages',
                            width: 10,
                            height: 16
                        },
                        {
                            src: '/images/projects/project-02/messages.jpg',
                            alt: 'Real‑Time Messages',
                            width: 10,
                            height: 16
                        },
                    ]
                }
            ]
        }
    }

    const projects = {
        label: t("projects.label"),
        title: t("projects.title"),
        description: t("projects.description", {name: person.name})
    }

    const contact = {
        label: t("contact.label"),
        title: t("contact.title"),
        description: t("contact.description"),
        email: 'kevykenny29@gmail.com',
        phone: '+263 782 186 683',
        address: '40 Twickenham Dr, Harare, Zimbabwe',
        hours: 'Mon–Fri · 08:00–17:00',
        social: social,
        calendar: {
            display: true,
            link: 'https://cal.com'
        }
    }

    return {
        person,
        social,
        newsletter,
        home,
        about,
        experience,
        projects,
        contact
    }
};

export { createI18nContent };
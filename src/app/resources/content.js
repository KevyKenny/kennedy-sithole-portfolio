import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Kennedy',
    lastName:  'Sithole',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Africa/Harare',
    languages: ['English', 'Shona', 'Ndebele Beginner', "Chinese Mandrin Beginner"]
}

const newsletter = {
    display: true,
    title: <>Get hold of {person.firstName}</>,
    description: <>A skilled programmer, adept at leveraging cutting-edge technologies and employing agile methodologies to architect robust and scalable software solutions.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/KevyKenny',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/kennedysithole15/',
    },
    {
        name: 'CV',
        icon: 'pdf',
        link: '/assets/Kennedy%20Sithole%20-%20Resume.pdf',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:kevykenny29@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Junior Software engineer</>,
    subline: <>I'm Kennedy Sithole, a <InlineCode>Software Developer</InlineCode>, with passion for creating beautiful and responsive user interfaces and web applications, while also exploring the power of AI to deliver innovative and intelligent products.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
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
        title: 'Introduction',
        description: <>I’m Kennedy Sithole, a Software Developer and AI enthusiast who graduated with a First-Class BSc in Computer Science from the University of Zimbabwe. I enjoy turning ideas into reliable, scalable products and uncovering insights from data.
        <br />
        <br />
        My work spans full-stack web development, cross-platform applications, and AI-assisted solutions. I focus on creating clean user experiences, building high-performance systems, and delivering products that make a measurable impact.</>    },
    studies: {
        display: true, 
        title: 'Studies',
        institutions: [
            {
                    name: 'University of Zimbabwe',
                description: <>Studied Computer Science.</>,
            },
        ]
    }
}

const experience = {
    label: 'Experience',
    title: 'Work Experience & Skills',
    description: `Professional experience and technical skills of ${person.name}`,
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
                images: [ ]
            },
            {
                company: 'Zimotely LLC/ Homesnappers LLC.',
                timeframe: 'September 2024 - June 2025',
                role: 'Part-Time Develope',
                achievements: [
                    <>Developed full-stack applications using ReactJS, NextJS, Ionic, Node.js, and Express for robust back-end 
                    services.</>,
                    <>Integrated databases using Supabase with PostgreSQL and MongoDB for efficient data management and 
                    storage.</>,
                    <>Implemented responsive UI components and styling using Tailwind CSS for modern, user-friendly interfaces.</>,
                ],
                images: [ ]
            },
            {
                company: 'Home Snappers LLC',
                timeframe: 'June 2025 - Present',
                role: 'Software Engineer I',
                achievements: [
                    <>Develop and maintain full-stack web applications using ReactJS, NextJS, Node.js, and Express with modern 
                    UI components built using Shadcn and Tailwind CSS.</>,
                    <>Database solutions using Supabase with PostgreSQL and MongoDB.</>,
                    <>Collaborate with cross-functional teams using Jira for project management, delivering scalable features, and 
                    maintaining code quality through agile development practices.</>,
                ],
                images: [ ]
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
    label: 'Projects',
    title: 'Famous projects',
    description: `Designed and developed projects by ${person.name}`,
    projects: [
        {
            title: 'Sell Cattle',
            description: 'PART FOUR DISSERTATION. AI-Powered Digital Platform for Direct meat sales and farm optimization. This digital platform utilizes AI to provide Zimbabwean cattle ranchers with direct access to consumers, offering competitive recommendations and eliminating the need for intermediaries to increase profits.',
            timeframe: 'August 2024',
            technologies: ['Next.js', 'React', 'Supabase'],
            link: 'https://ai-direct-cattle-sales-q387090y3-kevykennys-projects.vercel.app',
            images: [
                {
                    src: '/images/projects/project-01/cover.jpg',
                    alt: 'Sell Cattle',
                    width: 20,
                    height: 13
                },
                {
                    src: '/images/projects/project-01/lists.jpg',
                    alt: 'Sell Cattle',
                    width: 20,
                    height: 13
                },
                {
                    src: '/images/projects/project-01/listing.jpg',
                    alt: 'Sell Cattle',
                    width: 20,
                    height: 13
                },
            ]
        },
        {
            title: 'Real Time Messages',
            description: 'A cross‑platform real‑time messaging app using Ionic React (TypeScript) and Supabase. This app allows users to send and receive messages in real time, and to create groups and channels to communicate with multiple users at once.',
            timeframe: '2024',
            technologies: ['Ionic', 'React', 'TypeScript', 'Supabase', 'Capacitor'],
            link: 'https://real-time-messages-2n81c43pw-kevykennys-projects.vercel.app',
            images: [
                {
                    src: '/images/projects/project-02/cover.jpg',
                    alt: 'Real‑Time Messages',
                    width: 15,
                    height: 25
                },
                {
                    src: '/images/projects/project-02/home.jpg',
                    alt: 'Real‑Time Messages',
                    width: 15,
                    height: 25
                },
                {
                    src: '/images/projects/project-02/chats.jpg',
                    alt: 'Real‑Time Messages',
                    width: 15,
                    height: 25
                },
                {
                    src: '/images/projects/project-02/messages.jpg',
                    alt: 'Real‑Time Messages',
                    width: 15,
                    height: 25
                },
            ]
        },
        {
            title: 'Drums',
            description: 'A modern, interactive virtual drum kit web application that brings the joy of drumming to your browser. Play drums using your keyboard or mouse clicks and enjoy a beautiful, responsive interface with stunning visual effects',
            timeframe: '2022',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://drums-amber.vercel.app ',
            images: [
                {
                    src: '/images/projects/project-03/cover.jpg',
                    alt: 'Real‑Time Messages',
                    width: 45,
                    height: 25
                },
            ]
        }
    ]
}

const contact = {
    label: 'Contact',
    title: 'Get in touch',
    description: `Let's connect and discuss opportunities`,
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

export { person, social, newsletter, home, about, experience, projects, contact };
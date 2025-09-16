import { Flex, Heading, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython,
    SiReact, SiNextdotjs, SiIonic, SiNodedotjs, SiExpress,
    SiFlutter, SiDart, SiPostgresql, SiSupabase, SiMongodb, SiMysql,
    SiGithub, SiJira, SiGithubactions, SiVite, SiVercel,
    SiSass
} from 'react-icons/si';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const { person } = renderContent(t);

    const title = 'Skills';
    const description = `Technical stack and tools used by ${person.firstName}`;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/skills/`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    };
}

export default function Skills(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person } = renderContent(t);

    const categories = [
        {
            title: 'Programming Languages and Tools',
            items: [
                { icon: <SiJavascript size={20} color="#F7DF1E"/>, label: 'JavaScript (ES6+)' },
                { icon: <SiTypescript size={20} color="#3178C6"/>, label: 'TypeScript' },
                { icon: <SiPython size={20} color="#3776AB"/>, label: 'Python' },
                { icon: <SiDart size={20} color="#0175C2"/>, label: 'Dart' },
                { icon: <SiHtml5 size={20} color="#E44D26"/>, label: 'HTML5' },
                { icon: <SiCss3 size={20} color="#1572B6"/>, label: 'CSS' },
                { icon: <SiSass size={20} color="#CC6699"/>, label: 'Sass' },
            ]
        },
        {
            title: 'Frameworks & Runtimes',
            items: [
                { icon: <SiReact size={20} color="#61DAFB"/>, label: 'React' },
                { icon: <SiNextdotjs size={20} color="#ffffff"/>, label: 'Next.js' },
                { icon: <SiIonic size={20} color="#3880FF"/>, label: 'Ionic React' },
                { icon: <SiFlutter size={20} color="#02569B"/>, label: 'Flutter' },
                { icon: <><SiNodedotjs size={20} color="#339933"/><SiExpress size={20} color="#ffffff" style={{marginLeft: 6}}/></>, label: 'Node/Express' },
            ]
        },
        {
            title: 'Database and Cloud',
            items: [
                { icon: <SiPostgresql size={20} color="#336791"/>, label: 'PostgreSQL' },
                { icon: <SiSupabase size={20} color="#3FCF8E"/>, label: 'Supabase' },
                { icon: <SiMongodb size={20} color="#47A248"/>, label: 'MongoDB' },
                { icon: <SiMysql size={20} color="#005E86"/>, label: 'MySQL' },
            ]
        },
        {
            title: 'Tooling and Quality Assurance',
            items: [
                { icon: <SiGithub size={20} color="#ffffff"/>, label: 'GitHub' },
                { icon: <SiJira size={20} color="#2684FF"/>, label: 'Jira' },
                { icon: <SiGithubactions size={20} color="#2088FF"/>, label: 'CI/CD' },
                { icon: <SiVite size={20} color="#646CFF"/>, label: 'Vite' },
                { icon: <SiVercel size={20} color="#ffffff"/>, label: 'Vercel' },
            ]
        }
    ];

    return (
        <Flex fillWidth maxWidth="m" direction="column" gap="8">
            <Heading as="h2" variant="display-strong-s" marginBottom="m" style={{ textAlign: 'center' }}>Skills</Heading>

            <Flex direction="column" gap="l" style={{ maxWidth: '56rem', margin: '0 auto' }}>
                {categories.map((cat, idx) => (
                    <Flex key={idx} direction="column" gap="4">
                        <Text variant="body-strong-m" onBackground="neutral-weak">{cat.title}</Text>
                        <Flex wrap gap="m">
                            {cat.items.map((item, i) => (
                                <Flex key={i} alignItems="center" gap="s" style={{
                                    border: '2px solid var(--neutral-alpha-weak)',
                                    borderRadius: '16px',
                                    padding: 'var(--static-space-12) var(--static-space-16)',
                                    background: 'rgba(255,255,255,0.02)'
                                }}>
                                    {item.icon}
                                    <Text variant="body-default-m">{item.label}</Text>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}

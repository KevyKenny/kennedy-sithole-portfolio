"use client";

import { Flex, Heading, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { useTranslations } from 'next-intl';

export default function Experience(
    { params: {locale}}: { params: { locale: string }}
) {
    const t = useTranslations();
    const { person, experience } = renderContent(t);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column"
			gap="8">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: experience.title,
                        description: experience.description,
                        url: `https://${baseURL}/experience`,
                        image: `${baseURL}/og?title=Work%20Experience`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                    }),
                }}
            />
            
            {/* Work Experience Section */}
            {experience.work?.display && (
                <Flex direction="column" gap="8">
                    <Flex direction="column" gap="4">
                        <Heading variant="display-strong-m">{experience.work.title}</Heading>
                        <Text variant="body-default-m" color="neutral-medium">Professional journey and career milestones</Text>
                    </Flex>
                    <Flex direction="column" gap="8">
                        {experience.work.experiences.map((exp, index) => (
                            <Flex 
                                key={index} 
                                direction="column" 
                                gap="8" 
                                padding="8" 
                                background="surface" 
                                radius="l-4" 
                                border="neutral-medium" 
                                borderStyle="solid-1"
                                shadow="l"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)'
                                }}
                            >
                                <Flex direction="column" gap="4">
                                    <Flex justifyContent="space-between" alignItems="flex-start" wrap gap="4">
                                        <Flex direction="column" gap="2">
                                            <Heading variant="heading-strong-l">{exp.company}</Heading>
                                            <Text variant="body-strong-m" color="brand">{exp.role}</Text>
                                        </Flex>
                                        <Flex
                                            padding="4"
                                            background="brand-strong"
                                            radius="m-4"
                                            style={{
                                                color: 'white',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            <Text variant="body-default-s" color="white">
                                                {exp.timeframe}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex direction="column" gap="4">
                                    <Text variant="body-strong-s" color="brand" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
                                        Key Duties and Responsibilities:
                                    </Text>
                                    <Flex direction="column" gap="4">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <Flex key={achIndex} gap="4" alignItems="flex-start">
                                                <Flex 
                                                    style={{
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'var(--color-brand)',
                                                        marginTop: '10px',
                                                        flexShrink: 0,
                                                        boxShadow: '0 0 8px rgba(0, 150, 255, 0.5)'
                                                    }}
                                                />{" "}
                                                <Text variant="body-default-s" style={{ 
                                                    lineHeight: '1.6',
                                                    color: 'rgba(255,255,255,0.85)',
                                                    fontSize: '0.9rem'
                                                }}>
                                                    {achievement}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            )}

            {/* {experience.technical?.display && (
                <Flex direction="column" gap="8">
                    <Flex direction="column" gap="4">
                        <Heading variant="display-strong-l">{experience.technical.title}</Heading>
                        <Text variant="body-default-m" color="neutral-medium">Technologies and tools I work with</Text>
                    </Flex>
                    <Flex direction="column" gap="8">
                        {experience.technical.skills.map((skill, index) => (
                            <Flex 
                                key={index} 
                                direction="column" 
                                gap="8" 
                                padding="8" 
                                background="surface" 
                                radius="l-4" 
                                border="neutral-medium" 
                                borderStyle="solid-1"
                                shadow="l"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)'
                                }}
                            >
                                <Flex direction="column" gap="4">
                                    <Flex justifyContent="space-between" alignItems="flex-start" wrap gap="4">
                                        <Heading variant="heading-strong-l">{skill.title}</Heading>
                                        {skill.link && (
                                            <Flex
                                                as="a"
                                                // href={skill?.link}
                                                // target="_blank"
                                                rel="noopener noreferrer"
                                                padding="4"
                                                background="brand-strong"
                                                radius="m-4"
                                                style={{
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                    fontWeight: '600',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                View Project →
                                            </Flex>
                                        )}
                                    </Flex>
                                    <Text variant="body-default-s" style={{ 
                                        lineHeight: '1.6',
                                        color: 'rgba(255,255,255,0.85)',
                                        fontSize: '0.9rem'
                                    }}>
                                        {skill.description}
                                    </Text>
                                </Flex>
                                {skill.images && skill.images.length > 0 && (
                                    <Flex gap="4" wrap paddingTop="4">
                                        {skill.images.map((image, imgIndex) => (
                                            <Flex
                                                key={imgIndex}
                                                radius="m-4"
                                                overflow="hidden"
                                                style={{
                                                    width: `${image.width * 2.5}rem`,
                                                    height: `${image.height * 2.5}rem`,
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                    transition: 'transform 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.02)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </Flex>
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            )} */}
        </Flex>
    );
}
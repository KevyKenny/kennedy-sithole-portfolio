import { Flex, Heading, Text, SmartImage } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {

    const t = await getTranslations();
    const { projects } = renderContent(t) as any;

	const title = projects.title;
	const description = projects.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/projects/`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Projects(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const t = useTranslations();
    const { person, projects } = renderContent(t) as any;

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
                        headline: projects.title,
                        description: projects.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: projects.projects?.map((project: any) => ({
                            '@type': 'CreativeWork',
                            headline: project.title,
                            description: project.description,
                            url: project.link,
                        })) || [],
                    }),
                }}
            />
            
            <Flex direction="column" gap="4" marginBottom="8">
                <Heading variant="display-strong-m">{projects.title}</Heading>
                <Text variant="body-default-m" color="neutral-medium">{projects.description}</Text>
            </Flex>

            {/* Projects List */}
            {projects.projects && projects.projects.length > 0 && (
                <>
                    <Heading
                        as="h2"
                        id={projects.title}
                        variant="display-strong-s"
                        marginBottom="m">
                        {projects.title}
                    </Heading>
                    <Flex
                        direction="column"
                        fillWidth gap="l" marginBottom="40">
                        {projects.projects.map((project: any, index: number) => (
                            <Flex
                                key={`${project.title}-${index}`}
                                fillWidth
                                direction="column">
                                <Flex
                                    fillWidth
                                    justifyContent="space-between"
                                    alignItems="flex-end"
                                    marginBottom="4">
                                    <Flex alignItems="center" gap="4" wrap>
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <Text
                                                    id={project.title}
                                                    variant="heading-strong-l"
                                                    color="brand">
                                                    {project.title}
                                                </Text>
                                            </a>
                                        ) : (
                                            <Text
                                                id={project.title}
                                                variant="heading-strong-l">
                                                {project.title}
                                            </Text>
                                        )}
                                        {project.technologies?.length > 0 && (
                                            <Flex gap="2" wrap alignItems="center">
                                                {project.technologies.map((tech: string, techIndex: number) => (
                                                    <Flex key={`${project.title}-tech-${techIndex}`} padding="2" background="neutral-medium" radius="m-4">
                                                        <Text variant="body-default-s">{tech}</Text>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </Flex>
                                    <Text
                                        variant="heading-default-xs"
                                        onBackground="neutral-weak">
                                        {project.timeframe}
                                    </Text>
                                </Flex>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak"
                                    marginBottom="m">
                                    {project.description}
                                </Text>
                                {project.images?.length > 0 && (
                                    <Flex
                                        fillWidth paddingTop="m" gap="12"
                                        wrap>
                                        {project.images.map((image: any, imgIndex: number) => (
                                            <Flex
                                                key={imgIndex}
                                                border="neutral-medium"
                                                borderStyle="solid-1"
                                                radius="m"
                                                minWidth={image.width} height={image.height}>
                                                <SmartImage
                                                    enlarge
                                                    radius="m"
                                                    sizes={image.width.toString()}
                                                    alt={image.alt}
                                                    src={image.src}/>
                                            </Flex>
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                        ))}
                    </Flex>
                </>
            )}
        </Flex>
    );
}

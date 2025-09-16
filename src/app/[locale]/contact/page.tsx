import { Flex, Heading, Text, Button, Icon } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {

    const t = await getTranslations();
    const { contact } = renderContent(t);

	const title = contact.title;
	const description = contact.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/contact/`,
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

export default function Contact(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const t = useTranslations();
    const { person, contact } = renderContent(t);

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
                        '@type': 'ContactPage',
                        headline: contact.title,
                        description: contact.description,
                        url: `https://${baseURL}/contact`,
                        image: `${baseURL}/og?title=Contact`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                            email: contact.email,
                        },
                    }),
                }}
            />
            
            <Flex direction="column" gap="4" style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
                <Heading as="h2" variant="display-strong-s" marginBottom="m">{contact.title}</Heading>
                <Text variant="body-default-m" color="neutral-medium">{contact.description}</Text>
            </Flex>

            <Heading as="h2"  style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }} variant="display-strong-s" marginBottom="m">Contact details</Heading>
            <Flex direction="column" fillWidth gap="l" marginBottom="40" style={{ maxWidth: '56rem', margin: '0 auto' }}>
                <Flex gap="8" wrap justifyContent="center">
                <Flex direction="column" gap="2" minWidth={22}
                    style={{
                        border: '2px solid var(--neutral-alpha-weak)',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: 'var(--static-space-12)'
                    }}>
                    <Flex alignItems="center" gap="2">
                        <Icon name="email"/>
                        <Text variant="body-strong-m" onBackground="neutral-weak">Email</Text>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: 'var(--neutral-on-background-weak)' }}>
                        <a
                            href={`mailto:${contact.email}`}
                            style={{ color: 'var(--color-brand)', textDecoration: 'none' }}
                            aria-label={`Email ${contact.email}`}>
                            {contact.email}
                        </a>
                    </Text>
                </Flex>
                <Flex direction="column" gap="2" minWidth={22}
                    style={{
                        border: '2px solid var(--neutral-alpha-weak)',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: 'var(--static-space-12)'
                    }}>
                    <Flex alignItems="center" gap="2">
                        <Icon name="mapPin"/>
                        <Text variant="body-strong-m" onBackground="neutral-weak">Location</Text>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: 'var(--neutral-on-background-weak)' }}>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--color-brand)', textDecoration: 'none' }}
                            aria-label={`Open location for ${contact.address} in Google Maps`}>
                            {contact.address}
                        </a>
                    </Text>
                </Flex>
                <Flex direction="column" gap="2" minWidth={22}
                    style={{
                        border: '2px solid var(--neutral-alpha-weak)',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: 'var(--static-space-12)'
                    }}>
                    <Flex alignItems="center" gap="2">
                        <Icon name="phone"/>
                        <Text variant="body-strong-m" onBackground="neutral-weak">Phone</Text>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: 'var(--neutral-on-background-weak)' }}>
                        <a
                            href={`tel:${contact.phone.replace(/\s|-/g, '')}`}
                            style={{ color: 'var(--color-brand)', textDecoration: 'none' }}
                            aria-label={`Call ${contact.phone}`}>
                            {contact.phone}
                        </a>
                    </Text>
                </Flex>
                <Flex direction="column" gap="2" minWidth={22}
                    style={{
                        border: '2px solid var(--neutral-alpha-weak)',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: 'var(--static-space-12)'
                    }}>
                    <Flex alignItems="center" gap="2">
                        <Icon name="clock"/>
                        <Text variant="body-strong-m" onBackground="neutral-weak">Hours</Text>
                    </Flex>
                    <Text variant="body-default-m" style={{ color: 'var(--neutral-on-background-weak)' }}>{contact.hours}</Text>
                </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

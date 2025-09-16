import { Flex, Heading } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { SmartImage } from '@/once-ui/components';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const t = await getTranslations();
    const title = 'Gallery';
    const description = 'A selection of photos.';
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/gallery/`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    };
}

export default function Gallery(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const images = [
        { src: '/images/gallery/img-01.jpg', orientation: 'vertical' },
        { src: '/images/gallery/img-02.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-03.jpg', orientation: 'vertical' },
        { src: '/images/gallery/img-04.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-05.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-06.jpg', orientation: 'vertical' },
        { src: '/images/gallery/img-07.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-08.jpg', orientation: 'vertical' },
        { src: '/images/gallery/img-09.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-10.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-11.jpg', orientation: 'vertical' },
        { src: '/images/gallery/img-12.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-13.jpg', orientation: 'horizontal' },
        { src: '/images/gallery/img-14.jpg', orientation: 'horizontal' }
    ];

    const aspect = (o: string) => (o === 'vertical' ? '3 / 4' : '16 / 9');

    return (
        <Flex fillWidth maxWidth="m" direction="column" gap="8">
            <Heading as="h2" variant="display-strong-s" marginBottom="m" style={{ textAlign: 'center' }}>Gallery</Heading>

            <Flex style={{ width: '100%' }}>
                <div
                    style={{
                        columnCount: 3,
                        columnGap: 'var(--static-space-12)',
                        width: '100%'
                    }}
                >
                    {images.map((img, i) => (
                        <div key={i} style={{ breakInside: 'avoid', marginBottom: 'var(--static-space-12)' }}>
                            <SmartImage
                                enlarge
                                radius="m"
                                alt={`gallery-${i+1}`}
                                src={img.src}
                                aspectRatio={aspect(img.orientation)}
                            />
                        </div>
                    ))}
                </div>
            </Flex>
        </Flex>
    );
}

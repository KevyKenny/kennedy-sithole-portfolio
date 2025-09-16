import { baseURL } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {

    const locales = routing.locales;

    let routes = locales.flatMap((locale)=> 
        ['', '/about', '/experience', '/projects', '/contact'].map((route) => ({
            url: `${baseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    return [...routes]
}
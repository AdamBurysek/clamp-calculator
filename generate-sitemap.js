import fs from 'fs';
import path, { dirname } from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/how-it-works', changefreq: 'monthly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: 'https://clamp-calculator.netlify.app' });

    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString()
    );

    fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), xml);
    console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);

const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
    { url: '/', changefreq: 'weekly', priority: 1 },
    { url: '/o-nama/', changefreq: 'monthly', priority: 0.8 },
    { url: '/usluge/', changefreq: 'monthly', priority: 0.8 },
    { url: '/galerija/', changefreq: 'weekly', priority: 0.9 },
    { url: '/kontakt/', changefreq: 'monthly', priority: 0.8 },
    { url: '/dj-za-vjencanja/', changefreq: 'monthly', priority: 0.9 },
    { url: '/dj-za-korporativni-dogadaj/', changefreq: 'monthly', priority: 0.9 },
    { url: '/dj-za-proslave/', changefreq: 'monthly', priority: 0.9 },
    { url: '/blog/', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog/kako-odabrati-dj-a-za-vjencanje/', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/najbolja-glazba-za-evente/', changefreq: 'monthly', priority: 0.7 },
    { url: '/politika-privatnosti/', changefreq: 'yearly', priority: 0.3 },
    { url: '/uvjeti-koristenja/', changefreq: 'yearly', priority: 0.3 },
];

const generateSitemap = async () => {
    const sitemap = new SitemapStream({ hostname: 'https://djproslave.com' });
    const sitemapOutput = fs.createWriteStream('./public/sitemap.xml');
  
    links.forEach(link => sitemap.write(link));
    sitemap.end();
  
    const data = await streamToPromise(sitemap).then(sm => sm.toString());
    fs.writeFileSync('./public/sitemap.xml', data);
    console.log('Sitemap generated successfully!');
  };
  
generateSitemap();

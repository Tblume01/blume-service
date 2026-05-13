import { Metadata } from 'next';
import seoPages from '@/data/seo-pages.json';
import { SEOPageTemplate, generateMetadata as generateSEOMetadata } from '@/app/components/SEOPageTemplate';

// Generate static params for all SEO pages
export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = seoPages.find((p) => p.slug === params.slug);
  if (!page) return {};

  return generateSEOMetadata(page);
}

export default function SEOPage({ params }: { params: { slug: string } }) {
  const page = seoPages.find((p) => p.slug === params.slug);

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-gray-600 mt-2">
          <a href="/" className="text-blue-600 hover:underline">
            Return to home
          </a>
        </p>
      </div>
    );
  }

  return <SEOPageTemplate {...page} />;
}

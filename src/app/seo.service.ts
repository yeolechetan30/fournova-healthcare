import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);

  constructor(private title: Title, private meta: Meta) {}

  setTitle(pageTitle: string) {
    const cleanedTitle = pageTitle
      .replace(/\s*[–|-]\s*FourNova Healthcare\s*$/i, '')
      .trim();

    const fullTitle = cleanedTitle.includes('FourNova Healthcare')
      ? cleanedTitle
      : `${cleanedTitle} – FourNova Healthcare`;

    this.title.setTitle(fullTitle);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setCanonical(url: string) {
    let canonical = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  setOpenGraph(tags: { title: string; description: string; image: string }) {
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
  }

  setTwitter(tags: { title: string; description: string; image: string }) {
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });
  }

  setJsonLd(data: Record<string, unknown>) {
    this.removeJsonLd();
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  private removeJsonLd() {
    const existing = this.document.querySelectorAll('script[type="application/ld+json"]');
    existing.forEach((script) => script.remove());
  }
}

import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
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
    if (typeof document === 'undefined') {
      return;
    }

    this.removeJsonLd();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private removeJsonLd() {
    if (typeof document === 'undefined') {
      return;
    }

    const existing = document.querySelectorAll('script[type="application/ld+json"]');
    existing.forEach((script) => script.remove());
  }
}

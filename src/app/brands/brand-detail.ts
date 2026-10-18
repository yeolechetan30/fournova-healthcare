import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../seo.service';

interface BrandProduct {
  name: string;
  category: string;
  description: string;
  use?: string;
  useNote?: string;
  useSource?: string;
  useSources?: { label: string; url: string }[];
  image: string;
  dosage: string;
  packSize: string;
  composition?: string[];
  price?: string;
  priceDescription?: string;
  title: string;
  metaDescription: string;
  keywords: string;
  path: string;
}

const brandProducts: Record<string, BrandProduct> = {
  'dailyxa-60k': {
    name: 'Dailyxa 60K',
    category: 'Vitamin D3 Oral Solution',
    description:
      'Dailyxa 60K is a Vitamin D3 oral solution with 60,000 IU in a convenient orange-flavoured 5 ml pack.',
    image: 'assets/images/dailyxa-60k.png',
    dosage: '60,000 IU',
    packSize: '5 ml',
    price: '65.00',
    priceDescription: 'Price per bottle',
    title: 'Dailyxa 60K Vitamin D3 Oral Solution | FourNova Healthcare',
    metaDescription:
      'Learn about Dailyxa 60K by FourNova Healthcare, a 60,000 IU Vitamin D3 oral solution in a convenient orange-flavoured 5 ml pack.',
    keywords:
      'Dailyxa 60K, Dailyxa vitamin D3, Vitamin D3 oral solution, Vitamin D3 60000 IU, Dailyxa orange flavour, FourNova Healthcare Dailyxa',
    path: '/dailyxa-60k',
  },
  'dailyxa-tablets': {
    name: 'Dailyxa Tablets',
    category:
      'Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine Hydrochloride & Vitamin D3 Tablets',
    description:
      'Dailyxa Tablets contain Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine Hydrochloride and Vitamin D3. The supplied pack shows 10 × 10 tablets.',
    image: 'assets/images/dailyxa-tablets.png',
    dosage: 'Multinutrient tablets',
    packSize: '10 × 10 tablets',
    composition: [
      'Methylcobalamin - 1500 mcg',
      'Alpha Lipoic Acid - 100 mg',
      'Folic Acid - 1.5 mg',
      'Pyridoxine Hydrochloride - 3 mg',
      'Vitamin D3 - 1000 IU',
    ],
    price: '149.50',
    priceDescription: 'Price per strip',
    title: 'Dailyxa Tablets | FourNova Healthcare',
    metaDescription:
      'Explore Dailyxa Tablets by FourNova Healthcare, containing Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine Hydrochloride and Vitamin D3.',
    keywords:
      'Dailyxa Tablets, Methylcobalamin Alpha Lipoic Acid Folic Acid tablets, Pyridoxine Hydrochloride Vitamin D3, FourNova Healthcare',
    path: '/dailyxa-tablets',
  },
  'raft-go': {
    name: 'Raft GO Suspension',
    category: 'Sodium Alginate, Sodium Bicarbonate & Calcium Carbonate Oral Suspension',
    description:
      'Raft GO is a paan-mint-flavoured oral suspension containing Sodium Alginate, Sodium Bicarbonate and Calcium Carbonate. The supplied pack shows a 150 ml bottle.',
    image: 'assets/images/raft-go.png',
    dosage: 'Oral suspension · Pear-mint flavour',
    packSize: '150 ml bottle',
    composition: ['Sodium Alginate - 250 mg', 'Sodium Bicarbonate - 133.5 mg', 'Calcium Carbonate - 80 mg'],
    price: '165.00',
    priceDescription: 'per bottle',
    title: 'Raft GO Suspension | FourNova Healthcare',
    metaDescription:
      'View Raft GO oral suspension by FourNova Healthcare, with Sodium Alginate, Sodium Bicarbonate and Calcium Carbonate in a 150 ml pear-mint bottle.',
    keywords:
      'Raft GO suspension, Sodium Alginate Sodium Bicarbonate Calcium Carbonate, 150 ml oral suspension, FourNova Healthcare',
    path: '/raft-go',
  },
  'sobinova-500': {
    name: 'Sobinova-500',
    category: 'Sodium Bicarbonate Tablets I.P.',
    description: 'Sobinova-500 contains Sodium Bicarbonate Tablets I.P. 500 mg.',
    use: 'An alkalinizing agent and antacid.',
    useNote:
      'This is general information about the ingredient, not a verified indication for the Sobinova-500 brand. Follow the product leaflet and your healthcare professional’s advice.',
    useSource: 'https://medlineplus.gov/druginfo/meds/a682001.html',
    image: 'assets/images/sobinova-500.png',
    dosage: '500 mg',
    packSize: '10 × 10 tablets',
    price: '44.00',
    priceDescription: 'Price per strip',
    title: 'Sobinova-500 Sodium Bicarbonate 500 mg | FourNova Healthcare',
    metaDescription:
      'Discover Sobinova-500 by FourNova Healthcare: Sodium Bicarbonate Tablets I.P. 500 mg in a pack of 10 × 10 tablets.',
    keywords:
      'Sobinova-500, Sobinova 500 mg, Sodium Bicarbonate Tablets I.P., Sodium Bicarbonate 500 mg, FourNova Healthcare',
    path: '/sobinova-500',
  },
  'sobinova-forte': {
    name: 'Sobinova Forte',
    category: 'Sodium Bicarbonate Tablets I.P.',
    description: 'Sobinova Forte contains Sodium Bicarbonate Tablets I.P. 1000 mg.',
    image: 'assets/images/sobinova-forte.png',
    dosage: '1000 mg',
    packSize: '10 × 10 tablets',
    composition: ['Sodium Bicarbonate Tablets I.P. — 1000 mg'],
    use: 'An alkalinizing agent and antacid.',
    price: '78.30',
    priceDescription: 'Price per strip',
    title: 'Sobinova Forte 1000 mg Sodium Bicarbonate | FourNova Healthcare',
    metaDescription:
      'Explore Sobinova Forte by FourNova Healthcare: Sodium Bicarbonate Tablets I.P. 1000 mg in a 10 × 10 tablet pack.',
    keywords:
      'Sobinova Forte, Sodium Bicarbonate 1000 mg, Sodium Bicarbonate Tablets I.P., FourNova Healthcare',
    path: '/sobinova-forte',
  },
  'fourpraz-d-40': {
    name: 'Fourpraz D 40 Capsules',
    category: 'Esomeprazole (Enteric Coated) & Domperidone (Sustained Release) Capsules',
    description:
      'Fourpraz D 40 contains enteric-coated Esomeprazole and sustained-release Domperidone capsules.',
    use: 'Esomeprazole reduces stomach acid. Domperidone is used in certain settings to relieve nausea and vomiting.',
    useNote:
      'This is general information about the ingredients and does not confirm the approved use of this specific brand. Use this prescription combination only as directed by a healthcare professional.',
    useSources: [
      {
        label: 'Esomeprazole information (MedlinePlus)',
        url: 'https://medlineplus.gov/druginfo/meds/a699054.html',
      },
      {
        label: 'Domperidone safety information (European Medicines Agency)',
        url: 'https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines',
      },
    ],
    image: 'assets/images/fourpraz-d-40.png',
    dosage: 'D 40',
    packSize: '10 × 10 capsules',
    price: '130.00',
    priceDescription: 'Price per strip',
    title: 'Fourpraz D 40 Capsules | FourNova Healthcare',
    metaDescription:
      'Explore Fourpraz D 40 capsules by FourNova Healthcare, containing enteric-coated Esomeprazole and sustained-release Domperidone.',
    keywords:
      'Fourpraz D 40, Esomeprazole Domperidone capsules, FourNova Healthcare, enteric coated Esomeprazole, sustained release Domperidone',
    path: '/fourpraz-d-40',
  },
  'foursprin-av-75': {
    name: 'FourSprin AV 75 Tablets',
    category: 'Atorvastatin Calcium & Aspirin Capsules',
    description:
      'FourSprin AV 75 is labeled as tablets on the pack; the pack composition and quantity text refer to capsules.',
    use: 'Atorvastatin is used to lower cholesterol. Aspirin may be prescribed to reduce the risk of blood clots in some patients.',
    useNote:
      'This is general information about the ingredients, not confirmation of the approved use of this specific brand. This is a prescription medicine; use it only as directed by your healthcare professional.',
    useSources: [
      {
        label: 'Atorvastatin information (MedlinePlus)',
        url: 'https://medlineplus.gov/druginfo/meds/a600045.html',
      },
      {
        label: 'Aspirin information (MedlinePlus)',
        url: 'https://medlineplus.gov/druginfo/meds/a682878.html',
      },
    ],
    image: 'assets/images/four-sprin-av-75.png',
    dosage: 'AV 75',
    packSize: '10 × 15 capsules (as printed on pack)',
    composition: ['Atorvastatin Calcium - 10 mg', 'Aspirin - 75 mg'],
    price: '39.10',
    priceDescription: 'Price per strip',
    title: 'FourSprin AV 75 Tablets | FourNova Healthcare',
    metaDescription:
      'Explore FourSprin AV 75 by FourNova Healthcare, labeled with Atorvastatin Calcium and Aspirin and packed as 10 × 15 capsules.',
    keywords:
      'FourSprin AV 75, Atorvastatin Calcium Aspirin, FourNova Healthcare, AV 75 tablets',
    path: '/foursprin-av-75',
  },
  'foursprin-gold-10': {
    name: 'Foursprin Gold 10 Capsules',
    category: 'Atorvastatin, Aspirin & Clopidogrel Capsules',
    description:
      'Foursprin Gold 10 contains Atorvastatin, Aspirin and Clopidogrel. The pack lists 10 × 15 capsules; individual ingredient strengths are not legible in the supplied image.',
    use: 'Atorvastatin is used to lower cholesterol. Aspirin and Clopidogrel affect platelet clotting and may be prescribed to reduce the risk of blood clots in patients.',
   
    image: 'assets/images/foursprin-gold-10.png',
    dosage: 'Gold 10',
    packSize: '10 × 15 capsules',
    composition: ['Atorvastatin - 10 mg', 'Aspirin - 75 mg', 'Clopidogrel - 75 mg'],
    price: '126.30',
    priceDescription: 'Price per strip',
    title: 'Foursprin Gold 10 Capsules | FourNova Healthcare',
    metaDescription:
      'Explore Foursprin Gold 10 by FourNova Healthcare, containing Atorvastatin, Aspirin and Clopidogrel in a 10 × 15 capsule pack.',
    keywords:
      'Foursprin Gold 10, Atorvastatin Aspirin Clopidogrel capsules, FourNova Healthcare',
    path: '/foursprin-gold-10',
  },
  'hbfour-x': {
    name: 'Hbfour-X Tablets',
    category: 'Ferric Diphosphate, Vitamin C, Vitamin B12 & Folic Acid Tablets',
    description:
      'Hbfour-X is a 10 × 10 tablet pack. Is a nutritional and mineral supplement used to prevent and treat iron deficiency anemia and manage low levels of essential nutrients.',
    image: 'assets/images/hbfour-x.png',
    dosage: '10 × 10 tablets',
    packSize: '10 × 10 tablets',
    composition: [
      'Ferric Diphosphate, equivalent to Elemental Iron — 30 mg',
      'Vitamin C — 50 mg',
      'Vitamin B12 — 0.75 mcg',
      'Folic Acid — 155.5 mcg',
    ],
    price: '170.00',
    priceDescription: 'Price per strip',
    title: 'Hbfour-X Tablets | FourNova Healthcare',
    metaDescription:
      'View Hbfour-X tablet pack details, including its listed iron, vitamin C, vitamin B12 and folic acid composition.',
    keywords:
      'Hbfour-X tablets, Hbfour X, Ferric Diphosphate tablets, Vitamin C Vitamin B12 folic acid tablets, FourNova Healthcare',
    path: '/hbfour-x',
  },
};

@Component({
  selector: 'app-brand-detail',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './brand-detail.html',
  styleUrl: './brand-detail.css',
})
export class BrandDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly product: BrandProduct;

  constructor() {
    const routePath = this.route.snapshot.routeConfig?.path;
    const product = routePath ? brandProducts[routePath] : undefined;

    if (!product) {
      throw new Error(`No brand product configured for route "${routePath ?? ''}".`);
    }

    this.product = product;
  }

  ngOnInit(): void {
    const canonicalUrl = `https://www.fournova.in${this.product.path}`;
    const image = `https://www.fournova.in/${this.product.image}`;

    this.seo.setTitle(this.product.title);
    this.seo.updateDescription(this.product.metaDescription);
    this.seo.updateKeywords(this.product.keywords);
    this.seo.setCanonical(canonicalUrl);
    this.seo.setOpenGraph({
      title: this.product.title,
      description: this.product.metaDescription,
      image,
    });
    this.seo.setTwitter({
      title: this.product.title,
      description: this.product.metaDescription,
      image,
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.product.name,
      image,
      description: this.product.description,
      brand: {
        '@type': 'Brand',
        name: 'FourNova Healthcare',
      },
      category: this.product.category,
      ...(this.product.price && {
        offers: {
        '@type': 'Offer',
        url: canonicalUrl,
        priceCurrency: 'INR',
        price: this.product.price,
        ...(this.product.priceDescription && {
          description: this.product.priceDescription,
        }),
        },
      }),
    });
  }
}

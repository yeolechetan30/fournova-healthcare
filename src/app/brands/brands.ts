import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'FourNova Healthcare Brands | Dailyxa, Sobinova & More';
    const desc =
      'Explore FourNova Healthcare brands, including Dailyxa 60K, Dailyxa Tablets, Raft GO, Sobinova-500, Sobinova Forte, Fourpraz D 40, FourSprin AV 75, Foursprin Gold 10 and Hbfour-X.';
    const keywords = [
      'FourNova Healthcare brands',
      'FourNova Healthcare products',
      'pharmaceutical brands',
      'Sobinova-500',
      'Sobinova Forte',
      'Fourpraz D 40',
      'FourSprin AV 75',
      'Foursprin Gold 10',
      'Hbfour-X',
      'Dailyxa 60K',
      'Dailyxa Tablets',
      'Raft GO',
    ].join(', ');
    const img = 'https://www.fournova.in/assets/logo.png';
    const canonicalUrl = 'https://www.fournova.in/brands';

    this.seo.setTitle(title);
    this.seo.updateDescription(desc);
    this.seo.updateKeywords(keywords);
    this.seo.setCanonical(canonicalUrl);
    this.seo.setOpenGraph({ title, description: desc, image: img });
    this.seo.setTwitter({ title, description: desc, image: img });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description: desc,
      url: canonicalUrl,
    });
  }

  featuredBrand = {
    name: 'Dailyxa 60K',
    category: 'Vitamin D3 Oral Solution',
    description:
      'Dailyxa 60K is a doctor-trusted Vitamin D3 oral solution formulated to support immunity, bone strength, and overall wellness in a convenient daily format.',
    image: 'assets/images/dailyxa-60k.png',
    dosage: '60,000 IU',
    flavour: 'Orange Flavour',
    size: '5 ml',
  };

  dailyxaTabletsBrand = {
    name: 'Dailyxa Tablets',
    category:
      'Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine Hydrochloride & Vitamin D3 Tablets',
    description:
      'Tablets containing Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine Hydrochloride and Vitamin D3.',
    image: 'assets/images/dailyxa-tablets.png',
    dosage: 'Multinutrient tablets',
    size: '10 × 10 tablets',
    price: '₹149.50 per strip',
  };

  raftGoBrand = {
    name: 'Raft GO Suspension',
    category: 'Sodium Alginate, Sodium Bicarbonate & Calcium Carbonate Oral Suspension',
    description:
      'Paan-mint-flavoured oral suspension. The product label describes it for relief from heartburn and acidity.',
    image: 'assets/images/raft-go.png',
    dosage: 'Oral suspension · Paan-mint flavour',
    size: '150 ml bottle',
    price: '₹165 per bottle',
  };

  sobinovaBrand = {
    name: 'Sobinova-500',
    category: 'Sodium Bicarbonate Tablets I.P.',
    description: 'Sodium Bicarbonate Tablets I.P. 500 mg.',
    image: 'assets/images/sobinova-500.png',
    dosage: '500 mg',
    size: '10 × 10 tablets',
    price: '₹44.80 per strip',
    use: 'An alkalinizing agent and antacid.',
  };

  sobinovaForteBrand = {
    name: 'Sobinova Forte',
    category: 'Sodium Bicarbonate Tablets I.P.',
    description: 'Sodium Bicarbonate Tablets I.P. 1000 mg.',
    image: 'assets/images/sobinova-forte.png',
    dosage: '1000 mg',
    size: '10 × 10 tablets',
    price: '₹78.30 per strip',
    use: 'An alkalinizing agent and antacid.',
  };

  fourprazD40Brand = {
    name: 'Fourpraz D 40 Capsules',
    category: 'Esomeprazole (Enteric Coated) & Domperidone (Sustained Release) Capsules',
    description: 'Enteric-coated Esomeprazole and sustained-release Domperidone capsules.',
    image: 'assets/images/fourpraz-d-40.png',
    dosage: 'D 40',
    size: '10 × 10 capsules',
    price: '₹130 per strip',
    use: 'Esomeprazole reduces stomach acid. Domperidone is used in certain settings to relieve nausea and vomiting.',
  };

  fourSprinAv75Brand = {
    name: 'FourSprin AV 75 Tablets',
    category: 'Atorvastatin Calcium & Aspirin Capsules',
    description: 'The pack is labeled as tablets, while its composition and pack quantity text refer to capsules.',
    image: 'assets/images/four-sprin-av-75.png',
    dosage: 'AV 75',
    size: '10 × 15 capsules (as printed on pack)',
    price: '₹58.65 per strip',
    use: 'Atorvastatin is used to lower cholesterol. Aspirin may be prescribed to reduce the risk of blood clots in patients.',
  };

  fourSprinGold10Brand = {
    name: 'Foursprin Gold 10 Capsules',
    category: 'Atorvastatin, Aspirin & Clopidogrel Capsules',
    description: 'Capsules containing Atorvastatin, Aspirin and Clopidogrel.',
    image: 'assets/images/foursprin-gold-10.png',
    dosage: 'Gold 10',
    size: '10 × 15 capsules',
    price: '₹126.30 per strip',
    use: 'Atorvastatin is used to lower cholesterol. Aspirin and Clopidogrel affect platelet clotting and may be prescribed to reduce the risk of blood clots in patients.',
  };

  hbfourXBrand = {
    name: 'Hbfour-X Tablets',
    dosage: '',
    category: 'Ferric Diphosphate, Vitamin C, Vitamin B12 & Folic Acid Tablets',
    description: 'Tablets described on the pack as complete nutrition for healthy blood and energy.',
    image: 'assets/images/hbfour-x.png',
    size: '10 × 10 tablets',
    price: '₹170 per strip',
    use: 'A nutritional and mineral supplement used to prevent and treat iron deficiency anemia and manage low levels of essential nutrients.',
  };
}

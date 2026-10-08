import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brands } from './brands';

describe('Brands', () => {
  let component: Brands;
  let fixture: ComponentFixture<Brands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Brands],
    }).compileComponents();

    fixture = TestBed.createComponent(Brands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should declare the brands route as its canonical URL', () => {
    const canonical = document.querySelector('link[rel="canonical"]');

    expect(canonical?.getAttribute('href')).toBe('https://fournova.in/brands');
  });
});

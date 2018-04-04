import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailesComponent } from './hero-detailes.component';

describe('HeroDetailesComponent', () => {
  let component: HeroDetailesComponent;
  let fixture: ComponentFixture<HeroDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

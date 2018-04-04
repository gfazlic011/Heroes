import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMainPageComponent } from './hero-main-page.component';

describe('HeroMainPageComponent', () => {
  let component: HeroMainPageComponent;
  let fixture: ComponentFixture<HeroMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

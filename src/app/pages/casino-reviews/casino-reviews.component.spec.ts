import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoReviewsComponent } from './casino-reviews.component';

describe('CasinoReviewsComponent', () => {
  let component: CasinoReviewsComponent;
  let fixture: ComponentFixture<CasinoReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasinoReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSitesAreComponent } from './all-sites-are.component';

describe('AllSitesAreComponent', () => {
  let component: AllSitesAreComponent;
  let fixture: ComponentFixture<AllSitesAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSitesAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSitesAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

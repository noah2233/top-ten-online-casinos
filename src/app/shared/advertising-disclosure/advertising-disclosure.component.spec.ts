import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingDisclosureComponent } from './advertising-disclosure.component';

describe('AdvertisingDisclosureComponent', () => {
  let component: AdvertisingDisclosureComponent;
  let fixture: ComponentFixture<AdvertisingDisclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingDisclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

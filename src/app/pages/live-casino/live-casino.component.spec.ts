import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCasinoComponent } from './live-casino.component';

describe('LiveCasinoComponent', () => {
  let component: LiveCasinoComponent;
  let fixture: ComponentFixture<LiveCasinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCasinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

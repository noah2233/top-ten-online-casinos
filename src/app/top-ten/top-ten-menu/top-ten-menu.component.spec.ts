import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenMenuComponent } from './top-ten-menu.component';

describe('TopTenMenuComponent', () => {
  let component: TopTenMenuComponent;
  let fixture: ComponentFixture<TopTenMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

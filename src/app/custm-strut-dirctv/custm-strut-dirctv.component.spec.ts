import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmStrutDirctvComponent } from './custm-strut-dirctv.component';

describe('CustmStrutDirctvComponent', () => {
  let component: CustmStrutDirctvComponent;
  let fixture: ComponentFixture<CustmStrutDirctvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmStrutDirctvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmStrutDirctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

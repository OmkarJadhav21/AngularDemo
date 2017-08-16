import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifcycleComponent } from './lifcycle.component';

describe('LifcycleComponent', () => {
  let component: LifcycleComponent;
  let fixture: ComponentFixture<LifcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompCommuComponent } from './inter-comp-commu.component';

describe('InterCompCommuComponent', () => {
  let component: InterCompCommuComponent;
  let fixture: ComponentFixture<InterCompCommuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompCommuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompCommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

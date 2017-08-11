import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbindComponent } from './hostbind.component';

describe('HostbindComponent', () => {
  let component: HostbindComponent;
  let fixture: ComponentFixture<HostbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

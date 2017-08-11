import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirctvComponent } from './struct-dirctv.component';

describe('StructDirctvComponent', () => {
  let component: StructDirctvComponent;
  let fixture: ComponentFixture<StructDirctvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirctvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

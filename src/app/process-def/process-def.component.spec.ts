import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDefComponent } from './process-def.component';

describe('ProcessDefComponent', () => {
  let component: ProcessDefComponent;
  let fixture: ComponentFixture<ProcessDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

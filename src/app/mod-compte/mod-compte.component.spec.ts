import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCompteComponent } from './mod-compte.component';

describe('ModCompteComponent', () => {
  let component: ModCompteComponent;
  let fixture: ComponentFixture<ModCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

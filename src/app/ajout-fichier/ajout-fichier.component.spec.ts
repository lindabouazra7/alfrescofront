import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFichierComponent } from './ajout-fichier.component';

describe('AjoutFichierComponent', () => {
  let component: AjoutFichierComponent;
  let fixture: ComponentFixture<AjoutFichierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFichierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
